<script>
	import '@picocss/pico';
	import pasta from '$lib/pasta.json';
	let [total, reviewed] = [0, 0];
	for (const [_, pastaTypeReviews] of Object.entries(pasta)) {
		for (const [_, review] of Object.entries(pastaTypeReviews)) {
			total++;
			if (Object.keys(review).length !== 0) {
				reviewed++;
			}
		}
	}

	function hasReviews(obj) {
		for (const key in obj) {
			if (Object.keys(obj[key]).length !== 0) {
				return true;
			}
		}
		return false;
	}

	// turn our revies (a map[string][review]) into an array of non-empty reviews grouped in tuples of two
	// so we can easily display them in a grid of two elements.
	function gridify(reviews) {
		const content = Object.values(reviews);
		const grouped = content
			.filter((r) => Object.keys(r).length !== 0)
			.map((r, idx) => ({ id: idx, ...r }))
			.reduce((result, current, index) => {
				if (index % 2 === 0) {
					result.push([current]);
				} else {
					result[result.length - 1].push(current);
				}
				return result;
			}, []);

		return grouped;
	}
</script>

<header class="container">
	<hgroup>
		<h1>Pasta Balboa, revisada.</h1>
		<h2>Reviews sobre las pastas de pasta balboa, por y para el amor a la pasta 🍝</h2>
	</hgroup>
</header>
<main class="container">
	<section id="reviews">
		<h2>Reviews</h2>
		{#each Object.entries(pasta) as [pastaType, pastaTypeReviews]}
			{#if hasReviews(pastaTypeReviews)}
				<section id={pastaType}>
					<h3 style="text-transform: capitalize;">{pastaType}</h3>
					{#each gridify(pastaTypeReviews) as reviewGroup}
						<div class="grid">
							{#each reviewGroup as review}
								<article id={review.id}>
									<h2>{review.title}</h2>
									<p>{review.review}</p>
									<footer>
										<p>Valoración final:</p>
										<progress value={review.score} max="100" min="0" />
										<center><small>{review.score} / 100</small></center>
									</footer>
								</article>
							{/each}
						</div>
					{/each}
				</section>
			{/if}
		{/each}
	</section>
	<section id="progress">
		<h2>Progreso</h2>
		<p>Se han probado {reviewed} de {total} posibles pastas!</p>
		<progress value={reviewed} max={total} min="0" />
	</section>
</main>

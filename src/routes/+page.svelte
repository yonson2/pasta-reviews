<script>
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
					{#each Object.entries(pastaTypeReviews) as [review_key, review_value]}
						{#if Object.keys(review_value).length !== 0}
							<article id={review_key}>
								<h2>{review_value.title}</h2>
								<p>{review_value.review}</p>
								<footer>
									<p>Valoración final:</p>
									<progress value={review_value.score} max="100" min="0"/>
									<center><small>{review_value.score} / 100</small></center>
								</footer>
							</article>
						{/if}
					{/each}
				</section>
			{/if}
		{/each}
	</section>
	<section id="progress">
		<h2>Progreso</h2>
		<p>Se han probado {reviewed} de {total} posibles pastas!</p>
		<progress value={reviewed} max={total} min="0"/>
	</section>
</main>

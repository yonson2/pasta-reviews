import pasta from '$lib/pasta.json';
import { json } from '@sveltejs/kit';


export function GET() {
				return json(pasta);
}

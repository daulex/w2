// import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // const post = await getPostFromDatabase(params.slug);
 
  // if (post) {
    // return post;
    return { status: 200, body: { foo:"bar" } }
  // }
 
  // throw error(404, 'Not found');
}
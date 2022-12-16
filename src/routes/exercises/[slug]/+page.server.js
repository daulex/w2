import { error } from '@sveltejs/kit';
import exercisesSource from "../../../exercises.json";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // const post = await getPostFromDatabase(params.slug);
 
  const exercise = exercisesSource.find((exercise) => exercise.slug === params.slug);
  if (exercise) {
    return exercise;
  }
 
  throw error(404, 'Not found');
}
import supabase from "../../lib/supabase";
// import { onMount } from "svelte";

export const load = async ({ fetch }) => {
  const productRes = await fetch('https://dummyjson.com/products?limit=10');
  const productData = await productRes.json();
  const products = productData.products;

  let exercises = [];

  let { data } = await supabase
      .from("exercises")
      .select("*");
      exercises = data;
  
  return {
    products: products,
    exercises: exercises
  }
};

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const payload = await request.formData();
  
    const exercise_name = payload.get('exercise_name');
    const exercise_description = payload.get('exercise_description');

    if(exercise_name && exercise_description) {
      const slug = exercise_name.toLowerCase()
                        .trim()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/[\s_-]+/g, '-')
                        .replace(/^-+|-+$/g, '');
      const { error } = await supabase
                        .from('exercises')
                        .insert({ 
                          title: exercise_name,
                          slug: slug,
                          description: exercise_description
                        });
      if (error) {
        console.log("error: ", error);
      }
    }
  }
};
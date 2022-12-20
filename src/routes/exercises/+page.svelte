<script>
  import exercisesSource from "../../exercises.json";
  export let data;
  
  let newExercise = '';
  let newExerciseDescription = '';
  let exercises = data.exercises;

  // const addExercise = () => {
  //   if(!newExercise) return;
  //   exercises = [...exercises, { slug: newExercise.toLowerCase()
  //                     .trim()
  //                     .replace(/[^\w\s-]/g, '')
  //                     .replace(/[\s_-]+/g, '-')
  //                     .replace(/^-+|-+$/g, ''), title: newExercise }];
  //   newExercise = '';
  //   newExerciseDescription = '';
  // }
</script>
<main class="container">
  <h1>Exercise list</h1>
  <ul class="p-5 list-disc">
    {#each exercises as exercise}
      <li><a href="/exercises/{exercise.slug}">{exercise.title}</a></li>
    {/each}
  </ul>

  <article>
    <form method="POST">
        <h3>Add exercise</h3>
        <input 
          type="text" 
          placeholder="New exercise name" 
          name="exercise_name"
        />
        <textarea 
          placeholder="Exercise description"
          name="exercise_description"
        ></textarea>
        <button type="submit">Add Exercise</button>
    </form>
  </article>
</main>
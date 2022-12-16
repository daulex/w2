<script>
  import Button from "../../components/ui/buttons/Button.svelte";
  import exercisesSource from "../../exercises.json";

  let newExercise = '';
  let exercises = exercisesSource;

  const addExercise = () => {
    if(!newExercise) return;
    exercises = [...exercises, { slug: newExercise.toLowerCase()
                      .trim()
                      .replace(/[^\w\s-]/g, '')
                      .replace(/[\s_-]+/g, '-')
                      .replace(/^-+|-+$/g, ''), title: newExercise }];
    newExercise = '';
  }

</script>
<h1>Exercise list</h1>
<ul class="p-5 list-disc">
  {#each exercises as exercise}
    <li><a href="/exercises/{exercise.slug}">{exercise.title}</a></li>
  {/each}
</ul>
<form>
  <input 
    type="text" 
    bind:value={newExercise}
    placeholder="New exercise name" 
    class="border-gray-300 border-solid border rounded-md p-2 text-sm" 
  />
  <Button on:click={addExercise}>Add Exercise</Button>
</form>
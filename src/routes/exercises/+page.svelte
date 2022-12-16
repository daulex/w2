<script>
  import Button from '../../components/ui/buttons/Button.svelte';

  let newExercise = '';

  let exercises = [
      { slug: 'squat', title: 'Squat' },
      { slug: 'bench-press', title: 'Bench press' },
      { slug: 'deadlift', title: 'Deadlift' },
      { slug: 'row', title: 'Row' },
      { slug: 'push-up', title: 'Push-up' }
    ];

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

<h1>Exercises page is here!</h1>
<ul>
  {#each exercises as exercise}
    <li><a href="/exercises/{exercise.slug}">{exercise.title}</a></li>
  {/each}
</ul>
<form>
  <input 
    bind:value={newExercise}
    type="text" 
    placeholder="New exercise name" 
    class="border-gray-300 border-solid border rounded-md p-2 text-sm" 
  />
  <Button on:click={addExercise}>Add Exercise</Button>
  <Button style="secondary">Add Exercise</Button>
  <Button style="outline">Add Exercise</Button>
</form>
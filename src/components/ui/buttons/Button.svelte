<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  
  export let style = "default";
  
  let classList = 'inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium  shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2';

  if(style === "outline") {
    classList += ' bg-white text-gray-500 border-gray-300 hover:bg-gray-50';
  } else if(style === "secondary") {
    classList += ' bg-gray-500 text-white hover:bg-gray-700';
  } else {
    classList += ' bg-indigo-500 text-white hover:bg-indigo-700';
  }

</script>
<button class={classList} on:click={() => dispatch('click')}>
  <slot />
</button>
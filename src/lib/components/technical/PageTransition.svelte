<script>
	import { fade } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 50 }}>
		<slot/>
	</div>
{/key}
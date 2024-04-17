<script lang="ts">
	import Menu from '$lib/components/Menu/Menu.svelte';
</script>

<div class="main-layout">
	<slot />
	<Menu />
</div>

<style>
	.main-layout {
		display: flex;
		flex-direction: row-reverse;
	}
</style>

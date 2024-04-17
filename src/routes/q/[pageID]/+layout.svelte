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

	.toper {
		height: 12vh;
		width: 1px;
	}

	.top-viewer {
		position: relative;
		background-color: green;
		width: 100%;
		height: 90vh;
		overflow: hidden;
		overflow-y: scroll;

		/* padding-top:10vh;
		height:60vh;
		overflow: hidden; */
	}
</style>

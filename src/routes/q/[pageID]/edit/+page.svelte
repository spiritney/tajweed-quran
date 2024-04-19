<script lang="ts">
	import { page } from '$app/stores';
	import {} from 'module';
	import { onMount } from 'svelte';

	const pageID = $page.params.pageID;
	let mainHTML = ``;

	onMount(async () => {
		let data: string[] = (await import(`../../../../lib/data/quran/pages/page${pageID}.json`))
			.default;
		mainHTML = data.join('\n');
	});
</script>

<div>
	<textarea rows="20" cols="50" bind:value={mainHTML}></textarea>
	<textarea rows="20" cols="50">{JSON.stringify(mainHTML.split('\n'), null, 2)}</textarea>
</div>

<style>
	textarea {
		font-size: 1cm;
		direction: rtl;
	}
</style>

<script lang="ts">
	import { addGlobalStyles } from '$lib/components/Menu/store/globalStyles/functions/addGlobalStyles.js';
	import '$lib/style/index.css';
	import { onMount } from 'svelte';
	import {
		ADD_MASKS_ATTR_BODY,
		FIX_SCALE_ATTR_BODY,
		GLOBAL_STYLES_ATTR_BODY
	} from '$lib/constants.js';
	import { addFixScale } from '$lib/components/Menu/store/fixScale/functions/addFixScale.js';
	import { addMasks } from '$lib/components/Menu/store/addMasks/functions/addMasks.js';
	import { activateAnimatator } from '$lib/client/animation/index.js';
	import { page } from '$app/stores';
	import { getHTML } from './getHTML.js';
	import { setIsFixScaleActive } from '$lib/components/Menu/store/fixScale/setIsFixScaleActive.js';
	import { getTargetWidth } from '$lib/components/Menu/store/fixScale/getTargetWidth.js';

	let loading = true;
	let { mainHTML, withoutScale } = { mainHTML: '', withoutScale: false };
	onMount(async () => {
		const resp = await getHTML($page.params.pageID);
		mainHTML = resp.mainHTML;
		withoutScale = resp.withoutScale;

		setTimeout(() => {
			// Get the root element
			const rootElement = document.documentElement;

			// Set the CSS variable with its name and value
			rootElement.style.setProperty('--w', `${getTargetWidth()}px`);

			// console.log('window.onload +page.svelte');
			if (localStorage.getItem(GLOBAL_STYLES_ATTR_BODY) === 'true') {
				addGlobalStyles();
			}
			// add by default
			if (!localStorage.getItem(FIX_SCALE_ATTR_BODY)) {
				setIsFixScaleActive(true);
			}
			//
			if (localStorage.getItem(FIX_SCALE_ATTR_BODY) === 'true') {
				if (!withoutScale) {
					setIsFixScaleActive(true);
				}
			}
			if (localStorage.getItem(ADD_MASKS_ATTR_BODY) === 'true') {
				addMasks();
			}
			activateAnimatator();
			loading = false;
		}, 300);
	});

	document.addEventListener('keydown', (e) => {
		if (e.ctrlKey && e.altKey) {
			switch (e.key) {
				case 'ArrowRight':
					const previousPage = Number(Number($page.params.pageID) - 1);
					if (previousPage > 0) {
						window.location.href = `/q/${previousPage}`;
					}
					break;
				case 'ArrowLeft':
					const nextPage = Number(Number($page.params.pageID) + 1);
					if (nextPage <= 604) {
						window.location.href = `/q/${nextPage}`;
					}
					break;
				default:
					break;
			}
		}
	});
</script>

<div class="container">
	<div class="hider">
		<div class="wrapper">
			<main id="viewer" class="firstPage" style={loading ? 'display: none;' : ''}>
				{@html mainHTML}
			</main>
		</div>
	</div>
</div>

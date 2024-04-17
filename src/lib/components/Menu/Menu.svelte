<script lang="ts">
	import { onMount } from 'svelte';
	import ButtonMenu from './ButtonMenu.svelte';
	import { toggleIsGlobalStylesActive } from './store/globalStyles/toggleIsGlobalStylesActive';
	import { getIsGlobalStylesActive } from './store/globalStyles/getIsGlobalStylesActive';

	import Modal from '$lib/components/Modal/index.svelte';

	import paint from '$lib/img/icons/paint.png';
	import scale from '$lib/img/icons/scale.png';
	import eraser from '$lib/img/icons/eraser.png';
	import animation from '$lib/img/icons/animation.png';
	import scroll from '$lib/img/icons/scroll.png';
	import { getIsFixScaleActive } from './store/fixScale/getIsFixScaleActive';
	import { toggleIsFixScaleActive } from './store/fixScale/toggleIsFixScaleActive';
	import { getIsAddMasksActive } from './store/addMasks/getIsAddMasksActive';
	import { toggleIsAddMasksActive } from './store/addMasks/toggleIsFixScaleActive';

	let isGlobalStylesActive = false;
	let isFixAyatScaleActive = false;
	let isAddMasksActive = true;
	let isScrollbarActive = false;

	onMount(() => {
		isGlobalStylesActive = getIsGlobalStylesActive();
		isFixAyatScaleActive = getIsFixScaleActive();
		isAddMasksActive = getIsAddMasksActive();
		isScrollbarActive = document.body.style.overflow !== 'hidden';
	});

	const _toggleIsGlobalStylesActive = () => {
		isGlobalStylesActive = !isGlobalStylesActive;
		toggleIsGlobalStylesActive();
	};

	const _toggleIsFixScaleActive = () => {
		isFixAyatScaleActive = !isFixAyatScaleActive;
		toggleIsFixScaleActive();
	};

	const _toggleIsAddMasksActive = () => {
		isAddMasksActive = !isAddMasksActive;
		toggleIsAddMasksActive();
	};

	const _toggleScrollbarActive = () => {
		if (isScrollbarActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'scroll';
		}
		isScrollbarActive = !isScrollbarActive;
	};

	let showModal = false;

	const openAnimationModalShortcuts = () => {
		showModal = true;
	};
</script>

<div class="menu-list" id="top-menu">
	<ButtonMenu
		isActive={isGlobalStylesActive}
		title="Activate global styles"
		on:click={() => _toggleIsGlobalStylesActive()}
		src={paint}
	/>

	<ButtonMenu
		isActive={isFixAyatScaleActive}
		title="Fix ahat scale"
		on:click={() => _toggleIsFixScaleActive()}
		src={scale}
	/>

	<ButtonMenu
		isActive={isAddMasksActive}
		title="Add masks to ayaht"
		on:click={() => _toggleIsAddMasksActive()}
		src={eraser}
	/>
	<ButtonMenu
		isActive={true}
		title="List shortcuts of animations"
		on:click={() => openAnimationModalShortcuts()}
		src={animation}
	/>

	<ButtonMenu
		isActive={isScrollbarActive}
		title="scrolActivate scrollbar"
		on:click={() => _toggleScrollbarActive()}
		src={scroll}
	/>
	<Modal bind:showModal>
		<h2 slot="header">List shortcuts of animations</h2>

		<ul class="definition-list">
			<li><kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>SPACE</kbd>: Play/Pause animation</li>
			<li><kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>P</kbd>: Pause animation (if playing)</li>
			<li><kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>S</kbd>: Stop animation (if playing)</li>
			<li><kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>R</kbd>: Restart animation (if stopped)</li>
			<li>
				<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>K</kbd>: Go to previous animation (if playing)
			</li>
			<li><kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>J</kbd>: Go to next animation (if playing)</li>
			<li>
				<kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>1</kbd> - <kbd>9</kbd>: Set animation to specific
				index (if not playing)
			</li>
		</ul>
	</Modal>
</div>

<style>
	.menu-list {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		background-color: rgba(127, 255, 212, 0.1);
		padding: 4px;
		gap: 4px;
	}
</style>

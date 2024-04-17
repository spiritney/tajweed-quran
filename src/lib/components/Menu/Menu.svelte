<script lang="ts">
	import { onMount } from 'svelte';
	import ButtonMenu from './ButtonMenu.svelte';
	import { toggleIsGlobalStylesActive } from './store/globalStyles/toggleIsGlobalStylesActive';
	import { getIsGlobalStylesActive } from './store/globalStyles/getIsGlobalStylesActive';

	import Modal from '$lib/components/Modal/index.svelte';

	import paint from '$lib/img/icons/512x512/paint.png';
	import scale from '$lib/img/icons/512x512/scale.png';
	import eraser from '$lib/img/icons/512x512/eraser.png';
	import animation from '$lib/img/icons/512x512/animation.png';
	import scroll from '$lib/img/icons/512x512/scroll.png';
	import zoomIn from '$lib/img/icons/512x512/zoom-in.png';
	import zoomOut from '$lib/img/icons/512x512/zoom-out.png';
	import menu from '$lib/img/icons/512x512/menu.png';

	import { getIsFixScaleActive } from './store/fixScale/getIsFixScaleActive';
	import { toggleIsFixScaleActive } from './store/fixScale/toggleIsFixScaleActive';
	import { getIsAddMasksActive } from './store/addMasks/getIsAddMasksActive';
	import { toggleIsAddMasksActive } from './store/addMasks/toggleIsFixScaleActive';

	let isGlobalStylesActive = false;
	let isFixAyatScaleActive = false;
	let isAddMasksActive = true;
	let isScrollbarActive = false;

	let zoom = 1;

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
	let showModalScroll = false;
	let showModalMenu = false;

	const openAnimationModalShortcuts = () => {
		showModal = true;
	};
</script>

<div class="menu-list" id="top-menu">
	<ButtonMenu
		isActive={true}
		title="Zoom in"
		on:click={() => {
			showModalScroll = true;
		}}
		src={zoomIn}
	/>

	<ButtonMenu
		isActive={true}
		title="Zoom in"
		on:click={() => {
			showModalScroll = true;
		}}
		src={zoomOut}
	/>

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
	<ButtonMenu
		isActive={isScrollbarActive}
		title="menu"
		on:click={() => (showModalMenu = true)}
		src={menu}
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

	<Modal bind:showModal={showModalScroll}>
		<h2 slot="header">Zoom</h2>

		<ul class="definition-list">
			<li><kbd>CTRL</kbd> + <kbd>Scroll up</kbd>: Zoom in</li>
			<li><kbd>CTRL</kbd> + <kbd>Scroll down</kbd>: Zoom out</li>
		</ul>
	</Modal>

	<Modal bind:showModal={showModalMenu}>
		<h2 slot="header">Menu</h2>

		<ul class="definition-list">
			<li><kbd>CTRL</kbd> + <kbd>ALT</kbd>+ <kbd>m</kbd>: Show / Hide</li>
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
		z-index: 9999;
		transform: translateX('1px');
	}
</style>

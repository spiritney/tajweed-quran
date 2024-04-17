<script lang="ts">
	export let isActive: boolean;
	export let src: any;
</script>

<button class:active={isActive} on:click {...$$props}>
	<img {src} alt="paint" />
</button>

<style>
	button {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(18, 65, 1, 0.099);
		border-radius: 4px;
		border: 1px solid transparent;
		padding: 2px;
		filter: grayscale(100%);
	}

	button:hover {
		background-color: #12410139;
	}

	button.active {
		background-color: #12410139;
		border: 1px solid #124101;
		filter: grayscale(0%);
	}

	img {
		width: 16px;
		height: 16px;
	}
</style>

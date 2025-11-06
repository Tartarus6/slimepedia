<script lang="ts">
	import { onMount } from 'svelte';

	let size = $state(7);
	let freeIndex = $derived(Math.floor((size * size) / 2));

	let count = $state(0);

	let selected = $state(Array.from({ length: size * size }, (_, index) => 1));

	let showDiags = $state(0);
	let diag1 = $state(0);
	let diag2 = $state(0);

	function checkBingo() {
		let newCount = 0;
		let newDiag1 = 0;
		let newDiag2 = 0;

		let unselectedFound = false;
		for (let i = 0; i < 2 * size * size + 2 * size; i++) {
			let cellIndex = checkIndex(i, size);

			if (selected[cellIndex] == 0) {
				unselectedFound = true;
				// todo: (optimization) perhaps add to i so thats its at the start of the next set of 5 to prevent unnecessary checks
			}
			if (i % size != size - 1) {
			} else if (unselectedFound === true) {
				unselectedFound = false;
			} else {
				newCount++;
			}
		}

		for (let i = 0; i < size * size; i++) {
			if (i % (size + 1) === 0 && selected[i] === 0) {
				newDiag1 += 1;
			} else if (i % (size - 1) === 0 && selected[i] === 0) {
				newDiag2 += 1;
			}
		}

		diag1 = newDiag1;
		diag2 = newDiag2;

		count = newCount;
	}

	function checkIndex(i: number, n: number) {
		return (
			i * Number(i < n * n) +
			(n * ((i - n) % n) + Math.floor((i - n * n) / n)) *
				(Number(i >= n * n) * Number(i < 2 * n * n)) +
			(n + 1) * (i % n) * (Number(i >= 2 * n * n) * Number(i < 2 * n * n + n)) +
			(n + (n - 1) * (i % n) - 1) * (Number(i >= 2 * n * n + n) * Number(i < 2 * n * n + 2 * n))
		);
	}

	function clickFunction(index: number) {
		console.log(index);
		if (index !== freeIndex) {
			selected[index] == 1 ? (selected[index] = 0) : (selected[index] = 1); // flip selected or not
			checkBingo();
		}
	}

	onMount(() => {
		checkBingo();
	});

	function handleSizeInput(event: Event) {
		const target = event.target as HTMLInputElement; // Type assertion
		size = Number(target.value); // Update the value based on slider position

		selected = Array.from({ length: size * size }, (_, index) => 1);
		checkBingo();
	}

	function handleDiagInput() {
		console.log('henlo');
		if (showDiags === 1) {
			showDiags = 0;
		} else {
			showDiags = 1;
		}
	}

	function getBackground(index: number) {
		let classes = '';

		if (index === freeIndex) {
			classes += ' border-4 border-[#45537a] bg-light-blue';
		} else if (selected[index] === 0) {
			classes += ' border-4 border-[#8d9aaf] bg-[#e4ceb8]';
		} else {
			// checking if col or row already met
			let met = false;
			for (let i = index - (index % size); i < index - (index % size) + size; i++) {
				if (selected[i] == 0) {
					met = true;
				}
			}
			for (let i = index % size; i < size * size; i += size) {
				if (selected[i] == 0) {
					met = true;
				}
			}
			if (met) {
				classes += ' border-4 border-white bg-[#a9e3eb]';
			} else {
				classes += ' border-4 border-lightish-blue bg-light-blue';
			}
		}

		if (showDiags && index !== freeIndex) {
			if (index % (size + 1) === 0) {
				classes += ' border-4 border-[#71695b]';
			} else if (index % (size - 1) === 0) {
				classes += ' border-4 border-[#71695b]';
			}
		}

		return classes;
	}
</script>

<div class="grid h-full grid-cols-4 grid-rows-1">
	<div class="col-span-3 col-start-1 row-start-1 w-full text-center">
		<span class="text-3xl font-bold">BINGOS: {count}</span>
		<br />
		{#if count === 0}
			<span class="text-xl">Duplicates: {diag1 * diag2 - 1}</span>
		{/if}
	</div>

	<div class="col-span-3 col-start-1 row-start-1 grid h-fit justify-center self-center">
		<div
			class="grid h-full w-fit gap-2"
			style="grid-template-rows: repeat({size}, minmax(0, 1fr)); grid-template-columns: repeat({size}, minmax(0, 1fr));"
		>
			{#each Array.from({ length: size * size }, (_, index) => index) as index}
				<button onclick={() => clickFunction(index)} aria-label="button">
					<div class="size-10 rounded-xl {getBackground(index)}"></div>
				</button>
			{/each}
		</div>
	</div>
	<div class="col-start-4 row-start-1 h-full w-full justify-self-end">
		<div class="h-full w-full">
			<div class="flex flex-col items-center">
				<span class="mb-2 text-lg font-bold">Size: {size}</span>
				<input
					type="range"
					step="2"
					min="3"
					max="11"
					bind:value={size}
					oninput={handleSizeInput}
					class="mb-10 h-2 w-full cursor-pointer appearance-none rounded-lg bg-light-beige"
				/>
				<span class="mb-2 text-lg font-bold">Show Diags: {showDiags}</span>
				<button
					class="h-10 w-full rounded-full {showDiags === 1 ? 'bg-dark-pink' : 'bg-light-beige'}"
					aria-label="button"
					onmousedown={() => handleDiagInput()}
				>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 3.5em;
		height: 1.25em;
		background: #de4f85;
		cursor: pointer;
	}

	input[type='range']::-moz-range-thumb {
		width: 3.5em;
		height: 1.25em;
		background: #de4f85;
		cursor: pointer;
	}
</style>

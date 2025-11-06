<script lang="ts">
    import { onMount, tick, type Snippet } from "svelte";
    import { images } from "$lib/scripts/assets";

    interface Props {
        children: Snippet;
        class?: string;
        reactiveValue?: any;  // reactive value that changes when content changes
    }

    let props: Props = $props();

    let divContent: HTMLDivElement | undefined = $state();
	let scrollBar: HTMLDivElement;
	let scrollThumb: HTMLDivElement;

    let isDragging = $state(false);
	let startY = $state(0);
	let startScrollTop = $state(0);

    let scrollBarOpacity = $state(0);   // opacity in %
	let scrollThumbHeight = $state(0);  // thumb height in %
	let scrollThumbTop = $state(0);     // current top in %

	// React to changes in content via the contentKey prop
	$effect(() => {
		props.reactiveValue;  // reference the contentKey to make the effect run whenever it changes
		
		updateScrollbar();
	});

    onMount(() => {
		if (scrollThumb && divContent) {
			updateScrollbar();
		}

		window.addEventListener('mousemove', handleScrollbarMouseMove);
		window.addEventListener('mouseup', handleScrollbarMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleScrollbarMouseMove);
            window.removeEventListener('mouseup', handleScrollbarMouseUp);
        };
	});

	// Update the custom scrollbar position and size
	async function updateScrollbar() {
        if (!divContent || !scrollThumb) return;

		await tick();

        if (divContent.scrollHeight <= divContent.clientHeight) {
            scrollBarOpacity = 0;
        } else {
            scrollBarOpacity = 100;
        }

        // Calculate the height of the custom scrollbar thumb
        scrollThumbHeight = (divContent.clientHeight / divContent.scrollHeight) * 100;

        // Calculate the top position of the custom scrollbar thumb
        scrollThumbTop = (divContent.scrollTop / divContent.scrollHeight) * 100 * (scrollBar.clientHeight / scrollThumb.clientHeight);
	}

    // Handle scrollbar drag start
	function handleScrollbarMouseDown(event: MouseEvent) {
        if (!divContent) return;

		isDragging = true;
		startY = event.clientY;
		startScrollTop = divContent.scrollTop;
		event.preventDefault();
	}

	// Handle scrollbar dragging
	function handleScrollbarMouseMove(event: MouseEvent) {
		if (!isDragging) return;
        if (!divContent) return;
		
		const deltaY = event.clientY - startY;
		const contentHeight = divContent.scrollHeight;
		const containerHeight = divContent.clientHeight;
		
		// Calculate scroll ratio
		const scrollRatio = contentHeight / containerHeight;
		divContent.scrollTop = startScrollTop + (deltaY * scrollRatio);
	}

	// Handle scrollbar drag end
	function handleScrollbarMouseUp() {
		isDragging = false;
	}
</script>

<div class="grid grid-cols-[1fr_3em] overflow-y-hidden overflow-x-visible {props.class}">
    <!-- Child Content -->
    <div bind:this={divContent} class="scrollable-div w-full overflow-y-scroll overflow-x-visible text-wrap" onscroll={updateScrollbar}>
        {@render props.children()}
    </div>

    <!-- Scrollbar -->
    <div class="flex flex-col overflow-visible w-fit justify-self-end;" style="opacity: {scrollBarOpacity}%;">
        <div bind:this={scrollBar} class="ml-6 grid h-full w-2 justify-center rounded-full bg-light-beige overflow-visible">
            <div 
                bind:this={scrollThumb} 
                class="{isDragging ? "w-6" : "w-3 hover:w-6"} duration-275 ease-[cubic-bezier(.53,1.79,.58,1.05)] rounded-full bg-dark-pink" 
                style="transition-property:width; transform: translateY({scrollThumbTop}%); height: {scrollThumbHeight}%;"
                role="scrollbar"
                tabindex="0"
                aria-controls="scrollable-content"
                aria-valuenow={divContent?.scrollTop || 0}
                aria-valuemin={0}
                aria-valuemax={divContent?.scrollHeight || 0}
                onmousedown={handleScrollbarMouseDown}
            ></div>
        </div>
        <div class="ml-2 grid size-10 justify-center overflow-visible">
            <enhanced:img src={images.input.mouse.mouse3} />
        </div>
    </div>
</div>
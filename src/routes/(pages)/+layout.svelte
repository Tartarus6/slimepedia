<script lang="ts">
	import { goto } from "$app/navigation";
    import { soundManager } from "$lib";
	import { onDestroy, onMount } from "svelte";
    let { children } = $props();

    onMount(() => {
        window.addEventListener("keydown", handle_escape);

        return () => {
            if (window) {
                window.removeEventListener("keydown", handle_escape);
            }
        };
    });

    const handle_escape = (event: { key: string }) => {
        if (event.key === "Escape") {
            soundManager.playClick3();
            // window.location.href = "/";
            goto("/");
        }
    };
</script>


<div class="col-start-1 row-start-1 w-full h-full overflow-hidden">
    {@render children()}
</div>

<div class="col-start-1 row-start-2 place-self-end">
    <div
        class="inline-flex h-9 w-full place-content-end duration-200 ease-[cubic-bezier(.53,1.79,.58,1.05)] hover:scale-[1.2]"
    >
        <a href="/" class="group contents" onclick={() => soundManager.playClick3()} onmouseenter={() => soundManager.playRollover()}>
            <div class="h-full content-center justify-center rounded-xl border-4 border-white bg-bluegray px-2">
                <span class="text-xl font-extrabold" style="color: white">ESC</span>
            </div>
            <div class="translate-y-0.5 pl-2">
                <span class="text-2xl"> Back </span>
            </div>
        </a>
    </div>
</div>
<script lang="ts">
	interface Props {
		icon: { img: { src: string } };
		title: string;
		content: string;
	}

	let props: Props = $props();
</script>

<div class=" scrollable-div">
	<div class="mb-3 w-full rounded-full bg-blueblack px-2 py-1">
		<span class="pt-[0.1em] text-lg font-bold text-white">
			<div class='translate-y-[0.1em]'>
				<img src={props.icon.img.src} alt="{props.title} icon" class="inline-block h-6 align-text-bottom" />
				{props.title}
			</div>
		</span>
	</div>
	<div class="mb-6 ml-2">
		<span class="whitespace-pre-wrap text-[1.1em]">{props.content}</span>
	</div>
</div>

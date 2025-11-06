<script lang="ts">
    import type { Picture } from 'vite-imagetools'

    interface Props {
        icon: Picture;
        title: string;
    }

    let props: Props = $props();
</script>

<span class="inline-block text-2xl font-extrabold">
    <enhanced:img src={props.icon} alt="page icon" class="inline-block size-4 align-top" />
    {props.title}
</span>
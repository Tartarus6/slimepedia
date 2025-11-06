import type { Picture } from 'vite-imagetools';

export type ItemsData = {
    name: string,
    image: Picture,
    plort_image?: Picture,
    blurb: string,
    facts?: {
        value: string,
        icon: Picture,
    }[],
    info: {
        icon: Picture,
        title: string,
        content: string,
    }[],
}[]
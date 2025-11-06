// place files you want to import through the `$lib` alias in this folder.
import type { Picture } from 'vite-imagetools';
import type { ItemsData } from './data';


export { soundManager } from './scripts/sound';
export { sfx } from './scripts/assets';


export type { ItemsData } from './data';

export type FullPageData = {
    title: string,
    icon: Picture,
    categories?: string[],  // note: categories correspond to facts

    content: ItemsData,
};

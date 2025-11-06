import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets'
import { slimes } from '$lib/data/slimes'
import type { FullPageData } from '$lib';

export const load: PageLoad = ({ params }) => {
    let fullPageData: FullPageData = {
        title: `SLIMES`,
        icon: images.pedia.home.slimes,
        categories: [
            'Diet',
            'Favorite',
        ],

        content: slimes
    };
    return fullPageData;
};
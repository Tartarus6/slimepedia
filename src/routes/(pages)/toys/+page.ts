import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets'
import { toys } from '$lib/data/toys';
import type { FullPageData } from '$lib';

export const load: PageLoad = ({ params }) => {
    let data: FullPageData = {
        title: `TOYS`,
        icon: images.pedia.home.toys,
        categories: [
            'Type',
            'Price',
        ],
        content: toys
    };
    return data
};
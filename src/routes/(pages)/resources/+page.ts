import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets'
import { resources } from '$lib/data/resources'
import type { FullPageData } from '$lib';

//TODO: fill in 'favored by' fields

export const load: PageLoad = ({ params }) => {
    let fullPageData: FullPageData = {
        title: `RESOURCES`,
        icon: images.pedia.home.resources,
        categories: [
            'Type',
            'Favored By',
        ],
        content: resources,
    };
    return fullPageData
};
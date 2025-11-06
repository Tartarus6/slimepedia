import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets';
import type { Picture } from 'vite-imagetools';

export interface HomeContentItem {
	name: string;
	image: Picture;
	link: string;
}

export interface HomePageData {
	title: string;
	icon: Picture;
	content: HomeContentItem[];
}

export const load: PageLoad = ({ params }) => {
	let data: HomePageData = {
		title: `SLIMEPEDIA`,
		icon: images.pedia.logo,

		content: [
			{
				name: 'Slimes',
				image: images.pedia.home.slimes,
				link: '/slimes'
			},
			{
				name: 'Resources',
				image: images.pedia.home.resources,
				link: '/resources'
			},
			{
				name: 'Blueprints',
				image: images.pedia.home.blueprint,
				link: '/test'
			},
			{
				name: 'World',
				image: images.pedia.home.world,
				link: '/world'
			},
			{
				name: 'Weather',
				image: images.pedia.home.weather,
				link: '/weather'
			},
			{
				name: 'Toys',
				image: images.pedia.home.toys,
				link: '/toys'
			},
			{
				name: 'Ranch',
				image: images.pedia.home.ranch,
				link: '/ranch'
			},
			{
				name: 'Science',
				image: images.pedia.home.science,
				link: '/science'
			},
			{
				name: 'Tutorials',
				image: images.pedia.home.tutorials,
				link: '/tutorials'
			}
		]
	};
	return data;
};

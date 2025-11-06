import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets';
import type { FullPageData } from '$lib';

//TODO: set page icon to correct one
export const load: PageLoad = ({ params }) => {
    let data: FullPageData = {
        title: `SCIENCE`,
        icon: images.pedia.home.science,

        content: [
            {
                name: 'refinery',
                image: images.science.refinery,
                blurb: 'The first step to building fantastic gadgets.',
                info: "Using advanced technology, the Refinery breaks down plorts and other resources to their molecular level, allowing them to be fabricated into various Slime Science gadgets. Aside from plorts, the bulk of resources you will use in Slime Science will be obtained from resource nodes found in the environment.\n\nBe sure to choose what to deposit into the Refinery wisely: any resources you deposit cannot be removed from the refinery, but instead used only for building gadgets.",
            },
            {
                name: 'fabricator',
                image: images.science.fabricator,
                blurb: "Let's get crafty.",
                info: "The fabricator allows you to craft gadgets from a blueprint using resources you have stored in the Refinery. You can generally build as many gadgets of a specific blueprint as you wish, however some special gadgets have build limits, allowing you to only own a certain number of them at a time.",
            },
            {
                name: 'utilities',
                image: images.blueprints.utilities.hydroTurret,
                blurb: 'Tools for getting the job done.',
                info: "Utilities are a class of Slime Science gadgets that provide useful features to aid you in managing your ranch, as well as exploring the range.\n\nCraft utilities in order to make your slime ranching a little easier.",
            },
            {
                name: 'warp tech',
                image: images.science.refineryLink,
                blurb: 'Try not to think about how it works.',
                info: "Warp Tech is a class of Slime Science gadgets that allow you to harness the power of instantaneous travel. It includes teleporters that you can use to create shortcuts, as well as gadgets that allow you to transport items.\n\nCraft warp tech in order to ranch and explore much faster and more efficiently.",
            },
            {
                name: 'decorations',
                image: images.blueprints.decorations.emeraldCypressCluster,
                blurb: 'Be the best rancher, but do it in style.',
                info: "Decorations are a class of Slime Science gadgets that allow you to decorate the world with attractive objects or recreations of natural findings from the environment.\n\nCraft decorations in order to make your slime ranching a more beautiful experience.",
            },
        ],
    };
    return data;
}
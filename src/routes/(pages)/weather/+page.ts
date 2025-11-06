import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets';
import type { FullPageData } from '$lib';

//TODO: set page icon to correct one
export const load: PageLoad = ({ params }) => {
    let data: FullPageData = {
        title: `WEATHER`,
        icon: images.pedia.home.weather,

        content: [
            {
                name: 'rain',
                image: images.weather.rain,
                blurb: 'Moody, dreary, cozy, wonderful',
                info: "Whether a light drizzle or a heavy downpour, rain can make any corner of Rainbow Island a little more dramatic. But rain can also help keep Tarr at bay, naturally water wild fruits, veggies, and crops, and delight puddle slimes everywhere.",
            },
            {
                name: 'snow',
                image: images.weather.snow,
                blurb: 'Walking in a wiggly wonderland',
                info: "Snow is a rarity on Rainbow Island, but you can always find it in Powderfall Bluffs due to its unique atmospheric conditions. Slimes revel in a snow day, rolling down icy slopes, and never missing a chance to join a friendly Snowball fight.",
            },
            {
                name: 'thunderstorm',
                image: images.weather.thunderstorm,
                blurb: 'Hair-raising, if slimes had hair',
                info: "Few other spectacles in nature compete with the crack of thunder and flash of lightning during a storm. On Rainbow Island, these storms can sometimes cause lightning to strike down from above, crashing into the ground with incredible force. So when the skies begin to rumble, watch out!",
            },
            {
                name: 'lightning strike',
                image: images.weather.lightning,
                blurb: "When nature means business",
                info: "While the drama of distant thunderstorms can be a delight to witness, they can cause lightning to rip through the sky and crash into the ground. So for ranchers that fancy themselves storm chasers. look out for the crackle of electricity beneath your feet as a searing lightning bolt is surely on the way!",
            },
            {
                name: 'wind',
                image: images.weather.wind,
                blurb: 'Hold on to your plorts!',
                info: "Nothing beats the cool breeze of sea air that rolls through every corner of Rainbow Island. But when cool breezes become gusts and gales, anything that isn't rooted to the ground can find itself going wherever the wind decides to take it!",
            },
            {
                name: 'cyclone',
                image: images.weather.tornado,
                blurb: 'Dizzy as a dervish',
                info: "Cyclones can form when windy weather reaches its peak, creating swirling, whirling, twisters that tear through the environment. Cyclones cause chaos, flinging about food, slimes, and even ranchers that are in their wake. But in all the chaos, you may just get lucky and find some dervish slimes having the time of their lives.",
            },
            {
                name: 'pollen',
                image: images.weather.pollen,
                blurb: 'ah- ah- AH- AHLUVSLIMES!',
                info: "Rainbow Island is lush with trees and flowers so it's not unusual to find clouds that cause tears (of joy) and sneezes (of joy) as a reaction to the majesty of nature in full bloom. But nature on Rainbow Island rarely stops there, as pollen clouds are often a precursor to more aggressive forms of plant life expanding their reach.",
            },
            {
                name: 'vine tangle',
                image: images.weather.vines,
                blurb: 'Getting to the root of the pollen',
                info: "A strange phenomenon occurs on Rainbow Island when pollen clouds swell to unusual levels: plant life in the area will grow rapidly, and erratically, spreading creeping vines in all directions. These vines will spawn large buds that blossom into fruits and veggies, and make for a great hunting ground for the wild tangle slimes that sometimes appear.",
            },
            {
                name: 'slimefall',
                image: images.weather.slimerain,
                blurb: 'Oh come on...',
                info: "Even by the standards of Rainbow Island, slimefall is an unusual sight, with dozens of slimes raining down from the clouds above. As with many things, the slimes don't seem to be particularly bothered by it all, but a rancher would do well to remain cautious. With so many new slimes dropped into an area at once, slimefall can easily lead to Tarr outbreaks.",
            },
        ],
    };
    return data;
}
import { images } from '$lib/scripts/assets';
import type { ItemsData } from '.';

export const categories: string[] = [
    'Type',
    'Price',
];

export const toys: ItemsData = [
    {
        name: 'beach ball',
        image: images.toys.beachBall,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Pink Slimes who enjoy fun in the sun."
            }
        ]
    },
    {
        name: 'bomb ball',
        image: images.toys.bomb,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Boom Slimes who probably think this sort of thing is funny."
            }
        ]
    },
    {
        name: 'bouncy ball',
        image: images.toys.bouncyBall,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Cotton Slimes who see it as serious competition."
            }
        ]
    },
    {
        name: 'full moon ball',
        image: images.toys.moon,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Batty Slimes who see the night as their only reue friend."
            }
        ]
    },
    {
        name: 'glowbug',
        image: images.toys.glowWorm,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Flutter Slimes who find it even more soothing than themselves."
            }
        ]
    },
    {
        name: 'plushie puffer fish',
        image: images.toys.pufferFish,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Angler Slimes who don't mind prickly playmates."
            }
        ]
    },
    {
        name: 'rubber ducky',
        image: images.toys.rubberDucky,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Puddle Slimes who are less shy when a rubber ducky buddy is around."
            }
        ]
    },
    {
        name: 'trashcan',
        image: images.toys.trashCan,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Ringtail Slimes who love to eat trash and do crimes."
            }
        ]
    },
    {
        name: 'yarn ball',
        image: images.toys.yarnBall,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Reduces agitation of nearby slimes, especially Tabby Slimes. Though, they still don't know how to knit anymore than the other slimes."
            }
        ]
    },
    {
        name: 'glo glo foxfur',
        image: images.toys.exclusiveFox,
        blurb: 'Playtime gets the wiggles out.',
        
        info: [
            {
                icon: images.pedia.about,
                title: 'About',
                content:
                    "Greatly reduces agitation of all nearby slimes. Perfect for slimes getting into mischief."
            }
        ]
    },
];

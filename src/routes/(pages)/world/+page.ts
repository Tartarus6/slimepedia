import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets';

//TODO: set page icon to correct one
export const load: PageLoad = ({ params }) => {
    return {
        title: `WORLD`,
        icon: images.pedia.home.world,

        content: [
            {
                name: 'the conservatory',
                image: images.world.conservatory,
                blurb: 'Your gateway to a prismatic paradise.',
                info: "When Beatrix first arrived at Rainbow Island she discovered this mysterious, abandoned Conservatory and decided to use it as her home away from home, as it has all the facilities an experienced slime rancher would need to make a living.\n\nThe Conservatory itself is the only structure on the island that appears to have been constructed recently, standing in stark contrast to the ancient slime ruins found all over Rainbow Island and the rest of the Far, Far Range.\n\nStrangely, imperfections and wear on its various structures seem to be part of the design, as if it was created for a museum exhibit. And yet, there is a palpable feeling throughout that this was a home to someone, that it was built with love and purpose.",
            },
            {
                name: 'rainbow fields',
                image: images.world.fields,
                blurb: 'Shifting colors like a dream, fading just as quickly.',
                info: "Every day is one perfect, unending lazy afternoon in the Rainbow Fields; the kind that would make anyone want to stretch out across its prismatic grasses and while away the hours watching marshmallow clouds drift slowly across the sky.\n\nHappy, hoppy cotton slimes pop from their underground warrens and bounce about the glades, always hoping to land in a patch of delicious water lettuce.\n\nCareful explorers will also find ample reserves of jellystone along the hills and cliffs, as well as spouts of deep brine near the banks of the Slime Sea.\n\nWatching it all are the giant, smiling slime statues dotting the landscape, basking in the golden sun and hinting at the wondrous stone structures that Rainbow Island has yet to reveal to its vistors.",
            },
            {
                name: 'starlight strand',
                image: images.world.strand,
                blurb: 'A vision of dusk and dawn together as one.',
                info: "The Starlight Strand is a world of opposites: a winding land cut erratically by the Slime Sea, with towering heights and cliffs that loom over deep lowland marshes.\n\nFurther, it is all mysteriously split right down the middle between two opposing palettes of coral and lavender, with the very atmosphere itself seeming to change as you cross from one to the other.\n\nThe strand is a floral fantasia, making it an ideal home to nectar-loving honey and flutter slimes, and its canopies are abuzz with hives that can be harvested for wild honey and buzz wax.\n\nThough undeniably beautiful, the Starlight Strand's peculiar nature is unlikely a natural occurrence, and suggests a secret history hidden within the heart of Rainbow Island.",
            },
            {
                name: 'ember valley',
                image: images.world.gorge,
                blurb: 'The ancient world stirs beneath your feet with every step.',
                info: "Ember Valley is always rumbling: blasting great geysers of water along its coasts and erupting lava into its smoldering ravines. It is a primal place, with canyons carved from swirling winds, revealing enormous fossils of unknown creatures.\n\nThe unique combination of strong geothermal activity and volcanic soil makes for a land abundant in primordy oil and lava dust, and makes for a natural home to heat-loving boom, fire and crystal slimes.\n\nStrangely, much of Ember Valley's primordial nature feels like a recent occurrence, at least relatively speaking. Its volcanic activity does not feel like the product of eons of change, but from some kind of unknown catalyst.\n\nIt would be wise to tread carefully in this place, further change could happen swiftly and it might just occur right below your feet... ",
            },
            {
                name: 'the slime sea',
                image: images.world.sea,
                blurb: "An expansive body of water and slime compound that's not fit for swimming, let alone drinking.",
                info: "The Slime Sea that covers most of the Far, Far Range is something of a mystery. It is seemingly a mixture of water and slime that is believed to be the primordial pool whence all slimes emerged, though its true purpose is entirely unknown by even the most esteemed slime scientists.\n\nWhat is known is that the liquid found within the Slime Sea is not fit for drinking, watering crops, or even swimming, as most things seem to quickly sink to the bottom.\n\nWhen a slime enters the slime sea it quickly vanishes but it is widely believed that this far from ends the slime's existence, for slimes that enter the sea can often be seen quickly reappearing back on land, happy as ever.\n\nIn fact, many slime scientists believe that slimes use the sea as a means of transportation, moving swiftly below the surface and popping out on land wherever they see fit.\n\nBut all theories aside, one fact remains very clear, most especially to ranchers: don't enter the Slime Sea!",
            },
            {
                name: 'powderfall bluffs',
                image: images.world.powderfall,
                blurb: 'A lost era echoing through the halls of shimmering ice.',
                info: "In a time long forgotten, Powderfall Bluffs may have been part of a greater landmass of Rainbow Island but somehow broke away, likely from the geological turmoil found in Ember Valley. And as it drifted away into the sea, it took its prehistoric inhabitants with it.\n\nAs sea levels rose, Powderfall Bluffs somehow became encased in a gigantic shell of shimmering ice before sinking into the depths of The Slime Sea, becoming like a living world inside a snow globe. The cause of this icy phenomenon is unknown, but could indicate that the strange effects of the prisma waves radiating from Rainbow Island date back to a time before recorded history on the Far, Far Range.\n\nNow, Powderfall Bluffs has returned, as a perfectly preserved prehistoric ecosystem. Those willing to brave the freezing climate will find hungry saber slimes, and fearsome thunderclucks. Vibrant Sun Sap can be found in groves of ancient redwoods, with slime fossils and blustery plumes of perfect snowflakes hidden around every frozen corner.",
            },
            {
                name: 'the grey labyrinth',
                image: images.world.labyrinth,
                blurb: 'An imposing layer cake whose depths hide ancient, prismatic secrets.',
                info: "Towering over the horizon, the Grey Labyrinth stretches across the skyline of Rainbow Island like an imposing jigsaw puzzle missing a piece. On its surface, it appears to be keeping the curious out, yet the further in one ventures, the more one suspects the Grey Labyrinth is holding something in.\n\nAmid twisting corridors of carved stone and unnatural metals, and echoing from pipes channeling water and magma, an erratic pulse of power beats from somewhere deeper within the ancient structure. Strange phenomena mar otherwise ethereal, manicured gardens, and prismatic light washes over the landscape, bathing it in unpredictable, transformative energies.\n\nCountless ages of exposure to these energies seems to have impacted both slimes and inanimate objects alike, giving them odd properties that sometimes defy logic or natural forces entirely. Even shadows seem to cluster and capriciously bound through the ancient megastructure.\n\nWithin its deepest chambers, the Grey Labyrinth holds a secret that perhaps one can only answer with some unexpected guidance from beyond. ",
            },
        ],
    }
}
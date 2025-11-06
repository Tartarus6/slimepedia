import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets';
import type { Picture } from 'vite-imagetools';

export type TutorialTextBlock = {
    sectionTitle?: string;
    text: string;
};

export type TutorialIconBlock = {
    boxIcons?: (Picture | string)[];
    bareIcons?: (Picture)[];
    text: string;
}[];

type TutorialContent = {
    title: string;
    blurb: string;
    image: Picture;
    pageContent: (TutorialTextBlock | TutorialIconBlock)[];
};

export type TutorialsPageData = {
    title: string;
    icon: Picture;
    content: TutorialContent[];
}

export const load: PageLoad = ({ params }) => {
    let data: TutorialsPageData = {
        title: `TUTORIALS`,
        icon: images.pedia.home.tutorials,

        content: [
            {
                title: "Basic Player Controls",
                blurb: "Get a move on",
                image: images.tutorials.movement[4],
                pageContent: [
                    [
                        {
                            boxIcons: ["W"],
                            text: "Move forward",
                        },
                        {
                            boxIcons: ["A"],
                            text: "Move left",
                        },
                        {
                            boxIcons: ["S"],
                            text: "Move backward",
                        },
                        {
                            boxIcons: ["D"],
                            text: "Move right",
                        },
                    ],
                    {
                        text: "",
                    },
                    [

                        {
                            boxIcons: [images.input.keyboard.shift],
                            text: "Sprint (uses energy)",
                        },
                        {
                            boxIcons: [images.input.keyboard.space],
                            text: "Jump (hold to use jetpack, if available)",
                        },
                        {
                            boxIcons: ["F"],
                            text: "Interact (when prompted)",
                        },
                    ]
                ],
            },
            {
                title: "Vac-ing and Shooting",
                blurb: "Your first step to becoming a master rancher.",
                image: images.tutorials.vac[2],
                pageContent: [
                    [
                        {
                            bareIcons: [images.input.mouse.mouse2],
                            text: "Vacuum slimes or other objects",
                        },
                    ],
                    {
                        text: "Larger objects will be held at the nozzle and can be dropped by releasing the vac or fired by pressing shoot.",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            bareIcons: [images.input.mouse.mouse1],
                            text: "Shoot slime or other object from the selected vac tank Shoot slime or other object from the selected vac tank Shoot slime or other object from the selected vac tank ",
                        },
                    ],
                    {
                        text: "Hold the shoot key to continuously shoot.",
                    },
                ],
            },
            {
                title: "Vac Tanks",
                blurb: "Nanotechnology makes everything possible, and everything smaller.",
                image: images.blueprints.upgrades.storageUnit,
                pageContent: [
                    {
                        text: "Vac tanks allow you to easily collect, sort, and transport slimes and other resources.",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            boxIcons: ["1", "2", "3", "4", "5", "6"],
                            text: "Select vac tank"
                        },
                        {
                            bareIcons: [images.input.mouse.mouse3],
                            text: "Cycle through vac tanks"
                        },
                    ],
                ],
            },
            {
                title: "Health and Energy",
                blurb: "Everything has a cost.",
                image: images.tutorials.death[3],
                pageContent: [
                    {
                        text: "Monitor your health and energy levels with the Health Meter and Energy Meter on the lower left of the screen.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "Health will be automatically restored after not taking damage for a period of time.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "Energy will be automatically restored after not using energy for a period of time.",
                    },
                ],
            },
            {
                title: "Corralling Slimes",
                blurb: "You can contain them, but you can't stop the wiggle",
                image: images.tutorials.shooting[2],
                pageContent: [
                    {
                        text: "Shoot slimes through corral walls to contain them and make them easier to manage. But remember: hungry slimes will always find a way out of their corrals!",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            bareIcons: [images.input.mouse.mouse3],
                            text: "Select vac tank",
                        },
                        {
                            bareIcons: [images.input.mouse.mouse1],
                            text: "Shoot",
                        },
                    ],
                ],
            },
            {
                title: "Feeding Slimes",
                blurb: "A well-fed slime makes for a happy (and wealthy) rancher",
                image: images.tutorials.feed[1],
                pageContent: [
                    {
                        text: "Each slime has a particular diet. Most prefer either fruit, veggies, or meat. Whe na slime eats, it produces a plort.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "However, most slimes have a favorite food. When a slime eats its favorite food it produces double the plorts!",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            bareIcons: [images.input.mouse.mouse3],
                            text: "Select vac tank",
                        },
                        {
                            bareIcons: [images.input.mouse.mouse1],
                            text: "Shoot",
                        },
                    ],
                ],
            },
            {
                title: "Plorts and the Plort Market",
                blurb: "SELL! SELL! SELL!",
                image: images.tutorials.plorts[1],
                pageContent: [
                    {
                        text: "Vac up plorts and shoot them into the Plort Market to get newbucks. Plort values fluctuate daily dependng on the types of plorts you've recently sold.",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            bareIcons: [images.input.mouse.mouse3],
                            text: "Select vac tank",
                        },
                        {
                            bareIcons: [images.input.mouse.mouse1],
                            text: "Shoot",
                        },
                    ],
                ],
            },
            {
                title: "Slime Science Basics",
                blurb: "Definitely weird.",
                image: images.tutorials.scienceBarn[1],
                pageContent: [
                    {
                        text: "Slime Science allows you to use plorts and other resources to craft vac upgrades and make fantastic gadgets that you can install all over the world.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "Slime Science basics:\n- Shoot plorts and resources into the refinery (cannot be withdrawn once deposited)\n- Find vac upgrade components and gadget blueprints in treasure pods\n- Use the fabricator to create vac upgrades and gadgets\n- Place gadgets in Gadget Mode",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            boxIcons: ["T"],
                            text: "Enter Gadget Mode",
                        },
                        {
                            boxIcons: ["Q", "E"],
                            text: "Rotate gadget (when in gadget mode)",
                        },
                    ],
                    {
                        text: "",
                    },
                    {
                        text: "Visit the Slime Science section of the Slimepedia for more details on Slime Science.",
                    },
                ],
            },
            {
                title: "Gadget Mode",
                blurb: "A more scientific perspective.",
                image: images.tutorials.gadgetPlacement[1],
                pageContent: [
                    {
                        text: "In Gadget Mode you can place gadgets nearly anywhere in the world.",
                    },
                    {
                        text: "",
                    },
                    [
                        {
                            boxIcons: ["T"],
                            text: "Toggle Gadget Mode",
                        },
                        {
                            boxIcons: ["G"],
                            text: "Open Gadget Inventory",
                        },
                        {
                            boxIcons: ["Q"],
                            text: "Rotate gadget clockwise",
                        },
                        {
                            boxIcons: ["E"],
                            text: "Rotate gadget counter-clockwise",
                        },
                    ],
                    {
                        text: "",
                    },
                    {
                        text: "Note: Your vacpack cannot vac or shoot while in Gadget Mode",
                    },
                ],
            },
            {
                title: "Quantum Drones",
                blurb: "It's not rocket science, it's quantum science. Which is way weirder!",
                image: images.tutorials.drone[1],
                pageContent: [
                    {
                        sectionTitle: "Placing Drones",
                        text: "Enter Gadget Mode to place Drone Station gadgets. When you place a Drone Station, you also place the drone that comes with it, as they will be docked to their drone stations.",
                    },
                    {
                        sectionTitle: "Drone Modes",
                        text: "<b>Rancher Drones</b> - Place Drone Station gadgets in the Conservatory or its expansions to have the drones act in Rancher Mode. You can only have one Quantum Drone in each expansion.\n<b>Explorer Drones</b> - Place Drone Station gadgets outside of the Conservatory to have the drones act in Explorer mode. Drones in Explorer mode gather plorts and resources which are sent to the Quantum Cloud.",
                    },
                    {
                        sectionTitle: "Drone Programming",
                        text: "Program your Quantum Drone to do tasks by accessing the menu from its Drone Station gadget. You can change its <b>Target</b> (what it's collecting), <b>Source</b> (where it's looking), and <b>Destination</b> (where it takes the things it collects). Once you're done, <b>Activate Your Drone</b> to get it started on its tasks.",
                    },
                    {
                        sectionTitle: "Fueling Drones",
                        text: "Drones lose energy over time. Refuel by shooting plorts into a <b>Drone Station</b>—whether it's docked or not! You can even orvercharge it past 100% to refuel less often.",
                    },
                    {
                        sectionTitle: "Quantum Cloud",
                        text: "Access any Drone Station gadget to view resources your Explorer Drones have gathered. You can withdraw these resources, send them to the Market, or send them to the Refinery.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "<b>Withdraw</b> - Take out a number of resources, which are then deposited to the ground, ready for you to vac them up.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "<b>Send to Market</b> - Directly send a number of resources to the Market in exchange for Newbucks.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "<b>Send to Refinery</b> - Transfer a number of resources directly to the Refinery.",
                    },
                    {
                        text: "",
                    },
                    {
                        text: "You can also access a version of the Quantum Cloud from the <b>Drone Menu on the Map</b>, but you can only view your resources from there. You cannot Withdraw, Send to the Market, or Send to Refinery from anywhere except a Drone Station.",
                    },
                ],
            },
        ],
    };
    return data;
}
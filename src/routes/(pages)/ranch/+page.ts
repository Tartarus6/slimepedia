import type { PageLoad } from './$types';
import { images } from '$lib/scripts/assets';
import type { FullPageData } from '$lib';

//TODO: set page icon to correct one
export const load: PageLoad = ({ params }) => {
    let data: FullPageData = {
        title: `RANCH`,
        icon: images.pedia.home.ranch,

        content: [
            {
                name: 'corral',
                image: images.ranch.corral,
                blurb: 'A happy slime makes for a happy rancher.',
                info: "A corral is used to keep slimes on a ranch. The open-air corrals are designed for maximum slime satisfaction, with the rich soil of the Range beneath them and its expansive sky above them. Slimes will remain perfectly happy within corrals as long as they are fed regularly.\n\n*Remember: You can shoot things THROUGH a corral barrier. Handy!*",
            },
            {
                name: 'coop',
                image: images.ranch.coop,
                blurb: 'Keeping chickens in their place prevents the uprising.',
                info: "Though many ranchers simply let their chickens roam the ranch, a coop is the tool of a serious poultry producer. Coops keep hens and roostros close, allowing for maximum egg-laying potential. Just remember to avoid crowding the coop: chickens won't reproduce when in close proximity to more than a dozen other hens or roostros. But give them room and watch the love bloom.",
            },
            {
                name: 'garden',
                image: images.ranch.garden,
                blurb: 'Nothing beats the taste of food grown in your own backyard.',
                info: "The gardens used by ranchers use advanced technology to rapidly grow clones of fruits and veggies in a natural, though greatly sped up, way. By placing a sample into the replicator, the garden's soil is instantly populated by a fruit tree or veggie patch and will keep producing harvests until removed.",
            },
            {
                name: 'silo',
                image: images.ranch.silo,
                blurb: "You can't take it with you when you go, so put it in storage.",
                info: "A silo lets a rancher neatly store plorts and resources in a handy, compact unit. Simply shoot into an available silo port to fill it, or vac it to retrieve items within. Remember, a clean ranch is a happy ranch!",
            },
            {
                name: 'incinerator',
                image: images.ranch.incinerator,
                blurb: "Don't need it? Burn it!",
                info: "An Incinerator will instantly burn anything it touches into ash, and then burn that ash into nothing. It's an excellent solution for eliminating a tarr outbreak or for simply disposing of unwanted slimes if you're a terrible, heartless monster.",
            },
            {
                name: 'pond',
                image: images.ranch.pond,
                blurb: 'Water you going to do with this?',
                info: "A pond gives you a source of fresh water on the ranch that you can use for watering gardens, calming slimes in a corral, defeating tarr, or giving your puddle slimes a place to hang out and feed.",
            },
            {
                name: 'the archway',
                image: images.ranch.archway,
                blurb: 'An expansion to the conservatory set amongst ancient ruins and fields of rainbow grass.',
                info: "The Archway is an expansion to the conservatory set amongst grass-covered ruins from a time long ago. Pogofruits and carrots grow between the cracks in the stone, making this a great spot for slimes that enjoy some fruits and veggies in their diet.",
            },
            {
                name: 'the den',
                image: images.ranch.den,
                blurb: 'This dark, damp, mushroom-covered expansion to the conservatory is a refuge from the sun for slimes and ranchers alike.',
                info: "Hidden within a large rounded hill resides the Den, an expansion to the conservatory. This dark, damp cave is a refuge from the sun for slimes and ranches alike. Phosphor slimes in particular enjoy the mushroom-lined walls, while Batty slimes love to stretch their wings in their natural habitat.",
            },
            {
                name: 'the gully',
                image: images.ranch.gully,
                blurb: 'This expansion to the Conservatory is surrounded by tall rock formations and covered in amber grass.',
                info: "The Gully is an expansion to the Conservatory nestled between ancient, towering rock formations. While slimes enjoy frolicking in the amber fields of grass, Hen Hens nest in the cliffs, making this a meat-lover's paradise.",
            },
            {
                name: 'the tidepools',
                image: images.ranch.tidepools,
                blurb: 'A costal sanctuary for coral lifeforms and seaweed, this expansion to the conservatory is guaranteed to fill your shoes with sand.',
                info: "Perched on a low-lying peninsula, the Tidepools is like a vacation: a sandy getaway from a rancher's busy life in the conservatory. But slimes and other creatures like this place, too. Tall coral reef formations provide some respite from the sun, while shallow pools of water create an oasis for puddle slimes and other aquatic life.",
            },
            {
                name: 'the digsite',
                image: images.ranch.digSite,
                blurb: 'A curious archaeological site with plenty of room for a creative rancher to clean up and make it their own.',
                info: "The Digsite is an expansion that revealed itself when a wall collapsed inside the Den, revealing an abandoned archaeological site. It's not clear what the excavator was searching for on the site's windswept cliffs, or if they ever discovered it.",
            },
            {
                name: 'plort market',
                image: images.ranch.plortMarket,
                blurb: 'Feed slimes. Collect plorts. Get paid.',
                info: "The plort market is a network of buyers and sellers of plorts across the galaxy. Ranchers use plort market machines on their ranch to send plorts to the market for sale. Ranchers are paid immediately when depositing plorts at the plort's current market value.\n\nPlort market values fluctuate and some of the more savvy ranchers will hoard certain plorts for days when sale prices are high, especially rare plorts.",
            },
        ],
    };
    return data
}
import { images } from '$lib/scripts/assets';
import type { ItemsData } from '.';

//todo: check spelling of pommegranite
//todo: check for missing text
//todo: fix missing text in sea hen about
//todo: add usntable resorces icon
//todo: add sun sap

export const resources: ItemsData = [
	{
		name: 'carrot',
		image: images.resources.veggies.carrot,
		blurb: "Next to a vacpack, it's a rancher's best friend.",
		facts: [
			{
				value: 'Veggie',
				icon: images.category.veggie
			},
			{
				value: 'None',
				icon: images.miscIcons.unavailable
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"The humble carrot was brought to the Far, Far Range because they're easy to grow and nutritious. Most ranchers swear by them as they're a handy portable snack, promote good night vision, and when juiced are only second to coffee as the perfect morning beverage."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a carrot into a garden's depositor and you'll have a large carrot crop of your own."
			}
		]
	},
	{
		name: 'water lettuce',
		image: images.resources.veggies.lettuce,
		blurb: 'The only glass of water with your daily dose of fiber!',
		facts: [
			{
				value: 'Veggie',
				icon: images.category.veggie
			},
			{
				value: 'Cotton Slime',
				icon: images.slimes.cotton
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Like a desert bloom or a deep sea pearl, water lettuce is a small miracle. The dry season can be difficult for wildlife on the Far, Far Range. But through the humble water lettuce, nature has found a way to provide.\n\nThe water stored inside the plant prevents its leaves from wilting under the sun's rays, and in turn the crisp leaves keep the water cool and protected, perfect for a thirsty critter in search of relief from the heat."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a water lettuce into a garden's depositor and you'll have a large water lettuce crop of your very own."
			}
		]
	},
	{
		name: 'heart beet',
		image: images.resources.veggies.beet,
		blurb: 'If you listen to it closely, you can faintly hear a veggie.',
		facts: [
			{
				value: 'Veggie',
				icon: images.category.veggie
			},
			{
				value: 'Rock Slime',
				icon: images.slimes.rock
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Heart beets get their name from their deep, red color and heart-like shape. Heart beets are also unusually juicy for a beet, making it the only veggie that's not for the squeamish in the kitchen."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a heart beet into a garden's depositor and you'll have a large heart beet crop of your very own."
			}
		]
	},
	{
		name: 'odd onion',
		image: images.resources.veggies.onion,
		blurb: "I wouldn't trust this onion, even less so than a normal onion.",
		facts: [
			{
				value: 'Veggie',
				icon: images.category.veggie
			},
			{
				value: 'Crystal Slime',
				icon: images.slimes.crystal
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Odd Onions can only grow in the Indigo Quarry; however, you'll never encounter an Odd Onion patch. Instead, Odd Onions can be found randomly in other veggie patches. As the saying goes 'Forage into the Indigo Quarry and you'll always find the Odd Onion in your haul."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit an Odd Onion into a garden's depositor and strangely, carrots will begin to grow. However, there is a good chance you'll get some odd onions in your crop as well."
			}
		]
	},
	{
		name: 'turbo tater',
		image: images.resources.veggies.tater,
		blurb: "Who knew spuds could break the sound barrier?",
		facts: [
			{
				value: 'Veggie',
				icon: images.category.veggie
			},
			{
				value: 'Hyper Slime',
				icon: images.slimes.hyper
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Turbo taters might seem unassuming at first, just another root veggie on the range. However, careful study reveals that, in fact, these spuds are constantly moving so fast that they only appear stationary. What effect might this have when consumed?"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a turbo tater into a garden's depositor and you'll have a large turbo tater crop of your very own."
			}
		]
	},
	{
		name: 'pogofruit',
		image: images.resources.fruits.pogo,
		blurb: 'The most common fruit found on the Range, and some say, the most delicious.',
		facts: [
			{
				value: 'Fruit',
				icon: images.category.fruit
			},
			{
				value: 'None',
				icon: images.miscIcons.unavailable
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Pogofruit are a common sight almost anywhere on the Far, Far Range. Tasting a bit like a peach, they're most notable for having their trademark spots both on and under the skin."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a pogofruit into a garden's depositor and you'll grow a large pogofruit tree of your very own."
			}
		]
	},
	{
		name: 'mint mango',
		image: images.resources.fruits.mango,
		blurb: 'Intensely sweet with a cool, minty finish.',
		facts: [
			{
				value: 'Fruit',
				icon: images.category.fruit
			},
			{
				value: 'Honey Slime',
				icon: images.slimes.honey
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"The mint mango is perhaps the sweetest fruit ever discovered. Its appearance is that of a mango, with a thicker, syrup-like juice, and a bright, minty aftertaste. It's no wonder Honey Slimes seek them out or that they have such amazingly fresh breath."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a mint mango into a garden's depositor, and you'll grow a large mint mango tree of your very own."
			}
		]
	},
	{
		name: 'cuberry',
		image: images.resources.fruits.cuberry,
		blurb: 'Delicate, sweet, and they never roll off the table.',
		facts: [
			{
				value: 'Fruit',
				icon: images.category.fruit
			},
			{
				value: 'Phosphor Slime',
				icon: images.slimes.phosphor
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Due to their sweet taste and curious shape, cuberries were quick to become a favorite amongst the first ranchers on the range. They are often used in cakes and pies when celebrating special occasions, like birthdays or Plortapalooza.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a cuberry into a garden's depositor and you'll grow a large cuberry tree of your own."
			}
		]
	},
	{
		name: 'pommegranite',
		image: images.resources.fruits.pommegranite,
		blurb: 'Rich in minerals!',
		facts: [
			{
				value: 'Fruit',
				icon: images.category.fruit
			},
			{
				value: 'Batty Slime',
				icon: images.slimes.batty
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"The pomegranite is as mysterious as it is ancient. A fruit that grows only in the dark caves beneath the earth, it grows without sunlight, without warmth. It should not be, and yet, it is. A living paradox? Or a symbol of nature's resilience, of the ability for life to thrive even in the unlikeliest of spaces? Pretty deep stuff."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a pomegranite into a garden's depositor and you'll grow a large pomegranite tree of your own."
			}
		]
	},
	{
		name: 'prickle pear',
		image: images.resources.fruits.pear,
		blurb: 'This is a fruit that knows how to fight back.',
		facts: [
			{
				value: 'Fruit',
				icon: images.category.fruit
			},
			{
				value: 'Dervish Slime',
				icon: images.slimes.dervish
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Prickle pears are a fruit that know how to put up a fight. With a thick, leathery skin and covered sharp barbs, they're an 'acquired taste' to be sure. But those that put forth the (cautious) effort will find one of the sweetest fruits in the known universe hiding within."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a prickle pear into a garden's depositor and you'll grow a large prickle pear tree of your very own. "
			}
		]
	},
	{
		name: 'polaricherry',
		image: images.resources.fruits.polaricherry,
		blurb: 'Sharply sour or sickeningly sweet.',
		facts: [
			{
				value: 'Fruit',
				icon: images.category.fruit
			},
			{
				value: 'Twin Slime',
				icon: images.slimes.twin
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"The polaricherry is somehow both the most sweet and the most sour fruit on Rainbow Island, depending on which side you're looking at when you take a bite. Is their flavor profile another strange effect of the labyrinth, or a natural variation?"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a polaricherry into a garden's depositor and you'll grow a large polaricherry tree of your own."
			}
		]
	},
	{
		name: 'chickadoo',
		image: images.resources.birds.chick,
		blurb: "So little and soft you'd think they're filled with marshmallow.",
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Chickadoos are baby chickens that will eventually grow into a hen hen or more rarely, a roostro.\n\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep chickadoos in a safe place and they'll eventually grow into a Hen Hen or Roostro."
			}
		]
	},
	{
		name: 'henhen',
		image: images.resources.birds.hen,
		blurb: 'A hearty chicken bred to be twice as tasty as its cousin on Earth.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'None',
				icon: images.miscIcons.unavailable
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Hen Hens are a special breed of chicken bred to survive the climate of the Far, Far Range. While appearing more or less like a big chicken, these burly birds are much more adept at fending for themselves, making them ideal for ranchers who might otherwise be distracted by a few hundred hungry slimes.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Hen Hens in close proximity to roostros will periodically lay eggs that produce chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.'
			}
		]
	},
	{
		name: 'roostro',
		image: images.resources.birds.rooster,
		blurb: "Struts his stuff like he's king of the coop.",
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Hunter Slime',
				icon: images.slimes.hunter
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Roostros are the alpha birds on the Far, Far Range and half of the equation required to breed chickens on the ranch. However, roostros are rarer than any hen making them a great find any time one is discovered.\n\nTo acquire a roostro, either find one out on the range or breed them on the ranch. Any type of chickadoo has a small chance of growing into a roostro. Some ranchers believe that these odds increase if you greet the Rooster King's crow at sunrise with an enthusiastic 'good morning!'"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'All hens in close proximity to roostros will periodically lay eggs that produce chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.'
			}
		]
	},
	{
		name: 'sea chick',
		image: images.resources.birds.chickSea,
		blurb: 'Equal parts salt and fluff.',
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Chickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones.\n\nSea chickadoos are baby chickens that will eventually grow into a sea hen or more rarely, a roostro. "
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep sea chickadoos in a safe place and they'll eventually grow into a sea hen or roostro."
			}
		]
	},
	{
		name: 'sea hen',
		image: images.resources.birds.henSea,
		blurb: 'Loveable trash. Like your favorite bad movie.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Angler Slime',
				icon: images.slimes.angler
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Old sailors say that sea hens are actually demons in disguise, and that their vacant expressions are actually a diabolically calculated misdirect to hide evil intent. Plotting, waiting for their moment... to strike.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Sea hens in close proximity to roostros will periodically lay eggs that produce sea chickadoos. However, keeping too many chickens in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance will monitor growth rates in their coops and reduce density when growth begins to slow.'
			}
		]
	},
	{
		name: 'stony chick',
		image: images.resources.birds.chickStony,
		blurb: 'This little chick had quite a hard upbringing.',
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Stony chickadoos are baby chickens that will eventually grow into a stony hen or more rarely, a roostro.\n\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones. "
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep Stony Chickadoos in a safe place and they'll eventually grow into a Stony Hen or a Roostro."
			}
		]
	},
	{
		name: 'stony hen',
		image: images.resources.birds.henStony,
		blurb: 'Has a rock solid conviction... in chicken stuff.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Tabby Slime',
				icon: images.slimes.tabby
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Stony hens are thought to have evolved from hen hens who once trekked deep into the mountains of the Far, Far Range. Perhaps these birds were seeking a clarity of mind that one can truly obtain through meditation amongst these lofty, barren crags. But most likely, they were just stupid and got lost.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Stony hens in close proximity to roostros will periodically lay eggs that produce stony chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.'
			}
		]
	},
	{
		name: 'briar chick',
		image: images.resources.birds.chickBriar,
		blurb: "A breed of chick that's totally bush-league.",
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Briar chickadoos are baby chickens that will eventually grow into a briar hen or more rarely, a roostro.\n\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones. "
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep Briar Chickadoos in a safe place and they'll eventually grow into a Briar Hen or Roostro."
			}
		]
	},
	{
		name: 'briar hen',
		image: images.resources.birds.henBriar,
		blurb: 'A real wild bird that loves to ramble in the bramble.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Boom Slime',
				icon: images.slimes.boom
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Briar hens are a chicken variant born from the wild thickets of the Far, Far Range. They were first discovered long ago by an explorer who noted that they seemed to have a complex tribal structure, and a fascinating series of chicken customs. He even may have joined the briar tribe as an honorary chicken himself! His records end there however, and we know nothing else about him or his findings. Oh, but his name was Carl. We know that.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Briar hens in close proximity to roostros will periodically lay eggs that produce briar chickadoos. However, keeping too many hens or roostros in close proximity makes them anxious and egg production will come to halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.'
			}
		]
	},
	{
		name: 'thundercluck chick',
		image: images.resources.birds.chickThunder,
		blurb: 'The king of chickens has to start somewhere.',
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Thunder chickadoos are baby chickens that will eventually grow into a thundercluck or more rarely, a roostro.\n\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones. "
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep thunder chickadoos in a safe place and they'll eventually grow into a thundercluck or Roostro."
			}
		]
	},
	{
		name: 'thundercluck hen',
		image: images.resources.birds.henThunder,
		blurb: "Your stony hen's great great great great great great great... great grandma.",
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Saber Slime',
				icon: images.slimes.saber
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Thought to be extinct for over a billion years, thunderclucks are a variety of prehistoric hen that ruled the roost during the Jellasic Period and absolute proof that dinosaurs were basically just giant chickens. Historians had long believed they were wiped out from a giant meteor, but seeing them now it's clear that the roostros were probably just super terrified of them and it just sort of took care of itself."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Thunderclucks in close proximity to roostros will periodically lay eggs that produce thunder chickadoos. However, keeping too many chickens in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance will monitor growth rates in their coops and reduce density when growth begins to slow.'
			}
		]
	},
	{
		name: 'painted chick',
		image: images.resources.birds.chickPainted,
		blurb: "A tiny chick that's hiding a bounty of colorful potential.",
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Painted chickadoos are baby chickens that will eventually grow into a painted hen or more rarely, a roostro.\n\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep Painted chickadoos in a safe place and they'll eventually grow into a Painted Hen or a Roostro."
			}
		]
	},
	{
		name: 'painted hen',
		image: images.resources.birds.henPainted,
		blurb: "Some believe it's what lies at the end of a rainbow. Totally disappointing.",
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Tangle Slime',
				icon: images.slimes.tangle
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Painted Hens are the colorful chicken variants found in Starlight Strand. It is unknown what caused their rainbow-like plumage to occur. One theory suggests their colors are a biological mimicry of the prismatic glass found within the desert, while another theory states that their wild colors made them the dominant mates of Cluck Kingdoms and thus were banished to the desert by a coalition of jealous chickens who couldn't compete with these fashionable fouls.\n\nBut the latter theory is only believed by one strange person, so we're not sure why it would have been included here."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Painted Hens in close proximity to roostros will periodically lay eggs that produce painted chickadoos. However, keeping too many hens or roostros in close proximity make them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance always keep their coops from exceeding 12 grown chickens.'
			}
		]
	},
	{
		name: 'candied chick',
		image: images.resources.birds.chickCandied,
		blurb: 'The sweetest chicks grow into the toughest jawbreakers.',
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Candied chickadoos are baby chickens that will eventually grow into a candied hen or more rarely, a roostro.\n\nChickadoos of all varieties will never be eaten by slimes. Some believe this is because slimes are too kind-hearted to do such a thing. Others believe it's because chickadoos don't yet have enough meat on their bones."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Keep candied chickadoos in a safe place and they'll eventually grow into a candied hen or roostro."
			}
		]
	},
	{
		name: 'candied hen',
		image: images.resources.birds.henCandied,
		blurb: 'Try to catch them before the sugar rush.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'Sloomber Slime',
				icon: images.slimes.sloomber
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Candied hens are a mysterious breed of chicken found in the Grey Labyrinth. Their unusual sweetness is almost too perfect, as if pulled from the dreams of a hungry slime. How did such a hen come to be in the labyrinth?'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Candied hens in close proximity to roostros will periodically lay eggs that produce candied chickadoos. However, keeping too many chickens in close proximity makes them anxious and egg production will come to a halt. Savvy ranchers with an understanding of the complex nature of chicken romance will monitor growth rates in their coops and reduce density when growth begins to slow.'
			}
		]
	},
	{
		name: 'elder hen',
		image: images.resources.birds.henElder,
		blurb: 'An old bird whose egg-laying days are over, easy.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'None',
				icon: images.miscIcons.unavailable
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Elder hens have lived a full-feathered life. They've met the roostro of their dreams, seen their little chickadoos grow up, and are ready to start the next chapter of their chicken lives. In all likelihood this will include getting the names of countless books, movies and actors wrong. But don't blame them for that. They're chickens for goodness sake."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'An elder hen can no longer lay eggs and serves no other purpose than becoming a slightly tough chicken dinner.'
			}
		]
	},
	{
		name: 'elder roostro',
		image: images.resources.birds.roosterElder,
		blurb: 'Shakes his tail feathers and no one cares.',
		facts: [
			{
				value: 'Meat',
				icon: images.category.meat
			},
			{
				value: 'None',
				icon: images.miscIcons.unavailable
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Elder roostros are the senior-aged roostros who have retired from the otherwise bustling life of their younger counterparts. 'Young roostros crow too much, they move too fast, and frankly have no respect for their elders,' an elder roostro might say of youths; as they make a gross, smacking sound with their lips. Though this is of course impossible, as roostros do not have lips."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'An elder roostro can no longer sire chickadoos and serves no other purpose than becoming a slightly tough chicken dinner.'
			}
		]
	},
	{
		name: 'moondew nectar',
		image: images.category.nectar,
		blurb: 'Very sweet but VERY sticky. Handle with care.',
		facts: [
			{
				value: 'Nectar',
				icon: images.category.nectar
			},
			{
				value: 'FLutter Slime',
				icon: images.slimes.flutter
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"This sweet syrup comes from Rainbow Island's most unusual plant, the moondew flower, which only blooms at night. Initially scientists thought the buds of this flower never opened. But that was just because they tended to call it quits around 5, maybe 4:45 if they were trying to beat traffic.\n\nThat is, until that fateful night when one Dr. Arnold Penobscott forgot about Daylight Savings Time and wound up working an hour late. As he went to grab his jacket he was surprised to see the moondew flower, in full bloom. That's just how discoveries are made sometimes. "
			}
		]
	},
	{
		name: 'primordy oil',
		image: images.resources.craft.primordyOil,
		blurb: 'This stuff is pre-pre-prehistoric.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Found deep below the surface of the Rainbow Island's quarries and magma fields, primordy oil is an ancient substance containing a wide array of organic compounds, making it perfect as a base for many Slime Science creations."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit primody oil into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets. "
			}
		]
	},
	{
		name: 'deep brine',
		image: images.resources.craft.deepBrine,
		blurb: 'Salt of the earth kind of stuff.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Not safe for drinking, deep brine is thought to be water from the Slime Sea that has been filtered by the subterranean coral below Rainbow Island. It is significantly denser than fresh water and loaded with salt.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit deep brine into the Lab's refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'silky sand',
		image: images.resources.craft.silkySand,
		blurb: "The finest, smoothest sand you'll ever see. Rubbish for sand castles.",
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Silky Sand is what happens when the pressure of boring, regular sand, or also boring, regular rocks presses down on sand for centuries, resulting in a sand so smooth and pure it almost feels like water. These qualities make it very useful in gadget fabrication.\n\nThough the glass desert is covered with sand, silky sand found deep below the surface is so smooth and pure it almost feels like water. These qualities make it very useful in gadget fabrication. '
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit silky sand into The Conservatory's refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'lava dust',
		image: images.resources.craft.lavaDust,
		blurb: "A survey on the state of this matter answered 'undecided'.",
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Neither a solid or a liquid, lava dust seems to be something in between, having the characteristics of both. It is believed to be a mixture of magma and slime, though this has never been proven. And despite its name, lava dust is only warm to the touch.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit lava dust into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'buzz wax',
		image: images.resources.craft.buzzWax,
		blurb: 'Can be used to make a great candle if you enjoy the smell of bee abdominal glands.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Just like bees on Earth, bees on the Far, Far Range produce a waxy substance that they use to form their hives. Buzz wax is still malleable deposits of unused wax found in apiaries. It has many practical uses ranging from building materials to medicines. You can also chew it as the worst gum in the world.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit buzz wax into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'wild honey',
		image: images.resources.craft.wildHoney,
		blurb: 'Tastes great in tea or in shameful handfuls when no one is looking.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'All the rich pollens and sweet nectars found in the diverse biomes of the Far, Far Range combine in a beautiful alchemy to form some of the most delicious honey in the galaxy.\n\nWild honey is a staple of rancher life; a dollop of it makes just about any food taste better, and it provides a natural boost of energy to get through a tough day of wrangling slimes. '
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit wild honey into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'jellystone',
		image: images.resources.craft.jellyStone,
		blurb: "It's both solid and squishy at the same time.",
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Jellystone is a semi-hardened mixture of minerals and slime, possibly resulting from plorts sinking back to into the earth below. Because of its solid texture, it's a favorite stone for sculptors."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit jellystone into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'radiant ore',
		image: images.resources.craft.radiantOre,
		blurb: 'The awesome power of a rainbow and the sleek aesthetic of a lump of mineral.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Of all of Rainbow Island's many oddities, radiant ore may be the most remarkable. Under a laser thermometer, its temperature reads over 100 degrees celsius, but it is cool to the touch and becomes an icy liquid when melted.\n\nThe mechanics behind its shifting array of pastel colors is easily understood once observed under a microscope: it's made up of infinitesimal deposits of pure rainbow.\n\nThen there's the way it gently vibrates, humming, as if radiating some strange cosmic energy. Spooky. "
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit radiant ore into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'strange diamond',
		image: images.resources.craft.strangeDiamond,
		blurb: 'Very strange, but even more valuable.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Even in the dark, these diamonds seem to shine as if light is passing through them. Strange diamonds are highly valued for their use in a variety of warp tech processes. Being almost impossibly dense and intricate in their composition, a strange diamond can reflect light within itself so profoundly that it actually bends time.\n\nStrange diamonds are most often found in caves and other dark places, as if the natural world wants to keep their brilliance all to itself. '
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit strange diamonds into the Lab's refinery where it can be used for crafting Slime Science gadgets."
			}
		]
	},
	{
		name: 'slime fossil',
		image: images.resources.craft.slimeFossil,
		blurb: 'If history could smile, it would look like this.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Prized for the ancient minerals they contain, slime fossils are like nature capturing a moment in time. Specifically, that moment seems to be when a great avalanche or mudslide occurred and a slime was totally cool with it.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a slime fossil into the Lab's Refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'perfect snowflake',
		image: images.resources.craft.perfectSnowflake,
		blurb: 'They made all other snowflakes feel jealous.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Deep underground pressure sometimes forces droplets from the Slime Sea into freezing climates, turning them into snowflakes with an unusually consistent and beautiful quality to them. Slime scientists theorize that this is a natural side effect of the Slime Sea being made up of a perfect balance of all slimes.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a perfect snowflake into the Lab's Refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'sun sap',
		image: images.resources.craft.sunSap,
		blurb: 'So beautiful that staring at it too long will hurt your eyes.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content: "Despite its name, Sun sap is actually made of hardened amber whose strikingly golden hue is sure to brighten a rancher's day. Some say if you find one with a bug encased inside, it's even more valuable, but come on, it's a bug. What could you possibly do with that?"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content: "Deposit sun sap into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'lightning mote',
		image: images.resources.craft.lightningMote,
		blurb: 'A scintillating speck of storm.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Lightning Motes are left behind after especially dazzling lightning strikes. Though crackling with residual energy, they are in fact safe for collection and handling.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a lightning mote into the Lab's Refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'storm glass',
		image: images.resources.craft.stormGlass,
		blurb: 'When the sky welds the earth.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Storm Glass is formed when lightning strikes the ground and melts rock in an instant. Not only does storm glass make a surprisingly durable building material, but it adds a heavenly pop of color!'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit storm glass into the Lab's Refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'drift crystal',
		image: images.resources.craft.driftCrystal,
		blurb: 'Drifting away on the wind.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Drift crystals form inside cyclones as earth and debris are whirled together at incredible speeds. Once ejected from the turbulent winds, drift crystals float gently to the ground, and are likely very dizzy.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a drift crystal into the Lab's Refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'magma comb',
		image: images.resources.craft.magmaComb,
		blurb: 'A new level of spicy honey.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Although the comb appears quite delicate, the slowly oozing lava suggests otherwise. Or is that honey? Either way it's probably not safe for consumption."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a magma comb into the Lab's Refinery where it can be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'aqua glass',
		image: images.resources.craft.aquaGlass,
		blurb: 'A different kind of hard water.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"The swirling colors suggest an orb of water, but it's solid all the way through. What could make water behave like this?"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit an aqua glass into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets. "
			}
		]
	},
	{
		name: 'dream bubble',
		image: images.resources.craft.dreamBubble,
		blurb: 'Dream a little dream.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'These mysterious little bubbles appear to form directly from the ether of Dream Land. Are they the wandering dreams of slimes, or something else?'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a dream bubble into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets. "
			}
		]
	},
	{
		name: 'tin petal',
		image: images.resources.craft.tinPetal,
		blurb: 'Nature is metal.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'The delicate details of these leaves are surely too fine to have been formed from metal, but they are clearly tin. Could it be these were once organic petals?'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a tin petal into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'black indigonium',
		image: images.resources.craft.blackIndigonium,
		blurb: 'Dark as midnight.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Almost no light reflects from this black metal, despite the prismatic environment in which it's found. Another mystery of the Grey Labyrinth, or something darker?"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit a black indigonium into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets."
			}
		]
	},
	{
		name: 'royal jelly',
		image: images.resources.craft.royalJelly,
		blurb: 'The king of all jellies... that is, until you meet the queen.',
		facts: [
			{
				value: 'Slime Science Material',
				icon: images.pedia.categoryScience
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"The royal jelly found in the hives of the Grey Labyrinth is as special as it is unnaturally sweet compared to other varieties. It's believed that this is a result of bees collecting small deposits of slime from honey slimes and working it into their royal jelly mixture. If a rancher is lucky enough to acquire some, they'll find its unique properties are very valuable in certain Slime Science endeavors."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Deposit royal jelly into the Lab's Refinery where it can then be used for crafting Vac Upgrades or Slime Science gadgets. "
			}
		]
	},
	{
		name: 'water',
		image: images.miscIcons.water,
		blurb: 'Give your slimes a bath, they really need it.',
		facts: [
			{
				value: 'Other',
				icon: images.pedia.categoryOther,
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Water can be used to speed up garden growth, calm down slimes, and disperse pesky Tarr before they gobble up your slimes. Water can even wash away Crystal slime's crystal formations or neutralize Boom slimes before they explode. Water is a truly wonderous tool for any rancher, but remember where you found it: water sources are few and far between."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'Water is an extremely useful resource found across the Far, Far Range. Unlike water in the slime sea, water from pools and waterfalls can be suctioned into the vac pack and stored using the handy Water Tank upgrade. Once stored, it can be shot out of the vac at the world around you, creating numerous beneficial effects.'
			}
		]
	},
	{
		name: 'snowball',
		image: images.resources.snowball,
		blurb: 'Slime-approved way to have fun and chill out.',
		facts: [
			{
				value: 'Other',
				icon: images.pedia.categoryOther
			}
		],
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					'Curiously, snowballs can be found fully formed in neat piles within frigid regions of the Far, Far Range. While it is unknown how or why these piles were formed, all signed point towards a symbiotic relationship between slimes and things that are a super fun, awesome time in snow. Nature is truly magical.'
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Suctioning snowballs into a vac tank preserves their temperature and allows them to be shot out of the vac as you like. Upon impact, a snowball has many of the same benefits as water but even better because you can't start snowball fights with water."
			}
		]
	},
	{
		name: 'prisma plorts',
		image: images.slimes.plorts.stable,
		blurb: 'Prismatic plorts of possibilities with a purpose.',
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Unlike other objects affected by prisma disruptions, these plorts appear to be especially sensitive to the temporal distortions that appear throughout the Grey Labyrinth. The ancient beings that created the Grey Labyrinth seem to have had a special use in mind for these plorts when they designed the megastructure. Perhaps the plorts themselves are the key to delving further into the structure's mysteries?"
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					"Like other unstable objects, a plort impacted by a prisma disruption will eventually become so volatile that it cannot be contained by a rancher's vac tank, bursting out after a period of time. If only there was a way to stabilize them to make them safer to transport?"
			},
			{
				icon: images.pedia.plortonomics,
				title: 'Plortonomics',
				content:
					'Possible uses for prisma plorts are as mysterious as the Grey Labyrinth itself, but perhaps some creative minds coming together can unlock their untapped potential.'
			}
		]
	},
	{
		name: 'unstable resources',
		image: images.pedia.unstableResources,
		blurb: 'Unnatural objects with a slippery grasp on reality.',
		info: [
			{
				icon: images.pedia.about,
				title: 'About',
				content:
					"Caught and stretched across reality, matter, and time, resources affected by the prisma disruptions of the Grey Labyrinth are too volatile to exist for long in the natural world. Eventually, these resources will pop out of existence, or even a rancher's vac tank, to escape the confines of reality and mundane three dimensions.\n\nBasically, they've got too many reality appointments and they are constantly rushing to get to their next one."
			},
			{
				icon: images.pedia.howtouse,
				title: 'On The Ranch',
				content:
					'While unable to be used for regular ranching, unstable resources do seem to have unique interactions with the slimes within the Grey Labyrinth. It will take an intrepid slime scientist or adventurous rancher to find out how these disrupted resources impact the normal slime digestive process.\n\nDue to their reality-bending energies, unstable resources directly conflict with warp technology. They cannot be teleported and even prevent ranchers from using warp technology themselves as long as unstable resources are within their vac tanks.'
			}
		]
	}
];

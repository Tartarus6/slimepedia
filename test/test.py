slimes = """iconCraftAquaGlass.png
iconCraftBlackIndigonium.png
iconCraftBuzzWax.png
iconCraftDeepBrine.png
iconCraftDreamBubble.png
iconCraftDriftCrystal.png
iconCraftHexacomb.png
iconCraftIndigonium.png
iconCraftJellyStone.png
iconCraftLavaDust.png
iconCraftLightningMote.png
iconCraftMagmaComb.png
iconCraftPepperJam.png
iconCraftPerfectSnowflake.png
iconCraftPrimordyOil.png
iconCraftRadiantOre.png
iconCraftRoyalJelly.png
iconCraftSilkySand.png
iconCraftSlimeFossil.png
iconCraftSpiralSteam.png
iconCraftStormGlass.png
iconCraftStrangeDiamond.png
iconCraftSunSap.png
iconCraftTinPetal.png
iconCraftWildHoney.png"""

slimes = slimes.split("\n")

for index in range(len(slimes)):
    line = slimes[index]

    variable = line[:-4]
    
    print(f"import {variable} from '/src/lib/assets/resources/craft/{line}?enhanced';")

print("\n\n\n")

for index in range(len(slimes)):
    line = slimes[index]

    variable = line[:-4]
    breakindex = 9
    variableInternal = line[breakindex+1:-4]
    
    print(f"{line[breakindex].lower() + variableInternal}: {variable},")


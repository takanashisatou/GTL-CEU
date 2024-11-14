ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('ae2:charged_certus_quartz_crystal')
    .itemInputs(
      'gtceu:certus_quartz_gem'
      
    )
    .EUt(30)
    .duration(3*20)
    .itemOutputs(
      'ae2:charged_certus_quartz_crystal'
    )
  })
  
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('')
    .itemInputs(
      'minecraft:redstone',
      'gtceu:certus_quartz_gem',
      'minecraft:quartz'
    ).circuit(1).
    inputFluids(
      'minecraft:water 1000'
      )
    .EUt(30)
    .duration(4*20)
    .itemOutputs(
      'ae2:fluix_crystal'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('gtceu:ender_air_1000')
    .itemInputs(
      '64x gtceu:ender_pearl_dust'
      
    ).inputFluids(
      'gtceu:fuming_nitric_acid 1000',
      'gtceu:nitrogen_dioxide 10000',
      'gtceu:helium 10000',
      'gtceu:radon 1000',
      'gtceu:deuterium 1000',
      'gtceu:xenon 1000'

    ).circuit(24)
    .EUt(480)
    .duration(40*20)
    .outputFluids(
      'gtceu:ender_air 1000'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('gtceu:nether_air_1000')
    .itemInputs(
      '64x minecraft:gunpowder'
    ).inputFluids(
     'gtceu:blaze 1000',
     'gtceu:hydrogen_sulfide 10000',
     'gtceu:sulfur_dioxide 10000',
     'gtceu:carbon_monoxide 10000',
     'gtceu:coal_gas 1000',
     'gtceu:helium 1000'
    ).circuit(13)
    .EUt(120)
    .duration(20*20)
    .outputFluids(
      'gtceu:nether_air 1000'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('minecraft:netherite_scrap_1x')
    .itemInputs(
      'minecraft:ancient_debris',
      'minecraft:prismarine_shard',
    ).inputFluids(
      'gtceu:nether_air 100'
    ).circuit(19)
    .EUt(480)
    .duration(12*20)
    .itemOutputs(
      '1x minecraft:netherite_scrap'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('minecraft:dragon_egg_1x')
    .itemInputs(
      'minecraft:egg',
      '64x kubejs:warped_ender_pearl'
    ).inputFluids(
      'gtceu:antimatter 1000',
      'gtceu:ender_eye 10000',
      'gtceu:sterilized_growth_medium 10000'
    ).circuit(19)
    .EUt(491520)
    .duration(100*20)
    .chancedOutput('1x minecraft:dragon_egg',
      9000,
      0
    )
  })
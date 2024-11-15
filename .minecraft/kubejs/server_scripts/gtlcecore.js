ServerEvents.recipes(e=>{
  e.remove({id:'gtceu:electrolyzer/depleted_uranium_hexafluoride_separation'})
})
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
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('minecraft:nether_star_1x')
    .itemInputs(
      '4x minecraft:soul_sand',
      '3x minecraft:wither_skeleton_skull'
    )
    .EUt(120)
    .duration(5*20)
    .itemOutputs(
      '1x minecraft:nether_star'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('minecraft:skeleton_skull_1x')
    .itemInputs(
      '9x minecraft:bone'
    ).circuit(1)
    .EUt(120)
    .duration(5*20)
    .itemOutputs(
      '1x minecraft:skeleton_skull'
    )
  })
  // xx * 20的意识是配方持续时间x秒，因为EUt是配方持续的tick数，1秒等于20tick所以x秒运行x*20tick
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('gtceu:nether_star_dust_1x')
    .itemInputs(
      '1x gtceu:diamond_dust',
      '1x gtceu:iridium_dust'
    ).inputFluids(
      'gtceu:rocket_fuel 1000',
      'gtceu:nether_air 8000'
    )
    .circuit(32)
    .EUt(480)
    .duration(10*20)
    .itemOutputs(
      '1x gtceu:nether_star_dust'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('ad_astra:ice_shard_1x')
    .itemInputs(
      '1x minecraft:blue_ice'
    )
    .EUt(30)
    .duration(10*20)
    .itemOutputs(
      '1x ad_astra:ice_shard'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('kubejs:echobone_1x')
    .itemInputs(
      '1x minecraft:bone'
    ).inputFluids(
      'gtceu:echo 144'
    )
    .EUt(480)
    .duration(20*20)
    .itemOutputs(
      '1x kubejs:echobone'
    )
  })
  //----------------
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('minecraft:crying_obsidian_1x')
    .itemInputs(
      '1x gtceu:beryllium_dust'
      
    ).inputFluids(
      'gtceu:antimatter 10'
    )
    .EUt(480)
    .duration(10*20)
    .itemOutputs(
      '1x minecraft:crying_obsidian'
    ).cleanroom(CleanroomType.CLEANROOM)
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('gtceu:ender_pearl_dust_10x')
    .itemInputs(
      '1x gtceu:beryllium_dust',
      '4x gtceu:potassium_dust'
    ).inputFluids(
      'gtceu:nitrogen 5000'
    ).circuit(30)
    .EUt(30)
    .duration(20*20)
    .itemOutputs(
      '10x gtceu:ender_pearl_dust'
    )
  })
  ServerEvents.recipes(e => {
    e.recipes.gtceu.arc_generator('gtceu:naquadah_contain_rare_earth_fluoride_dust_1x')
    .itemInputs(
     '1x gtceu:alunite_dust'
    ).inputFluids(
      'gtceu:rare_earth_chlorides 6000',
      'gtceu:acidic_enriched_naquadah_solution 3000',
      'gtceu:acidic_naquadria_solution 3000',
      'gtceu:hydrofluoric_acid 2000',
      'gtceu:enriched_naquadah_front 1000'
    )
    .EUt(491520)
    .duration(20*20)
    .itemOutputs(
      '1x gtceu:naquadah_contain_rare_earth_fluoride_dust'
    ).outputFluids(
      'gtceu:hydrochloric_acid 6000'
    )
  })
  
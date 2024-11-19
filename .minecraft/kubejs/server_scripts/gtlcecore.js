ServerEvents.recipes(event => {
  const gtr = event.recipes.gtceu

    gtr.platinum_processor("gtceu:platinum_processor_1")
      .itemInputs('288x gtceu:platinum_group_sludge_dust')
      .inputFluids('gtceu:aqua_regia 57600')
      .circuit(1)
      .EUt(GTValues.VA[GTValues.EV])
      .duration(7200)
      .itemOutputs('16x gtceu:platinum_dust' , '16x gtceu:palladium_dust' , '15x gtceu:ruthenium_dust' , '8x gtceu:iridium_dust' , '12x gtceu:rhodium_dust' , '8x gtceu:osmium_dust')

    gtr.arc_generator('ae2:charged_certus_quartz_crystal')
      .itemInputs('gtceu:certus_quartz_gem')
      .circuit(1)
      .EUt(30)
      .duration(3*20)
      .itemOutputs('ae2:charged_certus_quartz_crystal')

    gtr.arc_generator('ae2:fluix_crystal')
      .itemInputs(
        'minecraft:redstone',
        'gtceu:certus_quartz_gem',
        'minecraft:quartz')
      .inputFluids('minecraft:water 1000')
      .EUt(30)
      .duration(4*20)
      .itemOutputs('ae2:fluix_crystal')

    gtr.arc_generator('gtceu:ender_air_1000')
      .itemInputs('64x gtceu:ender_pearl_dust')
      .inputFluids(
        'gtceu:fuming_nitric_acid 1000',
        'gtceu:nitrogen_dioxide 10000',
        'gtceu:helium 10000',
        'gtceu:radon 1000',
        'gtceu:deuterium 1000',
        'gtceu:xenon 1000')
      .circuit(24)
      .EUt(480)
      .duration(40*20)
      .outputFluids('gtceu:ender_air 1000')

    gtr.arc_generator('gtceu:nether_air_1000')
      .itemInputs('64x minecraft:gunpowder')
      .inputFluids(
        'gtceu:blaze 1000',
        'gtceu:hydrogen_sulfide 10000',
        'gtceu:sulfur_dioxide 10000',
        'gtceu:carbon_monoxide 10000',
        'gtceu:coal_gas 1000',
        'gtceu:helium 1000')
      .circuit(13)
      .EUt(120)
      .duration(20*20)
      .outputFluids('gtceu:nether_air 1000')

    gtr.arc_generator('minecraft:netherite_scrap_1x')
      .itemInputs(
        'minecraft:ancient_debris',
        'minecraft:prismarine_shard',)
      .inputFluids('gtceu:nether_air 100')
      .circuit(19)
      .EUt(480)
      .duration(12*20)
      .itemOutputs('1x minecraft:netherite_scrap')

    gtr.arc_generator('minecraft:dragon_egg_1x')
      .itemInputs(
        'minecraft:egg',
        '64x kubejs:warped_ender_pearl')
      .inputFluids(
        'gtceu:antimatter 1000',
        'gtceu:ender_eye 10000',
        'gtceu:sterilized_growth_medium 10000')
      .circuit(19)
      .EUt(491520)
      .duration(100*20)
      .chancedOutput('1x minecraft:dragon_egg',9000,0)

    gtr.arc_generator("minecraft:nether_star")
      .itemInputs(
        "4x minecraft:soul_sand",
        "3x minecraft:wither_skeleton_skull")
      .duration(100)
      .EUt(120)
      .itemOutputs("minecraft:nether_star")

    gtr.arc_generator("minecraft:skeleton_skull")
      .circuit(1)
      .itemInputs("9x minecraft:bone")
      .duration(100)
      .EUt(120)
      .itemOutputs("skeleton_skull")

    gtr.arc_generator("gtceu:nether_star_dust")
      .itemInputs(
        "#forge:dusts/diamond",
        "#forge:dusts/iridium")
      .inputFluids(
        "gtceu:rocket_fuel 1000",
        "gtceu:nether_air 8000")
      .duration(200)
      .EUt(480)
      .itemOutputs("gtceu:nether_star_dust")

    gtr.arc_generator("ad_astra:ice_shard")
      .itemInputs("minecraft:blue_ice")
      .EUt(30)
      .duration(200)
      .itemOutputs("ad_astra:ice_shard")

    gtr.arc_generator("gtceu:nitric_oxide")
      .inputFluids("gtceu:air 10000")
      .EUt(120)
      .duration(200)
      .outputFluids("gtceu:nitric_oxide 1000")

    gtr.arc_generator("gtceu:adamantine_compounds_dust_a")
      .notConsumable("kubejs:microwormhole_generator")
      .itemInputs("4x gtceu:adamantine_compounds_dust")
      .inputFluids("gtceu:mana 1000")
      .EUt(GTValues.VA[GTValues.UXV])
      .duration(20)
      .itemOutputs("gtceu:adamantine_dust")

      //铀处理
        event.remove({id:"gtceu:large_chemical_reactor/uranium_hexafluoride"})
        event.remove({id:"gtceu:chemical_reactor/uranium_hexafluoride"})
    gtr.large_chemical_reactor("gtceu:uranium_acid_process_leach")
        .itemInputs("1x gtceu:uraninite_dust" )
        .inputFluids("minecraft:water 1000" , "gtceu:sulfuric_acid 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids('gtceu:uranyl_sulfate 1000')

    gtr.large_chemical_reactor("gtceu:uranium_process_alkali_leach")
        .itemInputs("1x gtceu:uraninite_dust" , "3x gtceu:soda_ash_dust")
        .inputFluids("minecraft:water 1000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids('gtceu:uranyl_carbonate 1000')

    gtr.large_chemical_reactor("gtceu:uranium_process_enrich_1")
        .inputFluids("gtceu:nitric_acid 1000" , 'gtceu:uranyl_carbonate 1000')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids('gtceu:enriched_impure_uranyl_solution 1000')
        
    gtr.large_chemical_reactor("gtceu:uranium_process_enrich_2")
        .inputFluids("gtceu:nitric_acid 1000" , 'gtceu:uranyl_sulfate 1000')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids('gtceu:enriched_impure_uranyl_solution 1000')
    
    gtr.large_chemical_reactor('gtceu:uranyl_nitrate_solution_compound')
        .inputFluids("gtceu:tributyl_phosphate 1000" , 'gtceu:enriched_impure_uranyl_solution 1000')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .outputFluids('gtceu:uranyl_nitrate_solution_compound 1000')

    gtr.large_chemical_reactor('gtceu:ammonium_diuranate')
        .inputFluids("gtceu:uranyl_nitrate_solution_compound 1000" , 'gtceu:ammonia 1000')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .itemOutputs('1x gtceu:ammonium_diuranate_dust')

    gtr.large_chemical_reactor('gtceu:uranium_1')
        .itemInputs('1x gtceu:triuranium_octoxide_dust')
        .inputFluids("gtceu:hydrogen 16000")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .itemOutputs('3x gtceu:uranium_dust')
        .outputFluids('minecraft:water 8000')

    gtr.dehydrator('triuranium_octoxide')
        .itemInputs('1x gtceu:ammonium_diuranate_dust')
        .EUt(GTValues.VA[GTValues.EV])
        .duration(20)
        .itemOutputs('1x gtceu:triuranium_octoxide_dust')
      
    gtr.chemical_reactor('bayerprocess_1')
      .itemInputs('1x gtceu:crushed_bauxite_ore' , '1x gtceu:sodium_hydroxide_dust')
      .inputFluids('minecraft:water 1000')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids('gtceu:sodium_aluminum_oxide 32000')
      .itemOutputs('32x gtceu:bauxite_residue_dust')
            
    gtr.chemical_reactor('bayerprocess_2')
      .itemInputs('1x gtceu:crushed_aluminium_ore' , '1x gtceu:sodium_hydroxide_dust')
      .inputFluids('minecraft:water 1000')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids('gtceu:sodium_aluminum_oxide 64000')
      .itemOutputs('64x gtceu:bauxite_residue_dust')

    gtr.distillery('aluminium_hydroxide_precipitation')
      .itemInputs('gtceu:aluminium_hydroxide_dust')
      .inputFluids('gtceu:sodium_aluminum_oxide 1000')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('7x gtceu:aluminium_hydroxide_dust')

    gtr.electric_blast_furnace('alumina')
      .itemInputs('2x gtceu:aluminium_hydroxide_dust')
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('1x gtceu:alumina_dust')

    event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_alumina" })
    event.remove({ id: "gtceu:electrolyzer/bauxite_electrolysis" })

    gtr.electrolyzer('electolyzing_alumina')
      .chancedInput("4x kubejs:cryolite", 100, 50)
      .itemInputs('5x gtceu:alumina_dust')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('2x gtceu:aluminium_dust')
      .outputFluids('gtceu:oxygen 3000')

    gtr.electrolyzer('electolyzing_bauxite')
      .chancedInput("4x kubejs:cryolite", 1000, 100)
      .itemInputs('15x gtceu:bauxite_dust')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('6x gtceu:aluminium_dust' , '1x gtceu:rutile_dust')
      .outputFluids('gtceu:oxygen 9000')

    gtr.chemical_reactor('fluoaluminic_acid')
      .itemInputs('1x gtceu:aluminium_hydroxide_dust')
      .inputFluids('gtceu:hydrofluoric_acid 1000')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids('gtceu:fluoaluminic_acid 1000')

    gtr.electric_blast_furnace('cryolite')
      .inputFluids('gtceu:fluoaluminic_acid 1000')
      .itemInputs('1x gtceu:sodium_hydroxide_dust')
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('1x kubejs:cryolite')

    gtr.electric_blast_furnace('bauxite_residue_dust')
      .itemInputs('1x gtceu:bauxite_residue_dust' , '1x gtceu:soda_ash_dust')
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids('gtceu:sodium_aluminum_oxide 1000')
    
    gtr.electric_blast_furnace('sinter_1')
      .itemInputs('1x gtceu:crushed_bauxite_ore' , '1x gtceu:soda_ash_dust')
      .inputFluids('minecraft:water 1000')
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('1x kubejs:sinter')
    
    gtr.electric_blast_furnace('sinter_2')
      .itemInputs('1x gtceu:crushed_aluminium_ore' , '1x gtceu:soda_ash_dust')
      .inputFluids('minecraft:water 1000')
      .blastFurnaceTemp(1700)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('2x kubejs:sinter')

    gtr.chemical_reactor('sodium_aluminum_oxide_2')
      .itemInputs('1x kubejs:sinter')
      .inputFluids('minecraft:water 1000')
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('1x kubejs:scrap')
      .outputFluids('gtceu:sodium_aluminum_oxide 16000')

    gtr.chemical_reactor('aluminium_sulfate')
      .itemInputs('2x gtceu:aluminium_dust')
      .inputFluids('gtceu:sulfuric_acid 3000')
      .circuit(24)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .outputFluids('gtceu:aluminium_sulfate 1000' , 'gtceu:hydrogen 3000')
      
    gtr.chemical_reactor('aluminium_hydroxide_dust')
      .itemInputs('6x gtceu:sodium_hydroxide_dust')
      .inputFluids('gtceu:aluminium_sulfate 1000')
      .circuit(24)
      .EUt(GTValues.VA[GTValues.MV])
      .duration(20)
      .itemOutputs('2x gtceu:aluminium_hydroxide_dust' , '6x gtceu:sodium_sulfate_dust')
      .outputFluids('minecraft:water 1000')
  }
)
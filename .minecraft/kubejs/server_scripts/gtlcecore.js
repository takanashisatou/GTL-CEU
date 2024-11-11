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
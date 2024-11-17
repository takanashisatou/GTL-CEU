GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('arc_generator')
      .category('arc_generator')
      .setEUIO('in')
      .setMaxIOSize(6, 1, 6, 1)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.BATH)
  })  
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('arc_generator', 'simple', GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV,GTValues.ZPM,GTValues.UV,GTValues.UHV,GTValues.UEV,GTValues.UIV,GTValues.UXV,GTValues.OpV)
        .recipeType('arc_generator', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/arcgenerator')
})
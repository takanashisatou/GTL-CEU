GTCEuStartupEvents.registry('gtceu:recipe_type', event => {//注册机器
    event.create('arc_generator')//设置机器的名字
      .category('arc_generator')//设置类型
      .setEUIO('in') //设置机器的能源输入/输出
      .setMaxIOSize(6, 1, 6, 1)//设置机器输入输出个数(物品输入,物品输出,流体输入,流体输出)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)//设置机器的背面带有覆盖版
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)//设置机器运行时处理中的样子
      .setSound(GTSoundEntries.BATH)//设置机器运行时工作的声音
  })  
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('arc_generator', 'simple', GTValues.LV,GTValues.MV,GTValues.HV,GTValues.EV,GTValues.IV,GTValues.LuV,GTValues.ZPM,GTValues.UV,GTValues.UHV,GTValues.UEV,GTValues.UIV,GTValues.UXV,GTValues.OpV)//名字和配方类型相同、单方块、机器电压
        .recipeType('arc_generator', true, true)//显示的配方类型名字
        .workableTieredHullRenderer('gtceu:block/machines/arcgenerator')//设置机器材质
})
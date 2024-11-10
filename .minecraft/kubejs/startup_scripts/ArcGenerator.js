GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('arc_generator', 'simple', GTValues.IV)//名字和配方类型相同、单方块、机器电压
        .recipeType('arc_generator', true, true)//显示的配方类型名字
        .workableTieredHullRenderer('gtlcecore:block/arcgenerator')//设置机器材质
})
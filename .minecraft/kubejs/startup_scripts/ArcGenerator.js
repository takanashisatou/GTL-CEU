GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('small_greenhouses', 'simple', GTValues.IV)//名字和配方类型相同、单方块、机器电压
        .recipeType('small_greenhouses', true, true)//显示的配方类型名字
        .workableTieredHullRenderer('gtceu:block/machines/smallgreenhouses')//设置机器材质
})   }）
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('MgSO4')
        .dust()
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('uranyl').liquid().color(0xFFA500)
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('MgSO4_liquid').liquid()
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('uranyl_sulfate')
    .liquid()
    .color(0xFFA500)

    event.create('uranyl_carbonate')
    .liquid()

    event.create('magnesium_sulphate')
        .dust()
        .liquid()
        .components("1x magnesium" , "1x sulfur" , "4x oxygen")

})
GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get("uranyl_sulfate").setFormula("UO₂SO₄")
    GTMaterials.get("uranyl_carbonate").setFormula("UO₂CO₃")
})
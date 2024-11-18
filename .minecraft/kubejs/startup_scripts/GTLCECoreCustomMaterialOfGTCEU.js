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

    event.create('enriched_impure_uranyl_solution')
        .liquid()

    event.create('tributyl_phosphate')
        .liquid()

    event.create('uranyl_nitrate_solution_compound')
        .liquid()
    event.create('ammonium_diuranate')
        .dust()
    event.create('triuranium_octoxide')
        .dust()
})
GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get("uranyl_sulfate").setFormula("UO₂SO₄")
    GTMaterials.get("uranyl_carbonate").setFormula("UO₂CO₃")
    GTMaterials.get("tributyl_phosphate").setFormula("(C₄H₉)₃PO₄")
    GTMaterials.get("uranyl_nitrate_solution_compound").setFormula("UO₂(NO₃)₂·TBP")
    GTMaterials.get("ammonium_diuranate").setFormula("(NH₄)₂U₂O₇")
    GTMaterials.get("triuranium_octoxide").setFormula("U₃O₈")
})
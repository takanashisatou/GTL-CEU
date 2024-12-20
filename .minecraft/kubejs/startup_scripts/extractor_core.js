GTCEuStartupEvents.registry('gtceu:recipe_type', event =>{
    event.create('extractor_core')
      .category('extractor_core')
      .setEUIO('in')
      .setMaxIOSize(6, 6, 6,6)
      .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
      .setSound(GTSoundEntries.CHEMICAL)
  })  
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("extractor_core", "multiblock", (holder) => new $CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeType("extractor_core")
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "  AAAAA  ")
            .aisle("         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "   BBB   ", "   BBB   ", "  ABBBA  ", " A     A ")
            .aisle("   XXX   ", "   BBB   ", "   BBB   ", "   BBB   ", "         ", "         ", "         ", "         ", "         ", "   AAAB  ", "  B   B  ", "  B   B  ", " AB   BA ", "A       A")
            .aisle("  XAAAX  ", "  B   B  ", "  B   B  ", "  B   B  ", "   BAB   ", "    B    ", "    B    ", "    B    ", "   ABA   ", "  A   A  ", " B     B ", " B     B ", " B     B ", "A       A")
            .aisle("  XAAAX  ", "  B   B  ", "  B   B  ", "  B   B  ", "   A A   ", "   B B   ", "   B B   ", "   B B   ", "   B B   ", "  A   A  ", " B     B ", " B     B ", " B     B ", "A       A")
            .aisle("  XAAAX  ", "  B   B  ", "  B   B  ", "  B   B  ", "   BAB   ", "    B    ", "    B    ", "    B    ", "   ABA   ", "  A   A  ", " B     B ", " B     B ", " B     B ", "A       A")
            .aisle("   X~X   ", "   BBB   ", "   BBB   ", "   BBB   ", "         ", "         ", "         ", "         ", "         ", "   AAA   ", "  B   B  ", "  B   B  ", " AB   BA ", "A       A")
            .aisle("         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "   BBB   ", "   BBB   ", "  ABBBA  ", " A     A ")
            .aisle("         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "         ", "  AAAAA  ")
            .where("~", Predicates.controller(Predicates.blocks(definition.get())))
            .where("B", Predicates.blocks("gtceu:tempered_glass"))
            .where("A", Predicates.blocks("gtceu:clean_machine_casing"))
            .where("X", Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where(" ", Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_clean_stainless_steel", "gtceu:block/multiblock/electric_blast_furnace")
})


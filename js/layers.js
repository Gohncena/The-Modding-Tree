addLayer("p", {
    name: "ZERO", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "0P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0B5725",
    requires: new Decimal(16), // Can be a function that takes requirement increases into account
    resource: "zero points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.4, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for zero points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "ex 1",
            description: "Square your point gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "ex 2",
            description: "Cube your point gain.",
            cost: new Decimal(5)
        },
        21: {
            title: "boost",
            description: "boost your point gain by zero points.",
            cost: new Decimal(15)
        }
    },
})


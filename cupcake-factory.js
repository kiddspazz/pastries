const pastryFactory = require('./pastry-factory.js');

const cupcake = [
  "          )",
  "         (.)",
  "         .|.",
  "         l7J",
  "         | |",
  "     _.--| |--._",
  "  .-';  ;`-'& ; `&.",
  " & &  ;  &   ; ;   \\",
  " \\      ;    &   &_/",
  "  F\"\"\"---...---\"\"\"J",
  "  | | | | | | | | |",
  "  J | | | | | | | F",
  "   `---.|.|.|.---'",
  "\n",
];
class CupcakeFactory extends pastryFactory.AbstractPastryFactory {
  constructor() {
    super();
  }

  makePastry() {
    console.log("the cupcake factory is making a cupcake:\n\n");
    console.log(cupcake.join("\n"));
  }
}

exports.CupcakeFactory = CupcakeFactory;

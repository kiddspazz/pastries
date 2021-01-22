class AbstractPastryFactory {
  constructor() {
    this.makePastry = this.makePastry.bind(this);
  }

  makePastry() {
    console.log('this maker doesn\'t actually make pastries\n');
  }
}

exports.AbstractPastryFactory = AbstractPastryFactory;

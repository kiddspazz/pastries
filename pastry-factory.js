class AbstractPastryFactory {
  constructor() {
    this.makePastry = this.makePastry.bind(this);
  }

  makePastry() {
    console.log('this factory doesn\'t actually make pastries');
  }
}

exports.AbstractPastryFactory = AbstractPastryFactory;

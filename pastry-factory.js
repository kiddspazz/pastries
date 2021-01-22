class AbstractPastryFactory {
  constructor() {
    this.makePastry = this.makePastry.bind(this);
  }

  makePastry() {
    console.log('this maker doesn\'t actually make pastries\nthis is from the abstract factory only if the concrete factory doesn\'t have a makePastry method of its own!');
  }
}

exports.AbstractPastryFactory = AbstractPastryFactory;

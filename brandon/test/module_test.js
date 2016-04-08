const chai = require('chai');
const expect = chai.expect;
const greetCli = require(__dirname + '/../bin/greetingBin');

describe('This greeting cli', () => {
  before(() => {
    this.process_backup = process.argv;
    process.argv = [null, null, 'brandon'];
  });
  after(() => {
    process.argv = this.process_backup;
  });

  it('should have some response with a name', () => {
    expect(greetCli()).to.eql('hello brandon');
  });
  
  describe('with nada!', () => {
    before(() => {
      process.argv = [];
    });
    it('should greet universe', () => {
      expect(greetCli()).to.eql('hello universe');
    });
  });
});

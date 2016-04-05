const chai = require('chai');
const expect = chai.expect;
const Greet = require(__dirname + '/../lib/greeting');

const user = new Greet('Brandon');

describe('This greeting', () => {
  it('should have some response with a name', () => {
    expect(user.name).to.eql('Brandon');
  })
  it('should greet the user', ()=>{
    expect(user.greet()).to.eql('hello ' + user.name);
  })
})

const chai = require('chai');
const expect = chai.expect;
const greet = require(__dirname + '/../lib/greeting');

const user = greet('Brandon');

describe('This greeting', () => {
  it('should have some response with a name', () => {
    expect(user.greet()).to.eql('Brandon');
  })
  it('should greet the user', ()=>{
    expect(user.greet()).to.eql('hello ' + user.name);
  })
})

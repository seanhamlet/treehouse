// Require only expect method from chai
var expect = require('chai').expect;
// var chai = require('chai');
// var expect = chai.expect;

expect(true).to.be.true;

function titleCase(title) {
  return title;
}

expect(titleCase('the great mouse detective')).to.be.a('string');

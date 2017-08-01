var expect = require('chai').expect;
var isConsistent = require('../src/PhoneNumbers');

describe('Should find if phone list is consistent', function(){
    it('should be consistent', function(){
        expect(isConsistent(["91 32 54 26","97 625 992","911","9 13 25 4"])).to.be.false;
    })
})

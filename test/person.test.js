const chai = require('chai')
const expect = chai.expect
const Person = require('../models/person.js')
// Your Person test goes here!

describe('Person', ()=> {
    it('Should initialise properly', ()=>{
        var person = new Person('Joe','Bloggs','1 Jan 1990')
        expect(person.firstName).to.equal('Joe')
        expect(person.lastName).to.equal('Bloggs')
        expect(person.DoB).to.equal('1 Jan 1990')
    })
    it('Should capitalise first name', ()=>{
        var person = new Person('amy','Nether','25 Jun 1982')
        expect(person.firstName).to.equal('Amy')
    })
})
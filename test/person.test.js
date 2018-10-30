const chai = require('chai')
const expect = chai.expect
const Person = require('../models/person.js')
// Your Person test goes here!

describe('Person', () => {
    it('Should initialise properly', () => {
        var person = new Person('Joe', 'Bloggs', '1 Jan 1990')
        expect(person.firstName).to.equal('Joe')
        expect(person.lastName).to.equal('Bloggs')
        expect(person.DoB).to.equal('1 Jan 1990')
        expect(person.emails).to.deep.equal([])
    })
    it('Should capitalise first name', () => {
        var person = new Person('amy', 'Nether', '25 Jun 1982')
        expect(person.firstName).to.equal('Amy')
    })
    it('Should return full name', () => {
        var person = new Person('Joe', 'Bloggs', '1 Mar 1990')
        expect(person.fullName()).to.equal('Joe Bloggs')
    })
    it('Should accept new email and put them into an array', () => {
        var person = new Person('Danielle', 'Goodie', '21 Dec 2000')
        person.addEmail('dangoodie@email.com')
        expect(person.emails).to.deep.equal(['dangoodie@email.com'])
    })
    it('Should accept new phone numbers and put them into an array', () => {
        var person = new Person('George', 'Bush', '7 Feb 1989')
        person.addPhoneNumber('07986123645')
        expect(person.phoneNumbers).to.deep.equal(['07986123645'])
    })
    it('Should return details',()=>{
        var person = new Person('George', 'Bush', '7 Feb 1989')
        person.addEmail('georgebush@gmail.com')
        expect(person.returnFormattedDetails()).to.deep.equal(['George Bush',"------------","DOB: 7 Feb 1989","/n","Email Addresses", "-georgebush@gmail.com"])
    })
})
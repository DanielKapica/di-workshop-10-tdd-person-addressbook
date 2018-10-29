// Your Person class goes here!

class Person {
    constructor(firstName, lastName, DoB) {
        this.firstName = capitalise(firstName)
        this.lastName = lastName
        this.DoB = DoB
    }
}

function capitalise(firstName){
    return firstName.charAt(0).toUpperCase()+firstName.slice(1)
}

module.exports = Person
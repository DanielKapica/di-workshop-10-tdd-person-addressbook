// Your Person class goes here!

class Person {
    constructor(firstName, lastName, DoB) {
        this.firstName = capitalise(firstName)
        this.lastName = lastName
        this.DoB = DoB
        this.emails = []
        this.phoneNumbers = []

    function capitalise(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
}
    fullName() {
        return this.firstName + ' ' + this.lastName
    }

    addEmail(emailAddress) {
        this.emails.push(emailAddress)
    }

    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push(phoneNumber)
    }
    returnFormattedDetails(){
        var lines = [
            this.fullName(),
            "------------",
            "DOB: " + this.DoB,
            "/n",
            "Email Addresses",
            "-" + this.emails
        ]
        return lines
    }
}
module.exports = Person
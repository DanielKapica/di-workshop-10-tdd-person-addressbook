// Your Person class goes here!

class Person {
    constructor(firstName, lastName, DoB) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        this.lastName = lastName
        this.DoB = DoB
        this.emails = []
        this.phoneNumbers = []
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
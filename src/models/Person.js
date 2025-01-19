class Person {

    // This is the constructor for the Person class
    // This tells JavaScript that when you make a new Person object, you HAVE to give it a name, number, and birthday
    constructor(name, number, birthday) {
        this.name = name;
        this.number = number;
        this.birthday = birthday;
    }

    // These functions are called setters and getters
    // They are used to set and get the values of the object's properties - kinda like how you do x = 5 in normal code - but for objects
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setNumber(number) {
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    getBirthday() {
        return this.birthday;
    }
}

export default Person;
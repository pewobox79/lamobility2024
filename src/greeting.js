class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    greeting(){
        console.log(`hallo, mein Name ist ${this.name}. Ich bin ${this.age} alt.`)
    }
}

export default Person



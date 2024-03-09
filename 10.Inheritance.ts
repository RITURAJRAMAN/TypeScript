class Parent {
    name: string;

    constructor() {
        console.log('Parent constructor');
    }

    parentMethod() {
        console.log('Parent method');
    }

    setName(name: string) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor() {
        super();
        console.log('Child constructor');
    }

    childMethod() {
        console.log('Child method');
        console.log(this.name);
    }
}

let child = new Child();
child.setName('Rituraj');
child.childMethod();
child.parentMethod();
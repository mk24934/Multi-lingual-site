<script lang="ts">
    interface Person {
        name: string;
        id: number;
    }
    let person: Person = {name: "Mark", id: 6}
    // person instanceof Person

    // class Person {
    //     name: string;
    //     id: number;

    //     constructor(name: string, id: number) {
    //         this.name = name;
    //         this.id = id;
    //     }
    // }
    // let person = new Person("Mark", 6)

    

    // or with let: use a function with a typeguard
    const isPerson = (person: Person): person is Person => person.name && person.id
    // const isPerson = (person: Person): person is Person => person.__kind === "person" || isCustomer(person)
    // const isCustomer= (customer: Customer): customer is Customer => customer.__kind === "customer" 

    // extend
    interface Customer extends Person {
        email: string
    }

    // with type, can do, but cannot extend as well as interface
    // type Customer {
    //     // ...
    // }

    // or do following, interface interfaces with database and then cast to Customer type
    // type Customer = Person & Contactable {
    //     item: number
    // }
</script>

<p>
Person is of type: {typeof(person)}
</p>

<p>
isPerson is {isPerson(person)}
</p>
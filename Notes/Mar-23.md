# March 23rd

- Moving the backend to Digital Ocean resolved the issue, able to query
- What is a good way to query? Strings or routes?

- JS question

```javascript
var i = 0;
var array = [];
for (var i_1 = 0; i_1 < 3; i_1++) {
    console.log("i is: ", i_1);
    array.push(i_1);
}
```

Answer:
- When bind an array, it is a reference, so can use `const` instead of `let`
- Using `const` is better so can't do `array = []` which overwrites it, makes the references constant
- so to clear it use `array.length = 0`, then when run it again it will push the values overwrite into the next positions again

- JavaScript has an unnamed struct, object has a shape to it, had a binding, in this case is Person and this is the shape of it
- Both browser and Node are only JavaScript runtimes, TypeScript is just a compiler to JavaScript which does type checking
- Interface is not defining a type, we are just defining a shape of the object, e.g. making sure any object of interface Person has a name attribute
- Solution is to switch `interface` to `class` and 
- when `person is Person` will run the test `person.name && person.id` and will return a Person
    - could further check if `person.name` is a string and `person.id` is a number
    - or add `__kind: "person"` or `kind: "person"` which is called TypeBranding, this says that `kind` is of type `person`
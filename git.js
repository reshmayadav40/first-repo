const person = {
    name: "Alice",
    age: 25,
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  console.log(person.name); // Output: Alice
  person.greet(); 
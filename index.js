// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
  }
  sayHello();


  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe()


  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); 



  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1);



  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  say("Goodbye", "Julio");



  function add(x, y) {
    return x + y;
  }

  console.log(add(1, 2));



  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }


  console.log(say("Howdy", "partner"));



  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }

  console.log(say("Howdy", "partner"));
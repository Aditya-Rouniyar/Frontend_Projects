const user = { email: "jdoe@gmail.com" };

try {
  // Produce a Reference Error
  // myFunction();

  // Produce a TypeError
  // null.myFunction();

  // Will Produce SyntaxError
  // eval("Hello World");

  // Will produce a URIError
  // decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(`User Error: ${e.message}`);
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
  // console.log(e instanceof TypeError);
} finally {
  console.log("Finally runs regardless of the result...");
}

console.log("Program Continues...");

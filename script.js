"use strict";

function exampleFunction() {
  undeclaredVariable = 10;
  return "No error";
}

try {
  console.log(exampleFunction());
} catch (error) {
  console.error("Error:", error.message);
}

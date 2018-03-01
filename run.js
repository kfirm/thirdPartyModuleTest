// import TestModule from "./src/module.js"; // works
import TestModule from "./dist/bundle.js"; // doesn't work - Uncaught SyntaxError: The requested module does not provide an export named 'default'

const test = new TestModule();

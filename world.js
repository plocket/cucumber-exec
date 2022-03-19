const { setWorldConstructor } = require('@cucumber/cucumber');

const World = function() {};

setWorldConstructor(World);

var modules = require('./modules.json')

for(var mod in modules) {
    global[mod] = require(modules[mod]);
}
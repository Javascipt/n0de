var path    = require('path');
var params  = require('./params.json');
var modules = params.modules;

for(var mod in modules) {
    global[mod] = require(path.resolve(params.path, 'node_modules', modules[mod]));
}
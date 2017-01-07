var fs      = require('fs');
var modules = {};
var args    = [];

process.argv.slice(2).forEach(function (arg) {
    if(arg.indexOf(':') > -1) {
        var mod = arg.split(':');
        modules[mod[0] || mod[1]] = mod[1] || mode[0];
    } else {
        args.push(arg);
    }
});

fs.writeFile('./cmd', 'node -r ./n0de.js ' + args.join(' '),function (err) {
    if (err) throw err;
    fs.writeFile('./modules.json', JSON.stringify(modules), function (err) {
        if (err) throw err;
    })
});

var fs      = require('fs');
var path    = require('path');
var modules = {};
var args    = [];
var cmd     = '';
var install = false;
var toInst  = [];
var params  = { path : process.argv[2] };

process.argv.slice(3).forEach(function (arg) {
    if(arg == '-i') {
        install = true;
    } else if(arg.indexOf(':') > -1) {
        var mod = arg.split(':');
        modules[mod[0] || mod[1]] = mod[1] || mode[0];
    } else {
        args.push(arg);
    }
});

if(install && Object.keys(modules).length) {
    cmd = 'npm install ' + Object.keys(modules).map(function (mod) {
        return modules[mod];
    }) + ' && ';
}

cmd             = cmd + 'node -r ' + path.join(__dirname, './n0de.js') + ' ' + args.join(' ');
params.modules  = modules;

fs.writeFile(path.join(__dirname, './cmd'), cmd,function (err) {
    if (err) throw err;
    fs.writeFile(path.join(__dirname, './params.json'), JSON.stringify(params), function (err) {
        if (err) throw err;
    })
});

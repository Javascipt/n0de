n0de
====

A simple and easy way to run node with already required modules, usually used for manual testing.

## How to installed ?

```bash
$ [sudo] npm install -g n0de
```

## How does it work ?

```bash
$ n0de lo:lodash
> typeof lo
'function'
>
```

The module need to be installed otherwise you need to run the cmd with `-i` option
```bash
$ n0de -i :lodash
```

You can load multiple modules
```bash
$ n0de lo:lodash req:request chalk:chalk
```

You can use module name as the variable name
```bash
$ n0de :lodash
> typeof lodash
'function'
>
```

You can run a file with already required modules
```bash
$ n0de :lodash file.js
```


PS : The underscore for lodash doesn't work, feel free to contribute if you can fix it.
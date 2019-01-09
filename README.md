<a href="https://nodei.co/npm/ezpzdb/"><img src="https://nodei.co/npm/ezpzdb.png?compact=true"></a>
<h2>About</h2>
EZPZdb is an easy to use directory per entry, file per place and value database system which is for users looking to escape the JSON databases they're hooked on. This is not a permanent solution but is simply to give those people a slightly easier and redundant solution. Due to the file per place, in the rare chance of corruption only one single value could ever be corrupted.

EZPZdb is in it's beta stages so a lot of functionality is planned for the future.

<h2>Installing</h2>
Simply add the package and nothing else. It's a standalone package only requiring a built in node feature (fs)

```npm install ezpzdb```

<h2>Example</h2>

```js
const db = require('ezpzdb')('./database')

db.create("entry1", {
place1: "value1",
place2: "value2"
})

db.find('entry1','place1')
//Returns "value1"
//More examples and all functions found on official docs.
```
<h2> Links</h2>

[Basic Documentation](https://github.com/jpbberry/EZPZdb/wiki/Documentation)
[More Examples](https://github.com/jpbberry/EZPZdb/wiki/Examples)
[GitHub](https://github.com/jpbberry/ezpzdb)
[NPM](https://npmjs.com/package/ezpzdb)

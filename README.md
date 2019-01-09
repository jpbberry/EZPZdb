EZPZdb
Easy and Redundant 100% JavaScript database.
```
npm install ezpzdb
```
```
const db = require('ezpzdb')('./dirname')
```
  <h1>Examples</h1>
  
  ```js
  const db = require('ezpzdb')('./database')
  ```
<h2> Creating a new entry</h2>

```js
db.create('entry', {
  place1: value1,
  place2: value2
})
```
<h2> Getting values from the entry </h2>

```js
db.find('entry','place1')
//Expected response: value1
```
<h2> Setting independent values in an entry/Setting a new value</h2>

```js
db.set('entry','place1','value3')
```
<h2> Getting every value in an entry </h2>

```js
db.findAll('entry')
//Expected response: {place1: 'value3', place2: 'value2'}
```
<h2> Deleting an entry or place </h2>

```js
db.delete('entry','place2')
//Deletes single place
db.deleteAll('entry')
//Removes entry and all of it's values
```
<h2> Using multiple databases </h2>

```js
const db = require('ezpzdb')
//No using it as a function
var db1 = db('./database1')
var db2 = db('./database2')
//Both db1 and db2 are set to a databae depending on that directory
//All of the above and below methods/properties apply to all databases
//INFINITE amount of databases can be made, just use the same function
```
  <h1>Basic Docs:</h1>
 
 
  <h2>.create(file, value)</h2>
  <h3>Creates new entry out of json Object </h3>
  
File: string idicating entry name
       
Value: JSON Object (string+bool+int+float) 
 
 
  <h2>.set(File, Place, Value)</h2>
  <h3>Sets certain place as new value</h3>

File: string idicating entry name

Place: the entries key the location value is stored

Value: New value for Place


  <h2>.find(File, Place)</h2>
  <h3>Returns one value from the place in entry File</h3>

File: string idicating entry name

Place: Key of whos value you want to get


  <h2>.findAll(File)</h2>
  <h3>Returns any and all places with values in JSON object format (stringed)</h3>

File: string idicating entry name

  
  <h2>.delete(File,Place)</h2>
  <h3>Delete's specific place key in entry</h3>

File: string idicating entry name

Place: Key of whos value you want to delete
  
  
  <h2>.deleteAll(File)</h2>
  <h3>Remove all places and values and wipe entry completely</h3>

File: string idicating entry name

<h1>Properties</h1>
<h2>.directory</h2>

The folder in which the database is being stored

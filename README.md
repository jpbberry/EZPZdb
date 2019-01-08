EZPZdb
Easy and Redundant 100% JavaScript database.
```
npm install ezpzdb
```
```
const db = require('ezpzdb')('./dirname')
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

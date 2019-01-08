# EZPZdb
Easy and Redundant 100% JavaScript database.
  Basic Docs:
 
 
  <h2>.create(file, value)</h2>
  <h3>Creates new entree out of json Object </h3>
  
File: string idicating entree name
       
Value: JSON Object (string+bool+int+float) 
 
 
  <h2>.set(File, Place, Value)</h2>
  <h3>Sets certain place as new value</h3>

File: string idicating entree name

Place: the entrees key the location value is stored

Value: New value for Place


  <h2>.find(File, Place)</h2>
  <h3>Returns one value from the place in entree File</h3>

File: string idicating entree name

Place: Key of whos value you want to get


  <h2>.findAll(File)</h2>
  <h3>Returns any and all places with values in JSON object format (stringed)</h3>

File: string idicating entree name

  
  <h2>.delete(File,Place)</h2>
  <h3>Delete's specific place key in entree</h3>

File: string idicating entree name

Place: Key of whos value you want to delete
  
  
  <h2>.deleteAll(File)</h2>
  <h3>Remove all places and values and wipe entree completely</h3>

File: string idicating entree name

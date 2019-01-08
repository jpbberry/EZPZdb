# EZPZdb
Easy and Redundant 100% JavaScript database.
  Basic Docs:
 
 
  <h2>.create(file, value)</h2>
  <h3>Creates new entree out of json Object </h3>
  
File: string idicating entree name
       
Value: JSON Object (string+bool+int+float) 
 
 
  .set(File, Place, Value)
       File: string idicating entree name
       Place: the entrees key the location value is stored
       Value: New value for Place
  Sets certain place as new value
  <div />
  <div />
  .find(File, Place)
       File: string idicating entree name
       Place: Key of whos value you want to get
  Returns one value from the place in entree File
  <div />
  <div />
  .findAll(File)
       File: string idicating entree name
  Returns any and all places with values in JSON object format (stringed)
  <div />
  <div />
  
  .delete(File,Place)
       File: string idicating entree name
       Place: Key of whos value you want to delete
  Delete's specific place key in entree
  
  .deleteAll(File)
       File: string idicating entree name
  Remove all places and values and wipe entree completely

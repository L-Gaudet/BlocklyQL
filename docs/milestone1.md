# Running Code
https://l-gaudet.github.io/BlocklyQL/

To create runnable code, attach a SQL query block to an execute block. The SQL query block should SELECT an Attribute, FROM a Table. An optional WHERE block can be used to filter results. 

Once you've created a query, save the code using the save code button. This will download a file `query.js` to your computer. 

To run the code, make sure you have the MySQL javascript package installed (use `npm install mysql`). 

Then to run the program use `node query.js`.

This should connect to the server, query it, and return the results. 

**Warning:** It is possible to create queries that will return an error. The execute block will handle the errors, however, the blockly blocks can still be constructed so that errors occur. 
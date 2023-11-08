# BlocklyQL Prototype

Our presentation slides can be found [[here]]

To test our prototype, open the BlocklyQL page: https://l-gaudet.github.io/BlocklyQL/

To create runnable code, attach a SQL query block to an execute block. The SQL query block should SELECT an Attribute, FROM a Table. An optional WHERE block can be used to filter results. 

A good sample would be to add an `attribute` block with the value `all` to the `SELECT` input in the `SELECT_FROM` block. Then connect a `table` block with the `astronaut` value selected. Then you can add a `WHERE` block to the optional filter. Add an `attribute` block with the value `age`. Then attach a `comparison` block with the `<` value. And finally a `target` block and you can type the value `55`. This builds a query to return all of the entries from the astronaut table where the astronauts age is less than 55. To execute the query, we want to add the `SELECT_FROM` as the input to an `execute` block. Once we have that, we can generate the code and save it as a file. 

Currently, the program doesn't support running the query in browser and must be downlaoded and run locally.

Once you've created a query, save the code using the save code button. This will download a file `query.js` to your computer. 

To run the code, make sure you have the MySQL javascript package installed (use `npm install mysql`). 

Then to run the program use `node query.js`.

This should connect to the server, query it, and return the results. 

**Warning:** It is possible to create queries that will return an error. The execute block will handle the errors, however, the blockly blocks can still be constructed so that errors occur. 
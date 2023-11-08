# BlocklyQL

The running demo can be accessed live here: https://l-gaudet.github.io/BlocklyQL/

### Table of Contents
* [Description](#description)
* [Parsing, Interpretation, Compilation](#parsing-interpretation-compilation)
* [Testing BlocklyQL](#testing-blocklyql)
* [Setup & Running Locally](#setup--running-locally)

## Description

The main objective of the project is to develop a simplified SQL language using Blockly's API. In particular, we want people who don't have extensive programming knowledge to be able to query databases more easily.

We'll integrate Blockly with our project in a seamless way that makes it easy for users to pull and drop SQL operation blocks. This approach does not concern syntax complexity or errors, allowing users to create sophisticated queries of the database. To increase query efficiency, we will also implement real-time feedback.

Ensuring security is a top priority in our SQL-like language. We'll create a system that is capable of complying with the popular database while taking into account possible security concerns.

The ultimate goal of the project is to reduce entry barriers for database management, enable nonprogrammers to perform efficient queries in a database, and increase their ability to manage data across different user profiles.

By building this Blockly-based SQL-like language, we want to create a more inclusive environment for database querying, allowing individuals from various backgrounds to harness data management capabilities without requiring extensive coding expertise.

## Parsing, Interpretation, Compilation

This project implements parsing by transforming statement blocks into SQL querying operations. The DSL will have to check the integrity of the order of statement blocks to ensure they obey the SQL rules and won't return an error. 

## Testing BlocklyQL

BlocklyQL testing page is hosted at: https://l-gaudet.github.io/BlocklyQL/

To create runnable code, attach a SQL query block to an execute block. The SQL query block should SELECT an Attribute, FROM a Table. An optional WHERE block can be used to filter results. 

A good sample would be to add an `attribute` block with the value `all` to the `SELECT` input in the `SELECT_FROM` block. Then connect a `table` block with the `astronaut` value selected. Then you can add a `WHERE` block to the optional filter. Add an `attribute` block with the value `age`. Then attach a `comparison` block with the `<` value. And finally a `target` block and you can type the value `55`. This builds a query to return all of the entries from the astronaut table where the astronauts age is less than 55. To execute the query, we want to add the `SELECT_FROM` as the input to an `execute` block. Once we have that, we can generate the code and save it as a file. 

Currently, the program doesn't support running the query in browser and must be downlaoded and run locally.

Once you've created a query, save the code using the save code button. This will download a file `query.js` to your computer. 

To run the code, make sure you have the MySQL javascript package installed (use `npm install mysql`). 

Then to run the program use `node query.js`.

This should connect to the server, query it, and return the results. 

**Warning:** It is possible to create queries that will return an error. The execute block will handle the errors, however, the blockly blocks can still be constructed so that errors occur. 


## Setup & Running Locally

To setup and start working with BlocklyQL locally, start by forking the repository and locally cloning it.

To interface with BlocklyQL locally, copy the path to `index.html`, and paste it in your web browser. This will open the file path and give you the same interace as the hosted demo, only it will be using your local version of BlocklyQL.

To setup with your own database, open `src/custom-blocks.js` and edit the code generation for the `execution` block. Initially you should see the following code snippet inside the code generation block:
```
    var con = mysql.createConnection({
        host: "db4free.net",
        port: "3306",
        user: "blocklyqluser",
        password: "dapWum-cesqyj-pomfo9",
        database: "blocklyql"
    });
```
To use your own database, modify the connection configuation information here. Be sure to modify the `attribute` and `table` blocks to include the names of the tables and attributes in your database. 

Optionally, you can continue to use the default configuration for testing purposes. You can add tables, attributes, and entries as you'd like. However, be sure to update the corresonding blocks and create a pull request so that the changes can be reflected in our live-hosted demo. 
# BlocklyQL Design

## SQL Overview

SQL provides **CRUD** operations to query and manipulate data stored in relational databases

### CRUD Operations

**CREATE** - new tables, records, and rules in our database

**READ** - tables, records, and rules from our database

**UPDATE** - tables, records and rules currently in our database

**DELETE** - existing tables, records, and rules from our database

SQL operations can be split into 3 categories:
- Data Definition Language (DDL)
- Data Manipulation Language (DML)
- Data Query Language (DQL)

### DDL - Data Definition Language
Defines the syntax for creating and modifying database objects in an RDBMS (Relational Database Management System)

Key operations include:

- **CREATE** - create new db objects

- **ALTER** - alter existing db objects

- **DROP** - remove existing db objects

- **TRUNCATE** - delete records from db objects

### DML - Data Manipulation Language
Defines syntax to add, remove, and update data from existing tables.

Operations include:

- **INSERT** - insert records into db objects

- **UPDATE** - update records in db objects

- **DELETE** - delete records from db objects

### DQL - Data Querying Language
Defines syntax for querying the database, returning records from a specified db object, based on specified filters. DQL is based off of relational algebra. 

A query must begin with the following two calls:
- **SELECT** - what is being selected and returned in the db object
- **FROM** - from what specified db object the query will look in

Each query can use additional operations to find the specific data.
Operations include:
- **WHERE** - specify conditions that different attributes of the record need to match in order to be returned
- **GROUP BY** - group records by specified attributes
- **HAVING** - specify conditions for attributes in a GROUP BY

## BlocklyQL Overview

BlocklyQL development will first focus on DQL, then DML, eventually getting to DDL if time permits it. 

On the backend of BlocklyQL there will be an example database that is connected which can be queried for learning and experimentation. 

### First Blocks

- **SELECT FROM** - This block will have a required field for what is selected, and a mandatory field for the db object from which the data will be fetched. Additional blocks can be attached to the query to filter results.

- **TABLE** - This block can be attached to the FROM part of a SELECT FROM block. Selects which db object should be queried.

- **WHERE** - This block can be attached to a SELECT FROM block to add conditions which filter the data

- **ATTRIBUTE** - Attribute block will represent any of the attributes of the db object

- **COMPARISON** - takes two arguments and allows for comparison using operators: >, <, ==, !=
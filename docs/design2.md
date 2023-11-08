# Code Execution
BlocklyQL is designed to work in unison with our back-end **SQL** server which will contain a sample dataset that can be accessed by anyone.
The blocks will each carry a function that can be run on a database in order to fulfill queries in a simple manner to facilitate access to those with little to no SQL experience.

## Pseudo code example:
 - **SELECT FROM**

        def select_from(attributes, table, filters = ""):
          db = load_database()
          query = "SELECT " + attributes + " FROM " + table + " " + filters + ";" 
          db.execute(query)

This code outlines the code for the select from function. The funtion takes attributes as an input as well as the table we want to grab from and filters for the query.

 - **TABLE**

        def Table(name):
          return(name)
  
This function takes in table name from drop down menu and returns it in order to perform queries on it later.

 - **WHERE**

        def Where(attribute, comparison, target)
          return "WHERE " + attribute + " " + comparison + " " + target

This funtion takes an attribute and a comparison such as LESS or MORE than and compares it with target to filter in a query.

 - **ATTRIBUTE**

        def Attribute(name):
          return name

This function will take an attribute name from a drop down menu which will then be output and used in the **SELECT** or **WHERE** functions

 - **COMPARISON**

        def comparison(type):
          return type

The comparison function will let the user choose from a drop down menu of different comparison types and return the chosen type so it can be used for filtering in the **WHERE** function
  
## The Database

The database we will use will be hosted on a cloud service which will be connected to the blockly program using their API. The database will be composed of three premade tables, normalized to the third normal form. Each table will contain a number of attributes and some pre-existing entries so that the user is able to interact with the data and create queries of their own.

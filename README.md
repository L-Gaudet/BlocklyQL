# BlocklyQL

### Authors: 
- Lucas Gaudet 
- Lawrence Leymarie

### Description

The main objective of the project is to develop a simplified SQL language using Blockly's API. In particular, we want people who don't have extensive programming knowledge to be able to query databases more easily.

We'll integrate Blockly with our project in a seamless way that makes it easy for users to pull and drop SQL operation blocks. This approach does not concern syntax complexity or errors, allowing users to create sophisticated queries of the database. To increase query efficiency, we will also implement real-time feedback.

Ensuring security is a top priority in our SQL-like language. We'll create a system that is capable of complying with the popular database while taking into account possible security concerns.

The ultimate goal of the project is to reduce entry barriers for database management, enable nonprogrammers to perform efficient queries in a database, and increase their ability to manage data across different user profiles.

By building this Blockly-based SQL-like language, we want to create a more inclusive environment for database querying, allowing individuals from various backgrounds to harness data management capabilities without requiring extensive coding expertise.

### Parsing, Interpretation, Compilation

This project implements parsing by transforming statement blocks into SQL querying operations. The DSL will have to check the integrity of the order of statement blocks to ensure they obey the SQL rules and won't return an error. 
# pg 
Template for working with the Postrgess DB

# Requirements
Must installed: node.js

# Getting Started
Clone this repository on your local mashine

    $ git clone https://github.com/shark-x/pg

Install all dependencies

    $ npm install

Create a file credentials.json at the root of the projec. Add the settings for db connection. 

```json
{
    "host": "",
    "port": "",
    "user": "postgress",
    "password": "",
    "dbName": "myDB"
}
```
Edit parameter tableName in testConnect.js on your table.
```javascript
const credentials = require('./credentials.json');
const DBPostgress = require('./db');

(async () => {

    const pg = new DBPostgress(credentials);
    const tableName = 'YOUR_TABLE_NAME';

    try{

        pg.openConnection();
        const result = await pg.getAllFromTable(tableName);
        console.log(`All information from ${tableName} table >>> \n`, result);

    } 
    finally{    

        pg.closeConnection();

    }
})()
```

Run next command

    $ node testConnect.js
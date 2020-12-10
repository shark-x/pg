const credentials = require('./credentials.json');
const DBPostgress = require('./db');

(async () => {

    const pg = new DBPostgress(credentials);
    const tableName = 'YOUR_TABLE_NAME';

    try {
        pg.openConnection();
        const result = await pg.getAllFromTable(tableName);
        console.log(`All information from ${tableName} table >>> \n`, result);
    }
    finally {
        pg.closeConnection();
    }
})()
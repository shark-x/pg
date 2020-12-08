const credentials = require('./credentials.json')
const DBPostgress = require('./db')
const pg = new DBPostgress(credentials)
const tableName = 'Users'

(async () => {

    await pg.openConnection()

    const result = await pg.getAllFromTable(tableName)
    console.log(`All information from ${tableName} table >>> \n`, result)

    await pg.closeConnection()

})()
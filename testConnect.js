const credentials = require('./credentials.json')
const DBPostgress = require('./db')
const pg = new DBPostgress(credentials)

(async () => {

    await pg.openConnection()

    const result = await pg.getAllFromTable('Users')
    console.log(result)

    await pg.closeConnection()


})()
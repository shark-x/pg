const { Client } = require('pg')

/**
 * instance of DB classes for connect to Postgress DB
 */

module.exports = class DBPostgress {

    constructor(credentials = null) {
        this.client = new Client({
            user: credentials.user,
            host: credentials.host,
            database: credentials.dbName,
            password: credentials.password,
            port: credentials.port,
        })
    }

    async openConnection() {
        await this.client.open()
    }

    async closeConnection() {
        await this.client.end()
    }

    async getAllFromTable(tableName = null){
        try{
            const queryStr = `SELECT * FROM {1}`
            const values = [tableName]
            const response = await this.client.query(queryStr, values)
            return response.rows[0]
        } catch (err) {
            new Error(err)
        }
    }
}
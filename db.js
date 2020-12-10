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
        });
    }

    openConnection() {
        this.client.connect();
    }

    closeConnection() {
        this.client.end();
    }

    async getAllFromTable(tableName=null){
        if(!tableName) return new Error('Не передан параметр tableName')

        const queryString = `select * from "${tableName}"`;
        const result = await this.client.query(queryString);
        return result.rows;
    }
}
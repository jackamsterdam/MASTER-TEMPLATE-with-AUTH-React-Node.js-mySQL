import mysql from 'mysql'
import config from '../01-utils/config'

// Create a pool of connections for connecting to MySQL database:
const connection = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
})

function execute(sql: string, values?: any[]): Promise<any> {
    // Promisify sql access:
    return new Promise<any>((resolve, reject) => {
        // Execute SQL query:
        connection.query(sql, values, (err, result) => {

            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}


export default {
    execute
}
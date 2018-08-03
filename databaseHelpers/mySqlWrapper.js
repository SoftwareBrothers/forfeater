var db = require('../models');
var User = db.sequelize.user;
module.exports = {

    query: query
}

//object which holds the connection to the db
let connection = null

/**
 * Create the connection to the db
 */
function initConnection() {

    //set the global connection object
    connection = mySql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'databasePassword',
        database: 'oAuth2Test'
    })
}

/**
 * executes the specified sql query and provides a callback which is given
 * with the results in a DataResponseObject
 *
 * @param queryString
 * @param callback - takes a DataResponseObject
 */
function query(queryString, callback){

    //init the connection object. Needs to be done everytime as we call end()
    //on the connection after the call is complete
    // initConnection()

    //connect to the db
    // connection.connect()
    //
    // //execute the query and collect the results in the callback
    // connection.query(queryString, function(error, results, fields){
    //
    //     console.log('mySql: query: error is: ', error, ' and results are: ', results);
    //
    //     //disconnect from the method
    //     connection.end();
    //
    //     //send the response in the callback
    //     callback(createDataResponseObject(error, results))
    // })

    db.sequelize.query(queryString, { type: db.sequelize.QueryTypes.SELECT}).then(results => {
        // console.log("\n\n\n\n");
        // console.log('query result');
        // console.log(results);
        // console.log("\n\n\n\n");
        callback(createDataResponseObject(false, results))
    });

}

/**
 * creates and returns a DataResponseObject made out of the specified parameters.
 * A DataResponseObject has two variables. An error which is a boolean and the results of the query.
 *
 * @param error
 * @param results
 * @return {DataResponseObject<{error, results}>}
 */
function createDataResponseObject(error, results) {

    return {
        error: error,
        results: results === undefined ? null : results === null ? null : results
    }
}

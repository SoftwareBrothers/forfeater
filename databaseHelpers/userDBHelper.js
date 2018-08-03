let mySqlConnection;

module.exports = injectedMySqlConnection => {

    mySqlConnection = injectedMySqlConnection

    return {

        registerUserInDB: registerUserInDB,
        getUserFromCrentials: getUserFromCrentials,
        doesUserExist: doesUserExist
    }
}

/**
 * attempts to register a user in the DB with the specified details.
 * it provides the results in the specified callback which takes a
 * DataResponseObject as its only parameter
 *
 * @param username
 * @param password
 * @param registrationCallback - takes a DataResponseObject
 */
function registerUserInDB(email, password, registrationCallback){

    //create query using the data in the req.body to register the user in the db
    const registerUserQuery = `INSERT INTO users (email, password) VALUES ('${email}', SHA('${password}'))`

    //execute the query to register the user
    mySqlConnection.query(registerUserQuery, registrationCallback)
}

/**
 * Gets the user with the specified email and password.
 * It provides the results in a callback which takes an:
 * an error object which will be set to null if there is no error.
 * and a user object which will be null if there is no user
 *
 * @param email
 * @param password
 * @param callback - takes an error and a user object
 */
function getUserFromCrentials(email, password, callback) {

    //create query using the data in the req.body to register the user in the db
    const getUserQuery = "SELECT * FROM users WHERE email = '" + email + "' AND password = '" + password + "'";

    console.log('getUserFromCrentials query is: ', getUserQuery);

    //execute the query to get the user
    mySqlConnection.query(getUserQuery, (dataResponseObject) => {

        // console.log("\n\n\n\n\n\n");
        // console.log("=============================================");
        // console.log(dataResponseObject.results[0]);
        // console.log("\n");
        // console.log(dataResponseObject.results);
        // console.log("=============================================");

        console.log("\n\n\n\n\n\n");
        //pass in the error which may be null and pass the results object which we get the user from if it is not null
        callback(false, dataResponseObject.results !== null ?  dataResponseObject.results[0] : null)
        // callback(false, dataResponseObject.results !== null && dataResponseObject.results.length  === 1 ?  dataResponseObject.results[0] : null)
    })
}

/**
 * Determines whether or not user with the specified email exists.
 * It provides the results in a callback which takes 2 parameters:
 * an error object which will be set to null if there is no error, and
 * secondly a boolean value which says whether or the user exists.
 * The boolean value is set to true if the user exists else it's set
 * to false or it will be null if the results object is null.
 *
 * @param email
 * @param callback - takes an error and a boolean value indicating
 *                   whether a user exists
 */
function doesUserExist(email, callback) {

    //create query to check if the user already exists
    const doesUserExistQuery = `SELECT * FROM users WHERE email = '${email}'`

    //holds the results  from the query
    const sqlCallback = (dataResponseObject) => {

        //calculate if user exists or assign null if results is null
        const doesUserExist = dataResponseObject.results !== null ? dataResponseObject.results.length > 0 ? true : false : null

        //check if there are any users with this email and return the appropriate value
        callback(dataResponseObject.error, doesUserExist)
    }

    //execute the query to check if the user exists
    mySqlConnection.query(doesUserExistQuery, sqlCallback)
}

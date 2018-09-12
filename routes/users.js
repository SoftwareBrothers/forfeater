var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');


module.exports = function (app) {
    /**
     * @api {get} /users list
     *
     * @apiDescription Get all users
     * 
     * @apiName list
     * @apiGroup User
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiSuccess {Number} id Id
     * @apiSuccess {String} role Role name
     * @apiSuccess {String} firstName first name
     * @apiSuccess {String} lastName last name
     * @apiSuccess {String} email Email
     * @apiSuccess {String} scope Scope
     * @apiSuccess {String} password Hased Argon2 password
     * @apiSuccess {DateTime} createdAt  Created At
     * @apiSuccess {DateTime} updatedAt UpdatedAt
     */
    router.get('/', app.oauth.authorise(), user_controller.list);

    /**
     * @api {post} /users store
     *
     * @apiDescription Create user
     * 
     * @apiName store
     * @apiGroup User
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiParam {String} role Role name
     * @apiParam {String} firstName first name
     * @apiParam {String} lastName last name
     * @apiParam {String} email Email
     * @apiParam {String} password Password
     */
    router.post('/', app.oauth.authorise(), user_controller.store);

    /**
     * @api {get} /users/:id show
     *
     * @apiDescription Get user
     * 
     * @apiName show
     * @apiGroup User
     * 
     * @apiHeader {string} Authorization Bearer
     * 
     * @apiSuccess {Number} id Id
     * @apiSuccess {String} role Role name
     * @apiSuccess {String} firstName first name
     * @apiSuccess {String} lastName last name
     * @apiSuccess {String} email Email
     * @apiSuccess {String} scope Scope
     * @apiSuccess {String} password Hased Argon2 password
     * @apiSuccess {DateTime} createdAt  Created At
     * @apiSuccess {DateTime} updatedAt UpdatedAt
     */
    router.get('/:id', app.oauth.authorise(), user_controller.show);
    router.put('/:id/password', app.oauth.authorise(), user_controller.changePassword);
    router.patch('/:id', app.oauth.authorise(), user_controller.update);
    router.delete('/:id', app.oauth.authorise(), user_controller.delete);

    return router;
};
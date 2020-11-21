'use strict';
const Validator = require("validatorjs");
const UserValidator = {
    /**
     * @param {Object} obj The validation object
     * @return {Object}
     * */
    validateAccount(obj) {
        const rules = {
            email: 'required|string',
            manager: 'required|string',
            password: 'required|string',
            fullname: 'required|string',
        };
        const validator = new Validator(obj, rules);
        return {
            errors: validator.errors.all(),
            passed: validator.passes(),
        }
    },
};


module.exports = UserValidator;
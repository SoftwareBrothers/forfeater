var store = {
    role: {
        in: ['body'],
        isLength: {
            errorMessage: 'Role is required',
            options: { min: 1 }
            },
        trim: true
        },
    firstName: {
        in: ['body'],
        isLength: {
            errorMessage: 'First name is required',
            options: { min: 1 }
            },
        trim: true
    },
    lastName: {
        in: ['body'],
        isLength: {
            errorMessage: 'Last name is required',
            options: { min: 1 }
            },
        trim: true
    },
    email: {
        in: ['body'],
        isEmail: true,
        trim: true
    }
}

var update = {
    role: {
        in: ['body'],
        isLength: {
            errorMessage: 'Role is required',
            options: { min: 1 }
            },
        trim: true,
        },
    firstName: {
        in: ['body'],
        isLength: {
            errorMessage: 'First name is required',
            options: { min: 1 }
            },
        trim: true
    },
    lastName: {
        in: ['body'],
        isLength: {
            errorMessage: 'Last name is required',
            options: { min: 1 }
            },
        trim: true
    },
    email: {
        in: ['body'],
        isEmail: true,
        trim: true
    }
}

module.exports = {store, update};
var store = {
    vendorId: {
        in: ['body'],
        isLength: {
            errorMessage: 'Vendor id is required',
            options: { min: 1 }
        },
        trim: true
    },
    userId: {
        in: ['body'],
        isLength: {
            errorMessage: 'User id is required',
            options: { min: 1 }
        },
        trim: true
    },
    deadlineAt: {
        in: ['body'],
        isLength: {
            errorMessage: 'Deadline is required',
            options: { min: 1 }
        },
        trim: true
    },
};

var update = {
    vendorId: {
        in: ['body'],
        isLength: {
            errorMessage: 'Vendor id is required',
            options: { min: 1 }
        },
        trim: true
    },
    userId: {
        in: ['body'],
        isLength: {
            errorMessage: 'User id is required',
            options: { min: 1 }
        },
        trim: true
    },
    deadlineAt: {
        in: ['body'],
        isLength: {
            errorMessage: 'Deadline is required',
            options: { min: 1 }
        },
        trim: true
    },
};

module.exports = {store, update};
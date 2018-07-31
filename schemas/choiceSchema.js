var store = {
    userId: {
        in: ['body'],
        isLength: {
            errorMessage: 'User id is required',
            options: { min: 1 }
        },
        trim: true
    },
    productId: {
        in: ['body'],
        isLength: {
            errorMessage: 'Product id is required',
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

var store_rating = {
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
            errorMessage: 'Used id is required',
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

module.exports = {store, store_rating};
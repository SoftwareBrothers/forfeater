var store = {
    name: {
        in: ['body'],
        isLength: {
            errorMessage: 'Name is required',
            options: { min: 1 }
        },
        trim: true
    },
    vendorId: {
        in: ['body'],
        isLength: {
            errorMessage: 'Vendor id is required',
            options: { min: 1 }
        },
        trim: true
    }
};

var update = {
    name: {
        in: ['body'],
        isLength: {
            errorMessage: 'Name is required',
            options: { min: 1 }
        },
        trim: true
    },
    id: {
        in: ['params'],
        isLength: {
            errorMessage: 'Vendor id is required',
            options: { min: 1 }
        },
        trim: true
    }
};

module.exports = {store, update};
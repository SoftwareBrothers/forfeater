var store = {
    productId: {
        in: ['body'],
        isLength: {
            errorMessage: 'Product id is required',
            options: { min: 1 }
        },
        trim: true
    }
};

var store_rating = {
    mark: {
        in: ['body'],
        isLength: {
            errorMessage: 'Score is required',
            options: { min: 1 }
        },
        trim: true
    },
};

module.exports = {store, store_rating};
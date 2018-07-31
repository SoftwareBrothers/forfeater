var store = {
    name: {
        in: ['body'],
        isLength: {
            errorMessage: 'Name is required',
            options: { min: 1 }
        },
        trim: true
    },
    url: {
        in: ['body'],
        isLength: {
            errorMessage: 'Url name is required',
            options: { min: 1 }
        },
        trim: true
    },
};

module.exports = {store};
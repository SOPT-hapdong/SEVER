const util = {
    successTrue: (message, data, statusCode) => {
        return {
            status: statusCode,
            success: true,
            message: message,
            data: data
        }
    },
    successFalse: (message, statusCode) => {
        return {
            status: statusCode,
            success: false,
            message: message
        }
    }
};

module.exports = util;

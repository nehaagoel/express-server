export default ((req, res, next) => {
        next({
            error: 'Not found',
            message: 'error',
            status: 500
        });
    });
const errorHandler = (( err, req, res, next) => {
    console.log ('Error', err);
    res.send( { error: err.error,
        message: err.message,
        status: err.status,
        timestamp: new Date()
        });
});
export default errorHandler;
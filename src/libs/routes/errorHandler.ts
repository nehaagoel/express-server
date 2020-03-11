const errorHandler = (( err, req, res, next) => {
    console.log ('Error', err);
    const { error, message, status } = err;
    res.send( { error: error || 'Not Found',
        message: message || 'Error',
        status: status || 500,
        timestamp: new Date()
        });
});
export default errorHandler;
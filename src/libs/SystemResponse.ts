class SystemResponse {
    static success = (res, data, message = 'Success') => {
        return res.status(200).send({
            status: 'OKAY',
            message,
            data
        });
    }
}
export default SystemResponse;
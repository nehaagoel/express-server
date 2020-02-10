class SystemResponse {
    static success = (res, data, message = 'Success') => {
        return res.status(200).send({
            status: 'OKAY',
            message,
            data
        });
    }
    static error = (res: any , data: any, message: any = 'error occured'): any => {
        return res.status(500).send({
            status: 'Not OKAY',
            message,
            data

        });
      }
}
export default SystemResponse;
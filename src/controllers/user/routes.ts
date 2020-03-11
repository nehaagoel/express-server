import { Response, Router } from 'express';
import UserController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import { IRequest } from '../../libs/interface';
import config from './validation';

const UserRouter = Router();

/**
 * @swagger
 *
 *  definitions:
 *      Login:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: neha.goel@successive.tech
 *          password:
 *              type: string
 *              example: training@123
 *      Token:
 *           type: object
 *           properties:
 *               status:
 *                   example: Ok
 *               message:
 *                   example: Success
 *               data:
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5laGEuZ29lbEBzdWNjZXNzaXZlLnRlY2giLCJpZCI6IjVlNGEzNmJjNjQ4MjRiMWY4MGI3MzBjZCIsImlhdCI6MTU4MjU0OTIyN30.cFV6YYlfmhJ1yL3GyIIgb-PjMTpDNVICd5KGi1ENpVI
 */


/**
 * @swagger
 *
 * /api/user/me:
 *   get:
 *     description: Current user Details.
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 *         schema:
 *             $ref: '#/definitions/TraineeResponse'
 */

UserRouter.route('/me')
.get(authmiddleware('Users', 'all'), validationHandler(config.get), (req: IRequest, res: Response) => {
    res.send(req.user);
});

/**
 * @swagger
 *
 * /api/user/login:
 *   post:
 *     description: Login Credentials
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: User email and password
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *              $ref: '#/definitions/Token'
 *       422:
 *         description: invalid email or password
 *         schema:
 *          oneOf:
 *          properties:
 *              status:
 *                  example: "Bad Request"
 *              message:
 *                  example: Password does not match
 *              err:
 *                  example: Password is incorrect
 */


UserRouter.route('/login')
.post(UserController.login);

export default UserRouter;
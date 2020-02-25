import { Router } from 'express';
import TraineeController from './Controller';
import validationHandler from '../../libs/routes/validationHandler';
import authmiddleware from '../../libs/routes/authMiddleWare';
import config from './validation';

const router = Router();


/**
 * @swagger
 *
 *  definitions:
 *      TraineePost:
 *        type: object
 *        properties:
 *          email:
 *              type: string
 *              example: neha.goel@successive.tech
 *          name:
 *              type: string
 *              example: neha
 *          password:
 *              type: string
 *              example: train@12
 *          mobileNumber:
 *              type: number
 *              example: 9973793621
 *          address:
 *              type: string
 *              example: Noida
 *          role:
 *               type: string
 *               example: trainee
 *          hobbies:
 *               type: array
 *               example: ["Touring"]
 *
 *      TraineeResponse:
 *        type: object
 *        properties:
 *          _id:
 *              example: 5e4a36bc64824b1f80b730cd
 *          email:
 *              type: string
 *              example: neha.goel@successive.tech
 *          name:
 *              type: string
 *              example: Nehaa
 *          mobileNumber:
 *              type: number
 *              example: 9975135785
 *          address:
 *              type: string
 *              example: Delhi
 *          dob:
 *              type: Date
 *              example: 02/08/1998
 *          role:
 *              type: string
 *              example: trainee
 *          hobbies:
 *              type: array
 *              example: ["singing", "hiking"]
 *          originalId:
 *              example: 5e4a36bc64824b1f80b730cd
 *          createdBy:
 *              example: 5e45404398e86d576ad964e6
 *          createdAt:
 *              example: 2020-02-20T11:33:39.325Z
 *          v:
 *              example:0
 *      Unauthorized:
 *        type: object
 *        properties:
 *          error:
 *              example: Unauthorized
 *          message:
 *              example: Token not found
 *          status:
 *              example: 403
 *          timestamp:
 *               example: 2019-03-10T19:51:37.066Z
 *
 */

router.route('/')

/**
 * @swagger
 *
 * /api/trainee:
 *   get:
 *     description: List of all the trainees
 *     security:
 *       - Bearer: []
 *     consumes:
 *       - application/json
 *     produces:
 *        - application/json
 *     parameters:
 *       - name: skip
 *         description: Number of elements to skip
 *         in: query
 *         required: false
 *         type: number
 *       - name: limit
 *         description: number of elements to show
 *         in: query
 *         required: false
 *         type: number
 *       - name: sort
 *         description: Elements to sort By
 *         in: query
 *         required: false
 *         type: string
 *       - name: searchBy
 *         description: Element to search
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: Trainee List
 *         schema:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: 'Trainee's List , Number of trainees: 2'
 *                  count:
 *                      example: 2
 *                  data:
 *                      type: object
 *                      allOf:
 *                              - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

.get(authmiddleware('getUsers', 'all'), validationHandler(config.get), TraineeController.list)

/**
 * @swagger
 *
 * /api/trainee:
 *   post:
 *     description: Returns the success reponse on creation
 *     security:
 *          - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *             $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Created Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: Trainee Created Successfully
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *                      properties:
 *                              password:
 *                                  type: string
 *                                  example: "*****"
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

.post(authmiddleware('getUsers', 'all'), validationHandler(config.create), TraineeController.create)

/**
 * @swagger
 *
 * /api/trainee:
 *   put:
 *     description: Returns the success reponse on Updation
 *     security:
 *          - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User
 *         description: Data of users.
 *         in: body
 *         required: true
 *         type: object
 *         schema:
 *          oneOf:
 *          properties:
 *              id:
 *                  example: 5e4e6e93c095d84d34045a30
 *              dataToUpdate:
 *                  type: object
 *                  allOf:
 *                      - $ref: '#/definitions/TraineePost'
 *     responses:
 *       200:
 *         description: User Updated Successfully
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: Okay
 *                  message:
 *                      example: User data successfully Updated
 *                  data:
 *                      type: object
 *                      allOf:
 *                          - $ref: '#/definitions/TraineeResponse'
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

.put(authmiddleware('getUsers', 'all'), validationHandler(config.update), TraineeController.update);
router.route('/:id')

/**
 * @swagger
 *
 * /api/trainee/{id}:
 *   delete:
 *     description: Returns the success reponse on deletion
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID of user to be deleted.
 *         in: path
 *         required: true
 *         type: string
 *         example: 5e4e6e93c095d84d34045a30
 *     responses:
 *       200:
 *         description: Data deleted
 *         schema:
 *              oneOf:
 *              properties:
 *                  status:
 *                      example: Ok
 *              message:
 *                      example: User data successfully deleted
 *              data:
 *                      example: 5e4e6e93c095d84d34045a30
 *       403:
 *         description: unauthorised access
 *         schema:
 *              $ref: '#/definitions/Unauthorized'
 */

.delete(authmiddleware('getUsers', 'all'), validationHandler(config.delete), TraineeController.delete);
export default router;
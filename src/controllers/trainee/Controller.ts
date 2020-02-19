import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import UserRepository from '../../repositories/user/UserRepository';
import SystemResponse from '../../libs/SystemResponse';
class TraineeController {
    static instance;
    private userRepository: UserRepository = new UserRepository();
    static getInstance() {
        if (TraineeController.instance)
         return TraineeController;
        TraineeController.instance = new TraineeController();
          return TraineeController.instance;
    }
    create = async (req: Request, res: Response) => {
        console.log('::::CREATE TRAINEE:::::');
        try {
            const traineeData = req.body;
            const hash = await bcrypt.hash(traineeData.password, 10);
            const trainee = await this.userRepository.create({ ...traineeData, password: hash});
                return SystemResponse.success(res, trainee, 'Trainee Added Successfully');
        }
        catch (error) {
                return SystemResponse.error(res, error, 'Trainee Added UnSuccessfull');
            }
    }
    update = async (req: Request, res: Response) => {
        console.log('::::UPDATE TRAINEE:::::');
        try {
            const traineeData = req.body;
        const trainee = await this.userRepository.update1(traineeData.id, traineeData);
                return SystemResponse.success(res, trainee, 'Trainee Updated Successfully');
        }
        catch (error) {
                return SystemResponse.error(res, error, 'Trainee Update UnSuccessfull');
            }
    }
    list = async (req: Request, res: Response) => {
        console.log(':::TRAINEE LIST:::::');
        try {
            let sort: any;
            if (req.query.sort === 'email') {
                sort = {email: 1 };
            }
            else if (req.query.sort === 'name') {
                sort = {name: 1 };
            }
            else
            sort = { updatedAt: 1 };
            const trainee = await this.userRepository.list1('trainee', sort, req.query.skip, req.query.limit);
            const countTrainee = await this.userRepository.countTrainee();
            console.log('count is ' , countTrainee);
            const data = {
                count: countTrainee,
                record: trainee
            };
                return SystemResponse.success(res, data, 'List Of Trainee');
        }
        catch (error) {
                return SystemResponse.error(res, error, 'No List Exist');
            }
    }
    delete = async (req: Request, res: Response) => {
        console.log('::::Delete TRAINEE:::::');
        try {
            const traineeData = req.params;
            const trainee = await this.userRepository.delete1(traineeData.id);
                return SystemResponse.success(res, trainee, 'Trainee Deleted Successfully');
        }
        catch (error) {
                return SystemResponse.error(res, error, 'Trainee Delete UnSuccessfull');
            }
    }
}
export default TraineeController.getInstance();
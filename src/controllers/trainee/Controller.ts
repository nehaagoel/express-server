import { Request, Response } from 'express';
class TraineeController {
    static instance;
    static getInstance() {
        if (TraineeController.instance)
         return TraineeController;
        TraineeController.instance = new TraineeController();
          return TraineeController.instance;
    }
    create = (req: Request, res: Response) => {
        console.log('CREATE TRAINEE');
        res.send({
            status: 'OK',
            message: 'Trainee Created Successfully',
            data: {
            id: 1,
            name: 'Neha',
            address: 'Noida'
        }
    });
    }
    update = (req: Request, res: Response) => {
        console.log('UPDATE TRAINEE', req.body);
        res.send({
            status: 'OK',
            message: 'Trainee Updated Successfully',
            data: {
            id: 2,
            name: 'Neha',
            address: 'Delhi'
        }
    });
    }
    delete = (req: Request, res: Response) => {
        console.log('DELETE TRAINEE');
        res.send({
            status: 'OK',
            message: 'Trainee Deleted Successfully',
            data: {
            id: 1,
            name: 'Neha',
            address: 'Noida'
        }
    });
    }
    list = (req: Request, res: Response) => {
        console.log('LIST OF TRAINEE');
        res.send({
            status: 'OK',
            message: 'Trainee Listed Successfully',
            data: [{
            id: 1,
            name: 'Neha',
            address: 'Noida'
            }, {
            id: 2,
            name: 'Jenny',
            address: 'GZB'
        }]
    });
}
}
export default TraineeController.getInstance();
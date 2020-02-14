import * as bcrypt from 'bcrypt';
import config from '../config/configuration';
import UserRepository from '../repositories/user/UserRepository';

const userRepository = new UserRepository();
export default () => {
    bcrypt.hash(config.password, 10, (err, hash) => {
        console.log('hash is  ', hash);
        if (err) {
            console.log(err);
        }
        else {
            console.log('Data is seeding');
        }
    const user = {
        id: String,
        name: 'Trainee',
        address: 'Noida',
        email: 'neha.goel@successive.tech',
        password: hash,
        dob: new Date('02/08/1998'),
        mobileNumber: 9958839783,
        role: 'head-trainer',
        hobbies: ['Touring']
    };
    userRepository.count().then((count: number): any => {

        console.log('Count of Users is', count );
        if (!count) {
                return userRepository.create(user)
            .then((res) => {
                console.log('User Seeded Successfully', res);
            });
        }
    else {
            console.log('User is Already Seeded');
        }
    }).catch((error) => { console.error(error);
    });

});
};
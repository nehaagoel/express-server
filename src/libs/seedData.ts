import UserRepository from '../repositories/user/UserRepository';
const userRepository = new UserRepository();
export default () => {
    const user = {
        id: String,
        name: 'Trainee',
        address: 'Noida',
        email: 'neha.goel@successive.tech',
        dob: new Date('02/08/1998'),
        mobileNumber: 9958839783,
        hobbies: ['Touring']
    };
    userRepository.count().then((count: number): any => {

        console.log('Count of Users is', count );

        if (!count) {
            return userRepository.create(user)
            .then((res) => {
                console.log('User Seeded Successfully', res);
            });
        } else {
            console.log('User is Already Seeded');
        }
    }).catch((err: any) =>  console.error(err));

};
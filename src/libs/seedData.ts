import UserRepository from '../repositories/user/UserRepository';
const userRepository = new UserRepository();
export default () => {
    const user = {
        id: String,
        name: 'Head Trainer',
        address: 'Noida',
        email: 'vinay@successive.tech',
        dob: new Date('27/12/1993'),
        mobileNumber: 9875312578,
        hobbies: ['String']
    };
    userRepository.create(user).then((res) => {
        console.log('User Created Successfully', res);
    }).catch((err) => console.error(err));
};
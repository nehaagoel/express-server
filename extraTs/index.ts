import { diamond, equilateral } from './patterns';
import { hasPermission, validateUsers } from './utils';
diamond(5);
equilateral(10);
console.log(hasPermission('getUsers', 'trainee', 'read'));
import { users } from './constants';
validateUsers(users);
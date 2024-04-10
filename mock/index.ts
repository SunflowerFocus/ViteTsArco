import {MockMethod} from 'vite-plugin-mock';

import users from './source/users';
import goods from './source/goods'

const mock: Array<MockMethod> = [
    ...users,
    ...goods
]

export default mock
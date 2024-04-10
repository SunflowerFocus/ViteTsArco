import mockjs from "mockjs";
const { Random } = mockjs;
import {MockMethod} from 'vite-plugin-mock';

const users: any = []

for (let i = 0; i < 30; i++) {
    users.push(mockjs.mock({
        "name": Random.cname(),         //随机生成中文名字
        "age": Random.integer(18, 40),  //随机生成18-40的数字
        "birth": Random.date()          //随机生成年月日
    }))
}

const mock: Array<MockMethod> = [
    {
        url: '/api/users',
        method: 'get',
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: users
            }
        }
    }
]

export default mock;

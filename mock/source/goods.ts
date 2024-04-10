import mockjs from "mockjs";
const { Random } = mockjs;
import {MockMethod} from 'vite-plugin-mock';

const goods: any = []

for (let i = 0; i < 10; i++) {
    goods.push(mockjs.mock({
        "name": Random.ctitle(),                //随机生成标题
        "price": Random.integer(11, 400),       //随机生成11-400的数字
        "sourceAddress": Random.county(true),   //随机生成省市县级城市
        "image": Random.image('100x100'),       //随机生成100*100的图片
        "num": Random.integer(1, 100)           //随机生成1-100的数字
    }))
}

const mock: Array<MockMethod> = [
    {
        url: '/api/goods',
        method: 'get',
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: goods
            }
        }
    }
]

export default mock;

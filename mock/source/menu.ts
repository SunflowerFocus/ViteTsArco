import { MockMethod } from 'vite-plugin-mock';

const menus = [
    {
        path: '/navigation1',
        name: '导航一',
        meta: {
            requiresAuth: true,
            icon: 'icon-dashboard',
        },
        children: [
            {
                path: 'menu1',
                name: '菜单一',
                meta: {
                    requiresAuth: true,
                },
            },
            {
                path: 'menu2',
                name: '菜单二',
                meta: {
                    locale: 'menu.server.monitor',
                    requiresAuth: true,
                    roles: ['admin'],
                },
            },
        ],
    },
];

const mock: Array<MockMethod> = [
    {
        url: '/api/menus',
        method: 'get',
        response: () => {
            return {
                status: 200,
                message: 'success',
                data: menus
            }
        }
    }
]

export default mock;

import Home from "./components/Home";
import UserStart from "./components/details/UserStart";
import UserEdit from "./components/details/UserEdit";
import UserDetail from "./components/details/UserDetail";
import User from "./components/details/User";
import Header from "./components/Header";

export const routes = [
    {
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header
        }
    },
    {
        path: '/user', components: {
            default: User,
            'header-bottom': Header
        }, children: [
            {path: '', component: UserStart},
            {path: ':id', component: UserDetail},
            {path: ':id/edit', component: UserEdit, name: 'userEdit'},
        ]
    },
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: {name: 'home'}},
]
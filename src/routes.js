import Home from "./components/Home";
import UserStart from "./components/details/UserStart";
import UserEdit from "./components/details/UserEdit";
import UserDetail from "./components/details/UserDetail";
import User from "./components/details/User";

export const routes = [
    { path: '', component: Home },
    { path: '/user', component: User, children: [
            { 'path': '', component: UserStart },
            { 'path': ':id', component: UserDetail },
            { 'path': ':id/edit', component: UserEdit },
        ] },
]
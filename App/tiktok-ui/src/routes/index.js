// Layouts
import {HeaderOnly} from '~/components/Layout'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile'
import routesConfig from '~/config/routes';

// Những router không cần đăng nhập vẫn vào được
const publicRoutes = [
    {path: routesConfig.home, component: Home},
    {path: routesConfig.following, component: Following},
    {path: routesConfig.profile, component: Profile},
    {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.search, component: Search, layout: null},
];

// những router cần đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
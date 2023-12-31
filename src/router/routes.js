import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profiles from '~/pages/Profiles';
import Upload from '~/pages/Upload';
import Search from '~/layouts/Search';
import config from '~/config';


const publicRoutes = [
    {
        path: config.routes.home,
        component: Home
    },
    {
        path: config.routes.following,
        component: Following
    },
    {
        path: config.routes.profiles,
        component: Profiles
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null
    }
    
]

const privateRoutes = [

]

export {publicRoutes,privateRoutes}
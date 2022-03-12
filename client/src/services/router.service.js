//  local config
import routerConfig from '@/configs/router.config';


/*  utilities
/*   *   *   *   *   *   *   *   *   *   */

//  get rout for selcted path
function parseRoute( base, subpath ) {
    return base.path + subpath.path;
};

/*  exported 
/*   *   *   *   *   *   *   *   *   *   */

//  used routes
export const routes = {
    login: routerConfig.login.path,

    news: routerConfig.news.path,

    user: routerConfig.user.path,
    userAdd: parseRoute( routerConfig.user, routerConfig.user.list.add ),
    userQrs: parseRoute( routerConfig.user, routerConfig.user.list.qrs ),
    userUid: parseRoute( routerConfig.user, routerConfig.user.list.uid ),

    apps: routerConfig.apps.path,
    appTest: parseRoute( routerConfig.apps, routerConfig.apps.list.test ),
};

//  used routes names
export const names = {
    login: routerConfig.login.name,

    news: routerConfig.news.name,

    user: routerConfig.user.name,
    userAdd: routerConfig.user.list.add.name,
    userQrs: routerConfig.user.list.qrs.name,
    userUid: routerConfig.user.list.uid.name,

    apps: routerConfig.apps.name,
    appTest: routerConfig.apps.list.test.name,
};

//  used paths
export const paths = {
    [ routes.login ]: names.login,

    [ routes.news ]: names.news,

    [ routes.user ]: names.user,
    [ routes.userAdd ]: names.userAdd,
    [ routes.userQrs ]: names.userQrs,
    [ routes.userUid ]: names.userUid,

    [ routes.apps ]: names.apps,
    [ routes.appTest ]: names.appTest,
};

//  match route
export function matchRoute( location, path ) {
    return Boolean( location.pathname.match( path ));
};
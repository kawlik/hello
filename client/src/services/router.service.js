//  local config
import routerConfig from '@/configs/router.config';


/*  utilities
/*   *   *   *   *   *   *   *   *   *   */

//  get rout for selcted path
function parseAppRoute( app ) {
    return routerConfig.apps.path + app.path;
};

/*  exported 
/*   *   *   *   *   *   *   *   *   *   */

//  used routes
export const routes = {
    login: routerConfig.login.path,
    news: routerConfig.news.path,
    user: routerConfig.user.path,
    apps: routerConfig.apps.path,
    appTest: parseAppRoute( routerConfig.apps.list.test ),
};

//  used routes names
export const names = {
    login: routerConfig.login.name,
    news: routerConfig.news.name,
    user: routerConfig.user.name,
    apps: routerConfig.apps.name,
    appTest: routerConfig.apps.list.test.name,
};

//  match route
export function matchRoute( location, path ) {
    return Boolean( location.pathname.match( path ));
};
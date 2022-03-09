export default {

    //  routing for login
    login: {
        name: 'Login',
        path: '/login',
    },

    //  routing for news
    news: {
        name: 'News',
        path: '/news',
    },

    //  routing for user
    user: {
        name: 'User',
        path: '/user',
    },

    //  routing for apps
    apps: {
        name: 'Apps',
        path: '/apps',

        //  list of available subapps
        list: {

            //  testing app
            test: { name: 'Test', path: '/test' },
        },
    },
};
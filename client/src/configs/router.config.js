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

        //  list of available user actions
        list: {

            //  adding new friend
            add: { name: 'Add new firend', path: '/add', },

            //  user qr code scaner
            qrs: { name: 'QR code scaner', path: '/qrs', },

            //  user ID view
            uid: { name: 'User ID', path: '/uid', },
        },
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
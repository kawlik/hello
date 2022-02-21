import { defineConfig } from 'vite';
import { join } from 'path';

//  plugins
import react from '@vitejs/plugin-react';


/*  Use defined config
/*   *   *   *   *   *   *   *   *   *   */

export default defineConfig({

    //  base url path
    base: '/hello/',

    //  used plugins
    plugins: [
        react(),
    ],

    //  compiler options
    resolve: {

        //  import aliases
        alias: {
            '@': resolve( join( __dirname, './src/' )), 
        },
    },
});
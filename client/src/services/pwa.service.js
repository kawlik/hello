import { registerSW } from 'virtual:pwa-register';

/*	Rgister PWA SwerviceWorker
/*   *   *   *   *   *   *   *   *   *   */

//  PWA config
registerSW({

    onOfflineReady() {
        console.log( 'PWA is offline ready.' );
    },

    onNeedRefresh() {
        console.log( 'PWA needs refresh.' );
    },
});


/*	Await for install prompt
/*   *   *   *   *   *   *   *   *   *   */

//  install prompt refrence
let installPrompt = null;

//  instal ready event
const isInstallPromptReady = new Event( 'isInstallPromptReady' );

//  await for event
window.addEventListener( 'beforeinstallprompt', ( event ) => {

    //  prevent default event
    event.preventDefault();

    //  fetch event
    installPrompt = event;

    //  dispatch ecent
    window.dispatchEvent( isInstallPromptReady );
});


/*	Export installPrompt
/*   *   *   *   *   *   *   *   *   *   */

export async function getInstallPrompt() {
    return new Promise(( resolve, reject ) => {

        //  resolve when already set
        if( installPrompt ) return resolve( installPrompt );

        //  await for dispatch event
        window.addEventListener( 'isInstallPromptReady', ( e ) => {

            //  resolve when ready
            return resolve( installPrompt );
        });
    });
};
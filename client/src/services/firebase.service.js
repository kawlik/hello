import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

//  local config
import firebaseConfig from '@/configs/firebase.config';


/*  Initialize firebase services
/*   *   *   *   *   *   *   *   *   *   */

//  firebase app object
const firebaseApp = initializeApp( firebaseConfig );

//  firebase auth object
const firebaseAuth = getAuth();

//  standard firebase login function template
async function getAuthWithProvider( provider ) {

    //  init result object
    let result = null;

    try {

        //  await for response
        result = await signInWithPopup( firebaseAuth, provider );
        
    } catch( err ) {

        //  log an error
        console.error( err );

    } finally {

        //  return standard output
        return result?.user || null;
    }
};


/*  Firebase login functions
/*   *   *   *   *   *   *   *   *   *   */

export async function getAuthWithGoogle() {

    //  set provider
    const provider = new GoogleAuthProvider();

    //  await for result
    const user = await getAuthWithProvider( provider );

    //  return fetched value
    return user;
};
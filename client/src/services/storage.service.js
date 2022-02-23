//  local config
import storageConfig from '@/configs/storage.config';


/*  Initialize storage services
/*   *   *   *   *   *   *   *   *   *   */

//  saves data in given namespace
function save( namespace, data ) {

    //  path in local storage
    const path = storageConfig.namespace + '.' + namespace;

    //  set data in local storage
    localStorage.setItem( path, JSON.stringify( data ));
};

//  saves data in given namespace
function read( namespace ) {

    //  path in local storage
    const path = storageConfig.namespace + '.' + namespace;

    //  get data in namespace
    const data = localStorage.getItem( path );

    //  return standard output
    return JSON.parse( data ) || null;
};

//  saves data in given namespace
function deleteOne( namespace ) {

    //  path in local storage
    const path = storageConfig.namespace + '.' + namespace;

    //  test data in namespace
    if( localStorage.getItem( path ) !== null ) {
        localStorage.removeItem( path );
    }
};

//  saves data in given namespace
function deleteAll() {

    //  must confirm force delete
    if( confirm( 'Czy chcesz wyczyścić zapisane dane?'  )) {

        //  delets all data
        localStorage.clear();
    }
};

/*  Storage utility functions
/*   *   *   *   *   *   *   *   *   *   */

//  saves user in local storage
export function saveUser( user ) {

    //  set namespace
    const namespace = storageConfig.namespaces.user;

    //  save user
    save( namespace, user );
};

//  reads user from local storage
export function readUser() {

    //  set namespace
    const namespace = storageConfig.namespaces.user;

    //  read and return user
    return read( namespace );
};
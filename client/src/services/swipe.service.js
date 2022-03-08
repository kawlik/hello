//  initial touch position
const touch = {
    x: null,
    y: null,
};


/*  exported utility functions
/*   *   *   *   *   *   *   *   *   *   */

export function onTouchStart( event ) {

    //  reset touch
    touch.x = event.touches[0].clientX;
    touch.y = event.touches[0].clientY;
};

export function onTouchMove( event, selector, view, views, callback ) {

    //  return when touch not detected
    if( !touch.x || !touch.y ) return;
    
    //  get swipe data
    const swipe_w = Math.min( window.innerWidth / 3, 300 );
    const swipe_v = 0.33;

    const next_x = event.touches[0].clientX;
    const next_y = event.touches[0].clientY;
    
    const delta_x = touch.x - next_x;
    const delta_y = touch.y - next_y;

    //  swipe effect
    if( Math.abs( delta_x ) > Math.abs( delta_y )) {

        //  parse swipe data
        const direction = delta_x <= 0 ? 1 : -1;
        const opcacity =  Math.max( 1 - (( Math.abs( delta_x ) - Math.abs( delta_y )) / swipe_w ), 0 );
        const transform = direction * swipe_v * ( Math.abs( delta_x ) - Math.abs( delta_y ));
        
        //  set swipe effect
        document.querySelector( selector ).style.transition = null;
        document.querySelector( selector ).style.opacity = opcacity;
        document.querySelector( selector ).style.transform = `translateX( ${ transform }px )`;
    };


    //  swipe overflow
    if( Math.abs( delta_x ) > Math.abs( delta_y ) && Math.abs( delta_x ) - Math.abs( delta_y ) > swipe_w  ) {

        //  parse navigation data
        const min = 0;
        const max = views.length - 1;
        const idx = views.indexOf( view );

        //  on swipe left
        if( delta_x < 0 && idx - 1 >= min ) {
            return callback( views[ idx - 1 ] );
        };

        //  on swipe right
        if( delta_x > 0 && idx + 1 <= max ) {
            return callback( views[ idx + 1 ] );
        };
    };
};

export function onTouchEnd( event, selector ) {

    //  restore element
    document.querySelector( selector ).style.opacity = 1;
    document.querySelector( selector ).style.transition = 'all ease 300ms';
    document.querySelector( selector ).style.transform = null;

    //  reset touch
    touch.x = null;
    touch.y = null;
};
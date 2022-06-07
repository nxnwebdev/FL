$user = get_user_by( 'login', $tell ); 
$user_id = $user->id;
if( $user ) {
    wp_set_current_user( $user_id, $user->user_login );
    wp_set_auth_cookie( $user_id );
    do_action( 'wp_login', $user->user_login );
    wp_authenticate( $tell, $tell );
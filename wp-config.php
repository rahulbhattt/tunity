<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'avyat_tunity');

/** MySQL database username */
define('DB_USER', 'avyat_tunity');

/** MySQL database password */
define('DB_PASSWORD', 'q1*q1*q1*');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');
define( 'WP_MEMORY_LIMIT', '512M' );
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '--UAhL0WAg&|kTqOF;%KK$TQMQ4%RHp@aA2Kewz81OGa4}Y__,bLtw/If:;taBB7');
define('SECURE_AUTH_KEY',  'R^R-|_q7V7&ZC66V,5F`!ItNrpgWaGP-[@}f9l}YbUfxW:H$pRephoji0L+~)b$ ');
define('LOGGED_IN_KEY',    'X0{d[sp|g82KO8*Y>-)wET6[jWuUs^P``9W+~gwiFA}$)!~Ps}`PL){y674sNe/#');
define('NONCE_KEY',        'FWbZo_rYSQ*k;vQ:JX1LeayYBB`$^m5g^T]Box{^A,7i]@:-b]9YNFP;DCyoT cZ');
define('AUTH_SALT',        ',z89z!Y(qp2OnAQ+3-ZN;c^=ul ~SOd^3cmS J2*?Vg(pzf/2s`}J;5>|Af=TKPm');
define('SECURE_AUTH_SALT', '6i0tqIlImgGS~Tw}Oamj*q5K9T]#D?H-t,q0kHMLZiS@o+,v/W1)GYT-9CiRjRKQ');
define('LOGGED_IN_SALT',   'oi,HNXlS@9t.S8P(5YR=Z5l4EQTk#=0VE @S]_@#aeF<Az_vg_88zZ1I@4 767E3');
define('NONCE_SALT',       's6C#VEl(j(FA3+Yel9{-Y,&=m_:8D#s;T;8<G(S]>Z?jSi|XO[7/=M23;j_]AWjw');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

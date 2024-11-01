<?php
/**
 * Plugin Name: Table Builder Block
 * Description: Powerful table builder block for Gutenberg block editor.
 * Requires at least: 6.1
 * Requires PHP: 7.4
 * Plugin URI: https://wpmet.com/plugin/gutenkit/
 * Author: Wpmet
 * Version: 1.0.1
 * Author URI: https://wpmet.com/
 * License: GPL-3.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * Text Domain: table-builder-block
 * Domain Path: /languages
 *
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define('TABLE_BUILDER_BLOCK_PLUGIN_VERSION', '1.0.1');
define('TABLE_BUILDER_BLOCK_PLUGIN_URL', trailingslashit(plugin_dir_url(__FILE__)));
define('TABLE_BUILDER_BLOCK_PLUGIN_DIR', trailingslashit(plugin_dir_path(__FILE__)));
define('TABLE_BUILDER_BLOCK_INC_DIR', TABLE_BUILDER_BLOCK_PLUGIN_DIR . 'includes/');
define('TABLE_BUILDER_BLOCK_STYLE_DIR', TABLE_BUILDER_BLOCK_PLUGIN_DIR . 'build/styles/');
define('TABLE_BUILDER_BLOCK_DIR', TABLE_BUILDER_BLOCK_PLUGIN_DIR . 'build/blocks/');


// if gutenki is active
if ( class_exists( 'Gutenkit' ) ) {
	function table_builder_block_config( $blocks ) {
		$source = [
			'plugin_dir'	=> TABLE_BUILDER_BLOCK_PLUGIN_DIR,
			'blocks_dir'	=> TABLE_BUILDER_BLOCK_DIR,
			'plugin_slug'	=> 'table-builder-block',
		];

		$pro_plugin_dir = rtrim( TABLE_BUILDER_BLOCK_PLUGIN_DIR, '/' ) . '-pro';
		$pro_source = [
			'plugin_dir'	=> $pro_plugin_dir,
			'blocks_dir'	=> $pro_plugin_dir . '/build/blocks/',
			'plugin_slug'	=> 'table-builder-block-pro',
		];

		$table_blocks = [
			'table-builder' => array(
				'slug'            => 'table-builder',
				'title'           => esc_html__( 'Table Builder', 'table-builder-block' ),
				'package'         => 'free',
				'category'        => 'general',
				'status'          => 'active',
				'source'          => $source,
				'badge'			=> ['freemium', 'new', 'beta'],
				'dependency'	=> array(
					'slug'		=> 'table-builder-block',
					'url'		=> 'https://demo.wpmet.com/gutenberg/wp-content/uploads/gutenkit/table-builder-block.zip',
				),
			),
			'table-builder-row' => array(
				'slug'            => 'table-builder-row',
				'title'           => esc_html__( 'Table Row', 'table-builder-block' ),
				'package'         => 'free',
				'parent'          => 'table-builder',
				'category'        => 'general',
				'status'          => 'active',
				'source'          => $source,
			),
			'table-builder-item' => array(
				'slug'            => 'table-builder-item',
				'title'           => esc_html__( 'Table Data', 'table-builder-block' ),
				'package'         => 'free',
				'parent'          => 'table-builder-row',
				'category'        => 'general',
				'status'          => 'active',
				'source'          => $source,
			),
		];

		$blocks = array_merge( $blocks, $table_blocks );

		return $blocks;

	}
	add_filter('gutenkit/blocks/list', 'table_builder_block_config');

	/**
	 * Module status update method
	 *
	 * @param string $status
	 * @return void
	 * @since 1.0.0
	 */
	function table_builder_block_status($status) {
		$blocks_list = get_option('gutenkit_blocks_list');

		if ( $blocks_list ) {
			$new_blocks_list = $blocks_list;
			$new_blocks_list['table-builder'] = array_merge($new_blocks_list['table-builder'], ['status' => $status]);

			update_option('gutenkit_blocks_list', $new_blocks_list);
		}
	}

	// Load after plugin activation
	register_activation_hook( __FILE__, 'table_builder_block_activated_plugin' );
	function table_builder_block_activated_plugin() {
		table_builder_block_status('active');
	}

	// Load after plugin deactivation
	register_deactivation_hook( __FILE__, 'table_builder_block_deactivated_plugin' );
	function table_builder_block_deactivated_plugin() {
		table_builder_block_status('inactive');
	}
} else {
	// if gutenkit is not active
	function table_builder_block_gutenkit_missing_notice() {
		global $wp_filesystem;
	
		// Include the file.php if not already included
		if ( !function_exists( 'WP_Filesystem' ) ) {
			require_once( ABSPATH . 'wp-admin/includes/file.php' );
		}
	
		// Initialize the WP filesystem, false to use the direct method
		WP_Filesystem();
	
		$plugin_slug = 'gutenkit-blocks-addon';
		$plugin_file_path = 'gutenkit-blocks-addon/gutenkit-blocks-addon.php';
	
		// Check if GutenKit Blocks is installed
		if ( $wp_filesystem->exists( WP_PLUGIN_DIR . '/' . $plugin_file_path ) ) {
			if ( !function_exists( 'is_plugin_active' ) ) {
				include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
			}

			// Check if GutenKit Blocks is active
			if ( !is_plugin_active( $plugin_file_path ) ) {
				// GutenKit Blocks is installed but not active, show activate button
				?>
				<div class="notice notice-warning is-dismissible">
					<div>
						<p><?php esc_html_e( 'Table Builder Block requires GutenKit Blocks, which is currently NOT RUNNING..', 'table-builder-block' ); ?> <p>
						<a href="<?php echo esc_url(wp_nonce_url( 'plugins.php?action=activate&amp;plugin=' . $plugin_file_path, 'activate-plugin_' . $plugin_file_path )); ?>" class="button button-primary">
							<?php esc_html_e( 'Activate GutenKit Blocks', 'table-builder-block' ); ?>
						</a>
					</div>
				</div>
				<?php
			}
		} else {
			// GutenKit Blocks is not installed, show error notice
			$nonce_action = 'install-plugin_' . $plugin_slug;
			$nonce = wp_create_nonce($nonce_action);
			?>
			<div class="notice notice-error is-dismissible">
				<div>
					<p><?php esc_html_e( 'Table Builder Block requires GutenKit Blocks, which is currently NOT RUNNING.', 'table-builder-block' ); ?> <p>
					<a href="<?php echo esc_url(admin_url( 'update.php?action=install-plugin&plugin=' . $plugin_slug . '&_wpnonce=' . $nonce)); ?>" class="button button-primary">
						<?php esc_html_e( 'Install GutenKit Blocks', 'table-builder-block' ); ?>
					</a>
				</div>
			</div>
			<?php
		}
	}
	add_action( 'admin_notices', 'table_builder_block_gutenkit_missing_notice' );
}


function table_builder_block_plugins_loaded() {
		/**
		 * Loads the plugin text domain for the Table Builder Block.
		 *
		 * This function is responsible for loading the translation files for the plugin.
		 * It sets the text domain to 'table-builder-block' and specifies the directory
		 * where the translation files are located.
		 *
		 * @param string $domain   The text domain for the plugin.
		 * @param bool   $network  Whether the plugin is network activated.
		 * @param string $directory The directory where the translation files are located.
		 * @return bool True on success, false on failure.
		 * @since 1.0.0
		 */
		load_plugin_textdomain( 'table-builder-block', false, TABLE_BUILDER_BLOCK_PLUGIN_DIR . 'languages/' );
}
add_action('plugins_loaded', 'table_builder_block_plugins_loaded');
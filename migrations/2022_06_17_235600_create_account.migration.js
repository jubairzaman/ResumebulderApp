const {Schema} = require('@moccacoders/node-obremap')
/*
	Model Name: `CreateAccount`
	Database Table: `accounts`
*/
module.exports =  class CreateAccount {
	/**
	 * Run the migrations.
	 * @return void
	 */
	up() {
		Schema.create('accounts', table => {
			table.id();
			table.string('userId').nullable();
			table.string('type').nullable();
			table.string('provider').nullable();
			table.string('providerAccountId').nullable();
			table.string('refresh_token').nullable();
			table.string('access_token').nullable();
			table.integer('expires_at').nullable();
			table.string('token_type').nullable();
			table.string('scope').nullable();
			table.string('id_token').nullable();
			table.string('session_state').nullable();
			table.string('oauth_token_secret').nullable();
			table.string('oauth_token').nullable();
			table.timestamps();
		})
	}

	/**
	 * Reverse the migrations.
	 * @return void
	 */
	down() {
		Schema.dropIfExists('accounts')
	}
}
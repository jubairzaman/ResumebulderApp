const { Schema } = require('@moccacoders/node-obremap')
/*
	Model Name: `VerificationToken`
	Database Table: `verification_tokens`
*/
module.exports = class VerificationToken {
	/**
	 * Run the migrations.
	 * @return void
	 */
	up() {
		Schema.create('verification_tokens', table => {
			table.id();
			table.string('identifier').nullable();
			table.string('token').nullable();
			table.timestamp('expires').nullable();
			table.timestamps();
		})

	}

	/**
	 * Reverse the migrations.
	 * @return void
	 */
	down() {
		//
	}
}
const {Schema} = require('@moccacoders/node-obremap')
/*
	Model Name: `CreateSession`
	Database Table: `sessions`
*/
module.exports = class CreateSession {
	/**
	 * Run the migrations.
	 * @return void
	 */
	up() {
		Schema.create('sessions', table => {
			table.id();
			table.timestamp('expires').nullable();
			table.string('sessionToken').nullable();
			table.string('userId').nullable();
			table.timestamps();
		})
	}

	/**
	 * Reverse the migrations.
	 * @return void
	 */
	down() {
		Schema.dropIfExists('sessions')
	}
}
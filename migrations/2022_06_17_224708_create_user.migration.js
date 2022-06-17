//import  Schema  from '@moccacoders/node-obremap';
const {Schema} = require('@moccacoders/node-obremap')
/*
	Model Name: `CreateUser`
	Database Table: `users`
*/
module.exports = class CreateUser {
	/**
	 * Run the migrations.
	 * @return void
	 */
	up() {
		Schema.create('users', table => {
			table.id();
			table.string('name');
			table.string('email');
			table.timestamp('emailVerified').nullable();
			table.timestamp('image').nullable();
			table.timestamps();
		})
	}

	/**
	 * Reverse the migrations.
	 * @return void
	 */
	down() {
		Schema.dropIfExists('users')
	}
}
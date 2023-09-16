module.exports = class UserDto {
	age;
	login;
	id;

	constructor(model) {
		this.age = model.age;
		this.login = model.login;
		this.id = model._id;
	}
}
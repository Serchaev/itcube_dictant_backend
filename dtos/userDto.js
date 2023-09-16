module.exports = class UserDto {
	age;
	login;
	id;
	is_complitedTest;

	constructor(model) {
		this.is_complitedTest = model.is_complitedTest;
		this.age = model.age;
		this.login = model.login;
		this.id = model._id;
	}
}
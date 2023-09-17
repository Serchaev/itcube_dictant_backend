module.exports = class UserDto {
	age;
	login;
	id;
	is_complited_test;

	constructor(model) {
		this.is_complited_test = model.is_complitedTest;
		this.age = model.age;
		this.login = model.login;
		this.id = model._id;
	}
}
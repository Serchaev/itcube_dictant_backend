module.exports = class UserDto {
	age;
	login;
	id;
	is_complited_test;

	constructor(model) {
		this.is_complited_test = model.is_complited_test;
		this.age = model.age;
		this.login = model.login;
		this.id = model._id;
	}
}
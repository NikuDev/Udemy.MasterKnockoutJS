var viewModelTask = {
	todo: "MVVM with KnockoutJS",
	completed: "No",
	createdDate: "08-Dec-2019"
}

var viewModelPerson = {
	ID: ko.observable(0),
	firstName: ko.observable("Bill"),
	lastName: ko.observable("Hickok"),
	age: ko.observable(46)
}

ko.applyBindings();

viewModelPerson.firstName('Wild Bill');

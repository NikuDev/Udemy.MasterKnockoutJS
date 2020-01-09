var viewModelTask = {
	todo: "MVVM with KnockoutJS",
	completed: "No",
	createdDate: "08-Dec-2019"
}

var personModel = {
	ID: 0,
	firstName: "Bill",
	lastName: "Hickok",
	age: 46
}

ko.applyBindings(viewModelTask);
ko.applyBindings(personModel);

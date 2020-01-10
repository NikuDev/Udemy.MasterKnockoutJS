// BINDING 1
var viewModelTask = {
	todo: "MVVM with KnockoutJS",
	completed: "No",
	createdDate: "08-Dec-2019"
}

// BINDING 2
var viewModelPerson = {
	ID: ko.observable(0),
	firstName: ko.observable("Bill"),
	lastName: ko.observable("Murray"),
	age: ko.observable(46)
}

// COMPUTED
var viewModelComputedPropPerson = function()
{
	firstName= ko.observable("Hank"),
	lastName= ko.observable("Schroder"),
	// knockout 'computed' functions
	fullName= ko.computed({
		read: function(){
			return this.firstName() + " " + this.lastName();
		},
		// just to show 'read' and 'write' can be distinctly
		// called within a computed prop (get set)
		write: function(val){
			var fullName = val.split(' ');
			this.firstName(fullName[0]);
			this.lastName(fullName[1]);
		}
	}),
	age= ko.computed({
		read: function(){
			return 18;
		},
		// write: function(val){ } // <- will make IsWriteableObservable return true;
	})

	// a few flags can indicate the functionality of props
	console.log('ko.IsComputed(this.firstName)' + ko.isComputed(this.firstName));
	console.log('ko.IsComputed(this.fullName)' + ko.isComputed(this.fullName));
	console.log('ko.IsWriteableObservable(this.firstName)' + ko.isWriteableObservable(this.firstName));
	console.log('ko.IsWriteableObservable(this.fullName)' + ko.isWriteableObservable(this.fullName));
	console.log('ko.IsWriteableObservable(this.age)' + ko.isWriteableObservable(this.age));
}

ko.applyBindings(
	viewModelComputedPropPerson,
	document.getElementById("div_viewmodelcomputedpropperson")
);

// OBSERVABLE ARRAYS
var listModel = function(items){

	this.items = ko.observableArray(items);
	this.itemToAdd = ko.observable("");
	this.selectedItem = ko.observable();

	actionOnSubmit = function(){
		// add item to array
		this.items.push(this.itemToAdd());
		// clear itemToAdd
		this.itemToAdd("");
	}.bind(this); // <- ?

	removeItem = function(){
		const index = this.items().indexOf(this.selectedItem());
		if (index > -1) {
			this.items.splice(index, 1);
		}
	} // no binding, still functions?
}

ko.applyBindings(
	new listModel(["Apple", "Banana", "Egg", "Bread"]), 
	document.getElementById("div_observableArrays")
);

// VISIBILITY
var viewModelVisibility = function(){
	this.hasFlagSet = ko.observable(false);
	this.items = ko.observableArray(); // new array

	// style binding
	this.grade = ko.observable(100);

	// attr binding
	this.url = ko.observable("https://www.google.com");
	this.details = ko.observable("Google");

	toggleFlag = function(){
		this.hasFlagSet(!this.hasFlagSet());
	}.bind(this);

	addItemToArray = function(){
		this.items.push("new item");
	}.bind(this);
}

ko.applyBindings(viewModelVisibility, document.getElementById("div_visibility"));


// 2 seconds after the document loaded the name will be changed
// (and automatically updated in the view due to knockout)
setTimeout(function() {
	// to read:
	viewModelPerson.firstName();
	// to write:
	viewModelPerson.firstName('Wild Bill');
	// or
	viewModelPerson.firstName('Wild Bill').lastName('Hickok');
  }, 2000);

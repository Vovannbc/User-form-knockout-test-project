function UserFormModel() {
    this.firstName = ko.observable('');
    this.lastName = ko.observable('');
    this.age = ko.observable('');
    this.sexOptions = ['Male', 'Female'];
    this.sex = ko.observable();
    this.fullName = ko.computed(function () {
        return this.firstName()+ " "+ this.lastName()
    }, this);
    this.isAdmin = ko.observable(false);
    this.adminName = ko.observable('');
    this.notEmpty = ko.computed(function () {
        return !!this.firstName() || !!this.lastName() || !!this.age() || !!this.isAdmin()
    }, this);
    this.reset = function () {
        this.firstName('');
        this.lastName('');
        this.age(null);
        this.sex(null);
        this.isAdmin(false);
    };
    this.save = function () {
        event.preventDefault();
        if (this.notEmpty()) {
            alert('Saved!');
            this.reset();
        }
    }
}
ko.applyBindings(new UserFormModel());
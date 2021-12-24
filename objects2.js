function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function () {
    console.log(this.email, "has logged IN!");
  };
}

var userOne = new User("alexk@yahoo.com", "Alex");
var userTwo = new User("waynemiller@gmail.com", "Wayne");

console.log(userOne);
userTwo.login();

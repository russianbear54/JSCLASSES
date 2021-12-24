class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }
  login() {
    console.log(this.email, "just logged IN!");
    return this;
  }
  logout() {
    console.log(this.email, "just logged OUT!");
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("alexk@yahoo.com", "Alex");
var userTwo = new User("waynemiller@gmail.com", "Wayne");
var admin = new Admin("kim@westwing.com", "Kim");

var users = [userOne, userTwo, admin];

// admin.deleteUser(userOne);
userOne.deleteUser(userTwo);

console.log("users", users);

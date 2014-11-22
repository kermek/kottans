module.exports = function loadUsers(userIds, load, done) {
  var users = [];
  var i = 0;
  userIds.forEach(function (userId, index, array) {
    load(userId, function (user) {
        users[index] = user;
        i++;
        if (i === array.length) done(users);
    });
  });
}
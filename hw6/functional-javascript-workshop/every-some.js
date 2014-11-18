function checkUsersValid(goodUsers) {
  function checkEvery(user, indexUser, arrayUser) {
    function checkSome(valid, index, array) {
      return valid.id == user.id;
    }
    return goodUsers.some(checkSome);
  }
  function checkEveryUser(array) {
    return array.every(checkEvery);
  }
  return checkEveryUser;
}

module.exports = checkUsersValid;
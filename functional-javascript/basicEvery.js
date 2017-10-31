
module.exports = function checkUserValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(obj => goodUsers.some(obj2 => obj.id === obj2.id));
	}
}
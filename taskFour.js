// Problem- 4:
function oddFriend(friendsName) {
    for (i = 0; i < friendsName.length; i++) {
        var oddElement = friendsName[i].length % 2;
        if (oddElement != 0) {
            var oddFriends = friendsName[i];
            break;
        }
    }
    return oddFriends;
}
const allNames = ['John', 'Kely', 'Modhu', 'Jabed', 'Gates', 'Juukar'];
var oddPerson = oddFriend(allNames);
console.log(oddPerson);

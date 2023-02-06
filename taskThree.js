// Problem- 3:
function picnicBudget(numberOfPeoples) {
    if (peoples >= 0 && peoples <= 100) {
        var total = 5000 * peoples;
    } else if (peoples > 100 && peoples <= 200) {
        var total = 100 * 5000 + (peoples - 100) * 4000;
    } else if (peoples > 200) {
        var total = 100 * 5000 + 100 * 4000 + (peoples - 200) * 3000;
    } else if (peoples < 0) {
        var notAllowed = ['Dear sir, Negative value is not allowed'];
        return notAllowed;
    }
    return total;
}
var peoples = 102030;
var totalBudget = picnicBudget(peoples);
console.log(totalBudget);

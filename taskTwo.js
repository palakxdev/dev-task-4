// Problem - 2:
function pandaCost(totalSingara, totalSamucha, totalJilapi) {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    let singaraCost = singaraPrice * totalSingara;
    let samuchaCost = samuchaPrice * totalSamucha;
    let jilapiCost = jilapiPrice * totalJilapi;
    unitPrice = singaraCost + samuchaCost + jilapiCost;
    return unitPrice;
}
let iNeedSingara = 2;
let iNeedSamucha = 2;
let iNeedJilapi = 2;
var total = pandaCost(iNeedSingara, iNeedSamucha, iNeedJilapi);
console.log(total);

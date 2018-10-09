//Made lovingly for Nato, who can never figure out what to tip.
function calc() {
    const cost = Number(document.getElementById('billTotal').value);
    let meal = cost + cost * .625;
    const total = cost + meal * .15;
    const tipAmount = cost * .15;
    document.getElementById('tip').innerHTML = `$${tipAmount}`;
    document.getElementById('total').innerHTML = `$${total}`;
}
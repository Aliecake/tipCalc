/*to do: Varying tip amounts
*styling
*manifest, icons, theme
*aria labels
*different state taxes
*/
function calc() {
    const cost = Number(document.getElementById('billTotal').value);
    let meal = cost + cost * .625;
    const total = (cost + meal * .15).toFixed(2);
    const tipAmount = (cost * .15).toFixed(2);
    document.getElementById('tip').innerHTML = `$${tipAmount}`;
    document.getElementById('total').innerHTML = `$${total}`;
}
/*to do:
*styling
*manifest, icons, theme
*aria labels
*different state taxes
*/
function calc() {
    const cost = Number(document.getElementById('billTotal').value);
    let tax = (Number(document.getElementById('tax').value)/100)*cost;
    const total = (cost + cost * .15 + tax).toFixed(2);
    const tipAmount = (cost * .15).toFixed(2);
    const withTax = (cost + tax);
    document.getElementById('tip').innerHTML = `$${tipAmount}`;
    document.getElementById('total').innerHTML = `$${total}`;
}
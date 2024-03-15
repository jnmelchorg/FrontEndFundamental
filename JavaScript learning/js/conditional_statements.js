let soup = "chicken soup";
let reply;
let customerIsBanned = true;

if (customerIsBanned) {
    reply = 'No soup for you.'
}
else if (soup) {
    reply = `Order of ${soup}`;
}
else {
    reply = 'No soup available'
}
console.log(reply)

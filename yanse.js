function randomHexColor1() {
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    var color = ['#'];
    for (var i = 0; i < 6; i++) {
        var r = Math.floor(Math.random() * arr.length);
        color.push(arr[r]);
    }
    return color.join('');
}
console.log(randomHexColor1());
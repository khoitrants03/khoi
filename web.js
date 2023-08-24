
// header
var x = 0;
var head = ["../webimg/head1.jpg",
    "../webimg/head2.jpg.jpg",
    "../webimg/head2.jpg",
    "../webimg/head2.jpg",
    "../webimg/head3.jpg"

];
function back_Ipg() {
    var locdem = document.getElementById("locdem");
    document.getElementById('head').src = head[x];
    x--;
    if (x < 0) {
        x = head.length - 1;
    }
    locdem.src = head[x];
}
function next_Ipg() {
    var locdem = document.getElementById("locdem");
    document.getElementById("head").src = head[x];
    x++;
    if (x >= head.length) {
        x = 0;
    }
    locdem.src = head[x];
}

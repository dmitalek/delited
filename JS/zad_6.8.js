let fill = 0;
$(document).ready() ;

function but1 () {
    if (fill < 100) fill ++;
    if (fill > 100) fill = 100, alert("Пора ползти домой!");
    $("#my-bar").width(fill+"%");
    console.log (fill);
}
function but2 () {
    if (fill < 100) fill += 3;
    if (fill > 100) fill = 100, alert("Пора ползти домой!");
    $("#my-bar").width(fill+"%");
    console.log(fill);
}
function but3() {
    if (fill < 100) fill += 7;
    if (fill > 100) fill = 100, alert("Пора ползти домой!");
    $("#my-bar").width(fill+"%");
    console.log (fill);
    
}
$("#button-1").click(but1);

$("#button-3").click(but2);

$("#button-7").click(but3);
    

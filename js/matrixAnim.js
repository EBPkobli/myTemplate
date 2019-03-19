$(document).ready(function () {
    matrixAnim();
});

function matrixAnim() {
    var c = document.getElementById("matrixAnimCanvas");
    var ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    var keycode = "01";
    //converting the string into an array of single characters
    keycode = keycode.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.01)";

        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0F0";
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            var text = keycode[Math.floor(Math.random() * keycode.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}
function randomColor()
{
    var items = Array("#0F0","#00F","#0A0","#00A");
    var item = items[Math.floor(Math.random()*items.length)];
    return item;
}

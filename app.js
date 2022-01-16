$(() => {
    var canvas = $('#mainCanvas')[0]
    var ctx = canvas.getContext('2d')
    var x = 90;
    var y = 250;
    var radius = 160;
    var startAngle = 1.1 * Math.PI;
    var endAngle = 1.9 * Math.PI;
    var counterClockwise = false;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    ctx.lineWidth = 60;

    ctx.strokeStyle = '#98FB98';
    ctx.stroke();
})



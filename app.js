$(() => {
    var canvas = $('#mainCanvas')[0]
    var ctx = canvas.getContext('2d')
    var x = 400
    var y = 400
    var radius = 250
    var startAngle = 2.8 * Math.PI
    var endAngle = 3.9 * Math.PI
    var counterClockwise = false

    ctx.beginPath()
    ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise)
    ctx.lineWidth = 60
    ctx.strokeStyle = '#98FB98'
    ctx.stroke()

    var movCanvas = $('#movCanvas')[0]
    var movCtx = movCanvas.getContext('2d')
    var centerX = 0
    var centerY = 400
    var radius = 7
    var angle = 1

    function rotate(angle) {
        centerX = centerX + radius * Math.cos(angle)
        centerY = centerY + radius * Math.cos(angle)
    }

    $(document).on('keydown', event => {
        event.preventDefault()
        if (event.code == 'Space') {
            console.log("Hello")
        }
    })

    var intervalTime = 10

    setInterval(function () {
        angle = (angle + Math.PI / 360) % (Math.PI * 2)
        rotate(angle)
        movCtx.clearRect(0, 0, canvas.width, canvas.height)
        movCtx.beginPath()
        movCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        movCtx.fillStyle = 'red'
        movCtx.fill()
    }, intervalTime)
})

$(() => {
    var canvas = $('#mainCanvas')[0]
    var ctx = canvas.getContext('2d')
    var x = 400
    var y = 400
    var radiusArc = 250
    var startAngle = 2.8 * Math.PI
    var endAngle = 3.9 * Math.PI

    var counterClockwise = false

    var movCanvas = $('#movCanvas')[0]
    var movCtx = movCanvas.getContext('2d')
    var centerX = 0
    var centerY = 400
    var radius = 30
    var angle = 0
    var speed = 0.01

    function rotate(angle) {
        centerX = x + radiusArc * Math.cos(angle)
        centerY = y + radiusArc * Math.sin(angle)
    }

    $(document).on('keydown', event => {
        event.preventDefault()
        if (event.code == 'Space') {
            if (ctx.isPointInPath(centerX, centerY)) {
                console.log("match1")
            }
        }
    })

    var intervalTime = 10
    setInterval(function () {

        ctx.beginPath()
        ctx.arc(x, y, radiusArc, startAngle, endAngle, counterClockwise)
        ctx.lineWidth = 60
        ctx.strokeStyle = '#FF6A6A'
        ctx.stroke()

        angle += speed
        rotate(angle)
        movCtx.clearRect(0, 0, canvas.width, canvas.height)
        movCtx.beginPath()
        movCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        movCtx.fillStyle = '#2F4F4F'
        movCtx.fill()
    }, intervalTime)
})

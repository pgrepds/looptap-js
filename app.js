$(() => {
    var ax = 2.8
    var ay = 3.9
    var canvas = $('#mainCanvas')[0]
    var ctx = canvas.getContext('2d')
    var x = 400
    var y = 400
    var radiusArc = 250
    var startAngle = ax * Math.PI
    var endAngle = ay * Math.PI

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
        event.stopPropagation()
        if (event.code == 'Space') {
            if (ctx.isPointInPath(centerX, centerY)) {
                ax = Math.random()
                ay = Math.random()
                startAngle = ax * Math.PI
                endAngle = ay * Math.PI
                ctx.clearRect(0, 0, canvas.width, canvas.height)
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
        movCtx.clearRect(0, 0, movCanvas.width, movCanvas.height)
        movCtx.beginPath()
        movCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        movCtx.fillStyle = '#2F4F4F'
        movCtx.fill()
    }, intervalTime)
})

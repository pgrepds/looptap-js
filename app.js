$(() => {
    var ax = 3.5
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
    var speed = 0.05

    function rotate(angle) {
        centerX = x + radiusArc * Math.cos(angle)
        centerY = y + radiusArc * Math.sin(angle)
    }

    var score = 0
    var animationFrame

    $(document).on('keydown', event => {
        event.preventDefault()
        event.stopPropagation()
        if (event.code == 'Space') {
            if (ctx.isPointInPath(centerX, centerY)) {

                score += 1

                speed += 0.001

                const random = (i, j) => Math.floor(Math.random() * (j - i)) + i;
                arc = [];
                arc.push(random(0, 300));
                arc.push(random(arc[0] + 10, arc[0] + 110));
                arc[1] = arc[1] > 360 ? 360 : arc[1];

                randomInDegree = Math.floor(Math.random() * 300)
                startAngle = randomInDegree * (Math.PI / 180)
                endAngle = (Math.floor(Math.random() * (randomInDegree + 110) - (randomInDegree + 10)) + (randomInDegree + 10)) * (Math.PI / 180)
                endAngle = endAngle > 360 ? 360 : endAngle
                ctx.clearRect(0, 0, canvas.width, canvas.height)
            } else {
                cancelAnimationFrame(animationFrame)
            }
        }
    })

    function draw() {
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
        animationFrame = requestAnimationFrame(draw)
    }
    draw()
})

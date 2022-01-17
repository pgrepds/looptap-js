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

    var counterClockwise = true

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

    $('.play-button').on('click', event => {
        $('.play-button').css('visibility', 'hidden')
        $('.bestScoreCount').css('visibility', 'hidden')
        score = 0
        speed = 0.05
        $('#score').html(score)
        animationFrame = animate()
    })

    $(document).on('keydown', event => {
        event.preventDefault()
        event.stopPropagation()
        if (event.code == 'Space' && animationFrame) {
            if (ctx.isPointInPath(centerX, centerY)) {

                score += 1
                $('#score').html(score)
                speed += 0.001

                randomInDegree = Math.floor(Math.random() * 300)
                startAngle = randomInDegree * (Math.PI / 180)
                endAngle = (Math.floor(Math.random() * (randomInDegree + 110) - (randomInDegree + 80)) + (randomInDegree + 80)) * (Math.PI / 180)
                endAngle = endAngle > 360 ? 360 : endAngle
                ctx.clearRect(0, 0, canvas.width, canvas.height)
            } else {
                var bestScore = localStorage.getItem('score')
                if (bestScore < score) {
                    localStorage.setItem('score', score)
                }
                $('.play-button').css('visibility', 'visible')
                $('#bestScore').html(bestScore)
                $('.bestScoreCount').css('visibility', 'visible')
                cancelAnimationFrame(animationFrame)
            }
        }
    })

    function animate() {
        return requestAnimationFrame(draw)
    }

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
        if (animationFrame) {
            animationFrame = animate()
        }
    }

    draw()
})

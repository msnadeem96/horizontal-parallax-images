(() => {
    let trackPos = 0
    let isMouseDown = false

    const track = document.getElementById('track')
    const images = document.getElementsByClassName('image')

    window.addEventListener('mousedown', e => {
        isMouseDown = true
    })

    window.addEventListener('mouseup', e => {
        isMouseDown = false
    })

    window.addEventListener('mousemove', e => {
        if (isMouseDown === false)
            return false;

        const change = -e.movementX / window.screen.availWidth * 200

        trackPos += change

        trackPos = trackPos > 100 ? 100 : trackPos
        trackPos = trackPos < 0 ? 0 : trackPos

        const translate = `translate(-${trackPos}%, -50%)`

        track.style.transform = translate

        console.log(trackPos)
        for (let image of images) {
            image.style.objectPosition = trackPos + "% 50%"
        }
    })
})()


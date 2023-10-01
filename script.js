(() => {
    const RIGHT_LIMIT = 100

    let trackPos = 0
    let isMouseDown = false
    let previousTouch

    const track = document.getElementById('track')
    const images = document.getElementsByClassName('image')

    const mouseDown = e => {
        isMouseDown = true
    }

    const mouseUp = e => {
        isMouseDown = false
    }
    const moveTrack = e => {
        const change = -e.movementX / window.screen.availWidth * 200

        trackPos += change

        trackPos = trackPos > RIGHT_LIMIT ? RIGHT_LIMIT : trackPos
        trackPos = trackPos < 0 ? 0 : trackPos

        const translate = `translate(-${trackPos}%, -50%)`

        track.style.transform = translate

        for (let image of images) {
            image.style.objectPosition = trackPos + "% 50%"
        }
    }


    const mouseMove = e => {
        if (isMouseDown === false)
            return false;

        moveTrack(e)
    }


    const touchMove = e => {

        const touch = e.touches[0];

        if (!previousTouch) {
            previousTouch = touch;
        };


        e.movementX = 0.1
        e.movementY = 0.1

        // be aware that these only store the movement of the first touch in the touches array
        e.movementX *= touch.pageX - previousTouch.pageX;
        e.movementY *= touch.pageY - previousTouch.pageY;

        moveTrack(e)
    }

    const touchStart = e => {
        previousTouch = e.touches[0];
    }
    const touchEnd = e => {
        previousTouch = null;
    }

    window.addEventListener('mousedown', mouseDown)
    window.addEventListener('mouseup', mouseUp)
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('touchstart', touchStart)
    window.addEventListener('touchEnd', touchEnd)
    window.addEventListener('touchmove', touchMove)
})()


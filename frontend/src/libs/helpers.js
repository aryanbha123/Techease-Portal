export const handleFullScreen = () => {
    const element = document.getElementById('root')
    if (element.requestFullscreen) {
        element.requestFullscreen()
    } else {
        console.error('Fullscreen API is not supported in this browser.')
    }
}

export const handelCloseFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    }
}


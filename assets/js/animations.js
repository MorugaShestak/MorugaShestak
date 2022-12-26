function glide(e) {
}

function chillin() {
    let banner = document.getElementById('banner')

    setInterval(() =>{
        try {
        banner.innerText = banner?.innerText + "."
        if (banner?.innerText === "chillin' right here....") {
            banner.innerText = "chillin' right here"
        }
    }
    catch(e) {
        console.log(e)
    }
    }, 1000)
}

chillin()
(() => {
    // récupèration de l'element à mettre le display fixed
    var header = document.querySelector("[data-fixed]")

    var rect = header.getBoundingClientRect() 
    var height = rect.height
    var width = rect.width
    var fake = document.createElement("div")

    var  position = header.classList.contains("fixed")

    if (!position && width >= 500) {
        header.classList.add("fixed")
        header.parentNode.insertBefore(fake, header)
        fake.style.width = width + "px"
        fake.style.height = height + "px"
        fake.style.display = "block"
    } else if (position && width < 500) {
        header.classList.remove("fixed")
        fake.style.width = 0 + "px"
        fake.style.height = 0 + "px"
        fake.style.display = "none"
    }

    var onResize = function () {
        rect = header.getBoundingClientRect()
        height = rect.height
        width = rect.width 
        if (width <= 500) {  
            fake.style.width = 0 + "px"
            fake.style.height = 0 + "px"
            fake.style.display = "none"
            header.classList.remove("fixed")
        } else if (width > 500) {
            fake.style.width = width + "px"
            fake.style.height = height + "px"
            fake.style.display = "block"
            header.classList.add("fixed")
        }

       
    }

 

    window.addEventListener("resize", onResize)
})()
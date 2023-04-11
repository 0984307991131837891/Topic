
    var navLinks = document.getElementById('navLinks');
    function showMenu() {
        navLinks.style.right = '0';

    }
    function hideMenu() {
        navLinks.style.right = '-400px';

    }
    

    //<-------------------------------.----------------------------------->
    function createAuto() {
        return setInterval(() => {
            index++
            refresh()

        }, 5000)
    }
    let autoTimer = createAuto()

    let index = 0
    function refresh() {

        if (index < 0) {
            index = 3
        } else if (index > 3) {
            index = 0
        }

        let carousel = document.querySelector('.carousel')

        let width = getComputedStyle(carousel).width
        width = Number(width.slice(0, -2))

        carousel.querySelector('.container').style.left =
            index * width * -1 + "px"

    }

    function leftShift() {
        index--
        refresh()
        clearInterval(autoTimer)
        autoTimer = createAuto()
        return result
    }

    function rightShift() {
        index++
        refresh()
        clearInterval(autoTimer)
        autoTimer = createAuto()
        return result
    }
    function setIndex(idx) {
        index = idx
        refresh()
        clearInterval(autoTimer)
        autoTimer = createAuto()
        return result
    }




    refresh()
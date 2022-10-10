function autoslide() {
    const slider = document.getElementById('slider');
    let counter = 0;
    if (screen.width > 426) {
        window.setInterval(function() {
            slider.scrollTo(0, counter += 500)
            if (counter >= 1000) {
                counter = -500;
            }
        }, 3000)
    }
    else {
        window.setInterval(function() {
            if (counter == 0) {
                counter += 250;
            }
            else if (counter == 250) {
                counter += 500;
            }
            else if (counter == 750) {
                counter = 0;
            }
            slider.scrollTo(0, counter)
        }, 3000)
    }
}

autoslide();
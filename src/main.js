import string from './css.js'

const player = {
    id: undefined,
    n: 1,
    time: 100,
    string2: '',
    ui: {
        html: document.querySelector("#html"),
        style: document.querySelector("#style")
    },
    init: () => {
        player.ui.html.innerHTML = string.substring(0, player.n)
        player.ui.style.innerText = string.substring(0, player.n)
        player.play()
        player.bindEvents()
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: () => {
        for (let key in player.events) if (player.events.hasOwnProperty(key)) {
            const value = player.events[key]
            document.querySelector(key).onclick = player[value]
        }
    },
    run: () => {
        player.n += 1
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        if (string[player.n] === "\n") {
            player.string2 += "<br>"

        } else if (string[player.n] === " ") {
            player.string2 += "&nbsp"
        } else {
            player.string2 += string[player.n]
        }
        player.ui.html.innerHTML = player.string2
        player.ui.style.innerHTML = string.substring(0, player.n)
        window.scrollTo(0, 99999)
        player.ui.html.scrollTo(0, 99999)
    },
    play: () => {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()


//variables:


var SEASON = 1
var EPISODE = 1
function startSecondSeason() {
    document.getElementById("secondSeason").style.color = "green"
}

var title = document.getElementById("TITLE")
var player = document.querySelector(".mainVideo")
var PREVbutton = document.getElementById("PREV")
var NEXTbutton = document.getElementById("NEXT")


//SEASON 1

var S1EP1 = "DS_S1_VID/EP.1.S1.mp4"
var S1EP2 = "DS_S1_VID/EP.2.S1.mp4"
var S1EP3 = "DS_S1_VID/EP.3.S1.mp4"
var S1EP4 = "DS_S1_VID/EP.4.S1.mp4"
var S1EP5 = "DS_S1_VID/EP.5.S1.mp4"
var S1EP6 = "DS_S1_VID/EP.6.S1.mp4"
var S1EP7 = "DS_S1_VID/EP.7.S1.mp4"
var S1EP8 = "DS_S1_VID/EP.8.S1.mp4"
var S1EP9 = "DS_S1_VID/EP.9.S1.mp4"
var S1EP10 = "DS_S1_VID/EP.10.S1.mp4"

var S1EP11 = "DS_S1_VID/EP.11.S1.mp4"
var S1EP12 = "DS_S1_VID/EP.12.S1.mp4"
var S1EP13 = "DS_S1_VID/EP.13.S1.mp4"
var S1EP14 = "DS_S1_VID/EP.14.S1.mp4"
var S1EP15 = "DS_S1_VID/EP.15.S1.mp4"
var S1EP16 = "DS_S1_VID/EP.16.S1.mp4"
var S1EP17 = "DS_S1_VID/EP.17.S1.mp4"
var S1EP18 = "DS_S1_VID/EP.18.S1.mp4"
var S1EP19 = "DS_S1_VID/EP.19.S1.mp4"
var S1EP20 = "DS_S1_VID/EP.20.S1.mp4"

var S1EP21 = "DS_S1_VID/EP.21.S1.mp4"
var S1EP22 = "DS_S1_VID/EP.22.S1.mp4"
var S1EP23 = "DS_S1_VID/EP.23.S1.mp4"
var S1EP24 = "DS_S1_VID/EP.24.S1.mp4"
var S1EP25 = "DS_S1_VID/EP.25.S1.mp4"
var S1EP26 = "DS_S1_VID/EP.26.S1.mp4"

//---



//SEASON 2

//---

function titleUpdate() {
    document.querySelector(".titleText").textContent = `Kimetsu no Yaiba Season ${SEASON} Episode ${EPISODE}`
}

function pageChange() {
    if (SEASON == 1) {
        if (EPISODE == 1) {
            title.textContent = "Cruelty"
            player.src = S1EP1
            titleUpdate()
            PREVbutton.textContent = ""
        }
        else if (EPISODE == 2) {
            title.textContent = "Trainer Sakonji Urokodaki"
            player.src = S1EP2
            titleUpdate()
            PREVbutton.textContent = "PREV"
        }
        else if (EPISODE == 3) {
            title.textContent = "Sabito and Makomo"
            player.src = S1EP3
            titleUpdate()
        }
        else if (EPISODE == 4) {
            title.textContent = "Final Selection"
            player.src = S1EP4
            titleUpdate()
        }
        else if (EPISODE == 5) {
            title.textContent = "My Own Steel"
            player.src = S1EP5
            titleUpdate()
        }
        else if (EPISODE == 6) {
            title.textContent = "Swordsman Accompanying a Demon"
            player.src = S1EP6
            titleUpdate()
        }
        else if (EPISODE == 7) {
            title.textContent = "Muzan Kibutsuji"
            player.src = S1EP7
            titleUpdate()
        }
        else if (EPISODE == 8) {
            title.textContent = "The Smell of Enchanting Blood"
            player.src = S1EP8
            titleUpdate()
        }
        else if (EPISODE == 9) {
            title.textContent = "Temari Demon and Arrow Demon"
            player.src = S1EP9
            titleUpdate()
        }
        else if (EPISODE == 10) {
            title.textContent = "Together Forever"
            player.src = S1EP10
            titleUpdate()
        }
        else if (EPISODE == 11) {
            title.textContent = "Tsuzumi Mansion"
            player.src = S1EP11
            titleUpdate()
        }
        else if (EPISODE == 12) {
            title.textContent = "The Boar Bares its Fangs, Zenitsu Sleeps"
            player.src = S1EP12
            titleUpdate()
        }
        else if (EPISODE == 13) {
            title.textContent = "Something More Important Than Life"
            player.src = S1EP13
            titleUpdate()
        }
        else if (EPISODE == 14) {
            title.textContent = "The House with the Wisteria Family Crest"
            player.src = S1EP14
            titleUpdate()
        }
        else if (EPISODE == 15) {
            title.textContent = "Mount Natagumo"
            player.src = S1EP15
            titleUpdate()
        }
        else if (EPISODE == 16) {
            title.textContent = "Letting Someone Else Go First"
            player.src = S1EP16
            titleUpdate()
        }
        else if (EPISODE == 17) {
            title.textContent = "You Must Master a Single Thing"
            player.src = S1EP17
            titleUpdate()
        }
        else if (EPISODE == 18) {
            title.textContent = "A Forged Bond"
            player.src = S1EP18
            titleUpdate()
        }
        else if (EPISODE == 19) {
            title.textContent = "Hinokami"
            player.src = S1EP19
            titleUpdate()
        }
        else if (EPISODE == 20) {
            title.textContent = "Pretend Family"
            player.src = S1EP20
            titleUpdate()
        }
        if (EPISODE == 21) {
            title.textContent = "Against Corps Rules"
            player.src = S1EP21
            titleUpdate()
        }
        else if (EPISODE == 22) {
            title.textContent = "Master of the Mansion"
            player.src = S1EP22
            titleUpdate()
        }
        else if (EPISODE == 23) {
            title.textContent = "Hashira Meeting"
            player.src = S1EP23
            titleUpdate()
        }
        else if (EPISODE == 24) {
            title.textContent = "Rehabilitation Training"
            player.src = S1EP24
            titleUpdate()
        }
        else if (EPISODE == 25) {
            title.textContent = "Tsuguko, Kanao Tsuyuri"
            player.src = S1EP25
            titleUpdate()
            NEXTbutton.textContent = "NEXT"
        }
        else if (EPISODE == 26) {
            title.textContent = "New Mission"
            player.src = S1EP26
            titleUpdate()
            NEXTbutton.textContent = ""
        }
    }
}

function NEXT() {
    if (EPISODE < 26) {
        EPISODE += 1
        pageChange()
    }
    else {
    }
}
function PREV() {
    if (EPISODE > 1) {
        EPISODE -= 1
        pageChange()
    }
    else {
    }
}

var whiteBackground = true

function invert() {
    if (whiteBackground == true) {
        document.querySelector(".textColor").style.color = "white"
        document.querySelector(".underTitleText").style.color = "white"
        document.body.style.backgroundColor = "black"
        whiteBackground = false
    }
    else {
        document.querySelector(".textColor").style.color = "black"
        document.querySelector(".underTitleText").style.color = "black"
        document.body.style.backgroundColor = "white"
        whiteBackground = true
    }
}

function invertTimeline() {
    if (whiteBackground == true) {
        document.body.style.backgroundColor = "black"
        document.querySelector("table").style.color = "white"
        whiteBackground = false
    }
    else {
        document.body.style.backgroundColor = "white"
        document.querySelector("table").style.color = "black"
        whiteBackground = true
    }
}

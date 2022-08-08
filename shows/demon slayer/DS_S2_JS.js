//variables:


var SEASON = 2
var EPISODE = 1
function startSecondSeason() {
    document.getElementById("secondSeason").style.color = "green"
}

var title = document.getElementById("TITLE")
var player = document.querySelector(".mainVideo")
var PREVbutton = document.getElementById("PREV")
var NEXTbutton = document.getElementById("NEXT")


//SEASON 1

var S2EP1 = "DS_S2_VID/EP.1.S2.mp4"
var S2EP2 = "DS_S2_VID/EP.2.S2.mp4"
var S2EP3 = "DS_S2_VID/EP.3.S2.mp4"
var S2EP4 = "DS_S2_VID/EP.4.S2.mp4"
var S2EP5 = "DS_S2_VID/EP.5.S2.mp4"
var S2EP6 = "DS_S2_VID/EP.6.S2.mp4"
var S2EP7 = "DS_S2_VID/EP.7.S2.mp4"
var S2EP8 = "DS_S2_VID/EP.8.S2.mp4"
var S2EP9 = "DS_S2_VID/EP.9.S2.mp4"
var S2EP10 = "DS_S2_VID/EP.10.S2.mp4"
var S2EP11 = "DS_S2_VID/EP.11.S2.mp4"

//---



//SEASON 2

//---

function titleUpdate() {
    document.querySelector(".titleText").textContent = `Kimetsu no Yaiba Season ${SEASON} Episode ${EPISODE}`
}

function pageChange() {
    if (EPISODE == 1) {
        title.textContent = "Sound Hashira Tengen Uzui"
        player.src = S2EP1
        titleUpdate()
        PREVbutton.textContent = ""
    }
    else if (EPISODE == 2) {
        title.textContent = "Infiltrating the Entertainment District"
        player.src = S2EP2
        titleUpdate()
        PREVbutton.textContent = "Previously"
    }
    else if (EPISODE == 3) {
        title.textContent = "What Are You?"
        player.src = S2EP3
        titleUpdate()
    }
    else if (EPISODE == 4) {
        title.textContent = "Tonight"
        player.src = S2EP4
        titleUpdate()
    }
    else if (EPISODE == 5) {
        title.textContent = "Things Are Gonna Get Real Flashy!!"
        player.src = S2EP5
        titleUpdate()
    }
    else if (EPISODE == 6) {
        title.textContent = "Layered Memories"
        player.src = S2EP6
        titleUpdate()
    }
    else if (EPISODE == 7) {
        title.textContent = "Transformation"
        player.src = S2EP7
        titleUpdate()
    }
    else if (EPISODE == 8) {
        title.textContent = "Gathering"
        player.src = S2EP8
        titleUpdate()
    }
    else if (EPISODE == 9) {
        title.textContent = "Defeating an Upper Rank Demon"
        player.src = S2EP9
        titleUpdate()
    }
    else if (EPISODE == 10) {
        title.textContent = "Never Give Up"
        player.src = S2EP10
        titleUpdate()
        NEXTbutton.textContent = "Next"
    }
    else if (EPISODE == 11) {
        title.textContent = "No Matter How Many Lives"
        player.src = S2EP11
        titleUpdate()
        NEXTbutton.textContent = ""
    }
}

function NEXT() {
    if (EPISODE < 11) {
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

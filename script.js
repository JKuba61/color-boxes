const box = document.querySelector(`.box`)
const speedBtns = document.querySelectorAll(`[data-setting="speed"]`)
const colorBtns = document.querySelectorAll(`[data-setting="color"]`)
const sliderSaturation = document.querySelector(`#saturation`)
const sliderLight = document.querySelector(`#light`)
const lightInfo = document.querySelector(`.light-info`)
const saturationInfo = document.querySelector(`.saturation-info`)

const squares = 546
let sliderValue1 = 70
let sliderValue2 = 50
let range = 360

const createSqare = speed => {
	box.innerHTML = ``
	for (let i = 0; i < squares; i++) {
		const square = document.createElement(`div`)
		square.classList.add('square')
		square.style.transitionDuration = speed
		square.addEventListener(`mouseover`, () => setColor(square))
		square.addEventListener(`mouseout`, () => takeColorAway(square))
		box.append(square)
	}
}
const setColor = square => {
	let h
	if (range == 360) {
		h = Math.floor(Math.random() * 360)
	} else {
		h = Math.floor(Math.random() * 60) + range
	}

	const s = sliderSaturation.value + `%`
	const l = sliderLight.value + `%`

	square.style.backgroundColor = `hsl(${h},${s},${l})`
}
const takeColorAway = square => {
	square.style.backgroundColor = `transparent`
}
function handleSpeed() {
	speedBtns.forEach(btn => btn.classList.remove(`active-btn`))
	this.classList.add(`active-btn`)
	const newSpeed = this.dataset.speed + `s`
	createSqare(newSpeed)
}
function handleColorRange() {
	colorBtns.forEach(btn => btn.classList.remove(`active-btn`))
	this.classList.add(`active-btn`)
	range = parseInt(this.dataset.colorRange)
}
const handleSlider1 = () => {
	saturationInfo.textContent = sliderSaturation.value
}
const handleSlider2 = () => {
	lightInfo.textContent = sliderLight.value
}

colorBtns.forEach(btn => btn.addEventListener(`click`, handleColorRange))
speedBtns.forEach(btn => btn.addEventListener(`click`, handleSpeed))
sliderSaturation.addEventListener(`mousemove`, handleSlider1)
sliderLight.addEventListener(`mousemove`, handleSlider2)
createSqare()

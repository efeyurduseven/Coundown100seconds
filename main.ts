input.onButtonPressed(Button.A, function () {
    if (seconds < 50) {
        seconds += 10
        basic.showNumber(seconds)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (seconds < 60) {
        seconds += 1
        basic.showNumber(seconds)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    while (seconds < 0) {
        basic.showNumber(seconds)
        basic.pause(1000)
        seconds += 0 - 1
    }
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.No)
})
let seconds = 0
seconds = 0
basic.forever(function () {
	
})

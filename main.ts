input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(77)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(5000)
})

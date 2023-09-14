radio.onReceivedNumber(function (receivedNumber) {
    signalStrength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let signalStrength = 0
radio.setGroup(115)
basic.forever(function () {
    led.toggle(2, 2)
    basic.pause((0 - signalStrength - 40) ** 2)
})

let led2 = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let revers = 7
let max = 0
let poc_led = 7
for (let strip = 0; strip <= poc_led; strip++) {
    for (let _index = 0; _index <= poc_led; _index++) {
        led2.setPixelColor(revers - _index, neopixel.colors(NeoPixelColors.Orange))
        led2.show()
        basic.pause(200)
        led2.clear()
        for (let ledBAT = 0; ledBAT <= max; ledBAT++) {
            led2.setPixelColor(poc_led - ledBAT, neopixel.colors(NeoPixelColors.Green))
        }
    }
    max += 1
    revers += -1
}

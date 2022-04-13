input.onButtonPressed(Button.A, function () {
    while (count > -1) {
        basic.pause(1000)
        basic.showIcon(IconNames.Happy)
        strip.clear()
        strip.showColor(neopixel.rgb(randint(20, 30), randint(0, 65), randint(0, 20)))
        strip.showBarGraph(0, count)
        count = count - 1
    }
    if (count == -1) {
        for (let index = 0; index < 6; index++) {
            strip.clear()
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        }
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # # . # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . #
            # # . # #
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . # #
            # # . # #
            . # . # .
            `)
        basic.pause(1000)
        basic.showString("You Lose")
    }
})
let count = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
count = 10
basic.showString("Hot Potato")
basic.showLeds(`
    . # . . .
    # . # . .
    # # . # #
    # . . . #
    . # # # .
    `)
let range = strip.range(0, 5)
let range2 = strip.range(5, 10)
let range3 = strip.range(10, 15)
range.showColor(neopixel.rgb(randint(0, 10), randint(10, 20), randint(20, 30)))
range2.showColor(neopixel.rgb(randint(30, 60), randint(30, 40), randint(40, 60)))
range3.showColor(neopixel.rgb(randint(20, 30), randint(0, 65), randint(0, 20)))
while (!(input.buttonIsPressed(Button.A))) {
    strip.rotate(1)
    strip.show()
}
basic.forever(function () {
	
})

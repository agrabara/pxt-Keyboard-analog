//Rafal - klawiatura analogowa 5 przyciskow

let arp = 0
basic.forever(function () {
    arp = pins.analogReadPin(AnalogPin.P0)
    if (arp >= 340 && arp <= 370) {  //FIRE
        led.plot(2, 2)
    } else if (arp >= 20 && arp <= 50) { //UP
        led.plot(2, 0)
    } else if (arp >= 80 && arp <= 100) { //DOWN
        led.plot(2, 4)
    } else if (arp >= 0 && arp <= 15) { //LEFT
        led.plot(0, 2)
    } else if (arp >= 150 && arp <= 185) { //RIGHT
        led.plot(4, 2)
    } else {   // EMPTY
        led.unplot(2, 2)
        led.unplot(2, 0)
        led.unplot(2, 4)
        led.unplot(0, 2)
        led.unplot(4, 2)
    }
    basic.pause(10)
})
 
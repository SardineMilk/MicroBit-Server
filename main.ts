radio.onReceivedValue(function on_received_value(name: string, value: number) {
    let x = parseInt(name)
    for (let y = 0; y < 5; y++) {
        led.unplot(x, y)
    }
    if (value & 1) {
        led.plot(x, 0)
    }
    
    if (value & 2) {
        led.plot(x, 1)
    }
    
    if (value & 4) {
        led.plot(x, 2)
    }
    
    if (value & 8) {
        led.plot(x, 3)
    }
    
    if (value & 16) {
        led.plot(x, 4)
    }
    
})
radio.setGroup(3)

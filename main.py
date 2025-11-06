def on_received_value(name, value):
    x = int(name)
    
    for y in range(5):
            led.unplot(x, y)

    if value & 1:
        led.plot(x, 0)
    if value & 2:
        led.plot(x, 1)
    if value & 4:
        led.plot(x, 2)
    if value & 8:
        led.plot(x, 3)
    if value & 16:
        led.plot(x, 4)
radio.on_received_value(on_received_value)

radio.set_group(3)
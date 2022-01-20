led.enable(false)
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"Connecting...",
0,
0
)
ESP8266ThingSpeak.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"VODAFONE_GS",
"2106019487"
)
basic.pause(1000)
if (ESP8266ThingSpeak.isWifiConnected()) {
    lcd1602.putString(
    "Wifi Connected",
    0,
    0
    )
}

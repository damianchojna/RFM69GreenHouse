import Rfm69FreqBandEnum from "./Rfm69FreqBandEnum"

export default interface Rfm69OptionsInterface {
    freqBand: Rfm69FreqBandEnum
    address: number // Address for this node
    networkID: number
    isRFM69HW: boolean // Is High Power radio? Must be true for RF69HCW, RF69HW
    powerLevelPercent: number // Transmit power between 0 and 100

    interruptPin: number // Pin number of interrupt pin. This is a GPIO number (GPIO24 : pin 18).
    resetPin: number // Pin number of reset pin. This is a GPIO number (GPIO5 : pin 29).
    spiBus: number // SPI bus number.
    spiDevice: number // SPI device number.

    promiscuousMode: boolean // Accept all packets
    encryptionKey: string // Key for AES encryption. Must be 16 chars long or no encryption set
    autoAcknowledge: boolean // Automatically reply with Ack
    verbose: boolean // Verbose logging to console
}

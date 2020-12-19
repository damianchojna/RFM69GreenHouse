import * as RFM69 from "rfm69radio"
import Rfm69OptionsInterface from "../models/Rfm69OptionsInterface"
import Rfm69Packet from "../models/Rfm69Packet"

class Rfm69Service {
    protected rfm69

    constructor(protected options: Partial<Rfm69OptionsInterface> = {}) {
        this.rfm69 = new RFM69()
    }

    init = async (): Promise<void> => {
        await this.rfm69.initialize(this.options)
    }

    readTemperature = async (): Promise<string> => {
        return await this.rfm69.readTemperature()
    }

    calibrateRadio = async (): Promise<void> => {
        return await this.rfm69.calibrateRadio()
    }

    registerPacketReceivedCallback = (callback: (packet: Rfm69Packet) => void): void => {
        this.rfm69.registerPacketReceivedCallback(callback)
    }
}

export default Rfm69Service

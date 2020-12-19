import Rfm69Packet from "../../Rfm69/models/Rfm69Packet"
import GreenhouseInterface from "../models/GreenhouseInterface"
import GreenhousePayloadInterface from "../models/GreenhousePayloadInterface"

export default class GreenhouseDto {
    static rfm69PacketToGreenhouseModel(packet: Rfm69Packet): GreenhouseInterface {
        const greenhousePayload = JSON.parse(packet.payload.replace(/\0/g, "")) as GreenhousePayloadInterface

        return {
            date: new Date(),
            temperature: greenhousePayload.F.t,
            soilMoisture: greenhousePayload.F.s,
            light: greenhousePayload.F.s[1], //To zmiany w arduino
            batteryVoltage: greenhousePayload.F.b,
        }
    }
}

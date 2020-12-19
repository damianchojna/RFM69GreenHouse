import GreenhouseRepository from "../repositories/GreenhouseRepository"
import Rfm69Service from "../../Rfm69/services/Rfm69Service"
import Rfm69Packet from "../../Rfm69/models/Rfm69Packet"
import GreenhouseDto from "../services/GreenhouseDto"
import GreenhouseInterface from "../models/GreenhouseInterface"

export default class GreenhouseListener {
    constructor(protected rfm69Service: Rfm69Service, protected greenhouseRepository: GreenhouseRepository) {
        this.rfm69Service.registerPacketReceivedCallback(this.listenForGreenhouseChanges.bind(this))
    }

    listenForGreenhouseChanges(packet: Rfm69Packet) {
        const newGreenhouseData = GreenhouseDto.rfm69PacketToGreenhouseModel(packet)
        this.greenhouseRepository.saveGreenhouseData(newGreenhouseData, packet.senderAddress, packet.rssi)
    }
}

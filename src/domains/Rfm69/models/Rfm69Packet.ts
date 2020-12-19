export default interface Rfm69Packet {
    targetAddress: number
    senderAddress: number
    peer: { lastReceivedPacket: Rfm69Packet; lastSentPacket: any }
    rssi: number
    payloadBuffer: Buffer
    payload: string
    requiresAck: boolean
    hasAck: boolean
    timestamp: string
}

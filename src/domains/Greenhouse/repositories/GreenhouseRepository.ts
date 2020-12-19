import GreenhouseInterface from "../models/GreenhouseInterface"
import * as Influx from "influx"

export default class GreenhouseRepository {
    constructor(protected influx: Influx.InfluxDB) {}

    saveGreenhouseData(data: GreenhouseInterface, nodeId: number, rssi: number) {
        const date = new Date(+data.date)
        date.setMilliseconds(0)

        this.influx.writePoints([
            {
                measurement: "voltage",
                tags: {
                    device: "PROMINI",
                    node: String(nodeId),
                    place: "folia",
                },
                fields: {
                    value: data.batteryVoltage,
                },
                timestamp: date,
            },
            {
                measurement: "rssi",
                tags: {
                    device: "PROMINI",
                    node: String(nodeId),
                    place: "folia",
                },
                fields: {
                    value: rssi,
                },
                timestamp: date,
            },
            {
                measurement: "light",
                tags: {
                    device: "Photoresistor5516",
                    node: String(nodeId),
                    place: "folia",
                },
                fields: {
                    value1: data.light,
                },
                timestamp: date,
            },
            {
                measurement: "temperature",
                tags: {
                    device: "DS18S20",
                    node: String(nodeId),
                    place: "folia",
                },
                fields: {
                    value1: data.temperature[0],
                    value2: data.temperature[1],
                    value3: data.temperature[2],
                },
                timestamp: date,
            },
            {
                measurement: "soil_moisture",
                tags: {
                    device: "MOISTURE_SENSORV1.2",
                    node: String(nodeId),
                    place: "folia",
                },
                fields: {
                    value1: data.soilMoisture[0],
                },
                timestamp: date,
            },
        ])
    }
}

const Influx = require("influx")

module.exports = {
    influx: {
        host: "nas.lh",
        port: 8086,
        password: "iot",
        username: "iot",
        database: "iot",
        schema: [
            {
                measurement: "voltage",
                tags: ["device", "node", "place"],
                fields: {
                    value: Influx.FieldType.FLOAT,
                },
            },
            {
                measurement: "rssi",
                tags: ["device", "node", "place"],
                fields: {
                    value: Influx.FieldType.INTEGER,
                },
            },
            {
                measurement: "soil_moisture",
                tags: ["device", "node", "place"],
                fields: {
                    value1: Influx.FieldType.INTEGER,
                    value2: Influx.FieldType.INTEGER,
                },
            },
            {
                measurement: "light",
                tags: ["device", "node", "place"],
                fields: {
                    value1: Influx.FieldType.INTEGER,
                },
            },
            {
                measurement: "temperature",
                tags: ["device", "node", "place"],
                fields: {
                    value1: Influx.FieldType.FLOAT,
                    value2: Influx.FieldType.FLOAT,
                    value3: Influx.FieldType.FLOAT,
                },
            },
        ],
    },
}

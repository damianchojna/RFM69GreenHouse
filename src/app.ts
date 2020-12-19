import container from "./container"
;(async () => {
    const { rfm69Service, influx } = container

    const names = await influx.getDatabaseNames()
    if (!names.includes("iot")) await influx.createDatabase("iot")

    await rfm69Service.init()

    const temp = await rfm69Service.readTemperature()
    await rfm69Service.calibrateRadio()

    console.log(`RFM69 Temperature : ${temp}`)
})()

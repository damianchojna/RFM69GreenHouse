import Rfm69Service from "./domains/Rfm69/services/Rfm69Service"
import GreenhouseRepository from "./domains/Greenhouse/repositories/GreenhouseRepository"
import GreenhouseListener from "./domains/Greenhouse/listeners/GreenhouseListener"
import * as Conflakes from "conflakes"
import * as Influx from "influx"

const config = new Conflakes().load(__dirname + `/../config/config.yml`).getConfig(false)
const influx = new Influx.InfluxDB(config.get("influx"))
const rfm69Service = new Rfm69Service(config.get("rfm69"))
const greenhouseRepository = new GreenhouseRepository(influx)
const greenhouseListener = new GreenhouseListener(rfm69Service, greenhouseRepository)

const container = {
    rfm69Service,
    greenhouseRepository,
    greenhouseListener,
    influx,
}

export default container

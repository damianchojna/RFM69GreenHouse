export default interface GreenhousePayloadInterface {
    //Folia
    F: {
        b: number //battery
        s: number[] //wilgotnosc czujnik1, czujnik2, ...
        t: number[] //temperatura czujnik1, czujnik2, ...
    }
}

/*
    F: {
        b: 4.05
        s: [208, 199]
        t: [-0.3, 3, 0.1]
    }
 */

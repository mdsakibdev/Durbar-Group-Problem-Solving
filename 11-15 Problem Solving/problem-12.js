function convertTemperature(value, unit) {

    if (unit === "C") {
    let cCount = (value * 9/5) + 32;
    return Math.round(cCount * 100) / 100
        

    } else if (unit === "F") {

        let fCount = (value - 32) * 5/9;
        return Math.round(fCount * 100) / 100

    }

}
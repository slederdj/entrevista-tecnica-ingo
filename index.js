let numbers = {
    1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco",
    6: "seis", 7: "siete", 8: "ocho", 9: "nueve", 10: "diez", 11: "once", 12: "doce",
    13: "trece", 14: "catorce", 15: "quince",
    16: "dieciséis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve",
    20: "veinte", 21: "veintiuno", 22: "veintidós", 23: "veintitrés", 24: "veinticuatro",
    25: "veinticinco", 26: "veintiséis", 27: "veintisiete", 28: "veintiocho", 29: "veintinueve",
    30: "treinta", 40: "cuarenta", 50: "cincuenta"
}
let quarter = {
    0: "en punto", 15: "y cuarto", 30: "y media", 45: "y tres cuartos"
}
/*
---------------------
-- function: HHMMToString
-- parameters: HH string that indicate the hour, MM string that indicates the minutes and TM (AM/PM)
-- return: string
-- Create a string that say 'what time is it?'
---------------------
*/
function HHMMToString(HH, MM, TM) {
    var minutes = parseInt(MM), hour = parseInt(HH), day = "";
    if ((hour >= 1 && hour <= 12) && (minutes >= 0 && minutes < 60)) {
        if (hour == 12 && minutes == 0) {
            return `${TM == "AM" ? "Es media noche." : "Es medio día."}`
        } else {
            var hh = `${hour == "1" ? 'Es la' : 'Son las'} ${hour == "1" ? "una" : numbers[hour]} `;
            var mm = `${quarter[minutes] != undefined ? quarter[minutes] : "y " +
                (numbers[minutes] != undefined ? `${numbers[minutes]} ` : `${numbers[parseInt(minutes / 10) * 10]} y ${numbers[parseInt(minutes % 10)]}`)} `;
            if (TM == "PM" && (hour == 12 || hour < 6)) day = "de la tarde.";
            else if (TM == "PM" && (hour < 12 || hour >= 6)) day = "de la noche."
            else if (TM == "AM") day = "de la mañana."
            return `${hh} ${mm} ${day}`;
        }
    }
    return "Formato de hora invalido."
}

/*
---------------------
-- function: convert
-- parameters: none
-- return: none
-- Create and change the html by DOM and call the function to convert the HHMM at string format.
---------------------
*/
function convert() {
    // Getting time from html
    if (document.getElementById("result") == null) {
        np = document.createElement("p");
        np.setAttribute("id", "result");
        document.getElementById("content").appendChild(np)
    }
    var HH = document.getElementsByName("hh")[0].value
    var MM = document.getElementsByName("mm")[0].value
    var TM = document.getElementsByName("daytime")[0].value
    var result = document.getElementById("result")
    if (HH != "" && MM != "") {
        // Method to convert
        let HHMM = HHMMToString(HH, MM, TM);
        // Getting result and setting from/to html.
        result.innerText = HHMM

    } else result.innerText = "Llenar todos los campos."
}
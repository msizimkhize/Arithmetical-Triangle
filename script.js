let rowCoefficients = [];

function setButtonText (writButton, newText){
    const btn = document.getElementById(writButton);
    btn.innerText = newText;    
}

function stepInward(){
    document.getElementById("myButton").innerText = "New Text";
}

function stepOutward() {
    document.getElementById("myButton").innerText = "New Text";
}

function process() {
    const index = parseInt(document.getElementById("powerText").value, 10);
    setButtonText ("leftButton", index);
}

function arrayValues(returnedExponent) {
    let array = [];

    switch (returnedExponent) {
        case 0:
            array = [1];
            rowCoefficients[0] = array;
            return array;

        case 1:
            array = [1, 1];
            rowCoefficients[1] = array;
            return array;

        default:
            let prevRow = arrayValues(returnedExponent - 1);
            let position = 0;
            let positions = returnedExponent;

            while (positions >= position) {
                if (position === 0 || position === positions) {
                    array.push(1);
                } else {
                    array.push(prevRow[position - 1] + prevRow[position]);
                }
                position++;
            }

            rowCoefficients[returnedExponent] = array;
            return array;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("processButton").addEventListener("click", process);
});


function appendToScreen(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function clearOne(){
    var valueIni = document.getElementById("result").value;
    var sliceVal = valueIni.slice(0 , -1)
    document.getElementById("result").value = sliceVal; 
}

function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

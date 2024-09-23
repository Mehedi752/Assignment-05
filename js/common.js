
// Common Reusable Functions.
function isNumber(string) {

    for (let ch of string) {
        if (ch >= '0' && ch <= '9')
            continue;
        else
            return false;
    }
    return true;
}

function getInputValueByID(id) {
    const inputValue = document.getElementById(id).value;
    if (!isNumber(inputValue))
        return -1;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    if (!isNumber(textValue))
        return -1;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function formatCurrentDate() {
    const now = new Date();

    // Format the date using the desired format string  
    const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    // Format the time using the desired format string  
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    });

    return `${formattedDate} ${formattedTime}`;
}
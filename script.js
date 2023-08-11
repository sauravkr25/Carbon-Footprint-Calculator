function calculateEmission() {

    let result = 0;

    result += document.getElementById('inpNoOfFlts').value * 750;

    switch (document.getElementById('inpDietPref').value) {
        case 'vegOnly': result += (3.8 * 365); break;
        case 'nonVegOnly': result += (7.2 * 365); break;
        case 'vegan': result += (2.9 * 365); break;
        case 'vegNonVeg': result += (5.5 * 365); break;
        default: result += 0; break;
    }

    let kms = document.getElementById('inpNoOfKms').value;

    switch (document.getElementById('inpFuelTyp').value) {
        case 'electric': result += kms * 0.053; break;
        case 'naturalGas': result += kms * 0.150; break;
        case 'gdp': result += kms * 0.180; break;
        default: result += 0; break;
    }

    switch (document.getElementById('inpShopPref').value) {
        case 'rarely': result += 2.16; break;
        case 'average': result += 9.36; break;
        case 'shopper': result += 28.08; break;
        case 'luxuryShopper': result += 46.8; break;
        default: result += 0; break;
    }

    let renEnergySource = document.getElementById('inpRenEnergyYes').checked;

    let numOfPerson = document.getElementById('inpNoOfPp1').value;

    if (renEnergySource) {
        switch (document.getElementById('inpHouseSize').value) {
            case '1b': result += (72 / numOfPerson); break;
            case '2b': result += (144 / numOfPerson); break;
            case '3b': result += (216 / numOfPerson); break;
            case '4b': result += (288 / numOfPerson); break;
            default: result += 0; break;
        }
    }

    else {
        switch (document.getElementById('inpHouseSize').value) {
            case '1b': result += (2280 / numOfPerson); break;
            case '2b': result += (4560 / numOfPerson); break;
            case '3b': result += (6840 / numOfPerson); break;
            case '4b': result += (9120 / numOfPerson); break;
            default: result += 0; break;
        }
    }

    window.localStorage.setItem("result", (result * 0.00110231).toFixed(2));
    window.location.href = window.location.href.replace('index', 'final');
}


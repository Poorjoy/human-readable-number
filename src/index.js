var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {

    var unitValue = number % 100 % 10;
    var dozensValue = (number % 100 - unitValue) / 10;
    var hundredsValue = Math.floor(number / 100);

    if (number === 0) {
        return 'zero';
    }
    return (processHundreds(hundredsValue) + ' ' + processDozens(dozensValue, unitValue) + ' ' + processUnits(dozensValue, unitValue)).replace('  ', ' ').trim();
}

function processHundreds(hundredsValue) {
    return hundredsValue > 0 ? units[hundredsValue] + ' hundred' : '';
}

function processDozens(dozensValue, unitsValue) {
    return (dozensValue === 1 ? units[dozensValue * 10 + unitsValue] : dozens[dozensValue]);
}

function processUnits(dozensValue, unitsValue) {
    return dozensValue === 1 ? '' : units[unitsValue];
}

var stringCalculator = function() {
    this.add = function(list) {
        if (list == '' || list == null) {
            return '0';
        } else {
            var sum = 0;
            var values = { a: '0' };
            var strToInt = function(strNumber) {
                var strN = String(strNumber).trim();
                if (isNaN(strN)) strN = values[strN] || 0;
                return parseInt(strN);
            };
            var sumNumber = function(number) {
                if (number > 100) {
                    sum += 0;
                } else {
                    sum += number;
                }
            };

            list[0].split(/[ ,]+/).map(strToInt).forEach(sumNumber);
            return sum.toString();
        }
    };
};

module.exports = stringCalculator;

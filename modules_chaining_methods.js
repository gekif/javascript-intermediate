var run = (function (){
    var DEFAULTS = {
        topSpeed: '250 miles an hour',
        topHorsePower: '507 horse power'
    };

    return {
        speed: function() {
            var allArguments = arguments[0] || '';

            var myStatements = allArguments.topSpeed || DEFAULTS.topSpeed;

            console.log(myStatements);

            return this;
        },

        horsePower: function() {
            var myAllArguments = arguments[0] || '';

            var topHorsePowerChecking = myAllArguments.topHorsePower || DEFAULTS.topHorsePower;

            console.log(topHorsePowerChecking);

            return this;
        }
    };
})();
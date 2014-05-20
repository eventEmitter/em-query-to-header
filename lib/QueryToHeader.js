!function(){

    var   Class         = require('ee-class')
        , log           = require('ee-log');



    module.exports = new Class({

        init: function(options) {
            if (options) {
                if (options.headers) {
                    this.headers = options.headers.map(this.toLowerCase.bind(this));
                }
            }
        }

        , toLowerCase: function(input) {
            return input.toLowerCase().trim();
        }

        , request: function(request, response, next) {
            var query = Object.keys(request.query).map(this.toLowerCase.bind(this));

            if (this.headers) {
                this.headers.forEach(function(header){
                    if (query.indexOf(header) >= 0){
                        request.setHeader(header, decodeURIComponent(request.query[header]));
                    }
                }.bind(this));
            }            

            next();
        }
    });
}();

define(function (require) {
    var html = require('text!./main.html');
    return function () {
        return {
            render: function () {
                return $(html);
            }
        };
    };
});

define(function (require) {
    var Footer = require('app/module/footer/main');
    var html = require('text!./main.html');
    return function () {
        return {
            render: function () {
                var footer = new Footer();
                var $html = $.merge($(html), footer.render());
                return $html;
            }
        };
    };
});

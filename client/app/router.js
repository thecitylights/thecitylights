define(function (require) {
    var Backbone = require('backbone');
    return Backbone.Router.extend({
        initialize: function (routes) {
            _.each(routes, function (handler, route) {
                this.route(route, null, handler);
            }, this);
            Backbone.history.start();
        }
    });
});

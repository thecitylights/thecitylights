define(function (require) {
    var handler = require('./handler');
    var Router = require('./router');
    var module = {
        Navigation: require('./module/navigation/main')
    };
    var showNavigation = function () {
        $('body').append(new module.Navigation().render());
    };
    return {
        init: function () {
            showNavigation();
            var router = new Router({
                '': handler.handle.root,
                'donate': handler.handle.donate
            });
            console.log('app: initialized');
        }
    };
});

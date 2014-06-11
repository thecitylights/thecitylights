define(function (require) {
    var Handler = require('./handler');
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
            var handler = new Handler();
            var router = new Router({
                '': handler.handle.root,
                'donate': handler.handle.donate,
                'beliefs': handler.handle.beliefs,
                'story': handler.handle.story,
                'vision': handler.handle.vision
            });
            console.log('app: initialized');
        }
    };
});

define(function (require) {
    var module = {
        Home: require('./module/home/main'),
        Donate: require('./module/donate/main'),
        Beliefs: require('./module/beliefs/main'),
        Story: require('./module/story/main'),
        Vision: require('./module/vision/main')
    };
    var show = function (module) {
        $('.page').remove();
        $('body').append(module.render());
    };
    return function () {
        return {
            handle: {
                root: function () {
                    show(new module.Home());
                },
                donate: function () {
                    show(new module.Donate());
                },
                beliefs: function () {
                    show(new module.Beliefs());
                },
                story: function () {
                    show(new module.Story());
                },
                vision: function () {
                    show(new module.Vision());
                }
            }
        };
    };
});

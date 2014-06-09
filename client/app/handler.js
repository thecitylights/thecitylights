define(function (require) {
    var module = {
        Home: require('./module/home/main'),
        Donate: require('./module/donate/main')
    };
    var show = function (module) {
        $('.page').remove();
        $('body').append(module.render());
    };
    return {
        handle: {
            root: function () {
                show(new module.Home());
            },
            donate: function () {
                show(new module.Donate());
            }
        }
    };
});

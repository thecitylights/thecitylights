define(function (require) {
    'use strict';
    var _ = require('underscore');
    var backbone = require('backbone');
    var html = require('text!./main.html');
    var Handle = function ($el, state) {
        return {
            dom: {
                onClickButton: function (event) {
                    toggleStaged(state);
                },
                onClickLink: function (event) {
                    toggleStaged(state, true);
                }
            },
            state: {
                onChangeStaged: function (state, staged) {
                    $el.toggleClass('staged', staged);
                }
            }
        };
    };
    var toggleStaged = function (state, staged) {
        state.set('staged', _.isUndefined(staged) ? !state.get('staged') : staged);
    };
    return function () {
        var $el = $(html);
        var state = new backbone.Model();
        // Bind event listeners
        var handle = new Handle($el, state);
        state.on('change:staged', handle.state.onChangeStaged);
        $el.on({'click': handle.dom.onClickButton}, 'button');
        $el.on({'click': handle.dom.onClickLink}, 'a');
        // Set initial state
        state.set('staged', true);
        return {
            render: function () {
                return $el;
            },
            state: state
        };
    };
});

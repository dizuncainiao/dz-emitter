
exports.__esModule = true;
const DzEmitter = /** @class */ (function () {

    function DzEmitter () {

        this.events = {};

    }
    DzEmitter.prototype.addEvent = function (e, callback, isOnce) {

        if (isOnce === void 0) {

            isOnce = false;

        }
        const {events} = this,
            keys = Object.keys(events);
        if (keys.includes(e)) {

            events[e].isOnce = isOnce;
            events[e].callbacks.push(callback);

        } else {

            events[e] = {
                isOnce,
                "callbacks": [callback]
            };

        }

    };
    // 触发当前实例上的事件。附加参数都会传给监听器回调。
    DzEmitter.prototype.emit = function (e, data) {

        try {

            const _a = this.events[e],
                {isOnce} = _a,
                {callbacks} = _a;
            callbacks.forEach((fn) => fn(data));
            isOnce && this.off(e);

        } catch (e) {

            console.error(e);

        }

    };
    // 监听当前实例上的自定义事件
    DzEmitter.prototype.on = function (e, callback) {

        this.addEvent.call(
            this,
            e,
            callback
        );

    };
    // 监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除
    DzEmitter.prototype.once = function (e, callback) {

        this.addEvent.call(
            this,
            e,
            callback,
            true
        );

    };
    // 移除自定义事件监听器
    DzEmitter.prototype.off = function (e, callback) {

        // 如果没有提供参数，则移除所有的事件监听器
        if (!arguments.length) {

            this.events = {};

        }
        // 如果只提供了事件，则移除该事件所有的监听器
        if (e && !callback) {

            delete this.events[e];

        }
        // 如果同时提供了事件与回调，则只移除这个回调的监听器
        if (e && callback) {

            const {callbacks} = this.events[e],
                index = callbacks.findIndex((fn) => fn === callback);
            index >= 0 && callbacks.splice(
                index,
                1
            );

        }

    };
    return DzEmitter;

}());
exports.default = DzEmitter;

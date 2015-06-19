'use strict';

var React = require('react');
var Reflux = require('reflux');
var UserNotification = require('./UserNotification.jsx');

var UserNotifications = React.createClass({

    _renderNotification(notification, openDropdown) {
        return <UserNotification
            key={notification.id}
            notification={notification}
            openDropdown={openDropdown} />;
    },

    _renderNotifications() {
        var notifications = this.props.notifications;
        var length = notifications.length;
        var openDropdown = this.props.openDropdown;

        return notifications.map((notification, index) => {
            var notificationComponent = this._renderNotification(notification, openDropdown);
            return index === length - 1 ?
                notificationComponent :
                [notificationComponent, <li className="divider"></li>];
        });
    },

    render() {
        var notifications = this.props.notifications;
        if (notifications && notifications.length > 0) {
            return (
                <ul style={{'z-index': '10000000'}} className="dropdown-menu UserNotifications">
                    { this._renderNotifications(this.props.func) }
                </ul>
            );
        }
        return null;
    }

});

module.exports = UserNotifications;

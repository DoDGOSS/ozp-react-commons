'use strict';

var React = require('react');
var { PropTypes } = React;
var _Date = require('../Date.jsx');
var Time = require('../Time.jsx');

var SelfActions = require('../../actions/ProfileActions.js');

var UserNotification = React.createClass({

    propTypes: {
        notification: PropTypes.object.isRequired
    },

    onDismiss(event) {
        if($("#notifcation-dropdown").find('.UserNotification').length > 1){
            $("#notifcation-dropdown").addClass('open');
        }
        event.preventDefault();
        event.stopPropagation();
        SelfActions.dismissNotification(this.props.notification);
    },

    render() {
        var { expiresDate, message } = this.props.notification;
        return (
            <li className="UserNotification">
                <button type="button" className="close pull-right" onClick={this.onDismiss}>×</button>
                <h5 className="created-by">OZONE</h5>
                <i className="small">
                    <_Date date={expiresDate} />
                    <Time date={expiresDate} />
                </i>
                <p className="message small">{message}</p>
            </li>
        );
    }

});

module.exports = UserNotification;

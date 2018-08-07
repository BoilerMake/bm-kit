import React, { PureComponent } from 'react';
import { _noop } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_common.buttons.source.scss';

/**
 * @prop className: css classes to be appended
 * @prop children: what goes inside of the buttons
 * @prop onClick: function called on clicking the component
 **/
class Button extends PureComponent {
  render() {
    const { className, children, onClick, full, disabled } = this.props;
    const classes = classNames('c_button',
      { 'c_button--disabled' : disabled,
        'c_button--full'  : full,
        className
      });
    return (
      <button
        className={classes}
        onClick={disabled ? _noop : onClick}
        {...this.props} >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  full: PropTypes.func,
  disabled: PropTypes.func,
}

export default Button;

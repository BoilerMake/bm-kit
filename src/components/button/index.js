import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_common.buttons.source.scss';

/**
 * @prop className: css classes to be appended
 * @prop children: what goes inside of the buttons
 * @prop size: {small, '': default, large}
 * @prop mood: [good: 'green', bad: 'red', '': default]
 * @prop onClick: function called on clicking the component
 **/
class Button extends PureComponent {
  render() {
    const { className, children, size, mood, onClick, bm6 } = this.props;
    const classes = classNames('c_button',
      { 'c_button--large' : size === 'large',
        'c_button--small' : size === 'small',
        'c_button--bad'   : mood === 'bad',
        'c_button--bm6'   : bm6,
        className
      });
    return (
      <button className={classes} onClick={onClick}>{ children }</button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.string,
  mood: PropTypes.string,
  onClick: PropTypes.func,
  bm6: PropTypes.bool,
}

export default Button;

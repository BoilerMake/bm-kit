import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './_common.buttons.source.css';

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
    console.log(bm6);
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

export default Button;

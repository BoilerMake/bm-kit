import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './_common.buttons.source.css';

class Button extends PureComponent {
  render() {
    const { className, children, size, mood } = this.props;
    const classes = classNames('c_button',
      { 'c_button--large' : size === 'large',
        'c_button--small' : size === 'small',
        'c_button--good'  : mood === 'good',
        'c_button--bad'   : mood === 'bad',
        className
      });

    return (
      <button className={classes}>{ children }</button>
    );
  }
}

export default Button;

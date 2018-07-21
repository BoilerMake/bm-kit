import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './_common.cards.source.css';

class Card extends PureComponent {
  render() {
    const { className, children } = this.props;
    const classes = classNames('c_card', { className });

    return (
      <div className={classes}>{ children }</div>
    );
  }
}

export default Card;

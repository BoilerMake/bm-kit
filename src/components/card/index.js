import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './_common.cards.source.scss';

class Card extends PureComponent {
  render() {
    const { className, children } = this.props;
    const classes = classNames('c_card', { className });

    return (
      <div className={classes}>{ children }</div>
    );
  }
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}

export default Card;

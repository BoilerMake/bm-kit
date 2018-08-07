import React, { PureComponent } from 'react';
import { _noop } from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_common.checkbox.source.scss';

/**
 * @prop className: css classes to be appended
 * @prop children: what goes inside of the buttons
 * @prop onClick: function called on clicking the component
 **/
class Checkbox extends PureComponent {
  render() {
    const {
      className,
      onClick,
      disabled,
      checked,
      label
    } = this.props;

    const classes = classNames('c_checkbox__box',
      {
        'c_checkbox__box--disabled' : disabled,
        'c_checkbox__box--checked' : checked,
      },
      className
    );

    return (
      <div className="c_checkbox">
        <input type="checkbox" onClick={disabled ? _noop : onClick} className={classes} disabled={disabled} />
        { label ? <div className="c_checkbox__label">{label}</div> : null }
      </div>
    );
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.string,
}

export default Checkbox;

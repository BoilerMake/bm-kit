import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './_common.text_input.source.css';

/**
 * @prop label: Label for input
 * @prop placeholder: what goes inside of the input
 **/
class TextInput extends PureComponent {
  renderWithoutIcon() {
    const {
      placeholder,
      bm6,
    } = this.props;
    const inputClasses = classNames('c-text_input', { 'c-text_input--bm6': bm6 });
    return (
      <div className={inputClasses}>
        <input placeholder={ placeholder } className="c-text_input__input" />
      </div>
    );
  }

  renderWithIcon() {
    const {
      icon,
      placeholder,
      bm6,
    } = this.props;
    const inputClasses = classNames('c-text_input', { 'c-text_input--bm6': bm6 });
    return (
      <div className={inputClasses}>
        <div className="c-text_input__icon"><i className={`fa-${icon}}`}/></div>
        <div className="c-text_input__input--has_icon"><input placeholder={ placeholder } /></div>
      </div>
    );
  }

  render() {
    const {
      label,
      bm6,
      icon,
    } = this.props;
    const labelClasses = classNames('c-text_input__label', { bm6 });

    return (
      <span>
        { label ? <div className={labelClasses}><label htmlFor={ label }>{ label }</label></div> : null }
        { icon ? this.renderWithIcon() : this.renderWithoutIcon() }
      </span>
    );
  }
}

export default TextInput;

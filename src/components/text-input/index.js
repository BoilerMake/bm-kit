import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './_common.text_input.source.css';

/**
 * @prop label: Label for input
 * @prop placeholder: what goes inside of the input
 **/
class TextInput extends PureComponent {
  render() {
    const {
      label,
      placeholder,
    } = this.props;
    const labelClasses = classNames('c-text_input__label');
    const inputClasses = classNames('c-text_input__input');

    return (
      <span>
        { label ? <label className={labelClasses} htmlFor={ label }>{ label }</label> : null }
        <input className={inputClasses} placeholder={ placeholder } id={ label }/>
      </span>
    );
  }
}

export default TextInput;

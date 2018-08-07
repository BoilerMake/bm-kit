import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './_common.text_input.source.scss';

/**
 * @prop label: Label for input
 * @prop placeholder: what goes inside of the input
 * @prop className: class name
 **/
class TextInput extends PureComponent {
  render() {
    const {
      className,
      label,
      optional,
      // helpText,
      hasError,
      disabled,
      errorText,
    } = this.props;
    const labelClasses = classNames('c-text_input__label',
      {
        'c-text_input__label--error' : hasError,
        'c-text_input__label--disabled' : disabled,
      }
    );

    const inputClasses = classNames('c-text_input__input',
      {
        'c-text_input__input--error': hasError,
        'c-text_input__input--disabled' : disabled,
      }
    );

    return (
      <div className={`${className} c-text_input`}>
        <label className={labelClasses}>
          { label }
          { optional ? <span className="c-text_input__label--optional"> - Optional</span> : null }
        </label>
        <input className={inputClasses} type={this.props.type || 'text'} placeholder={this.props.placeholder} name={this.props.name} />
        { errorText ? <div className="c-text_input__error_text">{ errorText }</div> : null }
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  optional: PropTypes.bool,
  helpText: PropTypes.string,
  hasError: PropTypes.bool,
  errorText: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default TextInput;

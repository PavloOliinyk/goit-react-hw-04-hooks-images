import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class Button extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button type="button" className={s.Button} onClick={this.props.onSearch}>
        Load more
      </button>
    );
  }
}

export default Button;

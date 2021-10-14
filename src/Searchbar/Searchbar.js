import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChahge = e => {
    const { value } = e.target;

    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(query);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          value={query}
          placeholder="Search images and photos"
          onChange={handleChahge}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

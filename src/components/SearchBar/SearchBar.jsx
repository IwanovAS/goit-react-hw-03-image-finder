import css from './SearchBar.module.css'

export const SearchBar = ({ onSubmit }) => (
  <header className={css.SearchBar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <button className={css.SearchFormButton} type="submit">
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        name="inputForSearch"
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

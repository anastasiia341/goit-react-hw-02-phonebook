import css from './Filter.module.css';

const Filter = ({ onChange }) => {
  return (
    <label className={css.filterLabel}>
      Find contacts by the name
      <input
        type="text"
        name="filter"
        onChange={onChange}
        className={css.filterInput}
      ></input>
    </label>
  );
};

export { Filter };

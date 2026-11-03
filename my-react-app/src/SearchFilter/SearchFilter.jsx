
import "./SearchFilter.css";

function SearchFilter({
  search,
  setSearch,
  category,
  setCategory,
  onReset,
}) {
  return (
    <div className="search-filter-container">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search events by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All Categories">All Categories</option>
        <option value="Culture">Culture</option>
        <option value="Sports">Sports</option>
        <option value="Technology">Technology</option>
        <option value="Design">Design</option>
        <option value="Tech">Tech</option>
      </select>

      {/* Reset Button */}
      <button
        type="button"
        onClick={onReset}
      >
        Reset Filters
      </button>

    </div>
  );
}

export default SearchFilter;

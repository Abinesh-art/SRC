const SearchBar = ({ setSearch }) => {
  return (
    <input
      placeholder="Search by name or category"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;

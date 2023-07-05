export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const search = e.currentTarget;
    onSubmit(search.elements.movieName.value);
    search.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="search" name="movieName" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

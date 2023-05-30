const Search = ({ setSearchKeyword }) => {
  return (
    <div className="flex flex-col items-center">
      <ul>
        <input
          className=" w-36 h-8 absolute top-12"
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </ul>
    </div>
  );
};

export default Search;

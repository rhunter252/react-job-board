import Search from "./Search";

const Header = () => {
  return (
    <div className="w-full h-30 bg-darkCyanHeader ">
      <img
        src="/src/assets/bg-header-desktop.svg"
        alt=""
        className="w-full h-full object-cover"
      />
      <Search />
    </div>
  );
};

export default Header;

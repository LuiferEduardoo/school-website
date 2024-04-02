import Search from './Search'
import Profile from './Profile'

const Header = () => {
    return (
      <>
        <header className="flex gap-4 items-center justify-around p-4 md:px-8 lg:px-12 w-full bg-white fixed top-0 shadow-md z-20">
          <Search />
          <Profile />
        </header>
      </>
    );
  };

export default Header;

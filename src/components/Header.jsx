export const Header = () => {
  return (
    <>
      <nav className="flex">
        <div className="brand">
          <h1>
            NEWS <span>Maolaart</span>
          </h1>
        </div>
        <form className="search">
          <input type="text" placeholder="cari..." />
          <button>Submit</button>
        </form>
      </nav>
    </>
  );
};

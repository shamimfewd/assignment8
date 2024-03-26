import ReadBooks from "./ReadBooks/ReadBooks";
import WishList from "./WishList/WishList";

const ListedBooks = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center bg-[#F3F3F3] rounded-2xl">
        <h2 className="font-bold text-4xl p-6">Books</h2>
      </div>
      {/* sort button */}
      <div className="text-center mt-4">
        <select className="select shadow-none border-none outline-none font-bold bg-[#23BE0A] text-white px-4 py-2 rounded-md">
          <option disabled selected>
            Select an option
          </option>
          <option value="han-solo">Han Solo</option>
          <option value="greedo">Greedo</option>
        </select>
      </div>

      {/* tab list */}
      <div role="tablist" className="tabs tabs-lifted mt-10">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Read Books"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReadBooks />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

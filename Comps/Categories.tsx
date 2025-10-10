const Categories = () => {
  return (
    <div>
      <div className="space-x-10">
        <h1 className="text-2xl font-bold text-gray-700">Categories</h1>
        <ul className="space-y-3  mt-5">
          <li className="hover:text-[#a445f2]">
            <a href="#">Apps</a> (5)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Editor's Picks</a> (4)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Gadgets</a> (8)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Games</a> (4)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Must read</a> (2)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Reviews</a> (3)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Software</a> (4)
          </li>
          <li className="hover:text-[#a445f2]">
            <a href="#">Technology</a> (7)
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-gray-700 mt-10">Subscribe</h1>
        <form className="mt-8 flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border border-gray-400 p-2 rounded"
          />

          <button className="bg-[#a445f2] text-white mt-8 px-4 py-2 rounded-full w-30">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Categories;

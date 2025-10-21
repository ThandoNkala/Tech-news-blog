const MustRead = () => {
  return (
    <div className="mt-10">
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-black">Must Read</h1>
          </div>
          <div>
            <h1 className="text-purple-600 text-sm sm:text-base font-bold hover:text-black">
              <a href="#">
                View All
                <img
                  src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg"
                  alt="arrow"
                  className="inline-block w-6 sm:w-8 ml-2 align-middle"
                />
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="relative overflow-hidden bg-cover bg-center aspect-[16/9] sm:aspect-[5/3] lg:aspect-[20/13] bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-iphone_qn7uw3.jpg')]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <div className="space-y-2">
                <h1 className="text-gray-300 font-bold text-xs sm:text-sm">
                  <a href="#">GADGET</a>
                </h1>
                <h1 className="text-white text-xl sm:text-2xl font-bold">
                  <a href="/">
                    Spend a Dollar on Upcoming iPhone 13, and How to Save More
                  </a>
                </h1>
                <p className="text-white text-xs sm:text-sm">
                  Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ....
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden  bg-cover bg-center aspect-[16/9] sm:aspect-[5/3] lg:aspect-[20/13] bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-nvidia_wxjgic.jpg')]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <div className="space-y-2">
                <h1 className="text-gray-300 font-bold text-xs sm:text-sm">
                  <a href="#">MUST READ</a>
                </h1>
                <h1 className="text-white text-xl sm:text-2xl font-bold">
                  <a href="/">
                    No Longer a Dream: Silicon Valley Takes On the Flying Car
                  </a>
                </h1>
                <p className="text-white text-xs sm:text-sm">
                  Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MustRead;

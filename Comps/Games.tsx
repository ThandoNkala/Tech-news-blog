const Games = () => {
  return (
    <div className="mt-10">
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Games</h1>
          <a href="#" className="text-sm sm:text-base font-bold text-purple-600 hover:text-black">
            More Games
            <img
              src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg"
              alt="arrow"
              className="inline-block w-6 sm:w-8 ml-2 align-middle"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  border-b border-gray-200 pb-8">
          <div className="relative overflow-hidden  bg-cover bg-center aspect-[16/9] sm:aspect-[5/3] lg:aspect-[20/14] bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-06_ozftjg.jpg')]">
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <div className="space-y-2">
                <h2 className="text-white text-xl sm:text-2xl font-bold">
                  <a href="/">
                    After Badger Buries Entire Cow Carcass, Scientists Go to the Tape
                  </a>
                </h2>
                <p className="text-white text-xs sm:text-sm">
                  Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ....
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-cover bg-center aspect-[16/9] sm:aspect-[5/3] lg:aspect-[20/14] bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-16_bmrme1.jpg')]">
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <div className="space-y-2">
                <h2 className="text-white text-xl sm:text-2xl font-bold">
                  <a href="/">
                    A Genetic Oddity May Give Octopuses and Squids Their Smarts
                  </a>
                </h2>
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

export default Games;

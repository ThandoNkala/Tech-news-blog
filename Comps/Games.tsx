const Games = () => {
  return (
    <div className="grid place-items-center mt-10 ">
      <div className="container  p-5 rounded-lg m-5">
        <div className="flex justify-between  w-full ">
          <div>
             <h1 className="text-3xl font-bold text-black">
                Games
              </h1>
          </div>
          <div>
            {" "}
            <h1 className="text-purple-500 text-1xl font-bold hover:text-black">
              <a href="#">
                More Games{" "}
                <img
                  src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg"
                  alt="arrow"
                  className="inline-block w-10"
                />
              </a>
            </h1>
          </div>
        </div>
      </div>
      <div className="container flex  p-5 -mt-10 border-b border-gray-300 pb-10">
        <div className="bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-06_ozftjg.jpg')] h-110 w-250 bg-cover bg-center">
          <div className="bg-[rgba(0,0,0,0.5)] bg-opacity-90 h-full w-full flex flex-col justify-end p-4 container ">
            <div className="space-y-2 ml-2">
              <h1 className="text-white text-2xl font-bold">
                <a href="/">
                  {" "}
                  After Badger Buries Entire Cow Carcass,<br /> Scientists Go to the Tape
                  More
                </a>
              </h1>
              <h1 className="text-white text-md ">
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet ....
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-16_bmrme1.jpg')] h-110 w-250 bg-cover bg-center">
          <div className="bg-[rgba(88, 87, 87, 0.38)] bg-opacity-90 h-full w-full flex flex-col justify-end p-4 container ">
            <div className="space-y-2 ml-2">
              <h1 className="text-white text-2xl font-bold">
                <a href="/">
                  {" "}
                  A Genetic Oddity May Give Octopuses and
                  <br />Squids Their Smarts
                </a>
              </h1>
              <h1 className="text-white text-md ">
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet ...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;

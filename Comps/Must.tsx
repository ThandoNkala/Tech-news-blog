const MustRead = () => {
  return (
    <div className="grid place-items-center mt-10">
      <div className="container  p-5 rounded-lg m-5">
        <div className="flex justify-between  w-full ">
          <div>
             <h1 className="text-3xl font-bold text-black">
                Must Read
              </h1>
          </div>
          <div>
            {" "}
            <h1 className="text-purple-500 text-1xl font-bold hover:text-black">
              <a href="#">
                View All{" "}
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
      <div className="container flex  p-5 -mt-10">
        <div className="bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-iphone_qn7uw3.jpg')] h-115 w-250 bg-cover bg-center">
          <div className="bg-[rgba(0,0,0,0.5)] bg-opacity-90 h-full w-full flex flex-col justify-end p-4 container ">
            <div className="space-y-2 ml-2">
              <h1 className="text-gray-300 w-25 font-bold text-sm">
                <a href="#">GADGET</a>
              </h1>
              <h1 className="text-white text-2xl font-bold">
                <a href="/">
                  {" "}
                  Spend a Dollar on Upcoming iPhone 13, and <br /> How to Save
                  More
                </a>
              </h1>
              <h1 className="text-white text-sm ">
                Cursus iaculis etiam in In nullam donec sem sed consequat
                scelerisque nibh amet, massa egestas risus, gravida vel amet,
                imperdiet ....
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-nvidia_wxjgic.jpg')] h-115 w-250 bg-cover bg-center">
          <div className="bg-[rgba(0,0,0,0.5)] bg-opacity-90 h-full w-full flex flex-col justify-end p-4 container ">
            <div className="space-y-2 ml-2">
              <h1 className="text-gray-300 w-25 font-bold text-sm">
                <a href="#">MUST READ</a>
              </h1>
              <h1 className="text-white text-2xl font-bold">
                <a href="/">
                  {" "}
                  No Longer a Dream: Silicon Valley Takes On
                  <br /> the Flying Car
                </a>
              </h1>
              <h1 className="text-white text-sm ">
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

export default MustRead;

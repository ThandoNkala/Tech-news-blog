const Lady = () => {
  return (
    <div className=" grid place-items-center p-5 mt-5">
      <div className="p-5  bg-[#2cf5bc] flex justify-between items-center h-50 w-300 rounded-2xl">
        <div>
          <img
            src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820314/teh-news-podcast-cta-figure-img_vqtd7a.png"
            alt="lady"
            className="inline-block -mt-5 -ml-5"
          />
        </div>
        <div className="space-y-8 -ml-60">
            <h1 className="text-lg font-bold text-purple-700">TechWire Podcast</h1>
            <h1 className="text-3xl font-bold">Listen to daily tech news podcast</h1>
            <h1 className="text-sm">Maecenas potenti non, turpis eget turpis gravida maecenas</h1>
        </div>
        <div className="mr-10">
            <button className="bg-purple-500 text-white px-4 py-3 rounded-full w-40">
                Listen Now
            </button>
        </div>
      </div>
    </div>
  );
};

export default Lady;

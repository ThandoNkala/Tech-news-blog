const Lady = () => {
  return (
    <div className="mt-5">
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-6 bg-[#2cf5bc] rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="flex justify-center md:justify-start">
              <img
                src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820314/teh-news-podcast-cta-figure-img_vqtd7a.png"
                alt="podcast"
                className="w-48 sm:w-56 h-auto"
              />
            </div>
            <div className="md:col-span-1 md:col-start-2 space-y-2 sm:space-y-3 text-center md:text-left">
              <h2 className="text-base sm:text-lg font-bold text-purple-700">TechWire Podcast</h2>
              <h3 className="text-2xl sm:text-3xl font-bold">Listen to daily tech news podcast</h3>
              <p className="text-sm">Maecenas potenti non, turpis eget turpis gravida maecenas</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full w-full sm:w-auto">
                Listen Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lady;

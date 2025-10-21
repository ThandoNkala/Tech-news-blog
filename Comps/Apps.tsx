import Image from "next/image";

const Apps = () => {
  return (
    <div className="mt-10">
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black">Technology</h1>
          <a href="#" className="text-sm sm:text-base font-bold text-purple-600 hover:text-black">
            More in Technology
            <img
              src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg"
              alt="arrow"
              className="inline-block w-6 sm:w-8 ml-2 align-middle"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-200 pb-8">
          {cards.map((card) => (
            <div className="space-y-2" key={card.title}>
              <Image
                src={card.Image}
                alt={card.title}
                width={600}
                height={338}
                className="w-full h-auto rounded-md object-cover"
              />
              <h2 className="text-lg sm:text-xl font-bold">{card.title}</h2>
              <p className="text-xs sm:text-sm text-gray-500">
                {card.name} - {card.date}
              </p>
              <p className="text-sm text-gray-600">{card.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    Image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-07_tpsoji.jpg",
    title: "Antarctic Ice Reveals Earth’s Accelerating Plant Growth",
    name: "akbarh",
    date: "July 7, 2021",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
  },
   {
    Image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820284/tech-news-post-featured-img-17_v2mb8f.jpg",
    title: "Photos of Jupiter From NASA Spacecraft, Both Near and Far",
    name: "akbarh",
    date: "July 7, 2021",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
  },
   {
    Image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820314/Unconfirmed_678313_fa8err.jpg",
    title: "Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at 94",
    name: "akbarh",
    date: "July 7, 2021",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh ...",
  },
];

export default Apps;

const Apps = () => {
  return (
    <div className="grid place-items-center ">
        <div className="container p-5 rounded-lg m-5">
         <div className="flex justify-between  w-full ">
          <div>
             <h1 className="text-3xl font-bold text-black">
                Technology
              </h1>
          </div>
          <div>
            {" "}
            <h1 className="text-purple-500 text-1xl font-bold hover:text-black">
              <a href="#">
                More in Technology {" "}
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
      <div className="flex space-x-5 border-b border-gray-400">
        {cards.map((card) => (
          <div className="w-100 space-y-2 h-120" key={card.title}>
            <img src={card.Image} 
               alt={"gyufy"} 
               width={400}
               height={150} 
               />
            <h2 className="text-2xl font-bold">{card.title}</h2>
            <p className="text-sm text-gray-500">
              {card.name}- {card.date}
            </p>
            <p className="text-md text-gray-500">{card.paragraph}</p>
          </div>
        ))}
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

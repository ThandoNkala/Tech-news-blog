const Episodes = () => {
  return (
    <div className="container flex justify-center">
      <div>
        <div>
          {Techlinks.map((link) => (
            <div key={link.title} className="flex">
              <div>
                <img
                  src={link.image}
                  alt={link.title}
                  width={600}
                  height={200}
                  className="mt-8 "
                />
              </div>
              <div className="w-100 m-12 mt-40 space-y-6">
                <h1 className="text-lg  text-purple-600 mb-5">
                  {link.heading}
                </h1>
                <h1 className="text-2xl font-bold mb-3">{link.title}</h1>
                <p>{link.paragraph}</p>
                <div>
                  <ul className="flex space-x-4 text-grey-600 text-sm">
                    {Detail.map((detail) => (
                      <li className="flex " key={detail.Image}>
                        <img
                          src={`https://res.cloudinary.com/dp5gnnji3/image/upload/v1756989576/${detail.Image}`}
                          alt={detail.name || detail.date }
                          width={15}
                          height={15}
                        />
                        {detail.name || detail.date }
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Techlinks = [
  {
    heading: "GADGET",
    image: "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-03_evp1t9.jpg",
    title: "iPad Pro M1 Chip: Bringing The MacBook Pro Power",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
  },

];
const Detail = [
  { Image: "profile-svgrepo-com_zioqkr.svg", name: "akbarh" },
  { Image: "calendar-svgrepo-com_1_vsqkvm.svg", date: "July 7, 2021" },
  
];

export default Episodes;

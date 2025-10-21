// import { title } from "process";

import Image from "next/image";
import Music from "@/Comps/Music";


const Tech = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold">Tech Reviews</h1>
              <h2 className="text-sm sm:text-base font-bold text-purple-600">
                More in Tech Reviews
                <img
                  src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg"
                  alt=""
                  className="inline-block w-6 sm:w-8 ml-2 align-middle"
                />
              </h2>
            </div>
            <div>
              {Techlinks.map((link) => (
                <div key={link.title} className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
                  <div className="md:w-1/2">
                    <Image
                      src={link.image}
                      alt={link.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 md:m-2">
                    <h3 className="text-xs sm:text-sm text-purple-600 mb-2 sm:mb-3">{link.heading}</h3>
                    <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{link.title}</h2>
                    <p className="text-sm sm:text-base leading-relaxed">{link.paragraph}</p>
                    <div className="mt-3 sm:mt-4">
                      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-gray-600 text-xs sm:text-sm">
                        {Detail.map((detail) => (
                          <li className="flex items-center gap-1" key={detail.Image}>
                            <Image
                              src={`https://res.cloudinary.com/dp5gnnji3/image/upload/v1756989576/${detail.Image}`}
                              alt={detail.name || detail.date || detail.comment}
                              width={15}
                              height={15}
                            />
                            {detail.name || detail.date || detail.comment}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Music />
          </div>
        </div>
      </div>
    </>
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
    {
    heading: "GADGET",
    image: "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-11_aqzbgd.jpg",
    title: "Dell XPS 13 2021: The best Windows laptop now with OLED",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
  },
    {
    heading: "REVIEWS",
    image: "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-22_pi9opu.jpg",
    title: "Watching Their Dust: Photographing Players in Pollination",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
  },

];

const Detail = [
  { Image: "profile-svgrepo-com_zioqkr.svg", name: "akbarh" },
  { Image: "calendar-svgrepo-com_1_vsqkvm.svg", date: "July 7, 2021" },
  
];

export default Tech;

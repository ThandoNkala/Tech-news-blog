// import { title } from "process";

import Image from "next/image";
import Music from "@/Comps/Music";

const Tech = () => {
  return (
    <>
      <div className="container  p-5 rounded-lg m-5">
        <div className="p-5 flex justify-between">
          <div className="">
            <div className="flex  justify-between w-200">
              <div className="text-3xl font-bold ">
                {" "}
                <h1>Tech Reviews</h1>
              </div>
              <div className="text-lg font-bold text-purple-600">
                {" "}
                <h1>More in Tech Reviews <span><img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt=""  className="inline-block w-10" /></span></h1>
              </div>
            </div>
            <div>
              {Techlinks.map((link) => (
                <div key={link.title} className="flex">
                  <div>
                    <Image
                      src={link.image}
                      alt={link.title}
                      width={450}
                      height={200}
                      className="mt-8 "
                    />
                  </div>
                  <div className="w-100 m-12">
                    <h1 className="text-lg  text-purple-600 mb-5">{link.heading}</h1>
                    <h1 className="text-2xl font-bold mb-3">{link.title}</h1>
                    <p>{link.paragraph}</p>
                      <div>
                <ul className="flex space-x-4 text-grey-600 text-sm">
                  {Detail.map((detail) => (
                    <li className="flex " key={detail.Image}>
                      <Image
                        src={`https://res.cloudinary.com/dp5gnnji3/image/upload/v1756989576/${detail.Image}`}
                        alt={detail.name || detail.date || detail.comment}
                        width={15}
                        height={15}
                        background={"black"}
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
          <div className="">
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

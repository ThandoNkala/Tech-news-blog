import { linkSync } from "fs";
import { title } from "process";

const Music = () => {
  return (
    <div>
      <div className="p-5 w-75 h-150 object-fit mt-5 bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820314/tech-news-promo-potrait-banner-img_mctehh.jpg')] bg-cover bg-center"></div>
      <div className="border-b border-gray-300 pb-10"></div>
      <div>
        <h1 className="font-bold text-2xl mt-8">Stay Connected</h1>
        {Followers.map((links) => (
          <div className="flex items-start  pt-2" key={links.title}>
            <div>
              <img
                src={links.image}
                alt={links.title}
                width={20}
                height={20}
                className="inline-block w-10 mr-3"
              />
            </div>
            <div>
              <h1 className="font-bold text-sm">{links.title}</h1>
              <h1 className="text-sm text-gray-500">{links.heading}</h1>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

const Followers = [
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1758716680/facebook-svgrepo-com_1_uqjri9.svg",
    title: "TechWire News",
    heading: "2M+ Followers",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1758716561/twitter-color-svgrepo-com_e9h4ds.svg",
    title: "@techwirenews",
    heading: "1.4M+ Followers",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1758716524/youtube-color-svgrepo-com_ldrpkm.svg",
    title: "TechWire",
    heading: "4M+ Subscribers",
  },
];
export default Music;

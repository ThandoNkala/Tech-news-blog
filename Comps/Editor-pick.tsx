// import { title } from "process";

import Image from "next/image";
import Sign from "./sign";

const EditorPick = () => {
  return (
    <>
      <div className="container  p-5 rounded-lg m-5">
        <div className="p-5 flex justify-between">
          {/* Editor's Pick Section */}
          <div className="border-b border-gray-400  ">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-black">
                <a href="#editor-pick">Editor's Pick</a>
              </h1>
              <h1 className="text-purple-500 text-2xl font-bold hover:text-black">
                <a href="#">View All <img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt="arrow" className="inline-block w-10" /></a>
              </h1>
            </div>
            <div className="flex  flex-col md:flex-row">
              {EditorPicklinks.map((link) => (
                <div className="mt-5 mr-5" key={link.title}>
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={250}
                    height={200}
                    className="-z-50"
                  />
                  <h3 className="text-lg font-bold w-50">{link.title}</h3>
                  <p className="text-sm text-black-500 bg-[#000000] -mt-50 ml-10 z-30">
                    {link.heading}
                  </p>
                </div>
              ))}
            </div>
            
          </div>
          <div className="">
            <Sign />
          </div>
        </div>
      </div>
    </>
  );
};

const EditorPicklinks = [
  {
    heading: "EDITORS PICK",
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820281/tech-news-post-featured-img-02_utborn.jpg",
    title: "For Families of Teens at Microsoft Surface",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-10_jmekl2.jpg",
    title: "Why Netflix shares are down 10%",
    heading: "EDITORS PICK",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820284/tech-news-post-featured-img-21_mpzrj7.jpg",
    title: "6 Bots That Deliver Science and Serendipity on Twitter",
    heading: "APPS",
  },
];

export default EditorPick;

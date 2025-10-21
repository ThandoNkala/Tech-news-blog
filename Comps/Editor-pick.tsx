// import { title } from "process";

import Image from "next/image";
import Sign from "./sign";

const EditorPick = () => {
  return (
    <>
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Editor's Pick Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-black">
                <a href="#editor-pick">Editor's Pick</a>
              </h1>
              <h1 className="text-purple-600 text-sm sm:text-base font-bold hover:text-black">
                <a href="#">View All <img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt="arrow" className="inline-block w-6 sm:w-8 align-middle" /></a>
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {EditorPicklinks.map((link) => (
                <div className="space-y-2" key={link.title}>
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={400}
                    height={260}
                    className="w-full h-auto  object-cover"
                  />
                  <h3 className="text-base sm:text-lg font-bold">{link.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
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

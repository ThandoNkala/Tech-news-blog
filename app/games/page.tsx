// import { title } from "process";

import Image from "next/image";
import Categories from "@/Comps/Categories";

const GamesPage = () => {
  return (
    <>
      <div className="container  p-5 rounded-lg m-5">
        <div className="p-5 flex justify-between">
          <div className="">
            <div className="flex  justify-between w-200 border-b-1  border-gray-300">
              <div className="text-5xl m-8 pb-5 font-bold ">
                {" "}
                <h1>Games</h1>
              </div>
            </div>
            <div>
              {Techlinks.map((link) => (
                <div
                  key={link.title}
                  className="border-b border-gray-300 mt-5 pb-5"
                >
                  <div>
                    <Image
                      src={link.image}
                      alt={link.title}
                      width={799}
                      height={700}
                      className="mt-8 "
                    />
                  </div> 
                  <div className="w-190 mt-8">
                    <h1 className="text-4xl font-bold mb-3">{link.title}</h1>
                    <h1 className="mt-3">
                      {link.tt},{link.tech} / {link.acc}{" "}
                    </h1>
                    <p className="text-gray-600 mt-3">{link.paragraph}</p>
                    <p className="mt-5">{link.readmore}</p>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" ml-20 -mt-15 border-l-1 border-gray-300 pl-10">
            <Categories />
            <div className="p-5 w-75 h-150 object-fit mt-5 bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820314/tech-news-promo-potrait-banner-img_mctehh.jpg')] bg-cover bg-center"></div>
            <div>
              <h1 className="text-2xl font-bold mt-5 text-gray-700">Recent Post</h1>
              <ul className="space-y-3 mt-8">
                <li className="text-gray-700 hover:text-[#a445f2]">
                  <a href="#">
                    Running macOS and Windows 10 on <br /> the Same Computer
                  </a>
                </li>
                <li className="text-gray-700 hover:text-[#a445f2]">
                  <a href="#">
                    Apple opens another megastore in <br /> China amid William Barr
                    criticism
                  </a>
                </li>
                <li className="text-gray-700 hover:text-[#a445f2]">
                  <a href="#">
                    The ‘Sounds’ of Space as NASA’s <br /> Cassini Dives by Saturn
                  </a>
                </li>
                <li className="text-gray-700 hover:text-[#a445f2]">
                  <a href="#">
                    Broke a Glass? Someday You Might <br /> 3-D-Print a New One
                  </a>
                </li>
                <li className="text-gray-700 hover:text-[#a445f2]">
                  <a href="#">
                    This Is a Giant Shipworm. You May <br /> Wish It Had Stayed In Its
                    Tube.
                  </a>
                </li>
              </ul>
               <input type="search" placeholder="Search... "  className="border border-gray-400 p-2 rounded mt-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Techlinks = [
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1760086887/tech-news-post-featured-img-25_zzwzea.jpg",
    title: "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus […]",
    readmore: "Read More>>",
    tech: "Games",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1760086894/tech-news-post-featured-img-24_w8lfpj.jpg",
    title: "The New Threat to Wolves in and Around Yellowstone",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus",
    readmore: "Read More>>",
    tech: "Games",
    acc: "akbarh",
    tt: "Editors Pick",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-06_ozftjg.jpg",
    title: "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Games",
    acc: "akbarh",
    tt: "Reviews",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-16_bmrme1.jpg",
    title: "A Genetic Oddity May Give Octopuses and Squids Their Smarts",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Games",
    acc: "akbarh",
    // tt: "Must Read" ,
  },
  

];

export default GamesPage;


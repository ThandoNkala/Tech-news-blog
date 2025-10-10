// import { title } from "process";

import Image from "next/image";
import Categories from "@/Comps/Categories";

const Gadget = () => {
  return (
    <>
      <div className="container  p-5 rounded-lg m-5">
        <div className="p-5 flex justify-between">
          <div className="">
            <div className="flex  justify-between w-200 border-b-1  border-gray-300">
              <div className="text-5xl m-5 font-bold ">
                {" "}
                <h1>Gadget</h1>
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
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-09_lfhzgk.jpg",
    title: "Apple opens another megastore in China amid William Barr criticism",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus […]",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820281/tech-news-post-featured-img-02_utborn.jpg",
    title: "For Families of Teens at Microsoft Surface",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
    tt: "Editors Pick",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-03_evp1t9.jpg",
    title: "iPad Pro M1 Chip: Bringing The MacBook Pro Power",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
    tt: "Reviews",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-11_aqzbgd.jpg",
    title: "Dell XPS 13 2021: The best Windows laptop now with OLED",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
    tt: "Must Read",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-iphone_qn7uw3.jpg",
    title: "Spend a Dollar on Upcoming iPhone 13, and How to Save More",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-05_txsow2.jpg",
    title: "How a Gadget Drives Human Creativity",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-13_mb9qlu.jpg",
    title: "An IoT Failure Worst Nightmare",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
  },
    {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-15_zf3djp.jpg",
    title: "Dogs Do Their Duty for Science",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Gadget",
    acc: "akbarh",
  },
];

export default Gadget;

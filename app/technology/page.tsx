// import { title } from "process";

import Image from "next/image";
import Categories from "@/Comps/Categories";

const Tech = () => {
  return (
    <>
      <div className="container  p-5 rounded-lg m-5">
        <div className="p-5 flex justify-between">
          <div className="">
            <div className="flex  justify-between w-200 border-b-1  border-gray-300">
              <div className="text-5xl m-5 pb-10 font-bold ">
                {" "}
                <h1>Tecnology</h1>
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
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1759320184/tech-news-post-featured-img-20_jaagx0.jpg",
    title: "The ‘Sounds’ of Space as NASA’s Cassini Dives by Saturn",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus […]",
    readmore: "Read More>>",
    tech: "Technology",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-10_jmekl2.jpg",
    title: "Why Netflix shares are down 10%",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus",
    readmore: "Read More>>",
     tt: "Editors Pick",
    tech: "Technology",
    acc: "akbarh",
   
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-22_pi9opu.jpg",
    title: "Watching Their Dust: Photographing Players in Pollination",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tt: "Reviews",
    tech: "Technology",
    acc: "akbarh",
    
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1759321423/tech-news-post-featured-img-nvidia_1_i7nzlf.jpg",
    title: "No Longer a Dream: Silicon Valley Takes On the Flying Car",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Technology",
    acc: "akbarh",
    tt: "Must Read",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-26_xceby0.jpg",
    title: "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Technology",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-27_vrnles.jpg",
    title: "What Moves Gravel-Size Gypsum Crystals Around the Desert?",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Technology",
    acc: "akbarh",
  },
  {
    image:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820313/tech-news-post-featured-img-28_lxlecx.jpg",
    title: "Scientists, Feeling Under Siege, March Against Trump Policies",
    paragraph:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus ",
    readmore: "Read More>>",
    tech: "Technology",
    acc: "akbarh",
  },
];

export default Tech;

import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="flex gap-20 mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 z-50 -mt-100">
        <div className="bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756819224/tech-news-post-featured-img-01_epa2gs.jpg')] h-140 w-330 bg-cover bg-center">
          <div className="bg-[rgba(0,0,0,0.5)] bg-opacity-90 h-full w-full flex flex-col justify-end p-4 container ">
            <div className="space-y-2 ml-10">
              <h1 className="text-white w-25 font-bold hover:text-purple-500">
                <a href="#">SOFTWARE</a>
              </h1>
              <h1 className="text-white text-3xl font-bold">
                <a href="/">
                  {" "}
                  Running macOS and Windows 10 <br /> on the Same Computer
                </a>
              </h1>
              <div>
                <ul className="flex space-x-4 text-white text-sm">
                  {Details.map((detail) => (
                    <li className="flex " key={detail.Image}>
                      <Image
                        src={`https://res.cloudinary.com/dp5gnnji3/image/upload/v1756989576/${detail.Image}`}
                        alt={'icon'}
                        width={20}
                        height={20}
                      />
                      {detail.name || detail.date || detail.comment}
                    </li>
                  ))}
                </ul>
              </div>
               <h1 className="text-white text-lg ">Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh <br />
                amet, massa egestas risus, gravida vel amet, imperdiet ...</h1>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-09_lfhzgk.jpg"
            alt="ipad"
            width={300}
            height={200}
          />

          <div className="mt-4">
            {links.map((link) => (
              <div className="mt-5">
                <h1 className="text-purple-500 text-sm font bold">
                  <a href="#">{link.heading}</a>
                </h1>
                <h1 className="font-bold text-1xl">
                  <a href="#">{link.title}</a>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    title: "Broke a Glass? Someday You  Might 3-D-Print a New One",
    heading: "APPS",
  },
  {
    title: "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.",
    heading: "GAMES",
  },
  {
    title: "For Families of Teens at Microsoft Surface",
    heading: "EDITORS PICK",
  },
  {
    title: "Why Netflix shares are down 10%",
    heading: "EDITORS PICK",
  },
];

const Details = [
  { Image: "profile-svgrepo-com_zioqkr.svg", name: "akbarh" },
  { Image: "calendar-svgrepo-com_1_vsqkvm.svg", date: "July 7, 2021" },
  { Image: "comments-svgrepo-com_gektup.svg", comment: "No Comments" },
];
export default Banner;

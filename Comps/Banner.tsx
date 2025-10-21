import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="mx-auto w-full max-w-screen-xl  sm:px-6  z-10 -mt-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch ">
          <div className="lg:col-span-2">
            <div className="relative w-full overflow-hidden bg-cover  bg-center aspect-[16/9] sm:aspect-[5/3] lg:aspect-[20/15] bg-[url('https://res.cloudinary.com/dp5gnnji3/image/upload/v1756819224/tech-news-post-featured-img-01_epa2gs.jpg')]">
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="space-y-2 sm:space-y-3">
                  <h1 className="text-white font-bold hover:text-purple-500">
                    <a href="#">SOFTWARE</a>
                  </h1>
                  <h1 className="text-white text-2xl sm:text-3xl font-bold">
                    <a href="/">
                      Running macOS and Windows 10 on the Same Computer
                    </a>
                  </h1>
                  <div>
                    <ul className="flex flex-wrap gap-4 text-white text-sm">
                      {Details.map((detail) => (
                        <li className="flex items-center gap-2" key={detail.Image}>
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
                  <p className="text-white text-sm sm:text-base">
                    Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-09_lfhzgk.jpg"
              alt="ipad"
              width={100}
              height={100}
              className="w-full h-auto"
            />

            <div className="mt-4">
              {links.map((link) => (
                <div className="mt-5" key={link.title}>
                  <h1 className="text-purple-500 text-sm font-bold">
                    <a href="#">{link.heading}</a>
                  </h1>
                  <h1 className="font-bold text-base sm:text-lg">
                    <a href="#">{link.title}</a>
                  </h1>
                </div>
              ))}
            </div>
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

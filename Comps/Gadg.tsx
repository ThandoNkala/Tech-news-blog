import Image from "next/image";

const Gadget = () => {
  return (
    <div className="mt-10">
      <div className="w-full mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold">Gadgets</h2>
            <a href="#" className="text-sm sm:text-base font-bold text-purple-600 hover:text-black">
              More in Gadgets
              <img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt="" className="inline-block w-6 sm:w-8 ml-2 align-middle" />
            </a>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold">Software</h2>
            <a href="#" className="text-sm sm:text-base font-bold text-purple-600 hover:text-black">
              More in Software
              <img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt="" className="inline-block w-6 sm:w-8 ml-2 align-middle" />
            </a>
          </div>
        </div>
        <div className="mt-6 space-y-10 flex sm:flex-row flex-col space-x-10 ">
          {GadgetCards.map((links) => (
            <div className="pb-6 border-b border-gray-200 " key={links.title1}>
              <div >
                <Image
                  src={links.image1}
                  alt={links.title1}
                  width={800}
                  height={575}
                  className=" h-auto  object-cover"
                />
                <h3 className="text-xl sm:text-2xl font-bold mt-3 mb-2">{links.title1}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  {links.name} {links.date} {links.comment}
                </p>
                <p className="text-sm text-gray-600">{links.paragraph1}</p>
              </div>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-2">
                <div>
                  <Image
                    src={links.image2}
                    alt={links.title2}
                    width={400}
                    height={250}
                    className=" h-auto object-cover"
                  />
                  <h4 className="text-lg font-bold mt-2 mb-1">{links.title2}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{links.name} {links.date} {links.comment}</p>
                  <p className="text-sm text-gray-600">{links.paragraph2}</p>
                </div>
                <div>
                  <Image
                    src={links.image3}
                    alt={links.title3}
                    width={400}
                    height={250}
                    className=" h-auto object-cover"
                  />
                  <h4 className="text-lg font-bold mt-2 mb-1">{links.title3}</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{links.name} {links.date} {links.comment}</p>
                  <p className="text-sm text-gray-600">{links.paragraph2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GadgetCards = [
  {
    image1:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-05_txsow2.jpg",
    image2:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-13_mb9qlu.jpg",
    image3:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-15_zf3djp.jpg",
    title1: "How a Gadget Drives Human Creativity",
    title2: "An IoT Failure Worst Nightmare",
    title3: "Dogs Do Their Duty for Science",
    name: "akbarh ",
    date: "July 7, 2021 ",
    comment: "No Comments",
    paragraph1:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
    paragraph2: "Cursus iaculis etiam in In nullam donec sem sed consequat ...",
  },

  {
    image1:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820282/tech-news-post-featured-img-08_af4us6.jpg",
    image2:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820283/tech-news-post-featured-img-14_tu1lob.jpg",
    image3:
      "https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820285/tech-news-post-featured-img-19_gvxert.jpg",
    title1: "Scientists Fear Climate Data Gap as Trump Aims at Satellites",
    title2: "Life on CAD: Get to Know the Shortcut",
    title3: "Why You Shouldn’t Walk on Escalators",
    name: "akbarh ",
    date: "July 7, 2021 ",
    comment: "No Comments",
    paragraph1:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
    paragraph2: "Cursus iaculis etiam in In nullam donec sem sed consequat ...",
  },
];

export default Gadget;

const Gadget = () => {
  return (
    <div className="grid place-items-center mt-10">
      <div className="flex  w-300  justify-between  ">
         <div className="flex  justify-between w-143">
              <div className="text-3xl font-bold ">
                {" "}
                <h1>Gadgets</h1>
              </div>
              <div className="text-lg font-bold text-purple-600 hover:text-black">
                {" "}
                <h1><a href="#">More in Gadgets <span><img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt=""  className="inline-block w-10" /></span></a></h1>
              </div>
            </div>
             <div className="flex  justify-between w-143">
              <div className="text-3xl font-bold ">
                {" "}
                <h1>Software</h1>
              </div>
              <div className="text-lg font-bold text-purple-600 hover:text-black">
                {" "}
                <h1> <a href="#">More in Software <span><img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757596455/reshot-icon-right-arrow-UCA8NGYZDJ_xgxfy5.svg" alt=""  className="inline-block w-10" /></span></a></h1>
              </div>
            </div>
      </div>
      <div className="container flex  p-5 m-5">
        {GadgetCards.map((links) => (
          <div className="p-5 space-y-5 border-b border-gray-400" key={links.title1}>
            <div>
              <img 
              src={links.image1} 
              alt={"gyufy"} 
              width={600} 
              height={150} />
              <h1 className="text-2xl font-bold mt-3 mb-2">{links.title1}</h1>
              <p className="text-sm text-gray-500 mb-2">
                {links.name} {links.date} {links.comment}
              </p>
              <p className="text-md text-gray-500">{links.paragraph1}</p>
            </div>
            
            <div className="flex justify-between mt-5 ">

              <div className="">
                <img
                  src={links.image2}
                  alt={"gyufy"}
                  width={310}
                  height={150}
                />
                <h1 className="text-xl font-bold mt-2 mb-2">{links.title2}</h1>
                <p className="text-sm text-gray-500 mb-2">
                  {links.name} {links.date} {links.comment}
                </p>
                <p className="text-md text-gray-500">{links.paragraph2}</p>
              </div>

              <div>
                <img
                  src={links.image3}
                  alt={"gyufy"}
                  width={310}
                  height={150}
                />
                <h1 className="text-xl font-bold mt-2 mb-2">{links.title3}</h1>
                <p className="text-sm text-gray-500 mb-2">
                  {links.name} {links.date} {links.comment}
                </p>
                <p className="text-md text-gray-500">{links.paragraph2}</p>
              </div>
            </div>
          </div>
        ))}
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

import Episodes from "@/Comps/Episodes";
import Image from "next/image";

const PodcastPage = () => {
  return (
    <div>
    <div className="container flex justify-around">
      <div>
         <div className="text-5xl m-8 font-bold ">
                {" "}
                <h1>Podcast</h1>
              </div>
      <p className="m-8 text-gray-600 ">  
       Quis malesuada vestibulum augue non dui leo purus aliquet a <br /> semper risus nec placerat libero tempor interdum faucibus.
      </p>
      <h1 className="font-bold m-8">Subscribe on:</h1>
       <div className="m-8 flex justify-between border-b border-white pb-5">
        <p className="font-bold"><a href="#">
          <Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759999976/podcasts_1_weq843.png" alt="" />
          Apple Podcasts
          </a></p>
           <p className="font-bold"><a href="#">
          <Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759999978/spotify_1_vadgmp.png" alt="" />
          Spotify
          </a></p>
           <p className="font-bold"><a href="#">
          <Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759999980/microphone_1_dmhdbl.png" alt="" />
          Google Podcasts
          </a></p>
       </div>
       <h1 className="text-gray-600 inline-flex items-center space-x-3 ml-4"><Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1760001281/calendar_bqxfcp.png" alt="" />New weekly episodes will be released on Monday & Thursday.</h1>
      </div> 
      <div>
        <Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759995382/tech-news-podcast-header-img_oeqzf7.jpg" 
        alt=""
         />
      </div>
    </div>
    <Episodes/>
    </div>
  );
};

export default PodcastPage;

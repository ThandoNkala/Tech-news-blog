import Image from "next/image";

const Footer = () => {
  return (
    <div >
    <div className="flex justify-around border-b border-gray-200 ">
      <div>
        <Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1756820281/site-logo_jz9rbb.svg"
         alt="logo"
         width={160}
         height={50}
         className=" mb-3"/>
        <ul className="mb-3 text-grey-500 flex align-middle space-x-4 mt-10">
          <li><Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759913034/instagram-167-svgrepo-com_rujkwo.svg"
           alt="" 
           width={20}
            height={30}
           /></li>
          <li><Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759914435/twitter-154-svgrepo-com_pq1rpo.svg" alt="" 
           width={30}
            height={30}
            className="-mt-1"
           /></li>
          <li><Image src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1759914435/twitter-154-svgrepo-com_pq1rpo.svg" alt="" 
           width={25}
            height={30}
             className="-mt-1"
           /></li>

        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-xl font-bold" >Company</h1>
        <ul className="text-gray-600 mt-5" >
          <li >About</li>
          <li>Contact</li>
          <li>Our Staff</li>
          <li>Advertise</li>
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-xl font-bold" >Tech News</h1>
        <ul className="text-gray-600 mt-5">
          <li>Technology</li>
          <li>Gadget</li>
          <li>Software</li>
          <li>Games</li>
        </ul>
      </div>
      <div>
        <h1 className="mb-3 text-xl font-bold" >Legal</h1>
        <ul className="text-gray-600 mt-5">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Extra Crunch Terms</li>
          <li>Code of Conduct</li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-3 p-5">
        <h1 >Copyright © 2025 Tech News.</h1>
    </div>
    </div>
  );
};

export default Footer;

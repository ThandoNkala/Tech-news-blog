const Sign = () => {
  return (
    <div className="p-5 border border-gray-400 w-75 h-80  mt-5">
        <div className="bg-blue-500 h-10 w-10 -mt-5 mb-4 align-center flex justify-center items-center ">
            <img src="https://res.cloudinary.com/dp5gnnji3/image/upload/v1757594235/email-svgrepo-com_xunyo1.svg" alt="email" className="w-8" />
        </div>
      <h1 className="font-bold text-2xl">Subscribe to Our Newsletter</h1>
      <h1 className="text-md text-gray-600">gravida aliquet vulputate <br />faucibus tristique odio.</h1>
      <form className="mt-4 flex flex-col space-y-4">
        <input type="text" placeholder="Email Address" className="border border-gray-400 p-2 rounded" />

         <button className="bg-blue-500 text-white px-4 py-2 rounded w-30">
              Subscribe
            </button>
      </form>
    </div>
  );
};

export default Sign;

import { BsSend } from "react-icons/bs";
const SubscribeSection = () => {
  return (
    <section className="w-full  py-10 px-3 rounded-lg bg-[#C8CFEC] shadow flex justify-center mt-32 sticky">
      <div className="max-w-xl space-y-5">
        <h1 className="text-center text-lg md:text-xl font-semibold">
          Berlangganan Untuk Mendapatkan Informasi Terbaru dan Menjadi Anggota
          Kami
        </h1>
        <form className="w-full flex gap-2 justify-between">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[90%] p-2 bg-white rounded focus:outline-none"
          />
          <button className="p-2 rounded-lg bg-[#BC0E19] hover:opacity-90 text-white font-sm">
            Subscribe
          </button>
        </form>
      </div>
      <div className="absolute top-[-10px] right-[-10px] p-5 rounded-full border-4 border-black bg-[#5F7ADB] w-[50px] h-[50px] flex justify-center items-center">
        <div className="text-xl text-white">
          <BsSend />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;

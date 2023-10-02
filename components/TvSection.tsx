import Image from "next/image";

const TvSection = () => {
  return (
    <section className="w-full flex mt-10 md:mt-32 justify-between items-center md:flex-row flex-col gap-3 md:gap-10">
      <Image
        src="/tv.png"
        height={300}
        width={300}
        alt="TV"
        className="flex-1 "
      />
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Tonton Film, Acara TV Tak Terbatas, dan Lebih Banyak Lagi
        </h1>
      </div>
    </section>
  );
};

export default TvSection;

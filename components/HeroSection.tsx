import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full md:h-screen flex items-center justify-between text-white gap-5 flex-col md:flex-row">
      <div className="space-y-5 flex-1 z-20 ">
        <h1 className="text-3xl sm:text-6xl font-bold">
          Nikmati Tontonan Dimana Saja, dan Kapan Saja
        </h1>
        <p className="text-sm">
          Tonton apa saja secara online dari komputer pribadi atau di perangkat
          yang terhubung ke Internet dan mendukung aplikasi Netflix, dan gunakan
          download untuk menonton saat kamu di perjalanan dan tidak punya
          koneksi Internet.
        </p>
        <button className="px-6 py-2 rounded-lg bg-[#BC0E19] hover:opacity-90">
          Daftar Sekarang
        </button>
      </div>
      <Image
        src="/Img-hero.png"
        width={300}
        height={300}
        alt="Image Hero"
        className="flex-1 md:static absolute left-0 md:opacity-100 opacity-70 max-w-md"
      />
    </section>
  );
};

export default HeroSection;

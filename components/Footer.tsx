import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full mt-32 text-white space-y-6">
      <div className="w-full md:flex-row  flex-col flex justify-between gap-5 items-start">
        <div className="flex-1 space-y-3">
          <Image src="/brand.png" width={89} height={24} alt="Netflix" />
          <p className="text-xs text-slate-300">
            Layanan streaming tanpa iklan dan harga bulanan yang murah
          </p>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold">Perusahaan</h3>
          <ul className="list-none space-y-2 text-xs">
            <li>
              <Link href="/">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/">Hubungi Kami</Link>
            </li>
            <li>
              <Link href="/">Karir</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Investors Relations</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold">Dapatkan bantuan</h3>
          <ul className="list-none space-y-2 text-xs">
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Pusat Bantuan</Link>
            </li>
            <li>
              <Link href="/">Akun</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold">Lainnya</h3>
          <ul className="list-none space-y-2 text-xs">
            <li>
              <Link href="/">Tukarkan Kartu Hadiah</Link>
            </li>
            <li>
              <Link href="/">Netflix Originals</Link>
            </li>
            <li>
              <Link href="/">Media Center</Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 space-y-4">
          <h1 className="text-semibold">Dapatkan aplikasi kami</h1>
          <div className="w-full flex justify-between gap-3">
            <button>
              <Image
                src="/App-Store.png"
                width={100}
                height={30}
                alt="Google play"
              />
            </button>
            <button>
              <Image
                src="/Google-Play.png"
                width={100}
                height={30}
                alt="Google play"
              />
            </button>
          </div>
          <div className="flex gap-3 justify-center">
            <button className="w-[40px] h-[40px] rounded-full shadow bg-[#1F2127] text-white flex justify-center items-center">
              <BsFacebook />
            </button>
            <button className="w-[40px] h-[40px] rounded-full shadow bg-[#BC0E19] text-white flex justify-center items-center">
              <BsInstagram />
            </button>
            <button className="w-[40px] h-[40px] rounded-full shadow bg-[#1F2127] text-white flex justify-center items-center">
              <BsTwitter />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between flex-col-reverse sm:flex-row gap-3">
        <p className="text-xs text-slate-600">
          © 2022 Hak Cipta Terpelihara oleh Netflix Indonesia
        </p>
        <div className="flex gap-5 text-xs text-slate-600">
          <Link href="/">Persyaratan Layanan</Link>
          <Link href="/">Kebijakan privasi</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import fa from "app/lib/fa.json";
import Link from "next/link";
import { HomeRoute, ReserveRoute } from "app/lib/routes";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r flex justify-between px-5 md:px-20 items-center from-blue70 to-grass80 h-20">
      <div className="text-white flex font-bold text-16 md:text-24">
        <Link
          className="ml-9 block hover:text-blue80 duration-300"
          href={HomeRoute()}
        >
          {fa.global.home}
        </Link>
        <Link
          className="block hover:text-blue80 duration-300"
          href={ReserveRoute()}
        >
          {fa.global.reserve}
        </Link>
      </div>

      <div className="text-grass60 font-bold text-20 md:text-36">
        ARZ<span className="text-white">INJA</span>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import {motion} from 'framer-motion';

function Card({ data,reference}) {
  return (
    <>
     <motion.div drag dragConstraints={reference} className="w-40 h-52 rounded-3xl bg-zinc-900 text-white px-4 py-6 relative overflow-hidden flex-shrink-0">
        <FaRegFileAlt size={15} color="white" className="cursor-pointer" />
        <p className="text-xs w-full mt-6">{data.text}</p>
        <div className="flex items-center justify-between pt-7 relative">
          <p className="text-xs">{data.file_size}</p>
          {!data.isClose ? (  <GoDownload className="rounded-full bg-white text-black p-1 cursor-pointer" />
        ):  <IoClose />
           }
        </div>
        <div
          className={`{'text-sm left-1 w-full  h-10 text-center absolute bottom-0 p-3 cursor-pointer'}
            ${data.color === "blue" ? "bg-blue-600" : "bg-green-500"}`}
        >
          <p>Download Now</p>
        </div>
      </motion.div>
    </>
  );
}

export default Card;

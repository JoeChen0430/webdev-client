import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { BsRocketTakeoff } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h3 className="text-lg font-semibold">React Icons Sampler</h3>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
      </div>
      {/* On your own: two more icons from families not used above (bs, io5) */}
      <div id="wd-your-icons" className="flex gap-3 text-4xl text-green-700">
        <BsRocketTakeoff />
        <IoLanguage />
      </div>
      {/* With AI: two sample icons from md and hi2 */}
      <div id="wd-ai-icons" className="flex gap-3 text-4xl text-blue-600">
        <MdOutlineSchool />
        <HiOutlineSparkles />
      </div>
    </div>
  );
}

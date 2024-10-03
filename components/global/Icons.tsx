import {
  FaWhatsapp,
  FaHome,
  FaUsers,
  FaTools,
  FaUserTie,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaBehance,
  FaFireExtinguisher,
  FaHardHat,
  FaRulerCombined,
  FaMinusCircle,
  FaPlusCircle,
  FaDraftingCompass,
  FaBriefcaseMedical,
  FaChair,
  FaClipboardList,
  FaPallet,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEngineering, MdAssignment } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

function Icons({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "whatsapp":
      return <FaWhatsapp className={className} />;
    case "hamburger-menu":
      return <GiHamburgerMenu className={className} />;
    case "home":
      return <FaHome className={className} />;
    case "about":
      return <FaUsers className={className} />;
    case "services":
      return <FaTools className={className} />;
    case "projects":
      return <MdEngineering className={className} />;
    case "clients":
      return <FaUserTie className={className} />;
    case "instagram":
      return <FaInstagram className={className} />;
    case "facebook":
      return <FaFacebook className={className} />;
    case "linkedin":
      return <FaLinkedin className={className} />;
    case "behance":
      return <FaBehance className={className} />;
    case "FaFireExtinguisher":
      return <FaFireExtinguisher className={className} />;
    case "FaHardHat":
      return <FaHardHat className={className} />;
    case "FaRulerCombined":
      return <FaRulerCombined className={className} />;
    case "FaMinusCircle":
      return <FaMinusCircle className={className} />;
    case "FaPlusCircle":
      return <FaPlusCircle className={className} />;
    case "FaDraftingCompass":
      return <FaDraftingCompass className={className} />;
    case "FaBriefcaseMedical":
      return <FaBriefcaseMedical className={className} />;
    case "FaChair":
      return <FaChair className={className} />;
    case "FaClipboardList":
      return <FaClipboardList className={className} />;
    case "FaPallet":
      return <FaPallet className={className} />;
    case "MdEngineering":
      return <MdEngineering className={className} />;
    case "MdAssignment":
      return <MdAssignment className={className} />;
    case "IoIosMore":
      return <IoIosMore className={className} />;
    default:
      throw new Error("Invalid type");
  }
}
export default Icons;

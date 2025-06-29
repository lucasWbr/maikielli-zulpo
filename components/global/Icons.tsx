import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faUsers,
  faEnvelope,
  faPhone,
  faLeaf,
  faShield,
  faComments,
  faPlus,
  faCode,
  faBars,
  faTimes,
  faArrowRight,
  faFileContract,
  faRecycle,
  faSeedling,
  faFireExtinguisher,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

interface IconsProps {
  name: string;
  className?: string;
}

export default function Icons({ name, className }: IconsProps) {
  switch (name) {
    case "arrowRight":
      return <FontAwesomeIcon icon={faArrowRight} className={className} />;
    case "menu":
    case "hamburger-menu":
      return <FontAwesomeIcon icon={faBars} className={className} />;
    case "x":
      return <FontAwesomeIcon icon={faTimes} className={className} />;
    case "home":
      return <FontAwesomeIcon icon={faHome} className={className} />;
    case "briefcase":
      return <FontAwesomeIcon icon={faBriefcase} className={className} />;
    case "users":
      return <FontAwesomeIcon icon={faUsers} className={className} />;
    case "user":
      return <FontAwesomeIcon icon={faUser} className={className} />;
    case "mail":
      return <FontAwesomeIcon icon={faEnvelope} className={className} />;
    case "phone":
      return <FontAwesomeIcon icon={faPhone} className={className} />;
    case "leaf":
      return <FontAwesomeIcon icon={faLeaf} className={className} />;
    case "shield":
      return <FontAwesomeIcon icon={faShield} className={className} />;
    case "messageCircle":
      return <FontAwesomeIcon icon={faComments} className={className} />;
    case "whatsapp":
      return <FontAwesomeIcon icon={faWhatsapp} className={className} />;
    case "linkedin":
      return <FontAwesomeIcon icon={faLinkedin} className={className} />;
    case "instagram":
      return <FontAwesomeIcon icon={faInstagram} className={className} />;
    case "facebook":
      return <FontAwesomeIcon icon={faFacebook} className={className} />;
    case "github":
      return <FontAwesomeIcon icon={faGithub} className={className} />;
    case "plus":
      return <FontAwesomeIcon icon={faPlus} className={className} />;
    case "code":
      return <FontAwesomeIcon icon={faCode} className={className} />;
    case "fileContract":
      return <FontAwesomeIcon icon={faFileContract} className={className} />;
    case "recycle":
      return <FontAwesomeIcon icon={faRecycle} className={className} />;
    case "seedling":
      return <FontAwesomeIcon icon={faSeedling} className={className} />;
    case "fireExtinguisher":
      return (
        <FontAwesomeIcon icon={faFireExtinguisher} className={className} />
      );
    case "clipboardCheck":
      return <FontAwesomeIcon icon={faClipboardCheck} className={className} />;
    default:
      return <FontAwesomeIcon icon={faHome} className={className} />;
  }
}

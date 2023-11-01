import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 -mt-6 w-full h-14
    rounded-t-3xl px-4 bg-merah flex flex-row justify-between items-center text-abu"
    >
      <h1 className="text-sm lg:text-base px-2 overflow-ellipsis max-h-full">
        Gedung C Lantai 1, Fakultas MIPA, Universitas Gadjah Mada
      </h1>
      <div className="flex flex-row items-center p-2">
        <FontAwesomeIcon icon={faEnvelope} className="px-2" />
        <h2>seatup.mipa@gmail.com</h2>
      </div>
    </div>
  );
};

export default Footer;

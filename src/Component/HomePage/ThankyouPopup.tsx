import React from "react";
import Image from "next/image";
import Typography from "../UI/Typography";
import component from "@/assets/images/Homepage/thankyoucomponent.svg";
import component2 from "@/assets/images/Homepage/thankyoucomponent2.svg";

interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouPopup: React.FC<ThankYouPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; 
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 backdrop-blur-sm">
      <div className="relative max-w-[830px] w-full m-4 bg-[#DEF7F7] rounded-2xl shadow-2xl overflow-hidden">
        {" "}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 z-20 bg-[#048c80] hover:bg-[#004D40] text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          ✕
        </button>
        <Image
          src={component}
          alt=""
          width={250}
          height={250}
          className="absolute bottom-0 left-0"
        />
        <Image
          src={component2}
          alt=""
          width={250}
          height={250}
          className="absolute top-0 right-0"
        />
        <div className="relative z-10 p-10 sm:py-24  text-center">
          <Typography
            variant="title2"
            color="secondary"
            className="font-leaguespartan"
          >
            {" "}
            Thank You!
          </Typography>
          <Typography variant="body2" color="secondary" className="font-[400]">
            {" "}
            Thank you for reaching out to Lampros Tech. We will be in
            <br />
            touch with you shortly to discuss your needs further.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPopup;

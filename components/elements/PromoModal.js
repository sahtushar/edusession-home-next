import React, { useEffect, useState } from "react";

import Link from "next/link";
import Modal from "react-modal";
import MyImage from "./MyImage";
import img from "./../../assets/images/spoken-en-promo.jpeg";

const PromoModal = ({ promoimg, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        },
        content: {
          zIndex: 10000,
          margin: "auto",
        },
      }}
    >
      <div className="modalcontentwrapper">
        <Link href={link}>
          <MyImage src={promoimg} alt="Spoken English Course" width={"200px"} />
        </Link>
      </div>
    </Modal>
  );
};

export default PromoModal;

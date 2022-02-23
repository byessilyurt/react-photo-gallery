import React from "react";
import { motion } from "framer-motion";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const datifyUploadTime = (seconds) => {
    const date = new Date(seconds * 1000).toLocaleString("tr-TR", {
      timeZone: "America/New_York",
    }); // convert to local time
    return date;
  };

  return (
    <>
      <motion.div
        className="backdrop"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          src={selectedImg.url}
          className="modal-image"
          alt="enlarged pic"
          initial={{ y: "-200vh" }}
          animate={{ y: 0 }}
        />
        <motion.div className="modal-text">
          <h1>{selectedImg.metadata.name}</h1>
          <p>{datifyUploadTime(selectedImg.createdAt.seconds)}</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Modal;

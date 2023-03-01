import React from "react";
import { WhatsAppNo } from "../../utils/AppConstant";

const WhatsApp = () => {
  return (
    <div className="whatsAppWrapper">
      <a
        href={`https://api.whatsapp.com/send?phone=${WhatsAppNo}`}
        class="float"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default WhatsApp;

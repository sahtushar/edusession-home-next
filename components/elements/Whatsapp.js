import React from "react";
import { WhatsAppNo } from "../../utils/AppConstant";
import "./whatsapp.scss";
const WhatsApp=()=>{
    return <a href={`https://api.whatsapp.com/send?phone=${WhatsAppNo}`} class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
}

export default WhatsApp;
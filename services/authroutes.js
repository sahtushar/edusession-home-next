import {
  ALLFORMS,
  BOOKFORM,
  GETCOURSEDATA,
  SIGNIN,
  SIGNUP,
} from "../utils/AppRoutes";

import axios from "axios";

var qs = require("qs");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

export const callSignUp = async (body) => {
  var data = qs.stringify(body);
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: SIGNUP,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  let result = await axios(config);
  let status = result.status;

  return result;
};

export const callSignIn = async (body) => {
  var data = qs.stringify(body);
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: SIGNIN,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  let result = await axios(config);
  let status = result.status;

  return result;
};

export const callBookForm = async (body) => {
  var data = qs.stringify(body);
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: BOOKFORM,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-access-token": localStorage.getItem("auth-token"),
    },
    data: data,
  };
  let result = await axios(config);
  let status = result.status;

  return result;
};

export const callRequestedForms = async (body) => {
  var data = qs.stringify(body);
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: ALLFORMS,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "x-access-token": localStorage.getItem("auth-token"),
    },
    data: data,
  };
  let result = await axios(config);

  return result;
};

export const callCourseData = async (body) => {
  var data = qs.stringify(body);
  var config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: GETCOURSEDATA,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    data: data,
  };

  let result = await axios(config);
  return result;
};

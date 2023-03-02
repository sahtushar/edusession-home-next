const isProd = () => {
  var env = process.env.NODE_ENV;
  if (env == "production") {
    return true;
  } else {
    return false;
  }
};
let BASEURL = `https://edusession-server.onrender.com`;
if (!isProd()) {
  BASEURL = `http://localhost:8080`;
}

export const SIGNUP = `${BASEURL}/api/auth/signup`;
export const SIGNIN = `${BASEURL}/api/auth/signin`;
export const BOOKFORM = `${BASEURL}/api/bookForm`;
export const ALLFORMS = `${BASEURL}/api/bookedClass`;
export const ALLBOOKEDCLASSES = `${BASEURL}/api/getBookedClasses`;
export const GETCOURSEDATA = `${BASEURL}/api/getCourseData`;
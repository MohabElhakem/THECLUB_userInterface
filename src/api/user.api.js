import api from "./axios";

//--------------------------
// login request
//--------------------------
export async function loginUser(userInfo) {
  try {
    const response = await api.post('user/login', userInfo);
    return response.data;
  } catch (error) {
    throw error.response?.data || {
      message: "Something went wrong",
      status: "error"
    };
  }
}
/*
* the api.post method is used to send a POST request
* the specified endpoint ('user/login') with 
* the provided credentials as the request body.
* The function then returns the data from the response.
**/

//--------------------------
// signup request
//--------------------------

export async function signupUser(userInfo) {
    // sending post request to the backend using axios instance
    const response = await api.post('user/signup', userInfo);
    // returning the response data for that request
    return response.data;
}
/*
* the api.post method is used to send a POST request
* the specified endpoint ('user/signup') with 
* the provided userInfo as the request body.
* The function then returns the data from the response.
**/

export async function authMe(){
  const response = await api.get('/auth/me')
  return response.data;
}
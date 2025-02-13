import axios from "axios";
const url = "http://127.0.0.1:1128";
const questionsURL = "http://44.200.201.196:3000";
const productUrl = "http://18.188.122.145";
const reviewsUrl = "http://54.87.51.204:4005";

const getProductList = () => {
  return axios.get(`${productUrl}/products`);
};

const getProductInfo = (id = 66642) => {
  return axios.get(`${productUrl}/products/${id}`);
};

const getProductStyles = (id = 66642) => {
  return axios.get(`${productUrl}/products/${id}/styles`);
};

const getRelatedProducts = (id = 66642) => {
  return axios.get(`${productUrl}/products/${id}/related`);
};

const getQA = (id = 66642) => {
  return axios.get(`${questionsURL}/qa/${id}`);
};

const getReviewMetaData = (id = 66642) => {
  return axios.get(`${reviewsUrl}/reviews/meta?product_id=${id}`);
};

const getReviewsOfProduct = (
  id = 66642,
  sortString = "relevant",
  count = 20
) => {
  return axios.get(
    `${reviewsUrl}/reviews?product_id=${id}&sort=${sortString}&count=${count}`
  );
};

const reportReview = (reviewId) => {
  return axios.put(`${reviewsUrl}/reviews/report/${reviewId}`);
};

const postReview = (
  id = 66642,
  rating,
  summary,
  body,
  recommend,
  name,
  email,
  photos,
  characteristics
) => {
  return axios.post(`${reviewsUrl}/reviews/${id}`, {
    rating: rating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: photos,
    characteristics: characteristics,
  });
};

const getCart = (userToken) => {
  return axios.get(`${url}/cart/${userToken}`);
};

const addToCart = (user_token, sku_id) => {
  console.log(user_token);
  console.log(sku_id);
  return axios.post(`${url}/cart/`, {
    user_token: user_token,
    sku_id: sku_id,
  });
};

const getSpecificAnswers = (questionId) => {
  // console.log("Question ID: ", questionId);
  return axios.get(`${questionsURL}/qa/${questionId}/answers`);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`${questionsURL}/qa/${id}`, {
    body: text,
    name: name,
    email: email,
  });
};

const answerQuestion = (questionId, text, name, email, photos = []) => {
  console.log("Answer Question ID: ", questionId, text, name, email, photos);
  return axios.post(`${questionsURL}/qa/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  });
};

const markQAsHelpful = (questionId) => {
  return axios.put(`${url}/qa/question/${questionId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`${url}/qa/question/${questionId}/report`);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`${url}/qa/answer/${answerID}/helpful`);
};

const reportAns = (answerID) => {
  return axios.put(`${url}/qa/answer/${answerID}/report`);
};

const apiMaster = {
  getProductList: getProductList,
  getProductInfo: getProductInfo,
  getProductStyles: getProductStyles,
  getRelatedProducts: getRelatedProducts,
  getQA: getQA,
  getSpecificAnswers: getSpecificAnswers,
  askQuestion: askQuestion,
  answerQuestion: answerQuestion,
  markQAsHelpful: markQAsHelpful,
  reportQuestion: reportQuestion,
  markAnsAsHelpful: markAnsAsHelpful,
  reportAns: reportAns,
  getReviewMetaData: getReviewMetaData,
  getReviewsOfProduct: getReviewsOfProduct,
  postReview: postReview,
  reportReview: reportReview,
  getCart: getCart,
  addToCart: addToCart,
};

export default apiMaster;

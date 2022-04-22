import axios from "axios";
const url = "http://127.0.0.1:1128";
const questionsURL = "http://127.0.0.1:3000";

const getProductList = () => {
  return axios.get(`${url}/products`);
};

const getProductInfo = (id = 66642) => {
  return axios.get(`${url}/products/${id}`);
};

const getProductStyles = (id = 66642) => {
  return axios.get(`${url}/products/${id}/styles`);
};

const getRelatedProducts = (id = 66642) => {
  return axios.get(`${url}/products/${id}/related`);
};

const getQA = (id = 66642) => {
  return axios.get(`${questionsURL}/qa/questions?product_id=${id}`);
};

const getReviewMetaData = (id = 66642) => {
  return axios.get(`${url}/reviews/meta?product_id=${id}`);
};

const getReviewsOfProduct = (
  id = 66642,
  sortString = "relevant",
  count = 20
) => {
  return axios.get(
    `${url}/reviews?product_id=${id}&sort=${sortString}&count=${count}`
  );
};

const reportReview = (reviewId) => {
  return axios.put(`${QuestionsURL}/reviews/report/${reviewId}`);
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
  return axios.post(`${QuestionsURL}/reviews/${id}`, {
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
  return axios.get(`${QuestionsURL}/cart/${userToken}`);
};

const addToCart = (user_token, sku_id) => {
  console.log(user_token);
  console.log(sku_id);
  return axios.post(`${QuestionsURL}/cart/`, {
    user_token: user_token,
    sku_id: sku_id,
  });
};

const getSpecificAnswers = (questionId) => {
  return axios.get(`${QuestionsURL}/qa/${questionId}/answers`);
};

const askQuestion = (id, text, name, email) => {
  return axios.post(`${QuestionsURL}/qa/${id}`, {
    body: text,
    name: name,
    email: email,
  });
};

const answerQuestion = (questionId, text, name, email, photos = []) => {
  return axios.post(`${QuestionsURL}/qa/${questionId}/answers`, {
    body: text,
    name: name,
    email: email,
    photos: photos,
  });
};

const markQAsHelpful = (questionId) => {
  return axios.put(`${QuestionsURL}/qa/question/${questionId}/helpful`);
};

const reportQuestion = (questionId) => {
  return axios.put(`${QuestionsURL}/qa/question/${questionId}/report`);
};

const markAnsAsHelpful = (answerID) => {
  return axios.put(`${QuestionsURL}/qa/answer/${answerID}/helpful`);
};

const reportAns = (answerID) => {
  return axios.put(`${QuestionsURL}/qa/answer/${answerID}/report`);
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

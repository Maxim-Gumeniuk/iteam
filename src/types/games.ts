export interface Games {
  appId: string,
  imgUrl: string,
  price: string,
  released: string, 
  reviewSummary: string,
  title: string,
  url: string,
  description: string,
  allReviews: {
    summary: string,
  }
};
import api from "./axios";

/**
 * Fetch all testimonials from the backend
 * @returns {Promise} Response with testimonials array
 */
export const getTestimonials = async () => {
  try {
    const response = await api.get("/testimonials");
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};

export default {
  getTestimonials,
};

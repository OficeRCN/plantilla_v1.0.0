import axios from "axios";

export const sendEmail = async (values) => {
  try {
    const data = await axios.post("http://localhost:3000/sendemail", values);
    return data; 
  } catch (error) {
    return error instanceof Error ? error.message : error;
  }
};

import { useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import {Spinner} from "@chakra-ui/react"
const Redirect = () => {
  const link = window.location.href;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://b251.herokuapp.com/url", {
        headers: {
          link,
        },
      })
      .then((res) => {
        return (window.location.href = `https://${res.data}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>;
};
export default Redirect;

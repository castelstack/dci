import React from "react";
import axios from "axios";

export const ServicesProvider = () => {
  const URL = "https://jln-api.herokuapp.com/api/v1/";

  const [service, setService] = React.useState([
    {
      name: "agriculture",
      description: "active",
      image: "/static/media/picture1.ed0e85f1.png",
    },
    {
      name: "construction",
      description: "active",
      image: "/static/media/picture1.ed0e85f1.png",
    },
    {
      name: "manufactures representative",
      description: "active",
      image: "/static/media/picture1.ed0e85f1.png",
    },
  ]);

  React.useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}businesses`)

        .then((res) => {
          if (res.data.message.toLowerCase() === "success") {
            setService(res.data.businesss.businesss);
          }
        });
    })();
  }, []);

  return React.createContext({
    service,
  });
};

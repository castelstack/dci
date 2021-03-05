import React from "react";
import axios from "axios";

export const ContactProvider = () => {
  const [contact, setContact] = React.useState({
    phone: ["09099877787"],
    name: "jln",
    address: "10 omada ave",
    image: "default.jpeg",
    email: ["example.mail@gmail.com", "info.email@gmail.com"],
    socials: {
      whatsapp: "ksklsau.whatsapp.com",
      instagram: "yourInstagramHandle",
      twitter: "yourTwitterHandle",
      facebook: "yourFacebookHandle",
    },
    objectives: {
      goals: "JLN goals",
      mission: "JLN mission",
      overview: "JLN overview",
      business: "JLN business Local",
    },
  });

  // api call with axios in useEffect hook

  const URL = "https://jln-api.herokuapp.com/api/v1/";

  React.useEffect(() => {
    (async () => {
      await axios
        .get(`${URL}contacts`)

        .then((res) => {
          if (res.data.status.toLowerCase() === "success") {
            setContact(res.data.contacts.contacts[0]);
          }
        });
    })();
  }, []);

  return React.createContext({
    contact,
  });
};

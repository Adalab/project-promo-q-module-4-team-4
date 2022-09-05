const sendToApi = (data) => {
  return fetch("http://localhost:4000/card", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(
      (serverResp) => {
        console.log(serverResp);
        const result = {
          url: serverResp.cardURL,
          success: serverResp.success
        };

        console.log(result);

        return result;
      }

      /*   if (serverResp.success) {
        
        messageCard.innerHTML = "La tarjeta ha sido creada";
        urlCard.innerHTML = serverResp.cardURL;
        urlCard.href = 
        backgroundCreate();
        removeCollapsed(buttonTwitter);
      } else {
        messageCard.innerHTML = "Debes rellenar todos los campos";
      }*/
    );
};
export default sendToApi;

const sendToApi = (data) => {

  const url = process.env.NODE_ENV === 'production' 
  ?'https://back-end-to-the-future.herokuapp.com/card' :'http://localhost:4000/card';
  
  console.log(url)
  console.log(process.env.NODE_ENV)

  return fetch(url, {
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

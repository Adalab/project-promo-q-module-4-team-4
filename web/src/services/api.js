const sendToApi = (data) => {

  const url = process.env.NODE_ENV === 'production' ?'back-end-to-the-future.herokuapp.com' :'localhost:4000';
  
  console.log(url)
console.log(process.env.NODE_ENV)

  console.log('llamando api')
  return fetch(`https://${url}/card`, {
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

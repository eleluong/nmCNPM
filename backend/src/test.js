const axios = require('axios');
axios({
    method: 'get',
    url: "http://localhost:5000/product/get_all"
  })
  .then(response => {
      console.log(response.data);
  })
  .catch(e => {
      console.log(e);
  })
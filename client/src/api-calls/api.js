const axios = require('axios')


module.exports.fetchApi = (endpoint,setData) => {
    axios
      .get(endpoint)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
}


/*fetch('https://api-mainnet.magiceden.io/auctions/collections/buffbunnybaby?q=%7B%22%24match%22%3A%7B%7D%2C%22%24sort%22%3A%7B%22config.endDate%22%3A1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%7D').then(
    (response)=> { return response.json; })
    .then((data)=> {console.log(data);
    })*/

    
// Example POST method implementation:
async function postData(url = 'https://api-mainnet.magiceden.io/auctions/collections/buffbunnybaby?q=%7B%22%24match%22%3A%7B%7D%2C%22%24sort%22%3A%7B%22config.endDate%22%3A1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%7D', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  } .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    }); 

}
fetch("https://api-mainnet.magiceden.io/auctions/collections/buffbunnybaby?q=%7B%22%24match%22%3A%7B%7D%2C%22%24sort%22%3A%7B%22config.endDate%22%3A1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%7D")
.then(
    (response)=> { return response.json; })
    .then((data)=> {console.log(data);
    })


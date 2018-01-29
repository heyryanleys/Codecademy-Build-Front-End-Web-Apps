const apiKey = 'U8IoCcWFZwxvmnhFR9v9iUQDBSalCn0jUxQoguRvM7zn0uBIISgGGVq2Mn0rVpz83aFE7bl8u0W6yN71mUzmQh5yC7qx-CQ8Hd-Y7XVvodnhE-YsbrboKHRTLKJvWnYx'

let Yelp = {

}

function search(term,location,sortBy){
  return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}sort_by=${sortBy}',{
    headers: 'Bearer ${apiKey}'
  })
}

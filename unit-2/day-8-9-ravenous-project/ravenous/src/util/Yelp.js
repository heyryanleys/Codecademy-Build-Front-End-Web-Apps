const apiKey = 'U8IoCcWFZwxvmnhFR9v9iUQDBSalCn0jUxQoguRvM7zn0uBIISgGGVq2Mn0rVpz83aFE7bl8u0W6yN71mUzmQh5yC7qx-CQ8Hd-Y7XVvodnhE-YsbrboKHRTLKJvWnYx'

let Yelp = {

}

function search(term,location,sortBy){
  return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}sort_by=${sortBy}',{
    headers: 'Bearer ${apiKey}'
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business => (
        return {
          id: jsonResponse.businesses.id,
          imageSrc: jsonResponse.businesses.image_url,
          name: jsonResponse.businesses.name,
          address: jsonResponse.businesses.location.address1,
          city: jsonResponse.businesses.location.city,
          state: jsonResponse.businesses.location.state,
          zipCode: jsonResponse.businesses.location.zip_code,
          category: jsonResponse.businesses.categories.title,
          rating: jsonResponse.businesses.rating,
          reviewCount: jsonResponse.businesses.review_count
        }
      ))
    } throw new Error('Request failed!')
  })
}

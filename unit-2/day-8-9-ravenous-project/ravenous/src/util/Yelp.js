const apiKey = 'U8IoCcWFZwxvmnhFR9v9iUQDBSalCn0jUxQoguRvM7zn0uBIISgGGVq2Mn0rVpz83aFE7bl8u0W6yN71mUzmQh5yC7qx-CQ8Hd-Y7XVvodnhE-YsbrboKHRTLKJvWnYx'

export let Yelp = {
  function search(term,location,sortBy){
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}sort_by=${sortBy}',{
      headers: 'Bearer ${apiKey}'
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => (
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        ))
      } throw new Error('Request failed!')
    })
  }
}

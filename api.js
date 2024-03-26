import SanityClient from "./sanity";

let sanityQuery = (query, params) => SanityClient.fetch(query, params);

export const getFeaturedRestaurants = () => {
  return sanityQuery(`
  *[_type=="featured"] {
    ..., 
    restaurants[] -> {
      ...,
      dishes[] -> {
        name
      }
    }
  }
  `);
};

export const getCategories = () => {
  return SanityClient(`
    *[_type=="category"] 
  `);
};

export const getFeaturedRestaurantById = (id) => {
  return sanityQuery(
    `
  *[_type=="featured" && _id == $id] {
    ..., 
    restaurants[] -> {
      ...,
      dishes[] -> {
        name
      }
    }
  }[0]
  `,
    { id }
  );
};

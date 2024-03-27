import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "g7394wxi",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

// helper function to get image url
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;

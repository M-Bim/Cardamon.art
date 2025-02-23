// Initialize the SDK.
import { createDirectus, rest, readItems, registerUser } from "@directus/sdk";

const directus = createDirectus(process.env.DIRECTUS_URL || "").with(rest());

const result = await client.request(registerUser(email, password));// Check if registration was successful
if (!result) {
  throw new Error('Registration failed');
}
const articles = await directus.request(
  readItems("artworks", {
    filter: {
      _and: [
        {
          status: {
            _eq: "published",
          },
        },
        {
          date_published: {
            _lte: "$NOW",
          },
        },
      ],
    },
  }),
);

// Initialize the SDK.
import { createDirectus, rest, readItems } from "@directus/sdk";

const directus = createDirectus(process.env.DIRECTUS_URL || "").with(rest());

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

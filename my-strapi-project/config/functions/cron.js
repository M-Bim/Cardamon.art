module.exports = {
  // Runs every minute
  "*/1 * * * *": async ({ strapi }) => {
    const now = new Date();

    // Publish posts
    const unpublishedPosts = await strapi.db.query("api::post.post").findMany({
      where: {
        publishedAt: null,
        publishAt: { $lte: now },
      },
    });

    for (const post of unpublishedPosts) {
      await strapi.db.query("api::post.post").update({
        where: { id: post.id },
        data: { publishedAt: now },
      });
    }

    // Publish images
    const unpublishedImages = await strapi.db
      .query("api::image.image")
      .findMany({
        where: {
          publishedAt: null,
          publishAt: { $lte: now },
        },
      });

    for (const image of unpublishedImages) {
      await strapi.db.query("api::image.image").update({
        where: { id: image.id },
        data: { publishedAt: now },
      });
    }
  },
};

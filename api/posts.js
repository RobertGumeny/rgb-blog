import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://robertgumeny.ghost.io',
  key: 'ffe86bb1a5838bc5c407e915e8',
  version: "v3"
});


// Get all posts
export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors"
    })
    .catch(err => {
      console.error(err);
    });
}

// Get 4 posts for home page preview

export async function getPreviewPosts() {
  return await api.posts
    .browse({
      limit: "4",
      include: "tags,authors",
      order: `published_at DESC`
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}
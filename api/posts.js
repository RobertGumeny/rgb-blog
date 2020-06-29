import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://robertgumeny.ghost.io',
  key: 'ffe86bb1a5838bc5c407e915e8',
  version: "v3"
});

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
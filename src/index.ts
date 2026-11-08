// Preferiresti moved to https://tools.baggiponte.com/preferiresti/, restyled like the blog; its source now lives in
// baggiponte/blog under tools/site/preferiresti/. Every old URL goes to the same path there.
export function destination(url: URL): string {
  return `https://tools.baggiponte.com/preferiresti${url.pathname}${url.search}`;
}

export default {
  fetch(request: Request): Response {
    return Response.redirect(destination(new URL(request.url)), 301);
  },
};

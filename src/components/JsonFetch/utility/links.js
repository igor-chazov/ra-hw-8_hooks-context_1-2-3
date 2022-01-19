const url = new URL(window.location.href);

if (url.hostname === 'localhost') {
  url.port = '7070';
}

if (url.hostname === 'igor-chazov.github.io') {
  url.hostname = 'ra-8-2-backend.herokuapp.com';
  url.protocol = 'https';
}

const root = url;
root.pathname = '';

const links = root.origin;

export default links;

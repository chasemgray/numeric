export default function getURL(url) {
  let client = new XMLHttpRequest();
  client.open('GET', url, false);
  client.send();
  return client;
}

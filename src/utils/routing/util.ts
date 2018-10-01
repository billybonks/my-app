export function getHash(location: Location) {
  if (location.hash !== undefined) {
    return location.hash.substr(0);
  }

  return '';
}

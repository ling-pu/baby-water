// src/js/getAssetUrl.js
export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\/+/, '')}`;
};
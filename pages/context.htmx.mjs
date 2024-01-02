/**
 * @param {Record<string, string|string[]|undefined>} headers 
 */
export const htmxContext = (headers) => ({
  htmx: {
    boosted: 'hx-boosted' in headers,
  }
})
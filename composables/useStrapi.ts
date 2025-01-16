export const useStrapi = () => {
  const config = useRuntimeConfig();

  const fetchContent = async (contentType: string, slug?: string) => {
    try {
      const baseURL = config.public.strapiURL;
      let url = `${baseURL}/api/${contentType}`;

      if (slug) {
        url += `?filters[slug][$eq]=${slug}&populate=*`;
      } else {
        url += "?populate=*";
      }

      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching from Strapi:", error);
      return null;
    }
  };

  return {
    fetchContent,
  };
};

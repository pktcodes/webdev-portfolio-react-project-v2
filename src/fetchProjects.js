import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "webdevPortfolio",
      });
      const data = response.items.map((item) => {
        const { image, title, text, url, github } = item.fields;
        const id = item.sys.id;
        const img = image.fields.file.url;
        return { id, img, title, text, url, github };
      });
      setProjects(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { projects, isLoading, isError };
};

export default useFetchProjects;

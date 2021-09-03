const BASIC_URI = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
   try {
      const response = await fetch(BASIC_URI + url);
      if (response.ok) return await response.json();
      else throw await response.json();
   } catch (error) {
      throw {
         status: error.status,
         message: error.message,
      };
   }
};

export const api = {
   getRootNodes: async () => {
      try {
         const data = await request("");
         return {
            data,
            isError: false,
         };
      } catch (error) {
         return {
            data: error,
            isError: true,
         };
      }
   },
   getLowLevelNodes: async (id) => {
      try {
         const data = await request(`/${id}`);
         return {
            data,
            isError: false,
         };
      } catch (error) {
         return {
            data: error,
            isError: true,
         };
      }
   },
};

const API_MAIN_URL = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev"; // 프로그래머스 api

const request = async (url) => {
   try {
      const response = await fetch(API_MAIN_URL + url);
      if (response.ok) return await response.json();
      else throw await response.json();
   } catch (e) {
      throw {
         message: e.message,
         status: e.status,
      };
   }
};

export const api = {
   getTopLevelPhotos: async () => {
      try {
         const data = await request("");
         return {
            isError: false,
            data,
         };
      } catch (e) {
         return {
            isError: true,
            data: e,
         };
      }
   },
   getLowLevelPhotos: async ({ node_id }) => {
      try {
         const data = await request(`/${node_id}`);
         return {
            isError: false,
            data,
         };
      } catch (e) {
         return {
            isError: true,
            data: e,
         };
      }
   },
};

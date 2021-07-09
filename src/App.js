import { TitleSection, MainSection, Loading, Error } from "./components/index.js";

export default class App {
   constructor($target) {
      // 로딩
      const loading = new Loading({ $target });

      // 에러
      const error = new Error({ $target });

      // 상단 제목 영역
      const titleSection = new TitleSection({ $target });

      // 메인 영역
      const mainSection = new MainSection({ $target, loading, error });
   }
}

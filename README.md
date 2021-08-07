# caTTo 고양이 사진첩 어플리케이션

<br />

실행 : https://uhyun-fe.github.io/catto/

고양이 사진첩 어플리케이션 (cat_photo_catto) - JS ES6

<br />

---

<br />

## caTTo는

-  문제 : [프로그래머스 과제관 프론트엔드 고양이 사진첩 어플리케이션](https://programmers.co.kr/skill_check_assignments/100)
-  이 프로젝트는 프로그래머스 과제관의 프론트엔드 과제 중 `고양이 사진첩 어플리케이션` 문제에 대한 개인적인 풀이입니다.
-  바닐라 자바스크립트로 작성했습니다.
-  프로그래머스에서 제공한 REST Api를 사용했습니다.

<br />

## 구현한 기능

-  폴더를 클릭한 경우, 해당 폴더 하위에 속한 폴더/파일을 렌더링했습니다. (렌더링 되는 동안 로딩화면을 구성했습니다.)
-  폴더 이동에 따라 상단 Route 영역도 탐색 순서에 맞게 업데이트했습니다.
-  뒤로가는 화살표를 누를 경우, 이전 폴더로 돌아가도록 했습니다.
-  파일을 선택한 경우, 해당 파일의 상세 이미지를 모달로 렌더링했습니다.
-  esc키를 누르거나 사진 영역 밖을 클릭한 경우에 상세 이미지 모달이 닫히도록 했습니다.
-  폴더 데이터를 불러오는데 실패하는 등의 에러가 발생했을 때, 발생한 에러에 대해 사용자가 알 수 있도록 에러화면을 구성했습니다.

<br />

## 아쉬운점

-  상세 사진을 불러오는 api를 찾을 수 없어 샘플사진으로 임시 대체했습니다. (현재 모든 상세 사진이 동일합니다.)
-  상세 사진이 로딩되는 시간동안의 화면 처리를 하지 못했습니다. (Image Lazy Loading 기법에 대해 공부할 예정입니다. [참고 블로그](https://helloinyong.tistory.com/297))

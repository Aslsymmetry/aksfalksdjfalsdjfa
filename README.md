# 바이브 코딩 랜딩 페이지

`dist/index.html`을 브라우저에서 열면 바로 실행됩니다. 별도 설치나 빌드가 필요하지 않습니다.

페이지는 HTML·CSS·JavaScript로 구성됩니다. 제목, 본문, 버튼, 수강률 카드, 별점과 도구 링크는 각각 수정 가능한 HTML 요소입니다. 참고 스크린샷은 페이지에서 사용하지 않습니다.

- `dist/index.html`: 문구와 페이지 구조
- `dist/styles.css`: 데스크톱·태블릿·모바일 레이아웃
- `dist/script.js`: 강의 버튼과 안내 창
- `dist/assets/portrait.png`: 중앙 인물 일러스트
- `dist/assets/avatars.png`: 프로필 일러스트
- `dist/assets/icons/`: 개별 도구 SVG 로고

실제 강의 주소가 준비되면 `dist/script.js`의 `COURSE_URL`에 입력하세요.

너비 1100px 이하에서는 태블릿 배치가, 760px 이하에서는 세로 배치와 3열 도구 목록이 적용됩니다. 인터넷 연결이 없어도 이미지와 모든 기능은 실행되며, Google Fonts를 불러올 수 없는 경우 시스템 폰트를 사용합니다.

인물과 프로필 일러스트는 내장 이미지 제작 도구로 생성했습니다. 프롬프트는 각각 은빛 머리와 빛나는 신경망 표현의 오른쪽 측면 인물, 투명 배경의 네 명 원형 프로필입니다. 로고 출처는 Simple Icons와 Lobe Icons이며, 자세한 정보는 `ASSET-SOURCES.md`를 참고하세요.

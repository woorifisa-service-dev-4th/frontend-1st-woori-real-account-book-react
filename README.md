# frontend-1st-woori-real-account-book

## 💸 우리 찐 가계부 💸
재정 관리를 쉽게 도와주는 가계부 플랫폼이에요! 😄 
수입과 지출을 한눈에 정리하고, 분석해서 소비 습관도 개선할 수 있도록 만들어졌어요.

이번 달 총 수입과 지출을 확인하고, 과거 데이터를 통해 내 생활 패턴도 돌아볼 수 있어요. 
지출은 카테고리별로 분석해서 소비 습관 점검하고, 더 효율적으로 개선할 방법도 찾을 수 있어요. 

수입과 지출 내역 등록도 간단하고 직관적이니까 걱정 마세요! ✨

# 👨‍👩‍👦‍👦 팀 소개

| [권민지](https://github.com/mjgwon24) | [권지윤](https://github.com/june0216) | [김새봄](https://github.com/saebomnewspring) | [윤영찬](https://github.com/yyc0026) |
| --- | --- | --- | --- |
| <img src="asset/member/민지.jpeg" width="150" /> | <img src="asset/member/지윤.png" width="150" /> | <img src="asset/member/새봄.jpeg" width="150" /> | <img src="asset/member/영찬.png" width="150" /> |
| HTML, CSS, React, Figma | HTML, CSS, React, Github 관리 | HTML, CSS, React | HTML, CSS, React |

# 🌐 배포
🔗 [ 우리REAL가계부 URL ](https://frontend-1st-woori-real-account-book-react-l3ma.vercel.app/)

<img src="https://private-user-images.githubusercontent.com/76603301/400211121-0f40ec0a-b296-4771-8dd5-09f218bcd4ec.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzYwOTE4NDUsIm5iZiI6MTczNjA5MTU0NSwicGF0aCI6Ii83NjYwMzMwMS80MDAyMTExMjEtMGY0MGVjMGEtYjI5Ni00NzcxLThkZDUtMDlmMjE4YmNkNGVjLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTA1VDE1MzkwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUwMjQxZmE2ODRlMDQ5ZmU2NDE3YjlhNWY2NTEwNjEwYWU2OTBhYTljZmNhM2FmNzY2ZmMzYTUwMDYwMmU0Y2UmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.XrJhxsRMWjLxx1Te4AiNbZXl97HDH_DA_NzhW0u-_lg">


# 📦 폴더 구조
리액트 적용 후 변경된 폴더구조 

📦 src

├─ 📂 assets  
│  ├─ 📂 images  
│  │  ├─ 📜 day-mode-btn.png  
│  │  ├─ 📜 move-button.png  
│  │  ├─ 📜 night-mode-btn.png  
│  │  ├─ 📜 react.svg  
│  │  ├─ 📜 user-profile-default.png  
│  │  ├─ 📜 vector-left-black-icon.png  
│  │  ├─ 📜 vector-left-gray-icon.png  
│  │  ├─ 📜 vector-right-gray-icon.png  
│  │  ├─ 📜 woori-icon.png  
│  │  └─ 📜 woori-real-icon.png  
│  └─ 📜 .DS_Store  

├─ 📂 components  
│  ├─ 📂 categoryAnalysis  
│  │  ├─ 📜 AnalysisBody.jsx  
│  │  ├─ 📜 AnalysisHeader.jsx  
│  │  ├─ 📜 CategoryBar.jsx  
│  │  ├─ 📜 CategoryButton.jsx  
│  │  ├─ 📜 CategoryCharts.jsx  
│  │  ├─ 📜 CircleChart.jsx  
│  │  ├─ 📜 RankChart.jsx  
│  │  └─ 📜 WeeklySection.jsx  
│  ├─ 📂 common  
│  │  ├─ 📜 MoveButton.jsx  
│  │  ├─ 📜 NightDayMode.jsx  
│  │  └─ 📜 UserInfo.jsx  
│  ├─ 📂 main  
│  │  ├─ 📂 DetailsTable  
│  │  │  ├─ 📜 DetailsTable.jsx  
│  │  │  ├─ 📜 DetailsTableBtn.jsx  
│  │  │  ├─ 📜 DetailsTableContents.jsx  
│  │  │  ├─ 📜 DetailsTableDaily.jsx  
│  │  │  └─ 📜 DetailsTableMonth.jsx  
│  │  ├─ 📜 MainBody.jsx  
│  │  ├─ 📜 MainHeader.jsx  
│  │  ├─ 📜 SelectedDate.jsx  
│  │  └─ 📜 TotalIncExpStatus.jsx  
│  └─ 📜 Footer.jsx  

├─ 📂 constants  
│  ├─ 📜 CategoryMapping.js  
│  └─ 📜 ChartColors.js  

├─ 📂 contexts  
│  ├─ 📜 AccountBookContext.jsx  
│  ├─ 📜 DateContext.jsx  
│  └─ 📜 ThemeContext.jsx  

├─ 📂 layouts  
│  └─ 📜 DefaultLayout.jsx  

├─ 📂 pages  
│  ├─ 📜 CategoryAnalysisPage.jsx  
│  └─ 📜 MainPage.jsx  

├─ 📂 utils  
│  └─ 📜 sampleMonthlyData.json  

├─ 📜 .DS_Store  
├─ 📜 App.jsx  
├─ 📜 constants.js  
├─ 📜 index.css  
└─ 📜 main.jsx  



# 🖥️ 화면 별 기능
### 시작 화면
<img src="asset/시작페이지.png"  >

### [ 로그인 / 회원가입 ]
<img src="asset/로그인.png" >
<img src="asset/회원가입.png" >

### [ 홈 화면 ]
<img src="asset/메인.png">
사용자는 이번 달의 총 수입과 지출 합계를 확인할 수 있습니다.
또한 가장 최근 5개월과 이번 달을 비교하는 도표를 통해 자신의 생활 습관을 되돌아볼 수 있고, 바로 직전 달과 이번 달을 비교하여 어느정도의 금액 변동이 생겼는지를 알려줍니다.
마지막 요소로는 이번 달의 내역 상세를 제공합니다. 필터 기능을 통해 전체, 수입, 지출 별로 원하는 내역만 조정하여 볼 수 있습니다.

### [ 카테고리별 분석 ]
<img src="asset/지출카테고리.png" >
사용자의 지출 분야를 카테고리별, 소비량순으로 제공해줍니다.
이를 통해 사용자는 본인의 소비습관을 계획하고, 효율적으로 개선할 수 있습니다.
또한 매 주차별 카테고리에 따른 소비량을 제공하여 보다 자세한 소비계획을 만들 수 있도록 돕습니다.
마지막 요소로는 카테고리별 지출 상세 내역을 제공합니다.

### [ 수입 지출 등록 ]
<img src="asset/수입지출내역.png" >
가계부에 등록할 수입 또는 지출 내역의 세부사항을 등록합니다. 내역명, 변동 금액, 날짜, 거래수단을 카테고리별로 등록할 수 있습니다. 등록된 내역은 날짜별로, 카테고리별로 확인할 수 있습니다.

# 📈 LightHouse 성능 지표
<img src="asset/lighthouse.png" >

<br></br>

# 🧑‍💻 Code Convention 
📌 Class Name Rule
- 페이지 기능이 드러나도록 클래스 이름 작성
- 케밥 컨벤션

# 📏ESLint RuleSet

- eslint: standard : JavaScript Standard Style(최신 ECMAScript 표준(ES6 이상)을 준수)을 기반으로 한 규칙 세트

[ 주요 규칙 ]

standard는 코드 스타일 관련 규칙에 중점을 둡니다. recommended와 비교해 더 엄격하고 구체적인 규칙을 따릅니다. 대표적인 예는 다음과 같습니다:

1. 세미콜론 금지

standard: 세미콜론 사용 금지 (no-extra-semi).
예외적으로 자동 세미콜론 삽입(ASI, Automatic Semicolon Insertion)을 신뢰.
-> JavaScript 엔진이 문장의 끝을 자동으로 감지하여 세미콜론을 삽입하므로, 대부분의 경우 세미콜론을 명시적으로 추가하지 않아도 문제가 발생하지 않음
-> 불필요한 세미콜론을 제거함으로써 코드가 간결하고 깔끔해짐

2. 들여쓰기와 공백

키워드 뒤의 공백 필수 (e.g., if (condition)).

3. 따옴표 스타일

항상 작은 따옴표 사용 (') (quotes: [2, "single"]).

4. 변수 선언 방식

const와 let 사용 강제 (no-var).
사용되지 않는 변수는 금지 (no-unused-vars).

5. 객체와 배열의 공백 스타일

{ key: value } 형태에서 공백 유지.
[ item1, item2 ] 배열에서도 공백 유지.


# ✔️ Git Convention
## (1) Commit Convention
|    Type     | Description  |
|:-----------:|--------------|
|   `feat:`   | 새로운 기능 추가 |
|   `fix:`    | 버그 수정      |
|   `hotfix:` | 긴급 수정      |
| `refactor:` | 코드 리팩토링   |
| `rename:`   | 파일 혹은 폴더명을 수정할 때 사용 |
| `remove:`   | 파일을 삭제할 때 사용 |
| `structure:`   | 프로젝트 구조 변경 |
| `docs:`   | 문서 작성 및 편집 |
| `deploy:`   |  프로젝트 배포 |


## (2) Branch Name Rule
{이슈 번호}-{feature/fix}-{개발 기능}

- ex) `17-feature-login`

## (3) 협업 전략 
- 각자 개인 레포지토리를 `fork`하여 작업 후, 모든 코드는 `dev` 브랜치에 통합하고, 최종 배포 시 `main` 브랜치에 반영합니다.
- **작업 프로세스**:
    - (1) **이슈 발생**: 생성된 이슈는 자동으로 `Projects`의 `Todo`로 연결됩니다.
    - (2) **브랜치 생성**: 이슈 번호를 기반으로 작업 브랜치를 생성합니다.
    - (3) **코드 작성**: 브랜치에서 작업 후 변경사항을 커밋합니다.
    - (4) **Pull Request**: `dev` 브랜치로 병합을 요청합니다.
    - (5) **리뷰 및 병합**: 최소 2명 이상의 리뷰 승인을 받아야 메인 레포지토리로 머지가 가능합니다.

# 🎨 UI 스타일 가이드
### 컬러
<img src="asset/컬러이미지.png" height=550 >
금전과 관련된 서비스를 위하여, 신뢰의 상징인 블루 계열을 사용하였습니다.

### 폰트
깔끔한 느낌을 내기 위해 Pretendard 사용하였습니다.

font-weight 400~800으로 나누어 명암 조절을 통해 텍스트 강조에 차별을 두었습니다. 

### 컨텐츠 영역
675px의 width로 컨텐츠 영역을 중앙에 고정, min-width를 주어 윈도우 창의 너비가 줄어들어도 UI 요소가 망가지지 않도록 처리하였습니다. 

### 라이트 모드 & 다크 모드
라이트 모드뿐만 아니라 다크 모드를 제공하여 사용자 선택의 기회를 확장하였습니다. 사용자가 라이트 모드와 다크 모드를 직접 설정할 수 있어 자신의 경험을 결정하고 보다 개인에게 맞춤화된 방식으로 서비스를 사용할 수 있습니다. 

### 공통 footer
동일한 footer를 사용하여 사용자는 모든 화면에서 익숙한 UI를 볼 수 있어 웹사이트 사용자 경험이 일관성 있게 유지됩니다.


# 💳 수입 지출 더미 데이터 
🔗 [ 더미데이터 링크 ](https://energy-yun.notion.site/33e31704d4e844218cbf75865fae6535?pvs=4)

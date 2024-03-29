# 15GG - Frontend

### 기술
 
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
 ![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) ![html](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white) ![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
 ![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![amazone](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

### 레이아웃과 기능소개

https://www.youtube.com/watch?v=qtjvRxQwo7I
## 프로젝트 소개

 대부분의 게이머들은 전적을 검색한다. 월간 최대 트래픽 3700만 규모인 전적검색 사이트도 있는 만큼, 타 사이트들의 단점을 보완하여 클릭수를 줄여 빠르고 원하는 데이터를 쉽게 접할 수 있는 전적검색 사이트입니다.

### 개발 기간

2023.08.23 - 2023.10.24

##  FrontEnd
* UI/UX 설계
* React 기반 웹 페이지 컴포넌트 설계
* 웹 페이지 상호작용
* 위젯 기능 설계
##  세부 기능
* dropdown 메뉴바
* 실시간 Api를 통한 검색기 구현

## <서비스 구현>
### 1. 유저 전적검색 서비스
* Riot에서 제공하는 오픈 API를 접근하여 비동기로 받아오는 구조이기에 빠른 속도를 유지하기 위해
심플한 레이아웃으로 사이트를 구성.
* 빠른 페이저 랜더링을 유지하기 위해 받아오는 데이터 중 불필용한 데이터를 줄이고 에센셜한 게임내의 퍼포먼스 지표만 선별하여 평소에 게이머들이 자주 접했던 UI/UX에 초점을 맞추었다.
### 2. 위젯 기능
* 홈화면에 바로 표현하여 크게 두가지 섹션으로 나뉘고, 속도가 생명인 서비스에서 유저들의 정보 가독성을 위하여 크게 두 축으로 구성을 하였고, 최대한 유저의 시간을 빼앗지 않게 클릭수와 시간을 줄이도록 화면을 설계.
* 해당 기능이 로그인 회원만 이용할 수 있는 컨텐츠로 한 번의 로그인만 해놓는다면 회원이 이전에 사용하였던 위젯 세팅을 저장하여 다음번에 사용할 때, 클릭을 최소한으로 이루어져도 정보를 확인할 수 있도록
### 3. 챔피언 분석 기능
* DB를 활용한 아이템, 스킬트리, 승률 통계 시각화
### <프로젝트 회고>

   * 프론트개발을 하면서 기능구현도 중요했지만, 리액트에서 제공하는 hooks 중 하나인 메모이제이션과 같은 최적화기능들을 사용하지 않아, 아쉬웠습니다.
기회가 된다면, 리액트hooks와 상태관리툴을 좀 더 공부해서 적용해서 개발하고 싶습니다.






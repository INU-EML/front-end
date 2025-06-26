# INU Energy Materials Laboratory (EML) 웹사이트

## 프로젝트 소개

INU Energy Materials Laboratory(EML) 웹사이트는 인천대학교 에너지 재료 연구실의 공식 웹사이트입니다. 이 웹사이트는 React와 Vite를 기반으로 개발되었으며, 연구실의 연구 활동, 구성원, 출판물, 뉴스 등의 정보를 제공합니다.

## 데이터 파일 수정 가이드

이 가이드는 웹사이트의 각 페이지에 표시되는 데이터를 수정하는 방법을 설명합니다. 모든 데이터 파일은 `src/data` 폴더 내에 있으며, 각 페이지별로 구분되어 있습니다.

### 목차

1. [홈페이지 데이터](#1-홈페이지-데이터)
2. [연구 분야 데이터](#2-연구-분야-데이터)
3. [구성원 데이터](#3-구성원-데이터)
4. [출판물 데이터](#4-출판물-데이터)
5. [뉴스 데이터](#5-뉴스-데이터)
6. [갤러리 데이터](#6-갤러리-데이터)
7. [연락처 데이터](#7-연락처-데이터)
8. [이미지 파일 관리](#8-이미지-파일-관리)

## 1. 홈페이지 데이터

홈페이지 데이터는 `src/data/Home` 폴더에 있습니다.

### 1.1. 교수 소개 데이터 (`professorData.js`)

홈페이지에 표시되는 교수 소개 정보를 포함합니다.

```javascript
// 수정 예시
export const professorData = {
  name: "교수명",
  title: "직위",
  description: "간략한 소개",
  image: "/images/Home/professor.jpg" // 이미지 경로
};
```

### 1.2. 연구 분야 데이터 (`researchData.js`)

홈페이지에 표시되는 주요 연구 분야 정보를 포함합니다.

```javascript
// 수정 예시
export const researchData = [
  {
    id: 1,
    title: "연구 분야 제목",
    description: "연구 분야 설명",
    image: "/images/Home/research1.jpg",
    link: "/research/fc-ec" // 해당 연구 분야 상세 페이지 링크
  },
  // 추가 연구 분야...
];
```

### 1.3. 출판물 데이터 (`publicationData.js`)

홈페이지에 표시되는 주요 출판물 정보를 포함합니다.

```javascript
// 수정 예시
export const publicationData = [
  {
    id: 1,
    title: "논문 제목",
    journal: "저널명",
    year: "2025",
    image: "/images/Publications/pub1.jpg"
  },
  // 추가 출판물...
];
```

## 2. 연구 분야 데이터

연구 분야 데이터는 `src/data/Research` 폴더에 있습니다.

### 2.1. 연료전지 및 전기화학 (`fcecData.js`)

연료전지 및 전기화학 연구 분야에 대한 정보를 포함합니다.

```javascript
// 수정 예시
export const fcecData = {
  title: "연료전지 및 전기화학",
  description: "연구 분야 상세 설명",
  keyPoints: [
    "주요 연구 내용 1",
    "주요 연구 내용 2"
    // 추가 내용...
  ],
  images: [
    "/images/Research/fcec1.jpg",
    "/images/Research/fcec2.jpg"
    // 추가 이미지...
  ]
};
```

### 2.2. 나노촉매 (`nanocatalystData.js`)

나노촉매 연구 분야에 대한 정보를 포함합니다.

```javascript
// 수정 예시 - fcecData.js와 유사한 구조
export const nanocatalystData = {
  // 내용 구조는 fcecData.js와 동일
};
```

### 2.3. 배터리 기술 (`batteryData.js`)

배터리 기술 연구 분야에 대한 정보를 포함합니다.

```javascript
// 수정 예시 - fcecData.js와 유사한 구조
export const batteryData = {
  // 내용 구조는 fcecData.js와 동일
};
```

## 3. 구성원 데이터

구성원 데이터는 `src/data/Members` 폴더에 있습니다.

### 3.1. 교수 정보 (`Professor.js`)

교수의 상세 정보를 포함합니다.

```javascript
// 수정 예시
export const professorData = { 
  profile: {
    name: "Prof. 이름",
    image: "/images/Members/Professor/profile.jpg",
    contact: {
      tel: "+82-32-000-0000",
      email: "example@inu.ac.kr",
      office: "사무실 위치"
    }
  },
  position: {
    position: "직위 및 소속"
  },
  education: [
    {
      period: "기간",
      degree: "학위",
      institution: "대학명"
    },
    // 추가 학력...
  ],
  career: [
    {
      period: "기간",
      position: "직위",
      institution: "기관명"
    },
    // 추가 경력...
  ],
  publications: {
    featured: [
      "주요 논문 1",
      "주요 논문 2"
      // 추가 주요 논문...
    ],
    byYear: {
      "2025": [
        "2025년 논문 1",
        "2025년 논문 2"
        // 추가 논문...
      ],
      // 추가 연도별 논문...
    }
  },
  researchInterests: [
    "연구 관심사 1",
    "연구 관심사 2"
    // 추가 연구 관심사...
  ]
};
```

### 3.2. 현재 구성원 (`CurrentMembersData.js`)

현재 연구실 구성원 정보를 포함합니다.

```javascript
// 수정 예시
export const currentMembersData = {
  phd: [
    {
      id: 1,
      name: "이름",
      position: "박사과정",
      research: "연구 분야",
      email: "이메일",
      image: "/images/Members/Current/member1.jpg"
    },
    // 추가 박사과정 학생...
  ],
  masters: [
    {
      id: 1,
      name: "이름",
      position: "석사과정",
      research: "연구 분야",
      email: "이메일",
      image: "/images/Members/Current/member2.jpg"
    },
    // 추가 석사과정 학생...
  ],
  // 추가 구성원 카테고리...
};
```

### 3.3. 졸업생 (`AlumniData.js`)

연구실 졸업생 정보를 포함합니다.

```javascript
// 수정 예시
export const alumniData = [
  {
    id: 1,
    name: "이름",
    degree: "학위",
    year: "졸업연도",
    currentPosition: "현재 직위",
    currentAffiliation: "현재 소속"
  },
  // 추가 졸업생...
];
```

## 4. 출판물 데이터

출판물 데이터는 `src/data/Publication/publicationsData.js` 파일에 있습니다.

```javascript
// 수정 예시
export const publicationsData = {
  featured: [
    "주요 논문 1 전체 인용 정보",
    "주요 논문 2 전체 인용 정보"
    // 추가 주요 논문...
  ],
  byYear: {
    "2025": [
      "2025년 논문 1 전체 인용 정보",
      "2025년 논문 2 전체 인용 정보"
      // 추가 논문...
    ],
    "2024": [
      // 2024년 논문 목록...
    ],
    // 추가 연도...
  }
};
```

## 5. 뉴스 데이터

뉴스 데이터는 `src/data/News/newsData.js` 파일에 있습니다.

```javascript
// 수정 예시
export const newsList = [
  {
    id: 1,
    date: "2025.03.15",
    title: "뉴스 제목",
    image: "/images/News/news1.png",
    featured: true, // 주요 뉴스 여부
    category: "publication" // 카테고리 (publication, award, event 등)
  },
  // 추가 뉴스...
];
```

## 6. 갤러리 데이터

갤러리 데이터는 `src/data/Gallery/galleryData.js` 파일에 있습니다.

```javascript
// 수정 예시
const galleryData = [
  {
    year: 2025,
    title: "이미지 제목",
    image: "/images/Gallery/2025/image1.jpg"
  },
  // 추가 갤러리 이미지...
];
export default galleryData;
```

## 7. 연락처 데이터

연락처 데이터는 `src/data/Contact/contactData.js` 파일에 있습니다.

```javascript
// 수정 예시
export const contactData = {
  address: {
    line1: "주소 1줄",
    line2: "주소 2줄",
    line3: "주소 3줄"
  },
  email: "이메일",
  phone: "전화번호",
  mapCoordinates: {
    lat: 37.123456, // 위도
    lng: 126.123456 // 경도
  }
};
```

## 8. 이미지 파일 관리

모든 이미지 파일은 `public/images` 폴더에 저장되어 있으며, 각 섹션별로 하위 폴더로 구분되어 있습니다:

- `/images/Home/` - 홈페이지 이미지
- `/images/Research/` - 연구 분야 이미지
- `/images/Members/` - 구성원 이미지
- `/images/Publications/` - 출판물 관련 이미지
- `/images/News/` - 뉴스 이미지
- `/images/Gallery/` - 갤러리 이미지

### 이미지 추가 방법

1. 적절한 폴더에 이미지 파일을 업로드합니다.
2. 데이터 파일에서 이미지 경로를 `/images/[폴더명]/[파일명]` 형식으로 참조합니다.

## 배포 및 업데이트

### 로컬 개발 환경 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 배포

이 프로젝트는 Vercel을 통해 배포됩니다. 변경사항을 GitHub 저장소에 푸시하면 자동으로 배포가 이루어집니다.

```bash
# 변경사항 커밋
git add .
git commit -m "변경 내용 설명"
git push origin main
```

### 주의사항

1. 내부 페이지 이동 시 일반 `<a>` 태그 대신 React Router의 `<Link>` 컴포넌트를 사용해야 합니다.
2. 이미지 파일 경로는 항상 `/images/` 로 시작해야 합니다.
3. 데이터 파일의 구조를 변경할 경우, 해당 데이터를 사용하는 컴포넌트도 함께 수정해야 합니다.

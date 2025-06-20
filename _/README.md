# Web3 - React 게시판 (web1 + web2 통합)

동티모르 WFK-KAIST ICT 봉사 프로그램을 위한 React 기반 게시판 애플리케이션입니다.
**web1의 Flask 백엔드와 web2의 HTML/CSS 스타일을 React로 통합**한 완성본입니다.

## 프로젝트 구조

```
web3/
├── flask/              # Flask 백엔드 API (web1에서 가져온 코드)
│   ├── app.py          # Flask 서버 (web1과 동일)
│   └── requirements.txt # 의존성 (web1과 동일)
├── react-board/        # React 프론트엔드
│   ├── src/
│   │   ├── components/
│   │   │   ├── PostForm.js    # 게시글 작성/수정 폼
│   │   │   ├── PostForm.css   # 폼 스타일 (web2 스타일)
│   │   │   ├── PostList.js    # 게시글 목록 (테이블 뷰)
│   │   │   └── PostList.css   # 목록 스타일 (web2 스타일)
│   │   ├── App.js             # 메인 앱 컴포넌트
│   │   └── App.css            # 앱 스타일 (web2 스타일)
│   └── package.json
└── README.md           # 사용 설명서
```

## web1 + web2 통합 요소

### web1에서 가져온 요소:
- ✅ **Flask 백엔드 API**: 완전히 동일한 코드
- ✅ **API 엔드포인트**: GET, POST, PUT, DELETE
- ✅ **초기 데이터**: "Hello", "Olá" 게시글
- ✅ **CORS 설정**: 프론트엔드 연동

### web2에서 가져온 요소:
- ✅ **색상 스키마**: #00aaff (파란색), #f9f9f9 (배경)
- ✅ **테이블 스타일**: web2의 테이블 디자인 완전 적용
- ✅ **폼 스타일**: web2의 입력 필드와 버튼 디자인
- ✅ **레이아웃**: web2의 간격과 패딩
- ✅ **폰트**: Arial, sans-serif
- ✅ **전체 디자인**: web2의 원본 스타일 그대로 사용

## 기능

- ✅ 게시글 목록 조회 (web2 테이블 스타일)
- ✅ 새 게시글 작성
- ✅ 게시글 수정
- ✅ 게시글 삭제
- ✅ 반응형 디자인
- ✅ web2 스타일 완전 적용

## 설치 및 실행

### 1. 백엔드 실행 (Flask - web1과 동일)

```bash
cd web3/flask
pip install -r requirements.txt
python app.py
```

Flask 서버가 `http://localhost:5000`에서 실행됩니다.

### 2. 프론트엔드 실행 (React)

```bash
cd web3/react-board
npm install
npm start
```

React 앱이 `http://localhost:3000`에서 실행됩니다.

## API 엔드포인트 (web1과 동일)

- `GET /api/posts` - 모든 게시글 조회
- `POST /api/posts` - 새 게시글 생성
- `PUT /api/posts/{id}` - 게시글 수정
- `DELETE /api/posts/{id}` - 게시글 삭제

## 기술 스택

### 백엔드 (web1과 동일)
- Python Flask
- Flask-CORS

### 프론트엔드 (React + web2 스타일)
- React 18
- CSS3
- Fetch API
- web2의 디자인 시스템

## 주요 특징

1. **web1 백엔드 완전 호환**: Flask API가 web1과 100% 동일
2. **web2 스타일 완전 적용**: 색상, 레이아웃, 폼 스타일 모두 web2 기반
3. **테이블 뷰**: web2의 원본 테이블 스타일 사용
4. **반응형**: 모바일과 데스크톱 모두 지원
5. **완전한 CRUD**: 생성, 읽기, 수정, 삭제 모든 기능 구현

## 개발 환경

- Node.js 16+
- Python 3.8+
- npm 또는 yarn

## 라이센스

동티모르 WFK-KAIST ICT 봉사 프로그램 교육용 
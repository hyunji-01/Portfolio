export const profile = {
  name: '유현지',
  roles: ['FE Developer', 'UI/UX Designer', 'Service Planner'],
  tagline: '기획에서 디자인, 구현까지 사용자 흐름을 끝까지 설계하고 만드는 사람입니다.',
  email: 'rhjkorea@naver.com',
  phone: '010-4071-5356',
  address: '경기도 고양시 일산동구 위드고양로 21',
}

export const about = [
  { highlight: true, text: '서비스 기획, UI/UX 디자인, 프론트엔드 개발을 연결해 실제 화면으로 완성하는 과정을 좋아합니다.' },
  { highlight: false, text: '사용자가 처음 만나는 흐름부터 마지막 액션까지 자연스럽게 이어지는지 계속 확인하며 설계합니다.' },
  { highlight: true, text: 'Figma로 구조와 인터랙션을 정리하고, React와 Salesforce LWC 등으로 화면 구현까지 참여해 왔습니다.' },
  { highlight: false, text: '팀 프로젝트에서는 일정, 역할, Git 작업 규칙을 조율하며 협업이 흔들리지 않도록 돕는 편입니다.' },
  { highlight: false, text: '확인되지 않은 성과보다 실제로 맡았던 역할, 사용한 기술, 배운 점을 명확하게 기록하려고 합니다.' },
]

export const experiences = [
  {
    id: 'dkbmc',
    company: 'DKBMC',
    department: '기업부설연구소',
    period: '2025.10 ~ 재직중',
    current: true,
    tasks: [
      'Salesforce 기반 포털 서비스의 기획, UI/UX 디자인, 프론트엔드 개발에 참여',
      'Figma로 전체 화면 구조와 디자인 시스템을 설계',
      'LWC 중심의 화면 컴포넌트 개발과 일부 백엔드 기능 구현',
      '디자인 가이드라인과 UI 디자인 시스템 문서화',
      '스토어/플레이스용 소개 이미지와 로고 디자인 제작',
      '자사 및 내부 직원 대상 업무 포털 화면 구현',
      'Claude와 MCP 기반 AI 코딩 환경을 활용한 개발 자동화 경험',
    ],
  },
  {
    id: 'sw-contest',
    company: 'SW 공모전',
    department: '',
    period: '2024.02.05',
    current: false,
    award: '우수상',
    tasks: [
      '교내 SW 공모전에 Pure Ticket 프로젝트로 참여',
      '기획, 개발 과정과 결과물을 정리해 제출',
    ],
  },
  {
    id: 'bts',
    company: '디지털 학습공동체 BTS 프로그램',
    department: '',
    period: '2024.01.24',
    current: false,
    award: '장려상',
    tasks: [
      '자기주도 학습과 협업 역량 강화를 위한 프로그램 참여',
      '조원들과 학습 과정, 학습 시간, 결과물을 정리해 제출',
      '꾸준한 학습 과정과 결과를 기록하는 습관 형성',
    ],
  },
  {
    id: 'ict',
    company: '2023 ICT 멘토링',
    department: '',
    period: '2023.03 ~ 2023.10',
    current: false,
    tasks: [
      'ICT 분야 멘토와 팀 프로젝트 진행',
      'ICT 공모전 참여',
      '기획, 제작, 개발, 디자인 유지보수 경험',
      '팀 커뮤니케이션, DB 및 클라우드 인프라 구성 과정 협업 경험',
    ],
  },
  {
    id: 'fullstack',
    company: '대학생 웹 개발 실무 과정',
    department: '코리아IT아카데미',
    period: '2023.03 ~ 2023.10',
    current: false,
    tasks: [
      'Spring Boot 기반 백엔드 API와 React 기반 프론트엔드 UI 구성',
      '팀 프로젝트로 중고거래 웹사이트를 기획부터 개발, 배포까지 진행',
      'DBeaver와 MySQL을 활용한 데이터베이스 설계 및 운영',
      'AWS EC2를 활용한 서비스 배포 환경 구성',
      'GitHub 기반 협업과 버전 관리 경험',
    ],
  },
  {
    id: 'metaverse',
    company: '메타버스 콘텐츠 크리에이터',
    department: '한국고등직업교육학회 / 테마이크로러닝',
    period: '2022.11 ~ 2022.12 / 2023.12 ~ 2024.02',
    current: false,
    award: '2기 자격취득',
    tasks: [
      '버추얼 3D 모델링 제작과 이해',
      '버추얼 캐릭터 모델링 제작',
      '방송 플랫폼과 트래킹 환경에 대한 이해',
    ],
  },
]

export const education = [
  {
    school: '백화여자대학교',
    period: '2020.03 ~ 2025.02',
    departments: [
      { name: '스마트IT학과', desc: 'PHP 기반 웹 개발 프로젝트와 Java 기반 데이터베이스 연동 프로그램 개발' },
      { name: '소프트웨어융합학과 전공심화 과정', desc: 'Django 프레임워크를 활용한 GUI 프로그램 설계 및 구현. 성적 우수 장학금 수혜(2024.08)' },
    ],
  },
  {
    school: '코리아IT아카데미',
    period: '2021.11 ~ 2022.05',
    departments: [
      { name: 'DB · Python · Java', desc: '객체지향 프로그래밍 개념, 데이터 구조와 알고리즘 기초 학습' },
    ],
  },
  {
    school: 'SBS 컴퓨터아트아카데미',
    period: '2021.03 ~ 2021.05',
    departments: [
      { name: 'Java · C언어', desc: '프로그래밍의 기본 원리와 객체지향 프로그래밍 개념 학습' },
    ],
  },
]

export const stacks = {
  Frontend: ['HTML', 'CSS / SCSS', 'JavaScript (ES6+)', 'React.js'],
  Backend: ['Spring', 'Spring Boot', 'Python', 'Django'],
  Database: ['MySQL', 'DBeaver'],
  Design: ['Figma', 'Adobe XD'],
  Tools: ['Git', 'GitHub', 'AWS EC2', 'Salesforce / LWC', 'VS Code', 'IntelliJ', 'PyCharm'],
}

export const projects = [
  {
    id: 'pure-ticket',
    num: '01',
    title: 'Pure Ticket',
    subtitle: '공정한 티켓 예매 플랫폼',
    type: '개발',
    desc: 'CAPTCHA와 좌석 색상 랜덤화를 통해 매크로 예매 문제를 줄이는 방향으로 설계한 티켓 예매 프로젝트입니다.',
    tags: ['PHP', 'MySQL', 'Toss API', 'Naver CAPTCHA'],
    achievements: ['교내 SW 공모전 우수상', 'ICT 공모전 본선 진출', '캡스톤디자인 A+'],
    color: '#6B9DD1',
  },
  {
    id: 'catch-the-fish',
    num: '02',
    title: 'Catch The Fish',
    subtitle: '레트로 낚시 게임',
    type: '개발',
    desc: 'Pygame으로 만든 2D 낚시 게임입니다. 캐릭터, 물고기, 배경 그래픽을 직접 제작하고 레벨과 아이템을 구현했습니다.',
    tags: ['Python', 'Pygame', 'Pixel Art'],
    achievements: [],
    color: '#8b6cf5',
  },
  {
    id: 'jikpick',
    num: '03',
    title: 'JIKPICK',
    subtitle: '직접 픽업 중고거래 플랫폼',
    type: '개발',
    desc: '위치 기반 직거래 지점 추천과 상품 CRUD를 구현한 중고거래 웹 프로젝트입니다.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Kakao Map API'],
    achievements: ['예정 기한 내 마감', 'Git 협업 규칙 정립'],
    color: '#10b981',
  },
  {
    id: 'artiwish',
    num: '04',
    title: 'ARTIWISH',
    subtitle: '아티스트 전시 후원 플랫폼',
    type: 'UI/UX',
    desc: '아티스트와 팬을 연결하는 전시 후원 서비스를 기획하고 Figma로 UI/UX를 설계한 프로젝트입니다.',
    tags: ['Figma', 'UI/UX', 'Service Planning'],
    achievements: [],
    color: '#f59e0b',
  },
  {
    id: 'gongcha-redesign',
    num: '05',
    title: '공차 리디자인',
    subtitle: 'UI/UX 서비스 리디자인',
    type: 'UI/UX',
    desc: '더블 다이아몬드 프로세스로 문제를 정의하고 Figma 프로토타입까지 제작한 리디자인 프로젝트입니다.',
    tags: ['Figma', 'UX Research', 'Prototyping'],
    achievements: [],
    color: '#ec4899',
  },
  {
    id: 'gachwitgayop',
    num: '06',
    title: '가취가욥',
    subtitle: '여행 플래너 앱 UI 설계',
    type: '기획',
    desc: 'MBTI 기반 여행지 추천과 예상 경비 계산 흐름을 담은 여행 앱 UI/UX 기획 프로젝트입니다.',
    tags: ['Adobe XD', 'UI Design', 'Prototyping'],
    achievements: [],
    color: '#06b6d4',
  },
  {
    id: 'dkbmc-portal',
    num: '07',
    title: 'DKBMC 포털',
    subtitle: 'Salesforce B2B 업무 포털',
    type: '실무',
    desc: 'Salesforce 기반 B2B 포털 프로젝트에서 기획, 디자인 시스템, LWC 화면 구현에 참여했습니다.',
    tags: ['Salesforce', 'LWC', 'Apex', 'Figma', 'D3.js'],
    achievements: ['136개 LWC 컴포넌트', '30+ 화면 구현', '13주 개발'],
    color: '#f9ba15',
  },
]

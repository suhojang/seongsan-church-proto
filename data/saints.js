// 주보 성인 데이터: 한국 103위 순교 성인 목록 · 통계와 특징 · 심볼마크 설명 (www.103.or.kr 이미지 게시물을 글로 옮김, 2026-11-23)
// 출처: 주보성인(pid=169, https://www.103.or.kr/main/page.html?pid=169), 로고소개(pid=170, https://www.103.or.kr/main/page.html?pid=170, 심볼마크 문단만 옮기고 무단 사용 금지 안내와 로고 이미지는 뺌)
// 한국어는 인쇄된 그대로 옮겼다. 다만 화면에 그대로 보이면 안 되는 오기(여성 세 분의 「성」, 1893년, 민극기 등)와 띄어쓰기는 바로잡았다(questions 첫 항목). 나머지 고칠 만한 곳은 questions 에 적었다.
// 영문 성인 이름: 용어집(data/glossary.js)의 CBCK 표기 원칙을 따라 옛 CBCK 영문 사이트의 103위 목록에서 번호·세례명으로 하나씩 맞추어 옮겼다.
//   https://web.archive.org/web/2019/http://english.cbck.or.kr/?mid=Saints103 (1–44번은 성인별 게시물 제목, 45–103번은 목록 페이지)
//   https://www.cbck.or.kr/en/CatholicChurchInKorea/103-Korean-Martyr-Saints (현행 목록, 번호 순서가 같음. 31–103번 표기가 같고 1–30번은 국어의 로마자 표기법으로 바뀜. 전기로 친족 관계를 확인)
//   CBCK의 라틴어 세례명은 영어 형태로(Andreas → Andrew), 프랑스 선교사는 프랑스어 이름으로(Laurentius Imbert → Laurent Imbert) 썼다. 103명 모두 출처에서 찾았다.
// 필드: saints[].no 번호, title 성/성녀(인쇄된 그대로), name 한국 이름(선교사는 한국식 성 한 글자), hanja 한자(인쇄된 경우만), baptismal 세례명,
//   frenchKo 프랑스 성의 한글 표기, latin 괄호 안 로마자 성(인쇄된 그대로), role 주교/신부(인쇄된 경우만), en 영문 이름.
//   facts[] 통계와 특징 단락(title, body 단락 배열), symbol 심볼마크 설명, sources 출처, questions 본당 확인이 필요한 것. 영문은 각 항목의 en 에 둔다.
// 로컬 파일로 열리도록 fetch 대신 전역 변수로 둔다.
window.SAINTS = {
 "title": "한국 103위 순교 성인",
 "intro": [
  "본당의 주보성인은 첫 한국인 성인, 그것도 103명이 한꺼번에 성인으로 된 이 땅에 103위 순교성인을 주보성인으로 모시며, 천주만을 위한 고귀한 생애를 본받기로 했다."
 ],
 "en": {
  "title": "The 103 Korean Martyr Saints",
  "intro": [
   "Our parish is under the patronage of the 103 Korean Martyr Saints. They were the first Korean saints, and all 103 were canonized together, here on Korean soil. We honor them as our patrons and strive to follow their noble lives, lived for God alone."
  ]
 },
 "saints": [
  {"no": 1, "title": "성", "name": "김대건", "hanja": "金大建", "baptismal": "안드레아", "en": "St. Andrew Kim Tae-gon, Priest", "role": "신부"},
  {"no": 2, "title": "성", "name": "정하상", "hanja": "丁夏祥", "baptismal": "바오로", "en": "St. Paul Chong Ha-sang"},
  {"no": 3, "title": "성", "name": "이호영", "baptismal": "베드로", "en": "St. Peter Yi Ho-yong"},
  {"no": 4, "title": "성", "name": "정국보", "baptismal": "프로타시오", "en": "St. Protase Chong Kuk-bo"},
  {"no": 5, "title": "성녀", "name": "김아기", "baptismal": "아가타", "en": "St. Agatha Kim A-gi"},
  {"no": 6, "title": "성녀", "name": "박아기", "baptismal": "안나", "en": "St. Anna Pak A-gi"},
  {"no": 7, "title": "성녀", "name": "이소사", "baptismal": "아가타", "en": "St. Agatha Yi So-sa"},
  {"no": 8, "title": "성녀", "name": "김업이", "hanja": "金業伊", "baptismal": "막달레나", "en": "St. Magdalene Kim Ob-i"},
  {"no": 9, "title": "성", "name": "이광헌", "hanja": "李光獻", "baptismal": "아우구스티노", "en": "St. Augustine Yi Kwang-hon"},
  {"no": 10, "title": "성녀", "name": "한아기", "baptismal": "바르바라", "en": "St. Barbara Han A-gi"},
  {"no": 11, "title": "성녀", "name": "박희순", "hanja": "朴喜順", "baptismal": "루치아", "en": "St. Lucy Pak Hui-sun"},
  {"no": 12, "title": "성", "name": "남명혁", "hanja": "南明赫", "baptismal": "다미아노", "en": "St. Damian Nam Myong-hyog"},
  {"no": 13, "title": "성", "name": "권득인", "hanja": "權得仁", "baptismal": "베드로", "en": "St. Peter Kwon Tug-in"},
  {"no": 14, "title": "성", "name": "장성집", "baptismal": "요셉", "en": "St. Joseph Chang Song-jib"},
  {"no": 15, "title": "성녀", "name": "김", "baptismal": "바르바라", "en": "St. Barbara Kim"},
  {"no": 16, "title": "성녀", "name": "이", "baptismal": "바르바라", "en": "St. Barbara Yi"},
  {"no": 17, "title": "성녀", "name": "김", "baptismal": "로사", "en": "St. Rosa Kim"},
  {"no": 18, "title": "성녀", "name": "김성임", "hanja": "金成任", "baptismal": "마르타", "en": "St. Martha Kim Song-im"},
  {"no": 19, "title": "성녀", "name": "이매임", "hanja": "李梅任", "baptismal": "데레사", "en": "St. Teresa Yi Mae-im"},
  {"no": 20, "title": "성녀", "name": "김장금", "hanja": "金長金", "baptismal": "안나", "en": "St. Anna Kim Chang-gum"},
  {"no": 21, "title": "성", "name": "이광렬", "hanja": "李光烈", "baptismal": "요한", "en": "St. John Baptist Yi Kwang-nyol"},
  {"no": 22, "title": "성녀", "name": "이영희", "hanja": "李英喜", "baptismal": "막달레나", "en": "St. Magdalene Yi Yong-hui"},
  {"no": 23, "title": "성녀", "name": "김", "baptismal": "루치아", "en": "St. Lucy Kim"},
  {"no": 24, "title": "성녀", "name": "원귀임", "hanja": "元貴任", "baptismal": "마리아", "en": "St. Mary Won Kwi-im"},
  {"no": 25, "title": "성녀", "name": "박큰아기", "baptismal": "마리아", "en": "St. Mary Pak Kun-a-gi"},
  {"no": 26, "title": "성녀", "name": "권희", "hanja": "權喜", "baptismal": "바르바라", "en": "St. Barbara Kwon Hui"},
  {"no": 27, "title": "성", "name": "박후재", "hanja": "朴厚載", "baptismal": "요한", "en": "St. John Pak Hu-jae"},
  {"no": 28, "title": "성녀", "name": "이정희", "hanja": "李貞喜", "baptismal": "바르바라", "en": "St. Barbara Yi Chong-hui"},
  {"no": 29, "title": "성녀", "name": "이연희", "hanja": "李連熙", "baptismal": "마리아", "en": "St. Mary Yi Yon-hui"},
  {"no": 30, "title": "성녀", "name": "김효주", "hanja": "金孝珠", "baptismal": "아녜스", "en": "St. Agnes Kim Hyo-ju"},
  {"no": 31, "title": "성", "name": "최경환", "hanja": "崔京煥", "baptismal": "프란치스코", "en": "St. Francis Choe Kyong-hwan"},
  {"no": 32, "title": "성", "name": "범", "baptismal": "라우렌시오", "frenchKo": "앵베르", "latin": "Imbert", "role": "주교", "en": "St. Laurent Imbert, Bishop"},
  {"no": 33, "title": "성", "name": "나", "baptismal": "베드로", "frenchKo": "모방", "latin": "Maubant", "role": "신부", "en": "St. Pierre Maubant, Priest"},
  {"no": 34, "title": "성", "name": "정", "baptismal": "야고보", "frenchKo": "샤스탕", "latin": "Chastan", "role": "신부", "en": "St. Jacques Chastan, Priest"},
  {"no": 35, "title": "성", "name": "유진길", "hanja": "劉進吉", "baptismal": "아우구스티노", "en": "St. Augustine Yu Chin-gil"},
  {"no": 36, "title": "성녀", "name": "허계임", "hanja": "許季任", "baptismal": "막달레나", "en": "St. Magdalene Ho Kye-im"},
  {"no": 37, "title": "성", "name": "남이관", "hanja": "南履灌", "baptismal": "세바스티아노", "en": "St. Sebastian Nam I-gwan"},
  {"no": 38, "title": "성녀", "name": "김", "baptismal": "율리에타", "en": "St. Julietta Kim"},
  {"no": 39, "title": "성녀", "name": "전경협", "hanja": "全敬俠", "baptismal": "아가타", "en": "St. Agatha Chon Kyong-hyob"},
  {"no": 40, "title": "성", "name": "조신철", "hanja": "趙信喆", "baptismal": "가롤로", "en": "St. Charles Cho Shin-chol"},
  {"no": 41, "title": "성", "name": "김제준", "hanja": "金濟俊", "baptismal": "이냐시오", "en": "St. Ignatius Kim Che-jun"},
  {"no": 42, "title": "성녀", "name": "박봉손", "hanja": "朴鳳孫", "baptismal": "막달레나", "en": "St. Magdalene Pak Pong-son"},
  {"no": 43, "title": "성녀", "name": "홍금주", "hanja": "洪今珠", "baptismal": "페르페투아", "en": "St. Perpetua Hong Kum-ju"},
  {"no": 44, "title": "성녀", "name": "김효임", "hanja": "金孝任", "baptismal": "골룸바", "en": "St. Columba Kim Hyo-im"},
  {"no": 45, "title": "성녀", "name": "김", "baptismal": "루치아", "en": "St. Lucy Kim"},
  {"no": 46, "title": "성녀", "name": "이", "baptismal": "가타리나", "en": "St. Catherine Yi"},
  {"no": 47, "title": "성녀", "name": "조", "baptismal": "막달레나", "en": "St. Magdalene Cho"},
  {"no": 48, "title": "성", "name": "유대철", "hanja": "劉大喆", "baptismal": "베드로", "en": "St. Peter Yu Tae-chol"},
  {"no": 49, "title": "성녀", "name": "유소사", "hanja": "柳召史", "baptismal": "체칠리아", "en": "St. Cecilia Yu So-sa"},
  {"no": 50, "title": "성", "name": "최창흡", "hanja": "崔昌洽", "baptismal": "베드로", "en": "St. Peter Choe Chang-hub"},
  {"no": 51, "title": "성녀", "name": "조증이", "hanja": "趙曾伊", "baptismal": "바르바라", "en": "St. Barbara Cho Chung-i"},
  {"no": 52, "title": "성녀", "name": "한영이", "hanja": "韓榮伊", "baptismal": "막달레나", "en": "St. Magdalene Han Yong-i"},
  {"no": 53, "title": "성녀", "name": "현경련", "hanja": "玄敬連", "baptismal": "베네딕타", "en": "St. Benedicta Hyon Kyong-nyon"},
  {"no": 54, "title": "성녀", "name": "정정혜", "hanja": "丁情惠", "baptismal": "엘리사벳", "en": "St. Elizabeth Chong Chong-hye"},
  {"no": 55, "title": "성녀", "name": "고순이", "hanja": "高順伊", "baptismal": "바르바라", "en": "St. Barbara Ko Sun-i"},
  {"no": 56, "title": "성녀", "name": "이영덕", "hanja": "李榮德", "baptismal": "막달레나", "en": "St. Magdalene Yi Yong-dog"},
  {"no": 57, "title": "성녀", "name": "김", "baptismal": "데레사", "en": "St. Teresa Kim"},
  {"no": 58, "title": "성녀", "name": "이", "baptismal": "아가타", "en": "St. Agatha Yi"},
  {"no": 59, "title": "성", "name": "민극가", "baptismal": "스테파노", "en": "St. Stephen Min Kuk-ka"},
  {"no": 60, "title": "성", "name": "정화경", "baptismal": "안드레아", "en": "St. Andrew Chong Hwa-gyong"},
  {"no": 61, "title": "성", "name": "허협", "baptismal": "바오로", "en": "St. Paul Ho Hyob"},
  {"no": 62, "title": "성", "name": "박종원", "hanja": "朴宗源", "baptismal": "아우구스티노", "en": "St. Augustine Pak Chong-won"},
  {"no": 63, "title": "성", "name": "홍병주", "hanja": "洪秉周", "baptismal": "베드로", "en": "St. Peter Hong Pyong-ju"},
  {"no": 64, "title": "성녀", "name": "손소벽", "hanja": "孫小碧", "baptismal": "막달레나", "en": "St. Magdalene Son So-byog"},
  {"no": 65, "title": "성녀", "name": "이경이", "hanja": "李瓊伊", "baptismal": "아가타", "en": "St. Agatha Yi Kyong-i"},
  {"no": 66, "title": "성녀", "name": "이인덕", "hanja": "李仁德", "baptismal": "마리아", "en": "St. Mary Yi In-dog"},
  {"no": 67, "title": "성녀", "name": "권진이", "hanja": "權珍伊", "baptismal": "아가타", "en": "St. Agatha Kwon Chin-i"},
  {"no": 68, "title": "성", "name": "홍영주", "hanja": "洪永周", "baptismal": "바오로", "en": "St. Paul Hong Yong-ju"},
  {"no": 69, "title": "성", "name": "이문우", "hanja": "李文祐", "baptismal": "요한", "en": "St. John Yi Mun-u"},
  {"no": 70, "title": "성녀", "name": "최영이", "hanja": "崔榮伊", "baptismal": "바르바라", "en": "St. Barbara Choe Yong-i"},
  {"no": 71, "title": "성", "name": "김성우", "hanja": "金星禹", "baptismal": "안토니오", "en": "St. Anthony Kim Song-u"},
  {"no": 72, "title": "성", "name": "현석문", "hanja": "玄錫文", "baptismal": "가롤로", "en": "St. Charles Hyon Song-mun"},
  {"no": 73, "title": "성", "name": "남경문", "hanja": "南景文", "baptismal": "베드로", "en": "St. Peter Nam Kyong-mun"},
  {"no": 74, "title": "성", "name": "한이형", "hanja": "韓履亨", "baptismal": "라우렌시오", "en": "St. Lawrence Han I-hyong"},
  {"no": 75, "title": "성녀", "name": "우술임", "hanja": "禹述任", "baptismal": "수산나", "en": "St. Susanna U Sur-im"},
  {"no": 76, "title": "성", "name": "임치백", "hanja": "林致百", "baptismal": "요셉", "en": "St. Joseph Im Chi-baeg"},
  {"no": 77, "title": "성녀", "name": "김임이", "hanja": "金任伊", "baptismal": "데레사", "en": "St. Teresa Kim Im-i"},
  {"no": 78, "title": "성녀", "name": "이간난", "baptismal": "아가타", "en": "St. Agatha Yi Kan-nan"},
  {"no": 79, "title": "성녀", "name": "정철염", "hanja": "鄭鐵艶", "baptismal": "가타리나", "en": "St. Catherine Chong Chor-yom"},
  {"no": 80, "title": "성", "name": "유정률", "hanja": "劉正律", "baptismal": "베드로", "en": "St. Peter Yu Chong-nyul"},
  {"no": 81, "title": "성", "name": "장", "baptismal": "시므온", "frenchKo": "베르뇌", "latin": "Berneux", "role": "주교", "en": "St. Siméon Berneux, Bishop"},
  {"no": 82, "title": "성", "name": "백", "baptismal": "유스토", "frenchKo": "브르트니에르", "latin": "Bretenieres", "role": "신부", "en": "St. Just Ranfer de Bretenières, Priest"},
  {"no": 83, "title": "성", "name": "김", "baptismal": "헨리코", "frenchKo": "도리", "latin": "Dorie", "role": "신부", "en": "St. Henri Dorie, Priest"},
  {"no": 84, "title": "성", "name": "서", "baptismal": "루도비코", "frenchKo": "볼리외", "latin": "Beaulieu", "role": "신부", "en": "St. Louis Beaulieu, Priest"},
  {"no": 85, "title": "성", "name": "남종삼", "hanja": "南鍾三", "baptismal": "요한", "en": "St. John Baptist Nam Chong-sam"},
  {"no": 86, "title": "성", "name": "전장운", "hanja": "全長雲", "baptismal": "요한", "en": "St. John Baptist Chon Chang-un"},
  {"no": 87, "title": "성", "name": "최형", "hanja": "崔炯", "baptismal": "베드로", "en": "St. Peter Choe Hyong"},
  {"no": 88, "title": "성", "name": "정의배", "hanja": "丁義培", "baptismal": "마르코", "en": "St. Mark Chong Ui-bae"},
  {"no": 89, "title": "성", "name": "우세영", "hanja": "禹世英", "baptismal": "알렉시오", "en": "St. Alexius U Se-yong"},
  {"no": 90, "title": "성", "name": "안", "baptismal": "안토니오", "frenchKo": "다블뤼", "latin": "Daveluy", "role": "주교", "en": "St. Antoine Daveluy, Bishop"},
  {"no": 91, "title": "성", "name": "민", "baptismal": "루가", "frenchKo": "위앵", "latin": "Huin", "role": "신부", "en": "St. Luc Huin, Priest"},
  {"no": 92, "title": "성", "name": "오", "baptismal": "베드로", "frenchKo": "오매트르", "latin": "Aumaitre", "role": "신부", "en": "St. Pierre Aumaître, Priest"},
  {"no": 93, "title": "성", "name": "장주기", "hanja": "張周基", "baptismal": "요셉", "en": "St. Joseph Chang Chu-gi"},
  {"no": 94, "title": "성", "name": "황석두", "hanja": "黃錫斗", "baptismal": "루가", "en": "St. Luke Hwang Sok-tu"},
  {"no": 95, "title": "성", "name": "손자선", "baptismal": "토마스", "en": "St. Thomas Son Cha-son"},
  {"no": 96, "title": "성", "name": "정문호", "baptismal": "바르톨로메오", "en": "St. Bartholomew Chong Mun-ho"},
  {"no": 97, "title": "성", "name": "조화서", "baptismal": "베드로", "en": "St. Peter Cho Hwa-so"},
  {"no": 98, "title": "성", "name": "손선지", "baptismal": "베드로", "en": "St. Peter Son Son-ji"},
  {"no": 99, "title": "성", "name": "이명서", "baptismal": "베드로", "en": "St. Peter Yi Myong-so"},
  {"no": 100, "title": "성", "name": "한재권", "baptismal": "요셉", "en": "St. Joseph Han Chae-kwon"},
  {"no": 101, "title": "성", "name": "정원지", "baptismal": "베드로", "en": "St. Peter Chong Won-ji"},
  {"no": 102, "title": "성", "name": "조윤호", "baptismal": "요셉", "en": "St. Joseph Cho Yun-ho"},
  {"no": 103, "title": "성", "name": "이윤일", "hanja": "李尹一", "baptismal": "요한", "en": "St. John Yi Yun-il"}
 ],
 "facts": [
  {
   "title": "남녀",
   "body": [
    "남성 56명, 여성 47명으로 거의 반반이며, 박해시대가 남성 중심의 유교 사회라는 점을 감안한다면 사회적 지위가 극히 낮았던 여성이 절반 가까이를 차지한다는 것은 주목할 만하다. 남녀를 차별하지 않는 그리스도교 가르침이 천대받던 여성들에게 커다란 영향을 끼쳤음을 보여주는 결과라고 볼 수 있다."
   ],
   "en": {
    "title": "Men and Women",
    "body": [
     "The 103 saints are 56 men and 47 women, almost an even split. In the age of persecution, Korea was a male-dominated Confucian society in which women had very low social standing, so it is striking that women make up nearly half. It shows how deeply the Christian teaching, which makes no distinction between men and women, touched women who had long been looked down on."
    ]
   }
  },
  {
   "title": "연령대",
   "body": [
    "△10대 3명 △20대 18명 △30대 22명 △40대 26명 △50대 25명 △60대 6명 △70대 3명으로, 40~50대가 가장 많다. 최연소자는 13살에 순교한 유대철(베드로) 성인이며, 최연장자는 정하상(바오로)의 어머니 유소사(체칠리아)로 79살에 옥사했다."
   ],
   "en": {
    "title": "Ages",
    "body": [
     "At the time of their deaths, 3 were in their teens, 18 in their 20s, 22 in their 30s, 26 in their 40s, 25 in their 50s, 6 in their 60s, and 3 in their 70s, so most were in their 40s and 50s. The youngest was St. Peter Yu Tae-chol, martyred at 13. The oldest was St. Cecilia Yu So-sa, the mother of St. Paul Chong Ha-sang, who died in prison at 79."
    ]
   }
  },
  {
   "title": "성직자와 평신도",
   "body": [
    "성직자는 11명. 따라서 평신도는 92명이다. 성직자 가운데 주교는 앵베르(조선교구 제2대 교구장) · 베르뇌(제4대 교구장) · 다블뤼(제5대 교구장) 주교 등 3명. 사제는 모방 · 샤스탕 · 브르트니에르 · 도리 · 볼리외 · 위앵 · 오매트르 · 김대건 신부 등이며, 김대건 신부를 제외한 성직자 10명은 모두 파리외방전교회 소속 선교사들이다."
   ],
   "en": {
    "title": "Clergy and Laity",
    "body": [
     "Eleven of the saints were clergy, and the other 92 were laypeople. Three were bishops: Imbert, the second Vicar Apostolic of Korea, Berneux, the fourth, and Daveluy, the fifth. The priests were Fathers Maubant, Chastan, de Bretenières, Dorie, Beaulieu, Huin, Aumaître, and Andrew Kim Tae-gon. Apart from Fr. Kim, all ten clergy were missionaries of the Paris Foreign Missions Society."
    ]
   }
  },
  {
   "title": "직업",
   "body": [
    "양반과 중인, 평민을 아우르는 한국 순교성인들 직업은 매우 다양하다. 관리는 남종삼(요한) 등 4명이며, 유진길(아우구스티노) · 조신철(가롤로)은 역관이다. 농부 전장운(요한)과 목수 최형(베드로)은 교회서적 출판에 참여했으며, 민극가(스테파노)는 교회서적을 판매하는 일에 종사했다. 권득인(베드로)은 성물공이며, 박후재(요한)와 유정률(베드로)은 짚신장사꾼이다. 조신철(가롤로)은 중국을 오가는 동지사 마부였으며, 남경문(베드로) · 허협(바오로)은 군인 출신. 나머지는 대부분 상인과 농부이다.",
    "신학생으로는 정하상(바오로)과 이문우(요한)가 있었으며, 교회 활동에 열심히 참여했던 '회장'은 남명혁(다미아노) · 이호영(베드로) 등 모두 27명이다. 이 가운데는 삯바느질로 생계를 이어갔던 중인 계급의 여성 회장 현경련(베네딕타)도 있었다. 여성 중에는 동정녀 15명, 궁녀 3명, 과부 17명, 젖먹이가 딸린 어머니가 4명 있다.",
    "순교자들 신분과 직업이 이처럼 다양한 이유는 모든 인간은 하느님 앞에서 평등하다는 그리스도교 복음에 따라 남녀노소, 신분의 귀천을 떠나 수많은 이들이 그리스도교에 귀의했기 때문이다. 엄격한 신분사회였던 당시에 이 같은 교리는 폭발적 반향을 불러일으키기에 충분했다."
   ],
   "en": {
    "title": "Occupations",
    "body": [
     "The Korean martyr saints came from every class, from the yangban nobility and the jungin middle class to the commoners, and their occupations were remarkably varied. Four were government officials, among them John Baptist Nam Chong-sam, and Augustine Yu Chin-gil and Charles Cho Shin-chol were interpreters. John Baptist Chon Chang-un, a farmer, and Peter Choe Hyong, a carpenter, helped publish Church books, and Stephen Min Kuk-ka made his living selling them. Peter Kwon Tug-in made religious articles, while John Pak Hu-jae and Peter Yu Chong-nyul sold straw sandals. Charles Cho Shin-chol also worked as a groom for the winter embassy that traveled to and from China, and Peter Nam Kyong-mun and Paul Ho Hyob had been soldiers. Most of the rest were merchants and farmers.",
     "Two were seminarians, Paul Chong Ha-sang and John Yi Mun-u. Twenty-seven were catechists (hoejang), lay leaders who devoted themselves to the life of the Church, among them Damian Nam Myong-hyog and Peter Yi Ho-yong. One of them was a woman of the jungin class, Benedicta Hyon Kyong-nyon, who supported herself by taking in sewing. Among the women were 15 who had consecrated their virginity to God, 3 former court ladies, 17 widows, and 4 mothers with nursing infants.",
     "The martyrs came from such varied backgrounds because the Gospel teaches that all people are equal before God, and so great numbers of people, men and women, young and old, high-born and low-born alike, embraced the Christian faith. In the rigid class society of the day, such a teaching was bound to make an explosive impact."
    ]
   }
  },
  {
   "title": "친족 관계",
   "body": [
    "친족관계에 있는 순교자들이 많다는 것이 103위 순교성인의 대표적 특징이다. 103위 가운데 45명(18가구)이 한 핏줄로 얽힌 관계.",
    "▲아버지와 아들(父子)=김제준(이냐시오)과 김대건 신부, 유진길(아우구스티노) · 유대철(베드로), 조화서(베드로) · 조윤호(요셉) 등이 있으며, 김 데레사는 김대건 신부의 당고모(아버지의 사촌 자매)가 된다.",
    "▲어머니와 딸(母女)=이 가타리나와 조 막달레나, 권진이(아가타) · 한영이(막달레나)가 있다. 이광헌(아우구스티노)은 권희(바르바라,아내)와 이광렬(요한,동생) 그리고 이 아가타(딸)와 일가를, 정하상(바오로)은 유소사(체칠리아,어머니) · 정정혜(엘리사벳,동생)와 일가를 이루고 있다.",
    "▲부부(夫婦)=남명혁(다미아노) · 이연희(마리아), 박종원(아우구스티노) · 고순이(바르바라), 최창흡(베드로) · 손소벽(막달레나), 조신철(가롤로) · 최영이(바르바라) 등이 있으며, 조신철은 최창흡의 사위다.",
    "▲형제 · 자매=홍병주(베드로) · 홍영주(바오로)가 형제 성인이며, 박희순(루치아) · 박큰아기(마리아), 김효주(아녜스) · 김효임(골룸바), 이영덕(막달레나) · 이인덕(마리아)이 자매이다.",
    "이밖에도 이호영(베드로)과 이 아가타, 현경련(베네딕타) · 현석문(가롤로)이 남매 사이며, 이정희(바르바라)는 어머니 허계임(막달레나)과 고모 이매임(데레사), 동생 이영희(막달레나), 조카 이 바르바라와 함께 1839년 기해박해 때 순교해 모두 성인품에 올랐다."
   ],
   "en": {
    "title": "Family Ties",
    "body": [
     "A defining feature of the 103 Korean Martyr Saints is how many of them were related. Forty-five of the 103, from 18 families, were bound to one another by family ties.",
     "Fathers and sons: Ignatius Kim Che-jun and Fr. Andrew Kim Tae-gon, Augustine Yu Chin-gil and Peter Yu Tae-chol, and Peter Cho Hwa-so and Joseph Cho Yun-ho. Teresa Kim was a cousin of Fr. Andrew Kim Tae-gon’s father.",
     "Mothers and daughters: Catherine Yi and Magdalene Cho, and Magdalene Han Yong-i and Agatha Kwon Chin-i. Augustine Yi Kwang-hon was martyred with his wife Barbara Kwon Hui, his younger brother John Baptist Yi Kwang-nyol, and his daughter Agatha Yi, and Paul Chong Ha-sang with his mother Cecilia Yu So-sa and his younger sister Elizabeth Chong Chong-hye.",
     "Husbands and wives: Damian Nam Myong-hyog and Mary Yi Yon-hui, Augustine Pak Chong-won and Barbara Ko Sun-i, Peter Choe Chang-hub and Magdalene Son So-byog, and Charles Cho Shin-chol and Barbara Choe Yong-i. Charles Cho Shin-chol was the son-in-law of Peter Choe Chang-hub.",
     "Brothers and sisters: Peter Hong Pyong-ju and Paul Hong Yong-ju were brothers, and Lucy Pak Hui-sun and Mary Pak Kun-a-gi, Agnes Kim Hyo-ju and Columba Kim Hyo-im, and Magdalene Yi Yong-dog and Mary Yi In-dog were sisters.",
     "Peter Yi Ho-yong and Agatha Yi So-sa were brother and sister, as were Benedicta Hyon Kyong-nyon and Charles Hyon Song-mun. Barbara Yi Chong-hui died in the Kihae Persecution of 1839 together with her mother Magdalene Ho Kye-im, her aunt Teresa Yi Mae-im, her younger sister Magdalene Yi Yong-hui, and her niece Barbara Yi, and all of them were canonized."
    ]
   }
  },
  {
   "title": "순교 시기",
   "body": [
    "순교성인들은 모두 기해(1839년) · 병오(1846년) · 병인박해(1866년) 때 순교했다. 박해가 탄생시킨 성인 수는 순서대로 70명, 9명, 24명.",
    "헌종 5년에 일어난 기해박해는 신유박해(1801년) 이후 대규모 박해였다. 풍양 조씨가 안동 김씨에게서 권력을 탈취하려고 일으킨 기해박해로 정하상과 유진길, 조신철 등 평신도 지도자들과 앵베르 주교를 비롯한 모방 · 샤스탕 신부 등이 순교했다.",
    "병오박해는 1846년 6월 5일 김대건 신부 체포를 계기로 일어났다. 김대건 신부와 함께 현석문 · 남경문 · 한이형 · 우술임 등 평신도 8명이 목숨을 잃었다. 흥선대원군이 일으킨 병인박해는 1866년부터 1871년까지 5년간 이어졌다. 이 박해 때 베르뇌 주교와 다블뤼 주교를 비롯한 프랑스 선교사 9명과 평신도 8000여명이 순교했다."
   ],
   "en": {
    "title": "The Persecutions",
    "body": [
     "All of the martyr saints died in three persecutions: the Kihae Persecution (1839), the Pyong-o Persecution (1846), and the Pyong-in Persecution (1866). These persecutions gave the Church 70, 9, and 24 saints respectively.",
     "The Kihae Persecution, which broke out in the fifth year of King Heonjong’s reign, was the first large-scale persecution since the Sinyu Persecution of 1801. It was launched by the Pungyang Jo clan in a bid to seize power from the Andong Kim clan. Lay leaders such as Paul Chong Ha-sang, Augustine Yu Chin-gil, and Charles Cho Shin-chol were martyred, along with Bishop Imbert and Fathers Maubant and Chastan.",
     "The Pyong-o Persecution was set off by the arrest of Fr. Andrew Kim Tae-gon on June 5, 1846. Eight laypeople lost their lives with him, among them Charles Hyon Song-mun, Peter Nam Kyong-mun, Lawrence Han I-hyong, and Susanna U Sur-im. The Pyong-in Persecution, launched by the regent Heungseon Daewongun, lasted five years, from 1866 to 1871. Nine French missionaries, including Bishop Berneux and Bishop Daveluy, and more than 8,000 laypeople were martyred in it."
    ]
   }
  },
  {
   "title": "순교 형태",
   "body": [
    "군문효수(16명), 참수(60명), 교수(15명), 장사(3명), 옥사(9명) 등 다양하다.",
    "목을 베어 군문에 높이 매다는 군문효수는 대역죄인에게 행하는 것으로, 성직자 11명은 모두 군문효수로 순교했다. 주로 서울 새남터와 충남 갈매못에서 행해졌다. 목을 치는 참수형은 서울 서소문 밖과 당고개, 전주 숲정이에서, 그리고 목졸라 죽이는 교수형은 포도청 감옥에서 행해졌다. 장사(杖死)는 곤장으로 볼기를 쳐서 죽이는 형벌이다."
   ],
   "en": {
    "title": "Forms of Martyrdom",
    "body": [
     "The saints died in different ways: 16 by gunmun hyosu, 60 by beheading, 15 by strangulation, 3 by flogging, and 9 in prison.",
     "Gunmun hyosu, in which the condemned was beheaded and the head hung high at a military camp, was reserved for those convicted of high treason. All 11 clergy were martyred this way, mostly at Saenamteo in Seoul and at Galmaemot in South Chungcheong Province. Beheadings took place outside Seosomun Gate and at Danggogae in Seoul and at Supjeongi in Jeonju, and strangulations in the prison of the Podocheong, the police bureau. Jangsa (杖死) was death by flogging, the condemned being beaten on the buttocks with a heavy paddle."
    ]
   }
  }
 ],
 "symbol": {
  "title": "심볼마크",
  "body": [
   "본 심볼마크는 1986년부터 지금까지 주교좌 명동대성당에서 사용해오던 심볼마크로, 전통적 교회 건축 양식인 명동대성당을 외관 정면에서 바라본 모습을 기본 이미지로 삼고 있습니다.",
   "지난 2009년 5월 6일에 열린 주교평의회에서는 주교좌 명동대성당의 심볼마크 및 로고타이프를 서울대교구의 공식 심볼마크 및 로고타이프로 병용하기로 했습니다.",
   "이에 따라 서울대교구에서는 이를 보완하여 서울대교구의 심볼마크 및 로고타이프로 사용하게 되었습니다."
  ],
  "en": {
   "title": "Symbol Mark",
   "body": [
    "This symbol mark has been used by Myeongdong Cathedral, the cathedral church of the Archdiocese of Seoul, since 1986. Its basic image is the front of Myeongdong Cathedral, a landmark of traditional church architecture, seen from outside.",
    "At its meeting on May 6, 2009, the archdiocese’s Council of Bishops decided that the cathedral’s symbol mark and logotype would also serve as the official symbol mark and logotype of the Archdiocese of Seoul.",
    "The Archdiocese of Seoul then refined the design and adopted it as its own symbol mark and logotype."
   ]
  }
 },
 "sources": [
  {
   "label": "성산동성당 「주보성인」(한국 103위 순교 성인) 이미지 게시물, pid=169",
   "url": "https://www.103.or.kr/main/page.html?pid=169"
  },
  {
   "label": "성산동성당 「로고소개」(Symbol Mark) 이미지 게시물, pid=170",
   "url": "https://www.103.or.kr/main/page.html?pid=170"
  },
  {
   "label": "CBCK English site (archived), 103 Korean Martyr Saints: one entry per saint headed in Korean plus Latin baptismal name and romanized name, e.g. “김대건 안드레아 Andreas Kim Tae-gon” (nos. 1–44 from the archived entries, 45–103 from the archived list pages)",
   "url": "https://web.archive.org/web/2019/http://english.cbck.or.kr/?mid=Saints103"
  },
  {
   "label": "CBCK (current site), 103 Korean Martyr Saints: same numbering 1–103; nos. 31–103 carry the same spellings, nos. 1–30 have been switched to Revised Romanization (e.g. “Andrew Kim Dae-geon”); the biographies were used to check family ties",
   "url": "https://www.cbck.or.kr/en/CatholicChurchInKorea/103-Korean-Martyr-Saints"
  },
  {
   "label": "data/glossary.js: CBCK plain spellings outside liturgical titles (St. Andrew Kim Tae-gon, St. Paul Chong Ha-sang, St. Peter Yu Tae-chol)",
   "url": "data/glossary.js"
  }
 ],
 "questions": [
  "2026-11-23 화면용으로 바로잡음: 53·55·56번을 성녀로(원문 목록은 「성」), 1번 김대건에 신부 표기, 30번 아네스→아녜스, 본문의 1893년→1839년, 민극기→민극가, 띄어쓰기. 아래 질문 가운데 이 항목들은 해결됨.",
  "53번 현경련 베네딕타, 55번 고순이 바르바라, 56번 이영덕 막달레나는 여성인데 목록에 ‘성’으로 인쇄되어 있습니다. 원문대로 title을 ‘성’으로 두었습니다(목록의 성녀는 44명, 실제 여성은 본문대로 47명). ‘성녀’로 바로잡을까요?",
  "30번 김효주의 세례명이 목록에는 ‘아네스’, 친족 관계 본문에는 ‘아녜스’로 되어 있습니다. 둘 다 원문대로 두었습니다. 현행 표기는 ‘아녜스’입니다. 91번 위앵, 94번 황석두의 ‘루가’도 원문대로 두었습니다(현행 표기와 CBCK는 ‘루카’).",
  "직업 본문의 ‘민극기(스테파노)’는 목록 59번 ‘민극가 스테파노’와 다릅니다. 본문은 원문대로 두고, 영문은 Stephen Min Kuk-ka로 썼습니다.",
  "친족 관계 본문의 ‘1893년 기해박해’는 1839년의 오기로 보입니다. 한국어는 원문대로 두고, 영문은 1839로 썼습니다.",
  "친족 관계 본문의 ‘이호영(베드로)과 이 아가타 … 남매’는 7번 이소사 아가타를 가리킵니다(CBCK 전기). 58번 ‘이 아가타’는 이광헌의 딸이라 다른 사람입니다. 영문은 Agatha Yi So-sa로 썼습니다. 한국어도 ‘이소사(아가타)’로 바꿀까요?",
  "원문의 맞춤법과 띄어쓰기를 그대로 두었습니다: ‘감안하다면’(감안한다면), ‘그리스도 교’(그리스도교), ‘브르트 니에르’(목록은 브르트니에르), ‘이땅에’, ‘이같은’, 문장부호 뒤 띄어쓰기 없음(‘많다.최연소자는’, ‘했으며,민극기’, ‘짚신장사꾼이다.조신철’, ‘(베드로),조화서’, ‘6월5일’), 괄호 앞 띄어쓰기(‘앵베르 (조선교구’, ‘박후재 (요한)’). 바로잡을까요? 줄바꿈 때문에 생긴 줄 첫머리 공백과 이중 공백은 지웠습니다.",
  "직업 본문은 조신철(가롤로)을 역관이라고 한 뒤, 같은 문단에서 다시 동지사 마부였다고 합니다. CBCK 전기에 따르면 그는 북경을 오가는 사신의 하인이었고 가끔 모방 신부의 통역을 했습니다. 영문은 원문대로 옮겼습니다(interpreters, groom). 확인이 필요합니다.",
  "1번 김대건은 목록에 ‘신부’가 인쇄되어 있지 않아 role을 넣지 않았습니다. 영문은 용어집과 전례 명칭에 맞춰 ‘St. Andrew Kim Tae-gon, Priest’로 썼습니다. 한국어에도 role: ‘신부’를 넣을까요?",
  "21번 이광렬, 85번 남종삼, 86번 전장운은 목록에 ‘요한’으로 인쇄되어 있지만 CBCK는 세례자 요한(Ioannes B.)으로 적습니다. 영문은 CBCK를 따라 ‘John Baptist’로 썼습니다.",
  "영문 이름은 용어집 원칙(CBCK의 반달표 없는 표기)에 따라 옛 CBCK 영문 사이트의 표기를 그대로 썼습니다. 현재 cbck.or.kr 영문 목록은 1–30번을 국어의 로마자 표기법으로 바꾸었습니다(Andrew Kim Dae-geon, Paul Jeong Ha-sang). 그래서 용어집과 현재 CBCK가 다릅니다. 이 기준을 유지할까요?",
  "CBCK 표기 가운데 받침 ㅂ·ㄱ·ㄷ을 -b·-g·-d로 적은 것이 있습니다(8 Kim Ob-i, 12 Nam Myong-hyog, 13 Kwon Tug-in, 14 Chang Song-jib, 39 Chon Kyong-hyob, 50 Choe Chang-hub, 56 Yi Yong-dog, 61 Ho Hyob, 64 Son So-byog, 66 Yi In-dog, 76 Im Chi-baeg). 엄격한 McCune–Reischauer(-p·-k)로 고치지 않고 1984년 시성 목록과 CBCK 표기를 그대로 두었습니다.",
  "23번과 45번은 둘 다 ‘성녀 김 루치아’이고 영문도 둘 다 ‘St. Lucy Kim’입니다. CBCK는 23번을 ‘Lucy Kim (Virgin and Martyr)’, 45번을 ‘Lucia Kim (Kopch’u)’(곱추 루치아)로 구별합니다. 화면에서 구별할까요?",
  "영문 세례명은 CBCK 영문 표기를 따랐습니다(Anna, Rosa, Protase, Teresa, Lucy, Mary, Magdalene). CBCK가 라틴어로만 적은 이름은 영어 형태로 옮겼습니다: 38번 율리에타 → Julietta(CBCK: Iulietta), 74번 라우렌시오 → Lawrence, 89번 알렉시오 → Alexius.",
  "프랑스 선교사의 영문 이름은 세례명을 프랑스어로 썼습니다(Laurent Imbert, Pierre Maubant, Jacques Chastan, Siméon Berneux, Just Ranfer de Bretenières, Henri Dorie, Louis Beaulieu, Antoine Daveluy, Luc Huin, Pierre Aumaître). CBCK 목록은 라틴어(Laurentius Imbert …)로 적습니다. latin 필드는 원문 그대로 악센트 없이 두었습니다(Bretenieres, Aumaitre).",
  "박해 이름(Sinyu, Kihae, Pyong-o, Pyong-in Persecution)은 용어집에 없습니다. 성인 이름과 맞추어 반달표 없는 McCune–Reischauer로 썼습니다. 지명, 왕, 가문(Saenamteo, Galmaemot, Seosomun, Danggogae, Supjeongi, King Heonjong, Pungyang Jo, Andong Kim, Heungseon Daewongun)은 국어의 로마자 표기법으로 썼습니다. 용어집에 추가할까요?",
  "한자는 모두 또렷하게 읽혔습니다. 다만 79번 鄭鐵艶은 원문대로 艶(艷의 이체자)으로 두었고, 43번 洪今珠의 今과 94번 黃錫斗의 斗는 글꼴의 이체 자형으로 인쇄되어 있어 표준 자형으로 옮겼습니다.",
  "인사말 문장 ‘본당의 주보성인은 … 103위 순교성인을 주보성인으로 모시며 …’는 주어가 겹쳐 어색합니다. 한국어는 원문대로 두고, 영문은 뜻을 살려 두 문장으로 나누었습니다."
 ]
};

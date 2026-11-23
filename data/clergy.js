// 신부님·수녀님·본당 출신 성직자와 수도자 데이터 (www.103.or.kr 이미지 게시물을 글로 옮김, 2026-11-23)
// 출처: 신부님 소개(pid=165), 수녀님 소개(pid=166), 본당 출신 성직·수도자 소개(pid=79). 사진과 이메일·웹 주소는 옮기지 않았다.
// 로컬 파일로 열리도록 fetch 대신 전역 변수로 둔다. 영문은 각 사람의 en 에 둔다(data/glossary.js 기준).
// groups: 이미지에 나오는 순서대로. id, title(이미지에 인쇄된 칸 제목), en(영문 제목), page·pageEn(원래 게시물 제목), people.
// 이미지에 현재 수녀님 칸은 없다(역대 원장수녀님·역대 전교수녀님만 있음). 본당 출신 칸 제목은 원문대로 ‘성직자’·‘수도자’다.
// people 의 각 사람(원문에 없거나 빈 칸은 키를 뺀다):
//   ord = 대수(초대 = 1, 2대 = 2 …), current = 현재 재임(이때 ord 없음), name = 성명, baptismal = 세례명(원문 띄어쓰기 그대로),
//   feast = 축일 "MM-DD", ordained = 서품·수품일, from / to = 재임기간·부임일(YYYY-MM-DD, YYYY-MM 또는 YYYY), died = 선종일,
//   institute = 소속 교구·수도회, entered = 입회일, finalVows = 종신서원일(날짜로 못 바꾸면 원문 그대로), motto = 수품성구, mottoRef = 성경 출처(원문 「적 이 없다」의 띄어쓰기는 바로잡음),
//   en = { name: 호칭 + 세례명 + 성(이름은 로마자로 옮기지 않음), baptismal, institute, motto }.
// questions = 본당 확인이 필요한 것(판독이 애매하거나 원문이 이상한 곳, 영문 명칭).
window.CLERGY = {
 "groups": [
  {
   "id": "pastor",
   "title": "주임신부님",
   "en": "Pastor",
   "page": "신부님 소개",
   "pageEn": "Our Priests",
   "people": [
    {"current": true, "name": "김이균", "baptismal": "파트리치오", "feast": "03-17", "from": "2024-08-27", "motto": "그러나 어둠이 빛을 이겨 본 적이 없다.", "mottoRef": "요한 1,5 · 공동번역", "en": {"name": "Fr. Patrick Kim", "baptismal": "Patrick", "motto": "And the darkness has not overcome it.", "mottoRef": "John 1:5, NABRE"}}
   ]
  },
  {
   "id": "vicar",
   "title": "부주임신부님",
   "en": "Parochial Vicar",
   "page": "신부님 소개",
   "pageEn": "Our Priests",
   "people": [
    {"current": true, "name": "류영우", "baptismal": "다윗", "feast": "12-29", "ordained": "2023-02-03", "from": "2025-02-18", "en": {"name": "Fr. David Ryu", "baptismal": "David"}}
   ]
  },
  {
   "id": "past-pastors",
   "title": "역대 주임신부님",
   "en": "Former Pastors",
   "page": "신부님 소개",
   "pageEn": "Our Priests",
   "people": [
    {"ord": 1, "name": "박성구", "baptismal": "요셉", "feast": "03-19", "from": "1981-09-01", "to": "1986-08-28", "died": "2019-11-18", "en": {"name": "Fr. Joseph Park", "baptismal": "Joseph"}},
    {"ord": 2, "name": "김자문", "baptismal": "네레오", "feast": "05-12", "from": "1986-08-29", "to": "1992-10-07", "died": "2011-10-19", "en": {"name": "Fr. Nereus Kim", "baptismal": "Nereus"}},
    {"ord": 3, "name": "김정직", "baptismal": "디오니시오", "feast": "10-09", "from": "1992-10-08", "to": "1996-10-10", "died": "2016-11-21", "en": {"name": "Fr. Denis Kim", "baptismal": "Denis"}},
    {"ord": 4, "name": "김병일", "baptismal": "요셉", "feast": "03-19", "from": "1996-10-11", "to": "2001-10-04", "died": "2016-03-07", "en": {"name": "Fr. Joseph Kim", "baptismal": "Joseph"}},
    {"ord": 5, "name": "김승구", "baptismal": "마르띠노", "feast": "11-11", "from": "2001-10-05", "to": "2006-09-05", "en": {"name": "Fr. Martin Kim", "baptismal": "Martin"}},
    {"ord": 6, "name": "소윤섭", "baptismal": "요셉", "feast": "05-01", "from": "2006-09-05", "to": "2006-12-19", "en": {"name": "Fr. Joseph So", "baptismal": "Joseph"}},
    {"ord": 7, "name": "최주호", "baptismal": "대건안드레아", "feast": "07-05", "from": "2006-12-20", "to": "2008-08-30", "died": "2008-08-30", "en": {"name": "Fr. Andrew Choi", "baptismal": "Andrew Kim Tae-gon"}},
    {"ord": 8, "name": "김연범", "baptismal": "안토니오", "feast": "06-13", "from": "2008-08-31", "to": "2013-08-26", "en": {"name": "Fr. Anthony Kim", "baptismal": "Anthony"}},
    {"ord": 9, "name": "이원규", "baptismal": "마태오", "feast": "09-21", "from": "2013-08-27", "to": "2017-02-14", "en": {"name": "Fr. Matthew Lee", "baptismal": "Matthew"}},
    {"ord": 10, "name": "권철호", "baptismal": "다니엘", "feast": "07-21", "from": "2017-02-15", "to": "2022-02-07", "en": {"name": "Fr. Daniel Kwon", "baptismal": "Daniel"}},
    {"ord": 11, "name": "정순오", "baptismal": "미카엘", "feast": "09-29", "from": "2022-02-07", "to": "2024-08-27", "en": {"name": "Fr. Michael Chung", "baptismal": "Michael"}}
   ]
  },
  {
   "id": "past-vicars",
   "title": "역대 부주임신부님",
   "en": "Former Parochial Vicars",
   "page": "신부님 소개",
   "pageEn": "Our Priests",
   "people": [
    {"ord": 1, "name": "장세훈", "baptismal": "임마누엘", "feast": "12-25", "ordained": "2014", "from": "2019-02-19", "to": "2021-02-16", "en": {"name": "Fr. Emmanuel Jang", "baptismal": "Emmanuel"}},
    {"ord": 2, "name": "나창식", "baptismal": "안드레아", "feast": "11-30", "ordained": "2011", "from": "2021-02-16", "to": "2023-02-14", "en": {"name": "Fr. Andrew Na", "baptismal": "Andrew"}},
    {"ord": 3, "name": "김종욱", "baptismal": "바오로", "feast": "06-29", "ordained": "2020", "from": "2023-02-14", "en": {"name": "Fr. Paul Kim", "baptismal": "Paul"}}
   ]
  },
  {
   "id": "past-assistants",
   "title": "역대 보좌신부님",
   "en": "Former Assistant Priests",
   "page": "신부님 소개",
   "pageEn": "Our Priests",
   "people": [
    {"ord": 1, "name": "최원일", "baptismal": "미카엘", "feast": "09-29", "from": "1989-02-19", "to": "1990-02-22", "en": {"name": "Fr. Michael Choi", "baptismal": "Michael"}},
    {"ord": 2, "name": "송락", "baptismal": "이냐시오", "from": "1990-02-22", "to": "1991-09-04", "en": {"name": "Fr. Ignatius Song", "baptismal": "Ignatius"}},
    {"ord": 3, "name": "이명찬", "baptismal": "토마스", "feast": "07-03", "from": "1991-09-05", "to": "1992-10-07", "en": {"name": "Fr. Thomas Lee", "baptismal": "Thomas"}},
    {"ord": 4, "name": "변우찬", "baptismal": "사도요한", "feast": "12-27", "from": "1992-10-08", "to": "1993-11-04", "en": {"name": "Fr. John Byun", "baptismal": "John"}},
    {"ord": 5, "name": "윤일선", "baptismal": "타르치시오", "feast": "08-15", "from": "1993-11-05", "to": "1995-11-30", "en": {"name": "Fr. Tarcisius Yoon", "baptismal": "Tarcisius"}},
    {"ord": 6, "name": "김지영", "baptismal": "사무엘", "feast": "08-20", "from": "1994-12-03", "to": "1996-11-28", "en": {"name": "Fr. Samuel Kim", "baptismal": "Samuel"}},
    {"ord": 7, "name": "양해룡", "baptismal": "사도 요한", "feast": "12-27", "from": "1995-12-01", "to": "1997-11-28", "en": {"name": "Fr. John Yang", "baptismal": "John"}},
    {"ord": 8, "name": "이용희", "baptismal": "사도 요한", "feast": "12-27", "from": "1996-11-30", "to": "1997-11-28", "en": {"name": "Fr. John Lee", "baptismal": "John"}},
    {"ord": 9, "name": "김한석", "baptismal": "토마스", "feast": "07-03", "from": "1997-11-29", "to": "2000-02-28", "en": {"name": "Fr. Thomas Kim", "baptismal": "Thomas"}},
    {"ord": 10, "name": "이승주", "baptismal": "대건 안드레아", "feast": "07-05", "from": "1997-11-29", "to": "1999-12-02", "en": {"name": "Fr. Andrew Lee", "baptismal": "Andrew Kim Tae-gon"}},
    {"ord": 11, "name": "이범주", "baptismal": "사도 요한", "feast": "12-27", "from": "1999-12-03", "to": "2001-12-04", "en": {"name": "Fr. John Lee", "baptismal": "John"}},
    {"ord": 12, "name": "강석", "baptismal": "스테파노", "feast": "12-26", "from": "2001-12-05", "to": "2002-03-04", "en": {"name": "Fr. Stephen Kang", "baptismal": "Stephen"}},
    {"ord": 13, "name": "유청", "baptismal": "시몬", "feast": "10-28", "from": "2002-03-05", "to": "2004-09-23", "en": {"name": "Fr. Simon Yu", "baptismal": "Simon"}},
    {"ord": 14, "name": "오창석", "baptismal": "요셉", "feast": "03-19", "from": "2004-09-24", "to": "2004-12-02", "en": {"name": "Fr. Joseph Oh", "baptismal": "Joseph"}},
    {"ord": 15, "name": "최용진", "baptismal": "레미지오", "feast": "10-01", "from": "2004-12-03", "to": "2007-11-19", "en": {"name": "Fr. Remigius Choi", "baptismal": "Remigius"}},
    {"ord": 16, "name": "나충열", "baptismal": "요셉", "feast": "03-19", "from": "2007-11-20", "to": "2008-12-08", "en": {"name": "Fr. Joseph Na", "baptismal": "Joseph"}},
    {"ord": 17, "name": "윤종상", "baptismal": "가브리엘", "feast": "09-29", "from": "2008-12-09", "to": "2011-02-21", "en": {"name": "Fr. Gabriel Yoon", "baptismal": "Gabriel"}},
    {"ord": 18, "name": "신동원", "baptismal": "요셉", "feast": "03-19", "from": "2011-02-22", "to": "2013-02-11", "en": {"name": "Fr. Joseph Shin", "baptismal": "Joseph"}},
    {"ord": 19, "name": "김경영", "baptismal": "영주바오로", "feast": "09-20", "from": "2013-02-12", "to": "2015-02-16", "en": {"name": "Fr. Paul Kim", "baptismal": "Paul Hong Yong-ju"}},
    {"ord": 20, "name": "박준병", "baptismal": "암브로시오", "feast": "12-07", "from": "2015-02-17", "to": "2017-02-14", "en": {"name": "Fr. Ambrose Park", "baptismal": "Ambrose"}},
    {"ord": 21, "name": "최영섭", "baptismal": "후고", "feast": "04-01", "from": "2017-02-15", "to": "2019-02-10", "en": {"name": "Fr. Hugh Choi", "baptismal": "Hugh"}}
   ]
  },
  {
   "id": "past-superiors",
   "title": "역대 원장수녀님",
   "en": "Former Superiors",
   "page": "수녀님 소개",
   "pageEn": "Our Sisters",
   "people": [
    {"name": "김경자", "baptismal": "베드로", "from": "1986-02-20", "to": "1989-02-09", "en": {"name": "Sr. Peter Kim", "baptismal": "Peter"}},
    {"name": "길정순", "baptismal": "쥬리아", "from": "1989-02-10", "to": "1991-02-09", "en": {"name": "Sr. Julia Gil", "baptismal": "Julia"}},
    {"name": "심진순", "baptismal": "가오로", "from": "1992-02-10", "to": "1995-02-09", "en": {"name": "Sr. Shim"}},
    {"name": "안보화", "baptismal": "세바스티아노", "from": "1995-02-10", "to": "1998-02-09", "en": {"name": "Sr. Sebastian Ahn", "baptismal": "Sebastian"}},
    {"name": "김춘희", "baptismal": "안드레아 글라라", "from": "1998-02-10", "to": "2000-02-10", "en": {"name": "Sr. Andrea Clare Kim", "baptismal": "Andrea Clare"}},
    {"name": "김수자", "baptismal": "글라라", "from": "2000-02-11", "to": "2003-01-28", "en": {"name": "Sr. Clare Kim", "baptismal": "Clare"}},
    {"name": "김현립", "baptismal": "젬마", "from": "2003-01-28", "to": "2006-02-08", "en": {"name": "Sr. Gemma Kim", "baptismal": "Gemma"}},
    {"name": "김남현", "baptismal": "레오나", "from": "2006-02-08", "to": "2009-01-28", "en": {"name": "Sr. Leona Kim", "baptismal": "Leona"}},
    {"name": "김옥희", "baptismal": "데레사", "from": "2009-01-28", "to": "2012-02-03", "en": {"name": "Sr. Teresa Kim", "baptismal": "Teresa"}},
    {"name": "임성심", "baptismal": "세실리아", "from": "2012-02-04", "to": "2015-01-30", "en": {"name": "Sr. Cecilia Lim", "baptismal": "Cecilia"}},
    {"name": "최선화", "baptismal": "사루비아", "from": "2015-01-31", "to": "2018-01-30", "en": {"name": "Sr. Salvia Choi", "baptismal": "Salvia"}},
    {"name": "진임희", "baptismal": "아녜스", "from": "2018-01-30", "to": "2021-01-28", "en": {"name": "Sr. Agnes Jin", "baptismal": "Agnes"}},
    {"name": "양천혜", "baptismal": "수산나", "from": "2021-01-28", "to": "2023-01-31", "en": {"name": "Sr. Susanna Yang", "baptismal": "Susanna"}},
    {"name": "황우민", "baptismal": "비비나", "from": "2023-02-01", "to": "2025-08-28", "en": {"name": "Sr. Vivina Hwang", "baptismal": "Vivina"}}
   ]
  },
  {
   "id": "past-pastoral-sisters",
   "title": "역대 전교수녀님",
   "en": "Former Pastoral Sisters",
   "page": "수녀님 소개",
   "pageEn": "Our Sisters",
   "people": [
    {"name": "윤옥순", "baptismal": "바르바라", "from": "1982-02-20", "to": "1984-02-05", "en": {"name": "Sr. Barbara Yoon", "baptismal": "Barbara"}},
    {"name": "김정옥", "baptismal": "베드로", "from": "1984-02-06", "to": "1986-02-19", "en": {"name": "Sr. Peter Kim", "baptismal": "Peter"}},
    {"name": "황정임", "baptismal": "젬마", "from": "1984-02-20", "to": "1986-02-19", "en": {"name": "Sr. Gemma Hwang", "baptismal": "Gemma"}},
    {"name": "송해남", "baptismal": "젬마", "from": "1986-02-20", "to": "1988-02-09", "en": {"name": "Sr. Gemma Song", "baptismal": "Gemma"}},
    {"name": "최은숙", "baptismal": "레지나", "from": "1987-02-10", "to": "1989-02-09", "en": {"name": "Sr. Regina Choi", "baptismal": "Regina"}},
    {"name": "이필주", "baptismal": "젬마", "from": "1988-02-10", "to": "1990-02-05", "en": {"name": "Sr. Gemma Lee", "baptismal": "Gemma"}},
    {"name": "정춘영", "baptismal": "로사", "from": "1989-02-10", "to": "1991-02-09", "en": {"name": "Sr. Rose Chung", "baptismal": "Rose"}},
    {"name": "김남순", "baptismal": "아녜스", "from": "1990-02-10", "to": "1991-02-09", "en": {"name": "Sr. Agnes Kim", "baptismal": "Agnes"}},
    {"name": "유순식", "baptismal": "데레사", "from": "1991-03-24", "to": "1992-02-09", "en": {"name": "Sr. Teresa Yu", "baptismal": "Teresa"}},
    {"name": "최명분", "baptismal": "요안나", "from": "1991-02-10", "to": "1994-02-13", "en": {"name": "Sr. Joanna Choi", "baptismal": "Joanna"}},
    {"name": "신창옥", "baptismal": "헬레나", "from": "1992-02-10", "to": "1994-02-10", "en": {"name": "Sr. Helena Shin", "baptismal": "Helena"}},
    {"name": "이국희", "baptismal": "데레사", "from": "1994-02-15", "to": "1997-02-10", "en": {"name": "Sr. Teresa Lee", "baptismal": "Teresa"}},
    {"name": "이상미", "baptismal": "아녜스", "from": "1994-02-16", "to": "1995-06-10", "en": {"name": "Sr. Agnes Lee", "baptismal": "Agnes"}},
    {"name": "김은주", "baptismal": "루갈다", "from": "1996-02-10", "to": "1998-02-09", "en": {"name": "Sr. Lutgarde Kim", "baptismal": "Lutgarde"}},
    {"name": "임부용", "baptismal": "데레사", "from": "1997-02-10", "to": "2000-02-10", "en": {"name": "Sr. Teresa Lim", "baptismal": "Teresa"}},
    {"name": "정오녀", "baptismal": "카타리나", "from": "1998-02-10", "to": "2000-02-10", "en": {"name": "Sr. Catherine Chung", "baptismal": "Catherine"}},
    {"name": "이순이", "baptismal": "베로니카", "from": "2000-02-11", "to": "2001-02-10", "en": {"name": "Sr. Veronica Lee", "baptismal": "Veronica"}},
    {"name": "유영상", "baptismal": "글라라", "from": "2000-02-11", "to": "2002-02-10", "en": {"name": "Sr. Clare Yu", "baptismal": "Clare"}},
    {"name": "피영옥", "baptismal": "세실리아", "from": "2001-02-11", "to": "2003-01-28", "en": {"name": "Sr. Cecilia Pi", "baptismal": "Cecilia"}},
    {"name": "이혜경", "baptismal": "루시아", "from": "2002-02-11", "to": "2004-02-27", "en": {"name": "Sr. Lucy Lee", "baptismal": "Lucy"}},
    {"name": "박희자", "baptismal": "요안나", "from": "2004-02-10", "to": "2006-02-07", "en": {"name": "Sr. Joanna Park", "baptismal": "Joanna"}},
    {"name": "이주희", "baptismal": "제노베파", "from": "2006-02-08", "to": "2009-01-28", "en": {"name": "Sr. Genevieve Lee", "baptismal": "Genevieve"}},
    {"name": "한주혜", "baptismal": "베로니카", "from": "2009-01-29", "to": "2010-08-23", "en": {"name": "Sr. Veronica Han", "baptismal": "Veronica"}},
    {"name": "김경순", "baptismal": "가타리나", "from": "2010-08-23", "to": "2011-01-26", "en": {"name": "Sr. Catherine Kim", "baptismal": "Catherine"}},
    {"name": "서건순", "baptismal": "골롬바", "from": "2011-01-26", "to": "2013-01-30", "en": {"name": "Sr. Columba Seo", "baptismal": "Columba"}},
    {"name": "강정은", "baptismal": "프란치스카", "from": "2013-01-31", "to": "2015-01-30", "en": {"name": "Sr. Frances Kang", "baptismal": "Frances"}},
    {"name": "강율리아", "baptismal": "율리아", "from": "2015-01-31", "to": "2017-01-31", "en": {"name": "Sr. Julia Kang", "baptismal": "Julia"}},
    {"name": "이석란", "baptismal": "심포로사", "from": "2017-02-01", "to": "2018-04", "en": {"name": "Sr. Symphorosa Lee", "baptismal": "Symphorosa"}},
    {"name": "장은주", "baptismal": "미카엘라", "from": "2019-01-31", "to": "2022-01-27", "en": {"name": "Sr. Michaela Jang", "baptismal": "Michaela"}},
    {"name": "전영희", "baptismal": "데레사", "from": "2022-01-28", "to": "2023-01-31", "en": {"name": "Sr. Teresa Jeon", "baptismal": "Teresa"}},
    {"name": "강혜숙", "baptismal": "아녜스", "from": "2023-02-01", "to": "2025-08-28", "en": {"name": "Sr. Agnes Kang", "baptismal": "Agnes"}}
   ]
  },
  {
   "id": "vocations-priests",
   "title": "성직자",
   "en": "Priests",
   "page": "본당 출신 성직·수도자 소개",
   "pageEn": "Vocations from Our Parish",
   "people": [
    {"name": "김남철", "baptismal": "바르톨로메오", "feast": "08-24", "ordained": "1987-02-06", "institute": "의정부교구", "en": {"name": "Fr. Bartholomew Kim", "baptismal": "Bartholomew", "institute": "Diocese of Uijeongbu"}},
    {"name": "홍근표", "baptismal": "바오로", "feast": "01-25", "ordained": "1988-02-12", "institute": "서울대교구", "en": {"name": "Fr. Paul Hong", "baptismal": "Paul", "institute": "Archdiocese of Seoul"}},
    {"name": "나승구", "baptismal": "프란치스코하비에르", "feast": "12-03", "ordained": "1991-08-23", "institute": "서울대교구", "en": {"name": "Fr. Francis Xavier Na", "baptismal": "Francis Xavier", "institute": "Archdiocese of Seoul"}},
    {"name": "조성풍", "baptismal": "아우구스티노", "feast": "08-28", "ordained": "1993-07-16", "institute": "서울대교구", "en": {"name": "Fr. Augustine Cho", "baptismal": "Augustine", "institute": "Archdiocese of Seoul"}},
    {"name": "김철현", "baptismal": "도미니코사비오", "feast": "03-09", "ordained": "1995-07-05", "institute": "서울대교구", "en": {"name": "Fr. Dominic Savio Kim", "baptismal": "Dominic Savio", "institute": "Archdiocese of Seoul"}},
    {"name": "현재봉", "baptismal": "베드로", "feast": "06-29", "ordained": "1997-01-31", "institute": "수원교구", "en": {"name": "Fr. Peter Hyun", "baptismal": "Peter", "institute": "Diocese of Suwon"}},
    {"name": "조지훈", "baptismal": "힐라리오", "feast": "01-13", "ordained": "2003-07-04", "institute": "의정부교구", "en": {"name": "Fr. Hilary Cho", "baptismal": "Hilary", "institute": "Diocese of Uijeongbu"}},
    {"name": "장우건", "baptismal": "토마스아퀴나스", "feast": "01-28", "ordained": "2008-06-27", "institute": "서울대교구", "en": {"name": "Fr. Thomas Aquinas Jang", "baptismal": "Thomas Aquinas", "institute": "Archdiocese of Seoul"}},
    {"name": "이민수", "baptismal": "레오", "ordained": "2014-02-07", "institute": "서울대교구", "en": {"name": "Fr. Leo Lee", "baptismal": "Leo", "institute": "Archdiocese of Seoul"}},
    {"name": "최필규", "baptismal": "루도비꼬", "ordained": "2014-02-07", "institute": "천주교 서울국제선교회", "en": {"name": "Fr. Louis Choi", "baptismal": "Louis", "institute": "Seoul International Mission Society"}},
    {"name": "박성준", "baptismal": "가브리엘", "feast": "09-29", "ordained": "2025-02-07", "institute": "서울대교구", "en": {"name": "Fr. Gabriel Park", "baptismal": "Gabriel", "institute": "Archdiocese of Seoul"}},
    {"name": "김동준", "baptismal": "갈리스도", "feast": "10-14", "ordained": "2025-02-07", "institute": "서울대교구", "en": {"name": "Fr. Callistus Kim", "baptismal": "Callistus", "institute": "Archdiocese of Seoul"}}
   ]
  },
  {
   "id": "vocations-religious",
   "title": "수도자",
   "en": "Religious",
   "page": "본당 출신 성직·수도자 소개",
   "pageEn": "Vocations from Our Parish",
   "people": [
    {"name": "강현진", "baptismal": "가우덴시아", "institute": "영원한 도움의 성모수녀회", "entered": "1982-02-27", "finalVows": "1992-08-28", "en": {"name": "Sr. Gaudentia Kang", "baptismal": "Gaudentia", "institute": "Sisters of Our Lady of Perpetual Help"}},
    {"name": "정정자", "baptismal": "마리아도미니카", "institute": "천주의 섭리회", "entered": "1982-11-15", "finalVows": "1991-02-02", "en": {"name": "Sr. Maria Dominica Chung", "baptismal": "Maria Dominica", "institute": "Congregation of Divine Providence"}},
    {"name": "신소희", "baptismal": "까리타스", "institute": "성심수녀회", "entered": "1986-04-10", "finalVows": "1997-01-05", "en": {"name": "Sr. Caritas Shin", "baptismal": "Caritas", "institute": "Society of the Sacred Heart"}},
    {"name": "마승희", "baptismal": "마리아", "institute": "살레시오 수녀회", "entered": "1987-01-31", "finalVows": "1997-01-30", "en": {"name": "Sr. Mary Ma", "baptismal": "Mary", "institute": "Salesian Sisters of St. John Bosco (Daughters of Mary Help of Christians)"}},
    {"name": "양재령", "baptismal": "예수성심의데레사 프란치스카", "institute": "가르멜의 모후 수녀회", "entered": "1989-05-11", "finalVows": "1999. ?", "en": {"name": "Sr. Teresa of the Sacred Heart of Jesus Yang", "baptismal": "Teresa of the Sacred Heart of Jesus (Frances)", "institute": "Congregation of the Mother of Carmel"}},
    {"name": "민경은", "baptismal": "잉그리드", "institute": "영원한 도움의 성모수녀회", "entered": "1997-09-01", "finalVows": "2009-02-13", "en": {"name": "Sr. Ingrid Min", "baptismal": "Ingrid", "institute": "Sisters of Our Lady of Perpetual Help"}},
    {"name": "류지희", "baptismal": "비비안나", "institute": "한국순교복자수녀회", "entered": "1999-03-19", "finalVows": "2010-01-18", "en": {"name": "Sr. Bibiana Ryu", "baptismal": "Bibiana", "institute": "Sisters of the Blessed Korean Martyrs"}},
    {"name": "신세란", "baptismal": "바르톨로메오", "institute": "예수의 꽃동네 자매회", "entered": "2001-08-14", "finalVows": "2010-02-02", "en": {"name": "Sr. Bartholomew Shin", "baptismal": "Bartholomew", "institute": "Kkottongnae Sisters of Jesus"}},
    {"name": "이에리사", "institute": "성 골롬반 외방선교수녀회", "entered": "2003-09-29", "finalVows": "2012-10-05", "en": {"name": "Sr. Lee", "institute": "Missionary Sisters of St. Columban"}},
    {"name": "박현애", "baptismal": "리오바", "institute": "성가소비녀회", "entered": "2009-10-31", "en": {"name": "Sr. Lioba Park", "baptismal": "Lioba", "institute": "Handmaids of the Holy Family"}}
   ]
  }
 ],
 "questions": [
  "현재 수녀님: 「수녀님 소개」(pid=166)에는 ‘역대 원장수녀님’과 ‘역대 전교수녀님’ 두 칸뿐이고 현재 칸이 없습니다. 마지막 두 분(원장 황우민 비비나, 전교 강혜숙 아녜스)의 재임이 2025.08.28에 끝났으니, 지금 계신 수녀님(용어집의 김혜윤 베아트릭스 수녀님 등)의 성함·직분·부임일을 알려 주십시오.",
  "김이균 파트리치오 신부님 수품성구: 원문이 “이겨 본 적 이 없다”로 띄어 쓰여 있습니다(공동번역 요한 1,5는 “이겨 본 적이 없다”). 원문대로 옮겼으니 바로잡을지 확인해 주십시오. 영문은 NABRE 요한 1,5 뒷부분 “And the darkness has not overcome it.”입니다.",
  "3대 부주임 김종욱 바오로 신부님: 부임일 “2023.02.14 ~”만 있고 이임일이 없습니다. 현 부주임 류영우 다윗 신부님 부임일(2025.02.18)이 이임일인지 확인해 주십시오(지금은 to 없이 둠).",
  "역대 보좌 2대 송락 이냐시오 신부님: 축일 칸이 비어 있습니다(로욜라의 이냐시오 7.31인지, 안티오키아의 이냐시오 10.17인지).",
  "역대 보좌 13대 “유청 시몬” 신부님: 이미지대로 옮겼으나, 카드의 이메일 아이디가 다른 성(정씨)을 가리키는 듯해 성함을 확인해 주십시오. 영문은 Fr. Simon Yu로 두었습니다.",
  "역대 보좌신부 재임 기간이 겹치는 곳(5대·6대, 7대·8대, 9대·10대)은 보좌신부가 두 분이던 시기로 보고 원문대로 두었습니다.",
  "원장수녀 “심진순 가오로”: ‘가오로’라는 세례명은 확인되지 않습니다. 바오로(바오라)의 오기인지 확인해 주십시오. 영문은 세례명 없이 “Sr. Shim”으로 두었습니다.",
  "원장수녀 “안보화세바스티아노”: 이름과 세례명 사이가 붙어 있고, 세바스티아노는 남성형입니다(세바스티아나인지). 이름 안보화, 세례명 세바스티아노로 나누고 영문은 Sebastian으로 두었습니다. 김경자·김정옥 수녀님의 ‘베드로’도 남성 세례명이라 원문대로 Peter로 두었습니다.",
  "원장수녀 재임 공백: 길정순 쥬리아(~1991.02.09)와 심진순 가오로(1992.02.10~) 사이 1년이 비어 있습니다. 빠진 분이 계신지 확인해 주십시오. 전교수녀도 이석란 심포로사(~2018.04, 날짜 없음)와 장은주 미카엘라(2019.01.31~) 사이가 비어 있습니다.",
  "원장수녀 “최선화 사루비아”: ‘사루비아’가 세례명인지 수도명인지, 영문 철자를 알려 주십시오(임시 Salvia).",
  "원장수녀 “황우민 비비나”: 비비아나(Bibiana)인지 비비나(Vivina)인지 확인해 주십시오(임시 Vivina). 본당 출신 류지희 수녀님은 ‘비비안나’로 적혀 있어 Bibiana로 옮겼습니다.",
  "전교수녀 “강율리아 율리아”: 이름과 세례명이 같게 적혀 있습니다. 성함을 확인해 주십시오(이름 강율리아, 세례명 율리아로 둠).",
  "본당 출신 수도자 양재령 수녀님: 종신서원이 “1999. ?”로 적혀 있어 그대로 두었습니다. ‘예수성심의데레사 프란치스카’는 수도명(예수 성심의 데레사)과 세례명(프란치스카)으로 보고 영문을 “Sr. Teresa of the Sacred Heart of Jesus Yang”으로 두었습니다. 맞는지 확인해 주십시오.",
  "본당 출신 수도자 “이에리사 수녀”: 세례명 칸이 따로 없습니다. 성 이 + 세례명 에리사(Elisa)인지, 이름이 에리사인지 확인해 주십시오. 영문은 “Sr. Lee”로 두었습니다.",
  "본당 출신 수도자 “박현애 리오바”: 다른 분과 달리 ‘수녀’ 표기가 없고 종신서원 칸이 비어 있습니다. 유기서원 중이신지, 영문 “Sr. Lioba Park”이 맞는지 확인해 주십시오.",
  "본당 출신 성직자 이민수 레오, 최필규 루도비꼬 신부님: 축일 칸이 비어 있습니다.",
  "소속 수도회·단체 영문 명칭 확인(공식 영문을 찾지 못해 직역): 천주교 서울국제선교회 → Seoul International Mission Society, 영원한 도움의 성모수녀회 → Sisters of Our Lady of Perpetual Help, 천주의 섭리회 → Congregation of Divine Providence(천주섭리수녀회와 같은 곳인지), 가르멜의 모후 수녀회 → Congregation of the Mother of Carmel, 한국순교복자수녀회 → Sisters of the Blessed Korean Martyrs(목록에 따라 Sisters of Palma of Blessed Korean Martyrs), 예수의 꽃동네 자매회 → Kkottongnae Sisters of Jesus, 성가소비녀회 → Handmaids of the Holy Family.",
  "용어: 용어집에 없는 보좌신부는 “Assistant Priest”, 원장수녀는 “Superior”, 전교수녀는 “Pastoral Sister”로 옮겼습니다. 용어집에 추가할지 정해 주십시오.",
  "세례명 영문: 디오니시오(축일 10.9, 파리의 성 디오니시오)는 영어권 통용형 Denis로, 루도비꼬는 Louis, 루갈다는 Lutgarde, 대건 안드레아·영주바오로는 각각 Andrew Kim Tae-gon·Paul Hong Yong-ju(호칭은 Fr. Andrew·Fr. Paul)로 옮겼습니다."
 ]
};

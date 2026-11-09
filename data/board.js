// 주보·새 소식 게시판 데이터 (2026-10-29, www.103.or.kr 게시글 기준)
// 실제 운영에서는 게시판(CMS)이 이 내용을 채운다. 로컬 파일로 열리도록 fetch 대신 전역 변수로 둔다.
// bulletins: 최신순. date = 주보 주일, posted = 올린 날, image = 주보 원본(size = 파일 크기), thumb = 목록용 축소본
// news: 고정 글 먼저, 그다음 최신순. cat = 공지 | 공동체 | 앨범 | 영상
//   body 블록: p(문단) | h(소제목) | img(사진) | video(유튜브, poster = 로컬 썸네일) | table(표)
//   moreImages = 원본 글에 더 있는 사진 수(시안에는 일부만 담음, 화면에는 표시하지 않음)
// en: 영문판. 주보 en.title = 그 주일의 공식 영문 전례 명칭(USCCB 독서집·로마 미사 경본), 새 소식 en.title = 영문 제목,
//   p·h 블록 en = 영문 문장, table 블록 en = { caption, head, rows }. 용어는 data/glossary.js 를 따른다.
window.BOARD = {
 "bulletins": [
  {
   "date": "2026-10-25",
   "title": "연중 제30주일",
   "en": {
    "title": "Thirtieth Sunday in Ordinary Time"
   },
   "posted": "2026-10-24",
   "image": {
    "src": "media/board/bulletin/2026-10-25.jpg",
    "w": 1240,
    "h": 1754,
    "size": "562KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-10-25.jpg"
  },
  {
   "date": "2026-10-18",
   "title": "민족들의 복음화를 위한 미사",
   "en": {
    "title": "Mass for the Evangelization of Peoples (World Mission Sunday)"
   },
   "posted": "2026-10-17",
   "image": {
    "src": "media/board/bulletin/2026-10-18.jpg",
    "w": 1240,
    "h": 1754,
    "size": "542KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-10-18.jpg"
  },
  {
   "date": "2026-10-11",
   "title": "연중 제28주일",
   "en": {
    "title": "Twenty-eighth Sunday in Ordinary Time"
   },
   "posted": "2026-10-10",
   "image": {
    "src": "media/board/bulletin/2026-10-11.jpg",
    "w": 1240,
    "h": 1754,
    "size": "582KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-10-11.jpg"
  },
  {
   "date": "2026-10-04",
   "title": "연중 제27주일",
   "en": {
    "title": "Twenty-seventh Sunday in Ordinary Time"
   },
   "posted": "2026-10-03",
   "image": {
    "src": "media/board/bulletin/2026-10-04.jpg",
    "w": 1240,
    "h": 1754,
    "size": "638KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-10-04.jpg"
  },
  {
   "date": "2026-09-27",
   "title": "연중 제26주일",
   "en": {
    "title": "Twenty-sixth Sunday in Ordinary Time"
   },
   "posted": "2026-09-26",
   "image": {
    "src": "media/board/bulletin/2026-09-27.jpg",
    "w": 1240,
    "h": 1754,
    "size": "569KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-09-27.jpg"
  },
  {
   "date": "2026-09-20",
   "title": "성 김대건 안드레아 사제와 성 정하상 바오로와 동료 순교자들 대축일",
   "en": {
    "title": "Solemnity of Saints Andrew Kim Tae-gŏn, Priest, and Paul Chŏng Ha-sang, and Companions, Martyrs"
   },
   "posted": "2026-09-19",
   "image": {
    "src": "media/board/bulletin/2026-09-20.jpg",
    "w": 1240,
    "h": 1754,
    "size": "591KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-09-20.jpg"
  },
  {
   "date": "2026-09-13",
   "title": "연중 제24주일",
   "en": {
    "title": "Twenty-fourth Sunday in Ordinary Time"
   },
   "posted": "2026-09-12",
   "image": {
    "src": "media/board/bulletin/2026-09-13.jpg",
    "w": 1240,
    "h": 1754,
    "size": "664KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-09-13.jpg"
  },
  {
   "date": "2026-09-06",
   "title": "연중 제23주일",
   "en": {
    "title": "Twenty-third Sunday in Ordinary Time"
   },
   "posted": "2026-09-05",
   "image": {
    "src": "media/board/bulletin/2026-09-06.jpg",
    "w": 1240,
    "h": 1754,
    "size": "663KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-09-06.jpg"
  },
  {
   "date": "2026-08-30",
   "title": "연중 제22주일",
   "en": {
    "title": "Twenty-second Sunday in Ordinary Time"
   },
   "posted": "2026-08-29",
   "image": {
    "src": "media/board/bulletin/2026-08-30.jpg",
    "w": 1240,
    "h": 1754,
    "size": "626KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-08-30.jpg"
  },
  {
   "date": "2026-08-23",
   "title": "연중 제21주일",
   "en": {
    "title": "Twenty-first Sunday in Ordinary Time"
   },
   "posted": "2026-08-22",
   "image": {
    "src": "media/board/bulletin/2026-08-23.jpg",
    "w": 1240,
    "h": 1754,
    "size": "603KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-08-23.jpg"
  },
  {
   "date": "2026-08-16",
   "title": "연중 제20주일",
   "en": {
    "title": "Twentieth Sunday in Ordinary Time"
   },
   "posted": "2026-08-16",
   "image": {
    "src": "media/board/bulletin/2026-08-16.jpg",
    "w": 1240,
    "h": 1754,
    "size": "623KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-08-16.jpg"
  },
  {
   "date": "2026-08-09",
   "title": "연중 제19주일",
   "en": {
    "title": "Nineteenth Sunday in Ordinary Time"
   },
   "posted": "2026-08-08",
   "image": {
    "src": "media/board/bulletin/2026-08-09.jpg",
    "w": 1240,
    "h": 1754,
    "size": "665KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-08-09.jpg"
  },
  {
   "date": "2026-08-02",
   "title": "연중 제18주일",
   "en": {
    "title": "Eighteenth Sunday in Ordinary Time"
   },
   "posted": "2026-08-01",
   "image": {
    "src": "media/board/bulletin/2026-08-02.jpg",
    "w": 1240,
    "h": 1754,
    "size": "600KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-08-02.jpg"
  },
  {
   "date": "2026-07-26",
   "title": "연중 제17주일",
   "en": {
    "title": "Seventeenth Sunday in Ordinary Time"
   },
   "posted": "2026-07-25",
   "image": {
    "src": "media/board/bulletin/2026-07-26.jpg",
    "w": 1240,
    "h": 1754,
    "size": "649KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-07-26.jpg"
  },
  {
   "date": "2026-07-19",
   "title": "연중 제16주일",
   "en": {
    "title": "Sixteenth Sunday in Ordinary Time"
   },
   "posted": "2026-07-18",
   "image": {
    "src": "media/board/bulletin/2026-07-19.jpg",
    "w": 1240,
    "h": 1754,
    "size": "591KB"
   },
   "thumb": "media/board/bulletin/thumb/2026-07-19.jpg"
  }
 ],
 "news": [
  {
   "id": "notice-1",
   "cat": "공지",
   "pinned": true,
   "title": "미사 시간 변경 안내 (8월 1일부터)",
   "en": {
    "title": "Mass Schedule Change (Effective August 1)"
   },
   "date": "2026-07-06",
   "author": "성산동성당",
   "cover": null,
   "body": [
    {
     "type": "p",
     "text": "8월 1일부터 토요일과 주일 미사 시간이 다음과 같이 바뀌었습니다.",
     "en": "Beginning August 1, Saturday and Sunday Mass times have changed as follows."
    },
    {
     "type": "table",
     "caption": "바뀐 미사 시간",
     "head": [
      "구분",
      "변경 전",
      "변경 후"
     ],
     "rows": [
      [
       "토요일",
       "10:00 · 15:00 · 18:00",
       "10:00 · 18:00"
      ],
      [
       "주일",
       "06:00 · 09:00 · 11:00 · 18:00",
       "08:30 · 10:30 · 15:00 · 18:00"
      ]
     ],
     "en": {
      "caption": "New Mass Times",
      "head": [
       "Day",
       "Previous",
       "New"
      ],
      "rows": [
       [
        "Saturday",
        "10:00 a.m. · 3:00 p.m. · 6:00 p.m.",
        "10:00 a.m. · 6:00 p.m."
       ],
       [
        "Sunday",
        "6:00 a.m. · 9:00 a.m. · 11:00 a.m. · 6:00 p.m.",
        "8:30 a.m. · 10:30 a.m. · 3:00 p.m. · 6:00 p.m."
       ]
      ]
     }
    },
    {
     "type": "p",
     "text": "토요일 오후 3시 어린이미사는 주일 오후 3시 가정미사로 옮겼습니다.",
     "en": "The Saturday 3 p.m. Children’s Mass has moved to Sunday at 3 p.m. as the Family Mass."
    },
    {
     "type": "p",
     "text": "주일 오전 10시 30분 미사는 교중미사로 봉헌합니다.",
     "en": "The Sunday 10:30 a.m. Mass is now celebrated as the Parish Mass."
    },
    {
     "type": "p",
     "text": "신자 여러분의 너그러운 양해를 부탁드립니다.",
     "en": "Thank you for your patience and understanding."
    }
   ]
  },
  {
   "id": "board17-21",
   "cat": "공동체",
   "title": "2026년 2지구 초등부 공동체 미사 및 백일장",
   "en": {
    "title": "2026 Deanery 2 Elementary Community Mass and Writing Contest"
   },
   "date": "2026-10-27",
   "author": "윤창희",
   "cover": "media/board/news/board17-21/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-21/01.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/02.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/03.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/04.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/05.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/06.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/07.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-21/08.jpg",
     "w": 1280,
     "h": 853
    }
   ]
  },
  {
   "id": "board17-20",
   "cat": "공동체",
   "title": "연령회 월례 회합",
   "en": {
    "title": "Funeral Ministry Monthly Meeting"
   },
   "date": "2026-10-26",
   "author": "윤창희",
   "cover": "media/board/news/board17-20/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-20/01.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-20/02.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-20/03.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-20/04.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-20/05.jpg",
     "w": 960,
     "h": 1280
    },
    {
     "type": "img",
     "src": "media/board/news/board17-20/06.jpg",
     "w": 960,
     "h": 1280
    }
   ]
  },
  {
   "id": "board17-19",
   "cat": "공동체",
   "title": "2026년 10월 산사랑 둘레길",
   "en": {
    "title": "October 2026 Sansarang Trail Walk"
   },
   "date": "2026-10-25",
   "author": "윤창희",
   "cover": "media/board/news/board17-19/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-19/01.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/02.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/03.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/04.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/05.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/06.jpg",
     "w": 960,
     "h": 1280
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/07.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-19/08.jpg",
     "w": 1280,
     "h": 960
    }
   ]
  },
  {
   "id": "board17-14",
   "cat": "공동체",
   "title": "2026년 본당의 날 (어울림 마당) #1",
   "en": {
    "title": "2026 Parish Day: Eoullim Madang Community Festival #1"
   },
   "date": "2026-10-23",
   "author": "윤창희",
   "cover": "media/board/news/board17-14/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-14/01.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/02.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/03.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/04.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/05.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/06.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/07.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-14/08.jpg",
     "w": 1280,
     "h": 853
    }
   ]
  },
  {
   "id": "news-91",
   "cat": "영상",
   "title": "2026년도 본당의 날 (어울림 마당) 사진 영상",
   "en": {
    "title": "2026 Parish Day: Eoullim Madang Community Festival (Photo Video)"
   },
   "date": "2026-10-22",
   "author": "윤창희",
   "cover": "media/board/news/news-91/cover.jpg",
   "body": [
    {
     "type": "video",
     "youtube": "ZITdSWNOfAM",
     "poster": "media/board/news/news-91/yt.jpg",
     "w": 1280,
     "h": 720
    }
   ]
  },
  {
   "id": "board17-13",
   "cat": "공동체",
   "title": "2026년도 성산동 성당 어린이와 가족 모두가 함께 하는 묵주기도",
   "en": {
    "title": "2026 Rosary for Children and Families at Seongsan-dong Catholic Church"
   },
   "date": "2026-10-12",
   "author": "윤창희",
   "cover": "media/board/news/board17-13/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-13/01.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/02.jpg",
     "w": 960,
     "h": 1280
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/03.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/04.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/05.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/06.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/07.jpg",
     "w": 960,
     "h": 1280
    },
    {
     "type": "img",
     "src": "media/board/news/board17-13/08.jpg",
     "w": 1280,
     "h": 960
    }
   ]
  },
  {
   "id": "board13-1100",
   "cat": "앨범",
   "title": "2026년 사순특강 : 신앙과 사순시기 (수녀 김혜윤 베아트릭스)",
   "en": {
    "title": "2026 Lenten Talk: Faith and the Season of Lent (Sr. Beatrix Kim)"
   },
   "date": "2026-10-09",
   "author": "윤창희",
   "cover": "media/board/news/board13-1100/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board13-1100/01.jpg",
     "w": 1280,
     "h": 786
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1100/02.jpg",
     "w": 1280,
     "h": 1000
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1100/03.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1100/04.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1100/05.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1100/06.jpg",
     "w": 1280,
     "h": 853
    }
   ]
  },
  {
   "id": "board13-1099",
   "cat": "앨범",
   "title": "2026년 십자가의 길",
   "en": {
    "title": "2026 Stations of the Cross"
   },
   "date": "2026-10-09",
   "author": "윤창희",
   "cover": "media/board/news/board13-1099/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board13-1099/01.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/02.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/03.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/04.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/05.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/06.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/07.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board13-1099/08.jpg",
     "w": 1280,
     "h": 853
    }
   ]
  },
  {
   "id": "board17-11",
   "cat": "공동체",
   "title": "2026년 예비자 성지 순례",
   "en": {
    "title": "2026 Catechumens’ Shrine Pilgrimage"
   },
   "date": "2026-10-08",
   "author": "윤창희",
   "cover": "media/board/news/board17-11/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-11/01.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-11/02.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-11/03.jpg",
     "w": 1280,
     "h": 960
    },
    {
     "type": "img",
     "src": "media/board/news/board17-11/04.jpg",
     "w": 960,
     "h": 1280
    }
   ]
  },
  {
   "id": "board17-10",
   "cat": "공동체",
   "title": "23대 사목회 워크숍",
   "en": {
    "title": "23rd Parish Pastoral Council Workshop"
   },
   "date": "2026-10-08",
   "author": "윤창희",
   "cover": "media/board/news/board17-10/cover.jpg",
   "body": [
    {
     "type": "img",
     "src": "media/board/news/board17-10/01.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-10/02.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-10/03.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-10/04.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-10/05.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-10/06.jpg",
     "w": 1280,
     "h": 853
    },
    {
     "type": "img",
     "src": "media/board/news/board17-10/07.jpg",
     "w": 1280,
     "h": 853
    }
   ]
  },
  {
   "id": "news-90",
   "cat": "영상",
   "title": "2026년도 WYD 세계청년대회 합동 봉헌식 영상",
   "en": {
    "title": "2026 World Youth Day (WYD) Joint Dedication Ceremony (Video)"
   },
   "date": "2026-10-06",
   "author": "윤창희",
   "cover": "media/board/news/news-90/cover.jpg",
   "body": [
    {
     "type": "video",
     "youtube": "tnaBYJjfMXA",
     "poster": "media/board/news/news-90/yt.jpg",
     "w": 1280,
     "h": 720
    }
   ]
  },
  {
   "id": "news-88",
   "cat": "영상",
   "title": "2026년 성모승천대축일 영세식 영상",
   "en": {
    "title": "2026 Baptisms on the Solemnity of the Assumption (Video)"
   },
   "date": "2026-10-06",
   "author": "윤창희",
   "cover": "media/board/news/news-88/cover.jpg",
   "body": [
    {
     "type": "video",
     "youtube": "s1nbmhKhiho",
     "poster": "media/board/news/news-88/yt.jpg",
     "w": 1280,
     "h": 720
    }
   ]
  },
  {
   "id": "board17-9",
   "cat": "공동체",
   "title": "교육분과 활동",
   "en": {
    "title": "Formation Committee Activities"
   },
   "date": "2026-10-06",
   "author": "윤창희",
   "cover": "media/board/news/board17-9/cover.jpg",
   "body": [
    {
     "type": "h",
     "text": "1. 성서못자리나눔터",
     "en": "1. Bible Seedbed (Seongseo Motjari) Sharing Group"
    },
    {
     "type": "img",
     "src": "media/board/news/board17-9/01.jpg",
     "w": 1280,
     "h": 576
    },
    {
     "type": "img",
     "src": "media/board/news/board17-9/02.jpg",
     "w": 1280,
     "h": 721
    },
    {
     "type": "h",
     "text": "2. 성지순례회",
     "en": "2. Pilgrimage Society"
    },
    {
     "type": "img",
     "src": "media/board/news/board17-9/03.jpg",
     "w": 1280,
     "h": 721
    },
    {
     "type": "h",
     "text": "3. 가톨릭성서모임",
     "en": "3. Catholic Bible Study Group"
    },
    {
     "type": "img",
     "src": "media/board/news/board17-9/04.jpg",
     "w": 812,
     "h": 1280
    },
    {
     "type": "h",
     "text": "4. 훌라댄스 동아리",
     "en": "4. Hula Dance Club"
    },
    {
     "type": "img",
     "src": "media/board/news/board17-9/05.jpg",
     "w": 1280,
     "h": 576
    },
    {
     "type": "h",
     "text": "5. 오카리나 동아리",
     "en": "5. Ocarina Club"
    },
    {
     "type": "img",
     "src": "media/board/news/board17-9/06.jpg",
     "w": 1280,
     "h": 960
    }
   ]
  }
 ]
};
const MATCHES = [
  {
    "id": "2026-11-24",
    "month": "2026-11",
    "round": "1R",
    "dateStr": "11.24(화) 19:00",
    "matchDateTime": "2026-11-24T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "GS칼텍스",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "11.17(화) 10:00",
        "tier": "BLACK",
        "dt": "2026-11-17T10:00:00+09:00"
      },
      {
        "time": "11.17(화) 15:00",
        "tier": "RED",
        "dt": "2026-11-17T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "11.19(목) 11:00",
      "dt": "2026-11-19T11:00:00+09:00"
    }
  },
  {
    "id": "2026-11-26",
    "month": "2026-11",
    "round": "2R",
    "dateStr": "11.26(목) 19:00",
    "matchDateTime": "2026-11-26T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "SOOP",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "11.19(목) 11:00",
        "tier": "힐스/테리",
        "dt": "2026-11-19T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "11.21(토) 11:00",
      "dt": "2026-11-21T11:00:00+09:00"
    }
  },
  {
    "id": "2026-11-28",
    "month": "2026-11",
    "round": "2R",
    "dateStr": "11.28(토) 16:00",
    "matchDateTime": "2026-11-28T16:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "IBK기업은행",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "11.21(토) 10:00",
        "tier": "BLACK",
        "dt": "2026-11-21T10:00:00+09:00"
      },
      {
        "time": "11.21(토) 15:00",
        "tier": "RED",
        "dt": "2026-11-21T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "11.23(월) 11:00",
      "dt": "2026-11-23T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-01",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.1(화) 19:00",
    "matchDateTime": "2026-12-01T19:00:00+09:00",
    "venue": "인천삼산월드체육관",
    "home": "흥국생명",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "11.24(화) 14:00",
        "tier": "퍼플/핑크",
        "dt": "2026-11-24T14:00:00+09:00"
      },
      {
        "time": "11.24(화) 16:00",
        "tier": "선예매권",
        "dt": "2026-11-24T16:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "11.26(목) 14:00",
      "dt": "2026-11-26T14:00:00+09:00"
    }
  },
  {
    "id": "2026-12-02",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.2(수) 19:00",
    "matchDateTime": "2026-12-02T19:00:00+09:00",
    "venue": "김천실내체육관",
    "home": "한국도로공사",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "11.25(수) 11:00",
        "tier": "PRESTIGE/엘리트",
        "dt": "2026-11-25T11:00:00+09:00"
      },
      {
        "time": "11.25(수) 13:00",
        "tier": "라이트",
        "dt": "2026-11-25T13:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "11.27(금) 11:00",
      "dt": "2026-11-27T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-05",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.5(토) 16:00",
    "matchDateTime": "2026-12-05T16:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "현대건설",
    "isBigMatch": true,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "11.28(토) 10:00",
        "tier": "BLACK",
        "dt": "2026-11-28T10:00:00+09:00"
      },
      {
        "time": "11.28(토) 15:00",
        "tier": "RED",
        "dt": "2026-11-28T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "11.30(월) 11:00",
      "dt": "2026-11-30T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-09",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.9(수) 19:00",
    "matchDateTime": "2026-12-09T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "SOOP",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.2(수) 10:00",
        "tier": "BLACK",
        "dt": "2026-12-02T10:00:00+09:00"
      },
      {
        "time": "12.2(수) 15:00",
        "tier": "RED",
        "dt": "2026-12-02T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.4(금) 11:00",
      "dt": "2026-12-04T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-10",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.10(목) 19:00",
    "matchDateTime": "2026-12-10T19:00:00+09:00",
    "venue": "서울장충체육관",
    "home": "GS칼텍스",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.3(목) 15:00",
        "tier": "골드",
        "dt": "2026-12-03T15:00:00+09:00"
      },
      {
        "time": "12.5(토) 12:00",
        "tier": "실버",
        "dt": "2026-12-05T12:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.5(토) 15:00",
      "dt": "2026-12-05T15:00:00+09:00"
    }
  },
  {
    "id": "2026-12-13",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.13(일) 16:00",
    "matchDateTime": "2026-12-13T16:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "GS칼텍스",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.6(일) 10:00",
        "tier": "BLACK",
        "dt": "2026-12-06T10:00:00+09:00"
      },
      {
        "time": "12.6(일) 15:00",
        "tier": "RED",
        "dt": "2026-12-06T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.8(화) 11:00",
      "dt": "2026-12-08T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-15",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.15(화) 19:00",
    "matchDateTime": "2026-12-15T19:00:00+09:00",
    "venue": "김천실내체육관",
    "home": "한국도로공사",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.8(화) 11:00",
        "tier": "PRESTIGE/엘리트",
        "dt": "2026-12-08T11:00:00+09:00"
      },
      {
        "time": "12.8(화) 13:00",
        "tier": "라이트",
        "dt": "2026-12-08T13:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.10(목) 11:00",
      "dt": "2026-12-10T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-16",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.16(수) 19:00",
    "matchDateTime": "2026-12-16T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "흥국생명",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.9(수) 10:00",
        "tier": "BLACK",
        "dt": "2026-12-09T10:00:00+09:00"
      },
      {
        "time": "12.9(수) 15:00",
        "tier": "RED",
        "dt": "2026-12-09T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.11(금) 11:00",
      "dt": "2026-12-11T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-18",
    "month": "2026-12",
    "round": "2R",
    "dateStr": "12.18(금) 19:00",
    "matchDateTime": "2026-12-18T19:00:00+09:00",
    "venue": "화성종합실내체육관",
    "home": "IBK기업은행",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.11(금) 11:00",
        "tier": "SPECIAL/BASIC",
        "dt": "2026-12-11T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.13(일) 11:00",
      "dt": "2026-12-13T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-20",
    "month": "2026-12",
    "round": "3R",
    "dateStr": "12.20(일) 16:00",
    "matchDateTime": "2026-12-20T16:00:00+09:00",
    "venue": "숲 스타디움",
    "home": "SOOP",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": true,
    "preSales": [
      {
        "time": "12.13(일) 12:00",
        "tier": "스타",
        "dt": "2026-12-13T12:00:00+09:00"
      },
      {
        "time": "12.13(일) 15:00",
        "tier": "루키",
        "dt": "2026-12-13T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.15(화) 11:00",
      "dt": "2026-12-15T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-23",
    "month": "2026-12",
    "round": "3R",
    "dateStr": "12.23(수) 19:00",
    "matchDateTime": "2026-12-23T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "IBK기업은행",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.16(수) 11:00",
        "tier": "힐스/테리",
        "dt": "2026-12-16T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.18(금) 11:00",
      "dt": "2026-12-18T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-25",
    "month": "2026-12",
    "round": "3R",
    "dateStr": "12.25(금) 16:00",
    "matchDateTime": "2026-12-25T16:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "GS칼텍스",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.18(금) 10:00",
        "tier": "BLACK",
        "dt": "2026-12-18T10:00:00+09:00"
      },
      {
        "time": "12.18(금) 15:00",
        "tier": "RED",
        "dt": "2026-12-18T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.20(일) 11:00",
      "dt": "2026-12-20T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-27",
    "month": "2026-12",
    "round": "3R",
    "dateStr": "12.27(일) 16:00",
    "matchDateTime": "2026-12-27T16:00:00+09:00",
    "venue": "숲 스타디움",
    "home": "SOOP",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.20(일) 12:00",
        "tier": "스타",
        "dt": "2026-12-20T12:00:00+09:00"
      },
      {
        "time": "12.20(일) 15:00",
        "tier": "루키",
        "dt": "2026-12-20T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.22(화) 11:00",
      "dt": "2026-12-22T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-30",
    "month": "2026-12",
    "round": "3R",
    "dateStr": "12.30(수) 19:00",
    "matchDateTime": "2026-12-30T19:00:00+09:00",
    "venue": "화성종합실내체육관",
    "home": "IBK기업은행",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.23(수) 11:00",
        "tier": "SPECIAL/BASIC",
        "dt": "2026-12-23T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.25(금) 11:00",
      "dt": "2026-12-25T11:00:00+09:00"
    }
  },
  {
    "id": "2026-12-31",
    "month": "2026-12",
    "round": "3R",
    "dateStr": "12.31(목) 19:00",
    "matchDateTime": "2026-12-31T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "한국도로공사",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.24(목) 11:00",
        "tier": "힐스/테리",
        "dt": "2026-12-24T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.26(토) 11:00",
      "dt": "2026-12-26T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-03",
    "month": "2027-01",
    "round": "3R",
    "dateStr": "1.3(일) 16:00",
    "matchDateTime": "2027-01-03T16:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "정관장",
    "isBigMatch": true,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.27(일) 11:00",
        "tier": "힐스/테리",
        "dt": "2026-12-27T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "12.29(화) 11:00",
      "dt": "2026-12-29T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-07",
    "month": "2027-01",
    "round": "3R",
    "dateStr": "1.7(목) 19:00",
    "matchDateTime": "2027-01-07T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "흥국생명",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "12.31(목) 11:00",
        "tier": "힐스/테리",
        "dt": "2026-12-31T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.2(토) 11:00",
      "dt": "2027-01-02T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-08",
    "month": "2027-01",
    "round": "3R",
    "dateStr": "1.8(금) 19:00",
    "matchDateTime": "2027-01-08T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "한국도로공사",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.1(금) 10:00",
        "tier": "BLACK",
        "dt": "2027-01-01T10:00:00+09:00"
      },
      {
        "time": "1.1(금) 15:00",
        "tier": "RED",
        "dt": "2027-01-01T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.3(일) 11:00",
      "dt": "2027-01-03T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-10",
    "month": "2027-01",
    "round": "3R",
    "dateStr": "1.10(일) 16:00",
    "matchDateTime": "2027-01-10T16:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "GS칼텍스",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.3(일) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-01-03T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.5(화) 11:00",
      "dt": "2027-01-05T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-12",
    "month": "2027-01",
    "round": "3R",
    "dateStr": "1.12(화) 19:00",
    "matchDateTime": "2027-01-12T19:00:00+09:00",
    "venue": "인천삼산월드체육관",
    "home": "흥국생명",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.5(화) 14:00",
        "tier": "퍼플/핑크",
        "dt": "2027-01-05T14:00:00+09:00"
      },
      {
        "time": "1.5(화) 16:00",
        "tier": "선예매권",
        "dt": "2027-01-05T16:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.7(목) 14:00",
      "dt": "2027-01-07T14:00:00+09:00"
    }
  },
  {
    "id": "2027-01-21",
    "month": "2027-01",
    "round": "4R",
    "dateStr": "1.21(목) 19:00",
    "matchDateTime": "2027-01-21T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "흥국생명",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.14(목) 10:00",
        "tier": "BLACK",
        "dt": "2027-01-14T10:00:00+09:00"
      },
      {
        "time": "1.14(목) 15:00",
        "tier": "RED",
        "dt": "2027-01-14T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.16(토) 11:00",
      "dt": "2027-01-16T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-23",
    "month": "2027-01",
    "round": "4R",
    "dateStr": "1.23(토) 16:00",
    "matchDateTime": "2027-01-23T16:00:00+09:00",
    "venue": "서울장충체육관",
    "home": "GS칼텍스",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.16(토) 15:00",
        "tier": "골드",
        "dt": "2027-01-16T15:00:00+09:00"
      },
      {
        "time": "1.18(월) 12:00",
        "tier": "실버",
        "dt": "2027-01-18T12:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.18(월) 15:00",
      "dt": "2027-01-18T15:00:00+09:00"
    }
  },
  {
    "id": "2027-01-25",
    "month": "2027-01",
    "round": "4R",
    "dateStr": "1.25(월) 19:00",
    "matchDateTime": "2027-01-25T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "SOOP",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.18(월) 10:00",
        "tier": "BLACK",
        "dt": "2027-01-18T10:00:00+09:00"
      },
      {
        "time": "1.18(월) 15:00",
        "tier": "RED",
        "dt": "2027-01-18T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.20(수) 11:00",
      "dt": "2027-01-20T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-26",
    "month": "2027-01",
    "round": "4R",
    "dateStr": "1.26(화) 19:00",
    "matchDateTime": "2027-01-26T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "IBK기업은행",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.19(화) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-01-19T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.21(목) 11:00",
      "dt": "2027-01-21T11:00:00+09:00"
    }
  },
  {
    "id": "2027-01-28",
    "month": "2027-01",
    "round": "4R",
    "dateStr": "1.28(목) 19:00",
    "matchDateTime": "2027-01-28T19:00:00+09:00",
    "venue": "서울장충체육관",
    "home": "GS칼텍스",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.21(목) 15:00",
        "tier": "골드",
        "dt": "2027-01-21T15:00:00+09:00"
      },
      {
        "time": "1.23(토) 12:00",
        "tier": "실버",
        "dt": "2027-01-23T12:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.23(토) 15:00",
      "dt": "2027-01-23T15:00:00+09:00"
    }
  },
  {
    "id": "2027-01-30",
    "month": "2027-01",
    "round": "4R",
    "dateStr": "1.30(토) 16:00",
    "matchDateTime": "2027-01-30T16:00:00+09:00",
    "venue": "인천삼산월드체육관",
    "home": "흥국생명",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.23(토) 14:00",
        "tier": "퍼플/핑크",
        "dt": "2027-01-23T14:00:00+09:00"
      },
      {
        "time": "1.23(토) 16:00",
        "tier": "선예매권",
        "dt": "2027-01-23T16:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.25(월) 14:00",
      "dt": "2027-01-25T14:00:00+09:00"
    }
  },
  {
    "id": "2027-02-01",
    "month": "2027-02",
    "round": "4R",
    "dateStr": "2.1(월) 19:00",
    "matchDateTime": "2027-02-01T19:00:00+09:00",
    "venue": "김천실내체육관",
    "home": "한국도로공사",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.25(월) 11:00",
        "tier": "PRESTIGE/엘리트",
        "dt": "2027-01-25T11:00:00+09:00"
      },
      {
        "time": "1.25(월) 13:00",
        "tier": "라이트",
        "dt": "2027-01-25T13:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.27(수) 11:00",
      "dt": "2027-01-27T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-04",
    "month": "2027-02",
    "round": "4R",
    "dateStr": "2.4(목) 19:00",
    "matchDateTime": "2027-02-04T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "IBK기업은행",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.28(목) 10:00",
        "tier": "BLACK",
        "dt": "2027-01-28T10:00:00+09:00"
      },
      {
        "time": "1.28(목) 15:00",
        "tier": "RED",
        "dt": "2027-01-28T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.30(토) 11:00",
      "dt": "2027-01-30T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-05",
    "month": "2027-02",
    "round": "4R",
    "dateStr": "2.5(금) 19:00",
    "matchDateTime": "2027-02-05T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "SOOP",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "1.29(금) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-01-29T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "1.31(일) 11:00",
      "dt": "2027-01-31T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-08",
    "month": "2027-02",
    "round": "4R",
    "dateStr": "2.8(월) 16:00",
    "matchDateTime": "2027-02-08T16:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "정관장",
    "isBigMatch": true,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.1(월) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-02-01T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.3(수) 11:00",
      "dt": "2027-02-03T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-12",
    "month": "2027-02",
    "round": "4R",
    "dateStr": "2.12(금) 19:00",
    "matchDateTime": "2027-02-12T19:00:00+09:00",
    "venue": "김천실내체육관",
    "home": "한국도로공사",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.5(금) 11:00",
        "tier": "PRESTIGE/엘리트",
        "dt": "2027-02-05T11:00:00+09:00"
      },
      {
        "time": "2.5(금) 13:00",
        "tier": "라이트",
        "dt": "2027-02-05T13:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.7(일) 11:00",
      "dt": "2027-02-07T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-14",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.14(일) 16:00",
    "matchDateTime": "2027-02-14T16:00:00+09:00",
    "venue": "인천삼산월드체육관",
    "home": "흥국생명",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.7(일) 14:00",
        "tier": "퍼플/핑크",
        "dt": "2027-02-07T14:00:00+09:00"
      },
      {
        "time": "2.7(일) 16:00",
        "tier": "선예매권",
        "dt": "2027-02-07T16:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.9(화) 14:00",
      "dt": "2027-02-09T14:00:00+09:00"
    }
  },
  {
    "id": "2027-02-17",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.17(수) 19:00",
    "matchDateTime": "2027-02-17T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "현대건설",
    "isBigMatch": true,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.10(수) 10:00",
        "tier": "BLACK",
        "dt": "2027-02-10T10:00:00+09:00"
      },
      {
        "time": "2.10(수) 15:00",
        "tier": "RED",
        "dt": "2027-02-10T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.12(금) 11:00",
      "dt": "2027-02-12T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-20",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.20(토) 16:00",
    "matchDateTime": "2027-02-20T16:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "GS칼텍스",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.13(토) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-02-13T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.15(월) 11:00",
      "dt": "2027-02-15T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-21",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.21(일) 16:00",
    "matchDateTime": "2027-02-21T16:00:00+09:00",
    "venue": "화성종합실내체육관",
    "home": "IBK기업은행",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.14(일) 11:00",
        "tier": "SPECIAL/BASIC",
        "dt": "2027-02-14T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.16(화) 11:00",
      "dt": "2027-02-16T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-24",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.24(수) 19:00",
    "matchDateTime": "2027-02-24T19:00:00+09:00",
    "venue": "숲 스타디움",
    "home": "SOOP",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.17(수) 12:00",
        "tier": "스타",
        "dt": "2027-02-17T12:00:00+09:00"
      },
      {
        "time": "2.17(수) 15:00",
        "tier": "루키",
        "dt": "2027-02-17T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.19(금) 11:00",
      "dt": "2027-02-19T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-26",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.26(금) 19:00",
    "matchDateTime": "2027-02-26T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "한국도로공사",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.19(금) 10:00",
        "tier": "BLACK",
        "dt": "2027-02-19T10:00:00+09:00"
      },
      {
        "time": "2.19(금) 15:00",
        "tier": "RED",
        "dt": "2027-02-19T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.21(일) 11:00",
      "dt": "2027-02-21T11:00:00+09:00"
    }
  },
  {
    "id": "2027-02-28",
    "month": "2027-02",
    "round": "5R",
    "dateStr": "2.28(일) 16:00",
    "matchDateTime": "2027-02-28T16:00:00+09:00",
    "venue": "화성종합실내체육관",
    "home": "IBK기업은행",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.21(일) 11:00",
        "tier": "SPECIAL/BASIC",
        "dt": "2027-02-21T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.23(화) 11:00",
      "dt": "2027-02-23T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-01",
    "month": "2027-03",
    "round": "5R",
    "dateStr": "3.1(월) 16:00",
    "matchDateTime": "2027-03-01T16:00:00+09:00",
    "venue": "서울장충체육관",
    "home": "GS칼텍스",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.22(월) 15:00",
        "tier": "골드",
        "dt": "2027-02-22T15:00:00+09:00"
      },
      {
        "time": "2.24(수) 12:00",
        "tier": "실버",
        "dt": "2027-02-24T12:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.24(수) 15:00",
      "dt": "2027-02-24T15:00:00+09:00"
    }
  },
  {
    "id": "2027-03-03",
    "month": "2027-03",
    "round": "5R",
    "dateStr": "3.3(수) 19:00",
    "matchDateTime": "2027-03-03T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "흥국생명",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.24(수) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-02-24T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.26(금) 11:00",
      "dt": "2027-02-26T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-05",
    "month": "2027-03",
    "round": "5R",
    "dateStr": "3.5(금) 19:00",
    "matchDateTime": "2027-03-05T19:00:00+09:00",
    "venue": "숲 스타디움",
    "home": "SOOP",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.26(금) 12:00",
        "tier": "스타",
        "dt": "2027-02-26T12:00:00+09:00"
      },
      {
        "time": "2.26(금) 15:00",
        "tier": "루키",
        "dt": "2027-02-26T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "2.28(일) 11:00",
      "dt": "2027-02-28T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-07",
    "month": "2027-03",
    "round": "5R",
    "dateStr": "3.7(일) 16:00",
    "matchDateTime": "2027-03-07T16:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "한국도로공사",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "2.28(일) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-02-28T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.2(화) 11:00",
      "dt": "2027-03-02T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-10",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.10(수) 19:00",
    "matchDateTime": "2027-03-10T19:00:00+09:00",
    "venue": "서울장충체육관",
    "home": "GS칼텍스",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.3(수) 15:00",
        "tier": "골드",
        "dt": "2027-03-03T15:00:00+09:00"
      },
      {
        "time": "3.5(금) 12:00",
        "tier": "실버",
        "dt": "2027-03-05T12:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.5(금) 15:00",
      "dt": "2027-03-05T15:00:00+09:00"
    }
  },
  {
    "id": "2027-03-11",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.11(목) 19:00",
    "matchDateTime": "2027-03-11T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "흥국생명",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.4(목) 10:00",
        "tier": "BLACK",
        "dt": "2027-03-04T10:00:00+09:00"
      },
      {
        "time": "3.4(목) 15:00",
        "tier": "RED",
        "dt": "2027-03-04T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.6(토) 11:00",
      "dt": "2027-03-06T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-14",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.14(일) 16:00",
    "matchDateTime": "2027-03-14T16:00:00+09:00",
    "venue": "인천삼산월드체육관",
    "home": "흥국생명",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.7(일) 14:00",
        "tier": "퍼플/핑크",
        "dt": "2027-03-07T14:00:00+09:00"
      },
      {
        "time": "3.7(일) 16:00",
        "tier": "선예매권",
        "dt": "2027-03-07T16:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.9(화) 14:00",
      "dt": "2027-03-09T14:00:00+09:00"
    }
  },
  {
    "id": "2027-03-17",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.17(수) 19:00",
    "matchDateTime": "2027-03-17T19:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "IBK기업은행",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.10(수) 10:00",
        "tier": "BLACK",
        "dt": "2027-03-10T10:00:00+09:00"
      },
      {
        "time": "3.10(수) 15:00",
        "tier": "RED",
        "dt": "2027-03-10T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.12(금) 11:00",
      "dt": "2027-03-12T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-19",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.19(금) 19:00",
    "matchDateTime": "2027-03-19T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "SOOP",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.12(금) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-03-12T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.14(일) 11:00",
      "dt": "2027-03-14T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-20",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.20(토) 16:00",
    "matchDateTime": "2027-03-20T16:00:00+09:00",
    "venue": "김천실내체육관",
    "home": "한국도로공사",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.13(토) 11:00",
        "tier": "PRESTIGE/엘리트",
        "dt": "2027-03-13T11:00:00+09:00"
      },
      {
        "time": "3.13(토) 13:00",
        "tier": "라이트",
        "dt": "2027-03-13T13:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.15(월) 11:00",
      "dt": "2027-03-15T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-24",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.24(수) 19:00",
    "matchDateTime": "2027-03-24T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "정관장",
    "isBigMatch": true,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.17(수) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-03-17T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.19(금) 11:00",
      "dt": "2027-03-19T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-27",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.27(토) 16:00",
    "matchDateTime": "2027-03-27T16:00:00+09:00",
    "venue": "김천실내체육관",
    "home": "한국도로공사",
    "away": "현대건설",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.20(토) 11:00",
        "tier": "PRESTIGE/엘리트",
        "dt": "2027-03-20T11:00:00+09:00"
      },
      {
        "time": "3.20(토) 13:00",
        "tier": "라이트",
        "dt": "2027-03-20T13:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.22(월) 11:00",
      "dt": "2027-03-22T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-28",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.28(일) 16:00",
    "matchDateTime": "2027-03-28T16:00:00+09:00",
    "venue": "대전충무체육관",
    "home": "정관장",
    "away": "SOOP",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.21(일) 10:00",
        "tier": "BLACK",
        "dt": "2027-03-21T10:00:00+09:00"
      },
      {
        "time": "3.21(일) 15:00",
        "tier": "RED",
        "dt": "2027-03-21T15:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.23(화) 11:00",
      "dt": "2027-03-23T11:00:00+09:00"
    }
  },
  {
    "id": "2027-03-31",
    "month": "2027-03",
    "round": "6R",
    "dateStr": "3.31(수) 19:00",
    "matchDateTime": "2027-03-31T19:00:00+09:00",
    "venue": "서울장충체육관",
    "home": "GS칼텍스",
    "away": "정관장",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.24(수) 15:00",
        "tier": "골드",
        "dt": "2027-03-24T15:00:00+09:00"
      },
      {
        "time": "3.26(금) 12:00",
        "tier": "실버",
        "dt": "2027-03-26T12:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.26(금) 15:00",
      "dt": "2027-03-26T15:00:00+09:00"
    }
  },
  {
    "id": "2027-04-02",
    "month": "2027-04",
    "round": "6R",
    "dateStr": "4.2(금) 19:00",
    "matchDateTime": "2027-04-02T19:00:00+09:00",
    "venue": "수원체육관",
    "home": "현대건설",
    "away": "IBK기업은행",
    "isBigMatch": false,
    "isConfirmed": false,
    "preSales": [
      {
        "time": "3.26(금) 11:00",
        "tier": "힐스/테리",
        "dt": "2027-03-26T11:00:00+09:00"
      }
    ],
    "generalSale": {
      "time": "3.28(일) 11:00",
      "dt": "2027-03-28T11:00:00+09:00"
    }
  }
];

const KEY = "vleague_booked_full_2026";
let bookedIds = [];
try { bookedIds = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { }
const BOOK_URL = "https://kovo.co.kr/tickets/single?gender=2";
const HOME_BOOK_URLS = [
  { home: "정관장", venue: "대전충무체육관", url: "https://facility.ticketlink.co.kr/reserve/product/66564/schedule/sports?teamId=97&menuIndex=reserve" },
  { home: "현대건설", venue: "수원체육관", url: "https://facility.ticketlink.co.kr/reserve/product/66223/schedule/sports?teamId=68&menuIndex=reserve" },
  { home: "GS칼텍스", venue: "서울장충체육관", url: "https://facility.ticketlink.co.kr/reserve/product/66036/schedule/sports?teamId=71&menuIndex=reserve" },
  { home: "SOOP", venue: "숲 스타디움", url: "https://facility.ticketlink.co.kr/reserve/product/66622/schedule/sports?teamId=740&menuIndex=reserve" },
];
const bookUrl = m => (HOME_BOOK_URLS.find(x => x.home === m.home && x.venue === m.venue)?.url || BOOK_URL);
const escAttr = s => s.replace(/&/g, "&amp;");
let teamFilter = "ALL", monthFilter = "ALL";

const OUR = ["정관장", "현대건설"];
const presales = m => (OUR.includes(m.home) ? m.preSales : []);
const MATCH_MS = 2.5 * 36e5; // 경기 시작 후 2시간 30분이 지나면 종료로 본다
const isOver = (m, now) => now.getTime() > new Date(m.matchDateTime).getTime() + MATCH_MS;
let showPast = false;
const visible = () => { const now = new Date(); return MATCHES.filter(m => showPast || !isOver(m, now)); };
const involves = (m, t) => m.home === t || m.away === t;
const TEAM_FILTERS = [
  ["ALL", "전체", () => true],
  ["정관장", "정관장", m => involves(m, "정관장")],
  ["현대건설", "현대건설", m => involves(m, "현대건설")],
  ["BIG", "맞대결", m => m.isBigMatch],
  ["DAEJEON", "대전 홈", m => m.home === "정관장"],
  ["SUWON", "수원 홈", m => m.home === "현대건설"],
];
const teamTest = () => TEAM_FILTERS.find(f => f[0] === teamFilter)[2];
const tag = k => `<span class="tag ${k}">${k === "pre" ? "선예매" : "일반예매"}</span>`;
const homeColor = t => t === "정관장" ? "var(--red)" : t === "현대건설" ? "var(--green)" : "var(--slate)";

function getStatus(m, now) {
  const pre = presales(m), first = pre.length ? new Date(pre[0].dt) : null;
  const gen = new Date(m.generalSale.dt);
  if (isOver(m, now)) return { label: "경기 종료", cls: "s-ended", code: "ENDED" };
  if (now >= gen) return { label: "일반예매 오픈 중", cls: "s-general", code: "GENERAL" };
  if (first && now >= first) {
    const h = (gen - now) / 36e5, rel = h < 24 ? `${Math.max(1, Math.ceil(h))}시간 후` : `D-${Math.ceil(h / 24)}`;
    return { label: `선예매 중 · 일반 ${rel}`, cls: "s-presale", code: "PRESALE" };
  }
  const target = first || gen, h = (target - now) / 36e5, d = Math.ceil(h / 24);
  if (h <= 36) return { label: `${first ? "선예매" : "일반예매"} 임박 D-${Math.max(1, d)}`, cls: "s-soon", code: "SOON" };
  return { label: `${first ? "오픈 예정" : "일반예매 예정"} D-${d}`, cls: "s-upcoming", code: "UPCOMING" };
}

function splitDate(str) {
  const x = /^(\d+\.\d+)\((.)\)\s*(.*)$/.exec(str);
  return x ? { md: x[1], dow: x[2], time: x[3] } : { md: str, dow: "", time: "" };
}
const teamHtml = (name, home) => {
  const c = name === "정관장" ? "r" : name === "현대건설" ? "g" : "";
  return `<div class="team${home ? " home" : ""}"><span class="dot ${c}"></span>${name}${home ? "<i>홈</i>" : ""}</div>`;
};

/* ---------- hero ---------- */
let heroTarget = null;
function upcomingEvents(now) {
  const test = teamTest(), ev = [];
  MATCHES.forEach(m => {
    if (!test(m) || bookedIds.includes(m.id) || isOver(m, now)) return;
    presales(m).forEach(p => ev.push({ dt: new Date(p.dt), kind: "pre", tier: p.tier, time: p.time, m }));
    ev.push({ dt: new Date(m.generalSale.dt), kind: "gen", time: m.generalSale.time, m });
  });
  return ev.filter(e => e.dt > now).sort((a, b) => a.dt - b.dt);
}
function fmtCountdown(ms) {
  let s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const mi = Math.floor(s / 60), se = s - mi * 60, p = n => String(n).padStart(2, "0");
  return (d ? `${d}<small>일</small> ` : "") + `${p(h)}:${p(mi)}:${p(se)}`;
}
function renderHero(now) {
  const el = document.getElementById("hero"), ev = upcomingEvents(now);
  if (!ev.length) {
    heroTarget = null; el.style.removeProperty("--stripe");
    el.innerHTML = `<div class="hero-empty">남은 예매 오픈이 없습니다. 선택한 조건의 모든 경기가 오픈됐거나 예매 완료 처리됐어요.</div>`;
    return;
  }
  const n = ev[0], m = n.m, d = splitDate(m.dateStr);
  heroTarget = n.dt;
  el.style.setProperty("--stripe", homeColor(m.home));
  el.innerHTML = `
    <div class="hero-main">
      <div class="hero-label">다음 예매 오픈까지</div>
      <div class="countdown num" id="cd">${fmtCountdown(n.dt - now)}</div>
      <div class="hero-what">${tag(n.kind)} ${m.home} vs ${m.away}${n.tier ? ` · ${n.tier}` : ""}</div>
      <div class="hero-when">오픈 ${n.time} · 경기 ${d.md}(${d.dow}) ${d.time} · ${m.venue}</div>
      <a class="go" href="${escAttr(bookUrl(m))}" target="_blank" rel="noopener">예매 페이지 열기</a>
    </div>
    <div class="hero-side">
      <h2>이어서 오픈</h2>
      ${ev.slice(1, 4).map(e => `<div class="q"><div><b>${e.m.home} vs ${e.m.away}</b><br>${tag(e.kind)}${e.tier ? ` <b>${e.tier}</b>` : ""}</div><span class="num">${e.time}</span></div>`).join("") || `<div class="q"><span>이후 일정 없음</span></div>`}
    </div>`;
}
function tick() {
  if (!heroTarget) return;
  const ms = heroTarget - new Date();
  if (ms <= 0) { render(); return; }
  const cd = document.getElementById("cd");
  if (cd) cd.innerHTML = fmtCountdown(ms);
}

/* ---------- filters ---------- */
function renderFilters() {
  const vis = visible();
  document.getElementById("team-filters").innerHTML = TEAM_FILTERS.map(([k, label, fn]) =>
    `<button data-team="${k}" aria-pressed="${teamFilter === k}">${label}<em class="num">${vis.filter(fn).length}</em></button>`).join("");
  const months = [...new Set(vis.map(m => m.month))];
  if (monthFilter !== "ALL" && !months.includes(monthFilter)) monthFilter = "ALL";
  const base = vis.filter(teamTest());
  document.getElementById("month-filters").innerHTML =
    `<button data-month="ALL" aria-pressed="${monthFilter === "ALL"}">전체 시즌</button>` +
    months.map(mo => `<button data-month="${mo}" aria-pressed="${monthFilter === mo}">${+mo.slice(5)}월 <span class="num">${base.filter(m => m.month === mo).length}</span></button>`).join("");
}

/* ---------- list ---------- */
function ticket(m, now) {
  const st = getStatus(m, now), booked = bookedIds.includes(m.id), d = splitDate(m.dateStr);
  const row = (label, tier, t, dt, cls) => {
    const past = new Date(dt) <= now;
    return `<div class="sale ${cls}${past ? " past" : ""}${m.isConfirmed ? "" : " est"}"><span class="k">${tag(cls)}${tier ? `<span class="tier">${tier}</span>` : ""}</span><span class="v num">${t}</span></div>`;
  };
  return `<article class="ticket${m.isBigMatch ? " big" : ""}${booked ? " booked" : ""}${st.code === "ENDED" ? " ended" : ""}" style="--home:${homeColor(m.home)}">
    <div class="t-main">
      <div class="t-top">
        <div class="t-date"><b class="num">${d.md}</b><span>${d.dow}요일 ${d.time}</span></div>
        <span class="chip ${st.cls}">${st.label}</span>
      </div>
      <div class="t-teams">${teamHtml(m.home, true)}<span class="vs">vs</span>${teamHtml(m.away, false)}</div>
      <div class="t-meta">${m.isBigMatch ? "두 팀 맞대결 · " : ""}${m.round} · ${m.venue} · ${m.isConfirmed ? "공식 일정" : "예상 일정"}</div>
    </div>
    <div class="t-cut"></div>
    <div class="t-stub">
      ${presales(m).map(p => row("선예매", p.tier, p.time, p.dt, "pre")).join("")}
      ${row("일반예매", "", m.generalSale.time, m.generalSale.dt, "gen")}
      ${presales(m).length ? "" : `<div class="note">원정 경기라 선예매는 표시하지 않아요</div>`}
      <div class="t-act">
        <label><input class="done-cb" type="checkbox" data-id="${m.id}" ${booked ? "checked" : ""}>${booked ? "예매 완료" : "예매했어요"}</label>
        <span class="act-r"><button class="copy" data-copy="${m.id}">일정 복사</button><a class="go" href="${escAttr(bookUrl(m))}" target="_blank" rel="noopener">예매하기</a></span>
      </div>
    </div>
  </article>`;
}

function render() {
  const now = new Date();
  document.getElementById("range").textContent = (() => {
    const a = splitDate(MATCHES[0].dateStr).md, b = splitDate(MATCHES[MATCHES.length - 1].dateStr).md;
    return `(${a} – ${b})`;
  })();
  showPast = document.getElementById("show-past").checked;
  renderHero(now);
  renderFilters();

  let open = 0, soon = 0;
  const vis = visible();
  vis.forEach(m => { const c = getStatus(m, now).code; if (c === "GENERAL" || c === "PRESALE") open++; if (c === "SOON") soon++; });
  document.getElementById("stats").innerHTML =
    `<span><b class="num">${open}</b>경기 예매 가능</span><span><b class="num">${soon}</b>경기 오픈 임박</span><span><b class="num">${vis.filter(m => bookedIds.includes(m.id)).length}/${vis.length}</b>예매 완료</span>`;

  const hide = document.getElementById("hide-booked").checked, test = teamTest();
  const list = vis.filter(m => test(m) && (monthFilter === "ALL" || m.month === monthFilter) && !(hide && bookedIds.includes(m.id)));
  const grid = document.getElementById("match-grid");
  if (!list.length) {
    grid.innerHTML = `<div class="empty">조건에 맞는 경기가 없습니다.<br><button data-reset>필터 초기화</button></div>`;
    return;
  }
  let html = "", cur = "";
  list.forEach(m => {
    if (monthFilter === "ALL" && m.month !== cur) {
      cur = m.month;
      html += `<div class="month-head">${+cur.slice(5)}월<span class="num">${list.filter(x => x.month === cur).length}경기</span></div>`;
    }
    html += ticket(m, now);
  });
  grid.innerHTML = html;
}

/* ---------- actions ---------- */
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("on");
  clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("on"), 2000);
}
function copySchedule(id) {
  const m = MATCHES.find(x => x.id === id); if (!m) return;
  const pre = presales(m).map(p => `- 선예매(${p.tier}): ${p.time}`).join("\n") + (presales(m).length ? "\n" : "");
  const text = `[V-리그 예매 일정 (${m.isConfirmed ? "공식확정" : "예상오픈일"})]\n[${m.round}] ${m.dateStr} | ${m.home}(홈) vs ${m.away}\n장소: ${m.venue}\n${pre}- 일반예매: ${m.generalSale.time}`;
  (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
    .then(() => toast("예매 일정을 복사했습니다"))
    .catch(() => toast("복사하지 못했습니다. 브라우저 권한을 확인하세요"));
}

document.addEventListener("click", e => {
  const t = e.target.closest("[data-team],[data-month],[data-copy],[data-reset]");
  if (!t) return;
  if (t.dataset.team) teamFilter = t.dataset.team;
  else if (t.dataset.month) monthFilter = t.dataset.month;
  else if (t.dataset.copy) return copySchedule(t.dataset.copy);
  else if (t.hasAttribute("data-reset")) { teamFilter = "ALL"; monthFilter = "ALL"; document.getElementById("hide-booked").checked = false; document.getElementById("show-past").checked = false; }
  render();
});
document.addEventListener("change", e => {
  const id = e.target.dataset && e.target.dataset.id;
  if (!id) return;
  bookedIds = e.target.checked ? [...new Set([...bookedIds, id])] : bookedIds.filter(x => x !== id);
  try { localStorage.setItem(KEY, JSON.stringify(bookedIds)); } catch (err) { }
  render();
});
document.getElementById("hide-booked").addEventListener("change", render);
document.getElementById("show-past").addEventListener("change", render);

render();
setInterval(tick, 1000);
// 경기가 끝나는 순간 목록에서 자동으로 빠지도록 30초마다 확인
let lastOver = MATCHES.filter(m => isOver(m, new Date())).length;
setInterval(() => {
  const n = MATCHES.filter(m => isOver(m, new Date())).length;
  if (n !== lastOver) { lastOver = n; render(); }
}, 30000);

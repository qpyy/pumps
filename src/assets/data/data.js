import edition1 from "../images/edition1.png";
import edition2 from "../images/edition2.png";
import edition3 from "../images/edition3.png";

export const pumpsDatabase = [
  {
    category: {
      id: 0,
      name: "Все насосы",
      series: [
        {
          id: 1,
          name: "Серия A",
          image: edition1,
          pumps: [
            {
              id: 1,
              name: "Насос 1",
              q: 12,
              h: 12,
              pumpsCount: 3,
            },
            {
              id: 2,
              name: "Насос 6",
              q: 20,
              h: 18,
              pumpsCount: 4,
            },
            {
              id: 3,
              name: "Насос 11",
              q: 16,
              h: 14,
              pumpsCount: 2,
            },
            {
              id: 4,
              name: "Насос 12",
              q: 18,
              h: 15,
              pumpsCount: 5,
            },
            {
              id: 5,
              name: "Насос 13",
              q: 22,
              h: 20,
              pumpsCount: 3,
            },
          ],
        },
        {
          id: 2,
          name: "Серия B",
          image: edition2,
          pumps: [
            {
              id: 3,
              name: "Насос 2",
              q: 15,
              h: 15,
              pumpsCount: 2,
            },
            {
              id: 4,
              name: "Насос 7",
              q: 25,
              h: 20,
              pumpsCount: 3,
            },
            {
              id: 6,
              name: "Насос 14",
              q: 30,
              h: 25,
              pumpsCount: 4,
            },
            {
              id: 7,
              name: "Насос 15",
              q: 28,
              h: 22,
              pumpsCount: 2,
            },
            {
              id: 8,
              name: "Насос 16",
              q: 24,
              h: 19,
              pumpsCount: 3,
            },
          ],
        },
        {
          id: 3,
          name: "Серия C",
          image: edition3,
          pumps: [
            {
              id: 9,
              name: "Насос 17",
              q: 10,
              h: 10,
              pumpsCount: 1,
            },
            {
              id: 10,
              name: "Насос 18",
              q: 18,
              h: 16,
              pumpsCount: 2,
            },
            {
              id: 11,
              name: "Насос 19",
              q: 14,
              h: 12,
              pumpsCount: 3,
            },
            {
              id: 12,
              name: "Насос 20",
              q: 20,
              h: 18,
              pumpsCount: 4,
            },
            {
              id: 13,
              name: "Насос 21",
              q: 22,
              h: 19,
              pumpsCount: 5,
            },
          ],
        },
      ],
    },
  },
  {
    category: {
      id: 1,
      name: "Водоснабжение",
      series: [
        {
          id: 4,
          name: "Серия D",
          image: edition1,
          pumps: [
            {
              id: 14,
              name: "Насос 22",
              q: 18,
              h: 18,
              pumpsCount: 4,
            },
            {
              id: 15,
              name: "Насос 23",
              q: 22,
              h: 20,
              pumpsCount: 3,
            },
            {
              id: 16,
              name: "Насос 24",
              q: 30,
              h: 25,
              pumpsCount: 5,
            },
            {
              id: 17,
              name: "Насос 25",
              q: 28,
              h: 23,
              pumpsCount: 4,
            },
            {
              id: 18,
              name: "Насос 26",
              q: 24,
              h: 21,
              pumpsCount: 3,
            },
          ],
        },
      ],
    },
  },
  {
    category: {
      id: 2,
      name: "Канализация и водоотведение",
      series: [
        {
          id: 5,
          name: "Серия E",
          image: edition2,
          pumps: [
            {
              id: 19,
              name: "Насос 27",
              q: 18,
              h: 18,
              pumpsCount: 4,
            },
            {
              id: 20,
              name: "Насос 28",
              q: 22,
              h: 20,
              pumpsCount: 3,
            },
            {
              id: 21,
              name: "Насос 29",
              q: 25,
              h: 22,
              pumpsCount: 5,
            },
            {
              id: 22,
              name: "Насос 30",
              q: 28,
              h: 24,
              pumpsCount: 4,
            },
            {
              id: 23,
              name: "Насос 31",
              q: 32,
              h: 26,
              pumpsCount: 6,
            },
          ],
        },
      ],
    },
  },
  {
    category: {
      id: 3,
      name: "Отопление/Кондиционирование",
      series: [
        {
          id: 6,
          name: "Серия F",
          image: edition3,
          pumps: [
            {
              id: 24,
              name: "Насос 32",
              q: 8,
              h: 8,
              pumpsCount: 5,
            },
            {
              id: 25,
              name: "Насос 33",
              q: 14,
              h: 12,
              pumpsCount: 2,
            },
            {
              id: 26,
              name: "Насос 34",
              q: 16,
              h: 14,
              pumpsCount: 3,
            },
            {
              id: 27,
              name: "Насос 35",
              q: 18,
              h: 16,
              pumpsCount: 4,
            },
            {
              id: 28,
              name: "Насос 36",
              q: 22,
              h: 18,
              pumpsCount: 5,
            },
          ],
        },
      ],
    },
  },
];

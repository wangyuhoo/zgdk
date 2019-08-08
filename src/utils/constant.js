export const weeksOptions = [
  {
    "name": "周日",
    "id": "0",
  },
  {
    "name": "周一",
    "id": "1",
  },
  {
    "name": "周二",
    "id": "2",
  },
  {
    "name": "周三",
    "id": "3",
  },
  {
    "name": "周四",
    "id": "4",
  },
  {
    "name": "周五",
    "id": "5",
  },
  {
    "name": "周六",
    "id": "6",
  },
]

export const periodOfTimeOptions = [
  {
    "name": "8:00-18:00(白天)",
    "id": "08:00-18:00",
  },
  {
    "name": "18:00-24:00(晚间)",
    "id": "18:00-24:00",
  },
  {
    "name": "19:30-22:00(黄金段)",
    "id": "19:30-22:00",
  },
  {
    "name": "00:00-24:00(全天)",
    "id": "00:00-24:00",
  },
]

export const cctvOrNotOptions = [
  {
    "name": "央视",
    "id": "cctv",
  },
  {
    "name": "省级卫视",
    "id": "no_cctv",
  },
]

export const rankCctvOrNotOptions = [
  {
    "name": "全部卫视",
    "id": "0",
  },
  {
    "name": "央视",
    "id": "cctv",
  },
  {
    "name": "省级卫视",
    "id": "no_cctv",
  },
]

export const rankStatusOptions = [
  {
    "name": "全部",
    "id": "0",
  },
  {
    "name": "首播",
    "id": "1",
  },
  {
    "name": "重播",
    "id": "2",
  },
]

export const typeOptions = [
  {
    "name": "剧目",
    "id": "jumu",
  },
  {
    "name": "栏目",
    "id": "lanmu",
  },
]

export const jcPlatforms = [
  {
    "name": "爱奇艺",
    "id": "iqy",
  },
  {
    "name": "腾讯",
    "id": "qq",
  },
  {
    "name": "优酷",
    "id": "yk",
  },
  {
    "name": "芒果TV",
    "id": "mg",
  },
]

export const jcTypeOptions = [
  {
    "name": "剧目",
    "id": "teleplay",
  },
  {
    "name": "栏目",
    "id": "variety",
  },
]

export const pickerOptions2 = {
  shortcuts: [{
    text: '最近一周',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      picker.$emit('pick', [start, end]);
    }
  }]
}

const end = new Date();
const start = new Date();
start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
export const defaultDateRange = [start, end]

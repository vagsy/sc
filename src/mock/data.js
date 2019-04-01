import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(5, () => {
    tableData.push(Mock.mock({
      name: '@name',
      email: '@email',
      createTime: '@date'
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}

export const getRuleList = req => {
  return {
    "code": 0,
    "message": "success",
    "data": {
     "rules": [
      {
       "id": "009109c6d345df6121357dfd353df48cec497e49bfd666c7",
       "title": "UC 3小时图文同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "site_id: 14 AND type: 1",
       "spec": "0 0 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-02-02 18:25:31",
       "alerter": [
        {
         "subject": "",
         "text": "UC 3小时内图文比上周同期减少大于50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 10800,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "10f43842c52668fc61b4eb2289d5a6b2f8922fcfa6fd5495",
       "title": "一点资讯3小时视频同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "site_id: 11 AND type: 3",
       "spec": "0 0 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-02-02 18:30:44",
       "alerter": [
        {
         "subject": "",
         "text": "一点资讯3小时内视频比上周同期减少大于50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 10800,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "187124c27113204f63f983b27c6577b789c1cd6b9b2cfbba",
       "title": "今日头条3小时图文同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "site_id: 1 AND type: 1",
       "spec": "0 0 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-02-02 18:22:34",
       "alerter": [
        {
         "subject": "",
         "text": "今日头条3小时内图文比上周同期减少大于50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 10800,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "48d2266794c2c4b878e0c46f855e90db6d00bca736e53d2f",
       "title": "20分钟今日头条图文",
       "type": "FlatLine",
       "service": "index-fish",
       "filter": "site_id: 1 AND type: 1",
       "spec": "0 */10 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-01-31 20:43:37",
       "alerter": [
        {
         "subject": "",
         "text": "20分钟内今日头条图文少于100",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 1200,
       "threshold": 100,
       "flat_line_type": "\u003c"
      },
      {
       "id": "497d44b03e383d33eb942ec3907648ed66ec25048debe68b",
       "title": "天天快报3小时图文同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "site_id: 15 AND type: 1",
       "spec": "0 0 */1 * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-02-01 17:53:24",
       "alerter": [
        {
         "subject": "",
         "text": "天天快报3小时内图文比上周同期减少大于50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 10800,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "49972d81a9aea8ede6788a9cd2c3985a2750ca1b7012dc43",
       "title": "1天文章同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "",
       "spec": "0 0 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-01-31 18:50:52",
       "alerter": [
        {
         "subject": "",
         "text": "1天内文章数比上周同期减少50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc",
          "LiuZhanDong",
          "DuanHaiYang"
         ]
        }
       ],
       "time_frame": 86400,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "840495acc3269ba7ec52493b44f9d5b1341a7d0973d71ad8",
       "title": "一点资讯3小时图文同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "site_id: 11 AND type: 1",
       "spec": "0 0 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-02-02 18:29:24",
       "alerter": [
        {
         "subject": "",
         "text": "一点资讯3小时内图文比上周同期减少大于50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 10800,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "89fdb66db904d03ded81c24d26126f060a4358dff2f3bbfb",
       "title": "置顶文章",
       "type": "FlatLine",
       "service": "index-fish",
       "filter": "site_id:22 AND recommend_event:6",
       "spec": "0 10 9,18 * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-02-03 01:03:49",
       "alerter": [
        {
         "subject": "",
         "text": "20分钟内没有抓取置顶文章",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 1200,
       "threshold": 1,
       "flat_line_type": "\u003c"
      },
      {
       "id": "8fa209ce5bb374a62d26364d66e72cbb3d08f40a1da59137",
       "title": "1小时文章同比上周",
       "type": "PeriodSpike",
       "service": "index-fish",
       "filter": "",
       "spec": "0 0 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-01-31 18:53:28",
       "alerter": [
        {
         "subject": "",
         "text": "1小时内文章数比上周同期减少50%",
         "type": "WeChat",
         "realert": 600,
         "accounts": [
          "cc"
         ]
        }
       ],
       "time_frame": 3600,
       "period": 604800,
       "period_spike_height": 50,
       "period_spike_type": "down"
      },
      {
       "id": "a3cc3b8c478a3ac9d10a7f320f753462cb698cf48c26d609",
       "title": "5分钟文章",
       "type": "FlatLine",
       "service": "index-fish",
       "filter": "",
       "spec": "0 */5 * * * *",
       "last_hit_time": "",
       "last_check_time": "",
       "create_time": "2019-01-22 02:57:37",
       "alerter": [
        {
         "subject": "",
         "text": "5分钟文章少于100",
         "type": "WeChat",
         "realert": 300,
         "accounts": [
          "cc",
          "LiuZhanDong",
          "DuanHaiYang"
         ]
        }
       ],
       "time_frame": 300,
       "threshold": 100,
       "flat_line_type": "\u003c"
      }
     ],
     "total": 15
    }
  }
}

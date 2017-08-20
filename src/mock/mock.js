import Mock from 'mockjs';

var Random = Mock.Random

Random.extend ({
  roomType: function (date) {
    let list = ['标准单人房', '豪华单人房', '商务单人房', '豪华双人套房', '豪华麻将套房']
    return this.pick (list)
  }
})

let rooms = Mock.mock ('http://rooms.cn', {
  'datas|5': [{
    'type': '@roomType',
    'retail': Random.integer(338, 438),
    'rebate': 0.85,
    'tip': '预付立减20元',
    'isFull': '@boolean',
  }],
  'info': {
    'detailed|100': '@cword',
    'locationImg': '@image',
    'location': '@area@region'
  }
})

let system = Mock.mock ('http://system.cn', {
  'remark': '@cparagraph',
  'phone': '400-888-2888'
})


let hotel = Mock.mock ('http://hotel.cn', {
  'name': '维也纳酒店',
  'nickname': '@region',
  'img': '@image',
  'address': 'xxx市xxx区xxx街道xxx号',
  'phone': '400-888-2888',
  'fax': '400-888-2890',
  'services': {
    'isE': '@boolean',
    'isI': '@boolean',
    'isP': '@boolean',
    'isR': '@boolean',
    'isS': '@boolean',
    'isW': '@boolean'
  }
})

let user = Mock.mock ('http://user.cn', {
  name: '@cname',
  phone: /^1[3458][0-9]\d{8}$/,
  isMember: '@boolean'
})


export {rooms, system, hotel, user}

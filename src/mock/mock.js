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
    'location': '@area' + '@region'
  }
})

let system = Mock.mock ('http://system.cn', {
  'remark|200': '@cword',
  'phone': '400-888-2888'
})

let user = Mock.mock ('http://user.cn', {

})


export {rooms, system, user}

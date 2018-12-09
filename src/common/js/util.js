export default {
  formatImgPath: function (text) {
    return text.replace(/<(\s+)?img(\s+)?(alt.*)?src="static/g, function (word) {
      return word.replace(/static/g, 'http://192.168.1.102/static')
    })
  },
  isWechatBrowser: function () {
    // const ua = navigator.userAgent.toLowerCase()
    // return ua.match(/MicroMessenger/i) === 'micromessenger'
    let ua = navigator.userAgent.toLowerCase()
    let isWeixin = ua.indexOf('micromessenger') !== -1
    if (isWeixin) {
      return true
    } else {
      return false
    }
  },
  getQueryString: function (name) {
    // vue-router必须开启history mode才能生效
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r !== null) {
      return unescape(r[2])
    }
    return null
  },
  formatDate: function (fmt) {
    var o = {
      "M+" : this.getMonth()+1,                 //月份
      "d+" : this.getDate(),                    //日
      "h+" : this.getHours(),                   //小时
      "m+" : this.getMinutes(),                 //分
      "s+" : this.getSeconds(),                 //秒
      "q+" : Math.floor((this.getMonth()+3)/3), //季度
      "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
      if(new RegExp("("+ k +")").test(fmt))
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
  }
}

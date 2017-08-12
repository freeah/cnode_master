/**
 * Created by Administrator on 0025/7/25.
 */
//列表头部按钮
export function translateTab(tab,isTop){
  //console.log(tab+'....'+isTop);
    switch (tab) {
      case 'share':
            return '分享'
      case 'ask':
            return '问答'
      case 'job':
            return '招聘'
      case 'good':
            return '精华'
      case 'top':
            return '置顶'
    }
}
export function formalDate(date){
  //console.log(date);
  var date=new Date(date);
  var create_time={
    "y":date.getFullYear(),
    "mon":date.getMonth()+1,
    "rr":date.getDate(),
    "hh":date.getHours(),
    "min":date.getMinutes(),
    "ss":date.getSeconds()
  };
  var create_time_total=[];
  for(let k in create_time){
    //console.log(create_time[k]);
    if(create_time[k]<10){
      create_time[k]='0'+create_time[k];
    }
    create_time_total.push(create_time[k]);
  }
  create_time_total=create_time_total.join('-');
  return create_time_total;
}
function pluralize (time, label) {
  return time + label + '前'
}
export function timeAgo(time){
  //console.log(time);
  const between = (+Date.now() - +new Date(time)) / 1000
  //计算之前时间与当前时间的差，先把时间换成距离 1970 年 1 月 1 日午夜之间相差的毫秒数，两个毫秒数相减
  //一秒等于1000毫秒，上面换成了秒
  //console.log(between);
  if (between < 60) {
    return pluralize(~~(between), ' 秒')
  } else if (between < 3600) {
    return pluralize(~~(between / 60), ' 分钟')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' 小时')
  } else if (between < (86400 * 30)) {
    return pluralize(~~(between / 86400), ' 天')
  } else if (between < (86400 * 30 * 12)) {
    return pluralize(~~(between / (86400 * 30)), '个月')
  } else {
    return pluralize(~~(between / (86400 * 30 * 12)), '年')
  }
}

const { UserInfo } = require("git");

var memberList = new Vue({
  el: 'memberList',
  data: {
    list : [
      {systemid:111,name:'太郎'},
      {systemid:222,name:'次郎'},
      {systemid:333,name:'ハナコ'}
    ]
  }
})

var shiftList = new Vue({
  el: 'shiftList',
  data: {
    list :[
      {systemid:111,date:"13/32",start:"9:00",end:"12:00"},
      {systemid:222,date:"13/32",start:"10:00",end:"14:00"},
      {systemid:333,date:"13/32",start:"12:00",end:"18:00"}
    ]
  }
})

//この関数でどの幅描写するかが決定する
function timeline(starttime,endtime){ //timeは0:00から何分か
  let start = startime / (24 * 60);
  let end = endtime / (24 * 60);
  let timearray = [start, end];

  return timearray;
} //帰ってきたデータとユーザーをくっつけru


//縦どこに描写するか
function jobid(list){
  list.sort()
}


//TODO 時間を百聞率に直す計算式
//TODO 得た情報を元に%で描画
var app = new Vue({
  el: "#app",
  data: {
    message: "実験ちゅうううううううううううううううううう"
  }
})

var tabley = new Vue({
  el: '#tabley',
  data: {
    items: [//ここにメンバーリストをぶちこむ
      { message: '太郎' }, 
      { message: '次郎' },
      { message: '三郎' }
    ]
  }
})

var tablex = new Vue({
  el:"#tablex",
  data: {
    items: [
      { message: "1"},
      { message: "2"},
      { message: "3"}
    ]
  }
})
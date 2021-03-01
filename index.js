const app = Vue.createapp({
  data(){
    return {
      start_month: '2021-1',
      end_month: '2022-01',
      block_size: 30,
      block_number: 0,
    }
  },
  methods:{
    getDays(year, month, block_number) {
      const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
      let days = [];
      let date = moment(`${year}-${month}-01`);
      let num = date.daysInMonth();
      for (let i = 0; i < num; i++) {
        days.push({
          day: date.date(),
          dayOfWeek: dayOfWeek[date.day()],
          block_number
        })
        date.add(1, 'day');
        block_number++;
      }
      return days;
    },     
  },
}).mount('#app')
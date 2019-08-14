// pages/me/me.js
Page({
  data: {
    tab: "tomato",
    lists: {
      "本周四":[
        {time: "14:20", text: "回家回家军或或或或", id:1},
        { time: "14:20", text: "回家回家军或或或或", id: 1 },
        { time: "14:20", text: "回家回家军或或或或", id: 1 }
      ],
      "本周五": [{ time: "14:20", text: "回家回家军或或或或", id: 1 }],
      "本周六": [{ time: "14:20", text: "回家回家军或或或或", id: 2 }],
      "本周五": [{ time: "14:20", text: "回家回家军或或或或", id: 3 }],
      "本周五": [{ time: "14:20", text: "回家回家军或或或或", id: 4 }],
      "本周五": [{ time: "14:20", text: "回家回家军或或或或", id: 5 }]
    }
  },
  onShow: function () {

  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name })
  }
})
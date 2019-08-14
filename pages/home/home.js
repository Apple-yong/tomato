// pages/_home/_home.js
Page({
  data: {
    visible: false,
    lists: [
      { id: 1,text: "今天做什么", finished: true},
      { id: 1, text: "明做什么", finished: false },
      { id: 1, text: "后天做什么", finished: true },
      { id: 1, text: "4天做什么", finished: false },
      { id: 1, text: "5天做什么", finished: true }
    ],
  },
  confirm(event){
    console.log(event.detail)
  },
  hideConfirm(){
    this.setData({ visible: false })
  },
  showConfirm(){
    this.setData({ visible: true })
  },
  confirmCreate(event){
    let content = event.detail
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      console.log(todo.concat(this.data.lists))
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
    }
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
  }
})
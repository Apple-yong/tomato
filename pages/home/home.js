const {http} = require('../../lib/http.js')

Page({
  updateId: '',
  updateIndex: '',
  data: {
    visibleCreate: false,
    visibleUpdate: false,
    updateContent: "",
    lists: [],
  },
  onShow(){
    http.get('/todos').then(response=>{
      this.setData({ lists: response.data.resources })
    })
  },
  gotoTomato(){
    wx.navigateTo({
      url: "/pages/tomato/tomato"
    })
  },
  confirmCreate(event){
    let content = event.detail
    if (content) {
      http.post('/todos',{
        description: content
      })
      .then(response => {
        let todo = [response.data.resource]
        this.data.lists = todo.concat(this.data.lists)
        this.setData({ lists: this.data.lists })
        this.hideCreateConfirm()
      })  
    }
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id
    http.put(`/todos/${id}`,{
      completed: true
    })
    .then(response => {
      let todo = response.data.resource
      this.data.lists[index] = todo
      this.setData({ lists: this.data.lists })
    })
  },
  reviseTodo(event){
    let {content,id,index} = event.currentTarget.dataset
    this.updateId = id
    this.updateIndex = index
    this.setData({ visibleUpdate: true, updateContent: content})
  },
  confirmUpdate(event) {
    let content = event.detail
    http.put(`/todos/${this.updateId}`, {
      description: content
    })
    .then(response => {
      let todo = response.data.resource
      this.data.lists[this.updateIndex] = todo
      this.setData({ lists: this.data.lists })
      this.hideUpdateConfirm()
    })
  },
  hideCreateConfirm() {
    this.setData({ visibleCreate: false })
  },
  showCreateConfirm() {
    this.setData({ visibleCreate: true })
  },
  hideUpdateConfirm() {
    this.setData({ visibleUpdate: false })
  },
  showUpdateConfirm() {
    this.setData({ visibleUpdate: true })
  },
})
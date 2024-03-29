Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {
    value: ""
  },
  lifetimes: {
    attached(){
      this.properties.value = this.data.value
    }
  },
  methods: {
    confirm() {
      if (this.properties.value){
        this.triggerEvent('confirm', this.data.value)
      } 
    },
    cancel() {
      this.triggerEvent('cancel', this.data.value)
    },
    watchValue(event) {
      this.data.value = event.detail.value
    }
  }
})
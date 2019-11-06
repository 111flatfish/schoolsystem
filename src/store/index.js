import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    // 专业类型
    majorStyle:"perform"
  },
  getters:{
    // 获取专业类型
    getmajorstyle:function (state) {
      return state.majorStyle;
    }
  }
  ,
  mutations:{
    // 设置专业类型
    setmajorstyle(state,data){
      state.majorStyle = data;
    }
  },
  actions: {

  },
  modules: {

  }
})

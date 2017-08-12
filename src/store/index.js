/**
 * Created by Administrator on 0001/8/1.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        loginInfo:{
            avatar_url: null,
            id:null,
            loginname: "",
            accessToken:""
        },
        tabline:0,
        tabtotal:0
    },
    mutations:{
        reserveInfo(state,object){
            state.loginInfo=object;
            //console.log(state.loginInfo);
        },
        changeTabIndex(state,num){
            state.tabline=num;
            //console.log(state.tabline);
        },
        IndexTotal(state,num){
            state.tabtotal=num;
        }
    },
    actions:{

    },
    getters:{
        loginInfo(state,getters){
            console.log(state.loginInfo)
            return state.loginInfo
        },
        TabIndex(state,getters){
            return state.tabline
        },
        IndexTotal(state,getters) {
            return state.tabtotal
        }
    }
})

export default store

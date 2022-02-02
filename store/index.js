import Vuex from "vuex"

/* type StateType = {
  name: string,
  tab: Array<string>,
  footerFlag: boolean
}

type MutationsType = {
  changeFooterFlag: boolean
} */

const CreateStore = () => {
  return new Vuex.Store({
    state() {
      return {
        name: "T.M OFFICIAL",
        tab: ["about","work","private","other"],
      }
    },
    mutations: {
    }
    //今はコンポーネント側で行っているが、後で書き直す
  })
}

export default CreateStore
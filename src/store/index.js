import { createStore } from 'vuex'

// state.data = 'something' //<--- this is wrong
export default createStore({
  //variables
  state: {
    // data -> propertyName, null -> value
    experince: null,
    education: null,
    aboutMe: null,
    workExp: null,
    projects: null,
    testimonial: null,
    skills: null,
  },
  mutations: {
    // use this to change or update the state
    
    updateExperince(state, payload) {
      state.experince = payload // <---- this is right
    },    
    updateEducation(state, payload) {
      state.education = payload // <---- this is right
    },    
    updateAboutMe(state, payload) {
      state.aboutMe = payload // <---- this is right
    },    
    updateWorkExp(state, payload) {
      state.workExp = payload // <---- this is right
    },    
    updateProjects(state, payload) {
      state.projects = payload // <---- this is right
    },    
    updateTestimonial(state, payload) {
      state.testimonial = payload // <---- this is right
    },
    updateSkills(state, payload) {
      state.skills = payload // <---- this is right
    }
   
    //commiting a mutation

  },
  actions: {
    // run all async code
    // dispatching

    // fetchData(commit){
    //   commit
    // }

    // ^ these are just syntax ^

    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://mohammad-mohamed.github.io/first-api/data/')
      let {data} = await fetchedInfo.json()
      // dependant on json file
      let {aboutMe,projects,testimonial,skills,education,workExp,experince} = data
      console.log(data)
      commit('setAboutMe',aboutMe)
      commit('updateProjects',projects)
      commit('setTestimonial',testimonial)
      commit('setSkills',skills)
      commit('setEducation',education)
      commit('setWorkExp',workExp)
      commit('setExperince',experince)
    }
  },
  modules: {
  },
  getters: {
    filterData(){
      return Array.filter()
    }
  }
})
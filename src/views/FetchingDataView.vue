<template>
    <div class="FetchingData">
        <!-- {{$store.state.aboutMe}} -->
         <div v-for="project in projectData()" :key="project.name">
            {{ project.name }}
         </div>
    </div>
</template>

<script>
export default {
    methods:{
        projectData(){
            return this.$store.state.projects
        }
    },

    computed:{
        getAboutMe(){
            return this.$store.dispatch('getAboutMe')
        }
    },
    mounted(){
        this.getAboutMe
    }
}


</script>
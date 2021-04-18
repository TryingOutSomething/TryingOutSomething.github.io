<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="(icon, index) in logoRecord"
      :key="index"
      sm="1"
      eager
    >
      <v-img :src="icon.src" height="4rem" contain/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SkillsLogo',
  data () {
    return {
      logoRecord: [
        {
          name: 'Python logo',
          src: require('@/assets/python_logo.png')
        },
        {
          name: 'Javascript logo',
          src: require('@/assets/js_logo.png')
        },
        {
          name: 'Java logo',
          src: require('@/assets/java_logo.png')
        },
        {
          name: 'NodeJS logo',
          src: require('@/assets/nodejs_logo.png')
        },
        {
          name: 'VueJS logo',
          src: require('@/assets/vuejs_logo.png')
        },
        {
          name: 'Firebase logo',
          src: require('@/assets/firebase_logo.png')
        },
        {
          name: 'MySQL logo',
          src: require('@/assets/mysql_logo.png')
        },
        {
          name: 'MongoDB logo',
          src: require('@/assets/mongodb_logo.png')
        },
        {
          name: 'Git logo',
          src: require('@/assets/git_logo.png')
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

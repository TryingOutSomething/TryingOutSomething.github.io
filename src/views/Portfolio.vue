<template>
  <div>
    <hero/>
    <about/>
    <projects/>
    <resume/>
    <credits/>
  </div>
</template>

<script>
import About from '@/components/about/Index'
import Hero from '@/components/hero/Index'
import Projects from '@/components/projects/Index'
import Resume from '@/components/resume/Index'
import Credits from '@/components/credits/Index'

export default {
  name: 'Portfolio',
  components: {
    Credits,
    Resume,
    Projects,
    Hero,
    About
  }
}
</script>

<style scoped>

</style>

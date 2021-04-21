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
export default {
  name: 'Portfolio',
  components: {
    Credits: () => import('@/components/credits/Index'),
    Resume: () => import('@/components/resume/Index'),
    Projects: () => import('@/components/projects/Index'),
    Hero: () => import('@/components/hero/Index'),
    About: () => import('@/components/about/Index')
  }
}
</script>

<style scoped>

</style>

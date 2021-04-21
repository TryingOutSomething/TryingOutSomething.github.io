<template>
  <div>
    <hero/>
    <about/>
    <projects/>
    <resume/>
    <scroll-to-top/>
    <credits/>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  components: {
    Hero: () => import('@/components/hero/Index'),
    About: () => import('@/components/about/Index'),
    Projects: () => import('@/components/projects/Index'),
    Resume: () => import('@/components/resume/Index'),
    ScrollToTop: () => import('@/components/ScrollToTop'),
    Credits: () => import('@/components/credits/Index')
  }
}
</script>

<style scoped>

</style>

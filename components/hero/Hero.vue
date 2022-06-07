<template>
  <div
    class="
      bg-p-black
      flex flex-col
      min-h-screen-50
      lg:min-h-screen-50
      xl:min-h-screen-75
    "
  >
    <nav-bar class="bg-p-black" />

    <div
      class="
        flex flex-col
        items-center
        justify-center
        min-h-screen-50
        lg:min-h-screen-50
        xl:min-h-screen-75
      "
    >
      <div class="text-center text-p-white">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <h1 class="mb-5 sm:mb-10 text-5xl md:text-7xl lg:text-8xl font-bold">
            Hello There!
          </h1>

          <div
            id="handEmoji"
            ref="handEmoji"
            class="mb-10 w-11 sm:w-24 lg:w-32 text-4xl md:text-7xl lg:text-8xl"
          >
            👋🏻
          </div>
        </div>

        <div class="text-xl md:text-3xl lg:text-4xl">I'm Jan Owyeong!</div>
      </div>
    </div>
    <scroll-down
      arrow-component-id="scrollArrow"
      class="text-p-white flex justify-center mb-10"
      ellipse-component-id="ellipseWheel"
    />
  </div>
</template>

<script>
import ScrollDown from '~/components/hero/svg/ScrollDown'

export default {
  name: 'NuxtHero',
  components: { ScrollDown },
  data() {
    return {
      emojiElementProps: {
        id: 'handEmoji',
        parentId: null,
        animationClassName: 'wave-hand',
      },
      ellipseProps: {
        id: 'ellipseWheel',
        parentId: 'svgContainer',
        animationClassName: 'ellipse-wheel',
      },
      ellipseSmallProps: {
        id: 'ellipseWheelSmall',
        parentId: 'svgContainerSmall',
        animationClassName: 'ellipse-wheel-small',
      },
      scrollArrowProps: {
        id: 'scrollArrow',
        parentId: 'svgContainer',
        animationClassName: 'scroll-down-arrow',
      },
      scrollArrowSmallProps: {
        id: 'scrollArrowSmall',
        parentId: 'svgContainerSmall',
        animationClassName: 'scroll-down-arrow',
      },
      observerOptions: {
        root: null,
        rootMargin: '0px',
        threshold: 0.75,
      },
      observer: null,
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      this.handleAnimationDisplay,
      this.observerOptions
    )
    this.elementsToObserve().forEach((element) => observer.observe(element))

    this.observer = observer
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    elementsToObserve() {
      const handEmojiElement = document.getElementById(
        this.emojiElementProps.id
      )
      const scrollDownElement = document.getElementById(
        this.ellipseProps.parentId
      )
      const scrollDownSmallElement = document.getElementById(
        this.ellipseSmallProps.parentId
      )

      return [handEmojiElement, scrollDownElement, scrollDownSmallElement]
    },
    handleAnimationDisplay(entries, _) {
      entries.forEach((entry) => {
        const element = entry.target

        if (entry.isIntersecting) {
          this.addAnimationClassToElement(element)
        } else {
          this.removeAnimationClassToElement(element)
        }
      })
    },
    addAnimationClassToElement(element) {
      const id = element.id

      switch (id) {
        case this.emojiElementProps.id:
          element.classList.add(this.emojiElementProps.animationClassName)
          return
        case this.ellipseProps.parentId:
          this.addScrollDownAnimationGroupClass(
            element,
            this.scrollArrowProps,
            this.ellipseProps
          )
          return
        case this.ellipseSmallProps.parentId:
          this.addScrollDownAnimationGroupClass(
            element,
            this.scrollArrowSmallProps,
            this.ellipseSmallProps
          )
      }
    },
    addScrollDownAnimationGroupClass(
      parentElement,
      scrollArrowProps,
      ellipseProps
    ) {
      const scrollArrowElement = parentElement.querySelector(
        `#${scrollArrowProps.id}`
      )
      const ellipseElement = parentElement.querySelector(`#${ellipseProps.id}`)

      scrollArrowElement.classList.add(scrollArrowProps.animationClassName)
      ellipseElement.classList.add(ellipseProps.animationClassName)
    },
    removeAnimationClassToElement(element) {
      const id = element.id

      switch (id) {
        case this.emojiElementProps.id:
          element.classList.remove(this.emojiElementProps.animationClassName)
          return
        case this.ellipseProps.parentId:
          this.removeScrollDownAnimationGroupClass(
            element,
            this.scrollArrowProps,
            this.ellipseProps
          )
          return
        case this.ellipseSmallProps.parentId:
          this.removeScrollDownAnimationGroupClass(
            element,
            this.scrollArrowSmallProps,
            this.ellipseSmallProps
          )
      }
    },
    removeScrollDownAnimationGroupClass(
      parentElement,
      scrollArrowProps,
      ellipseProps
    ) {
      const scrollArrowElement = parentElement.querySelector(
        `#${scrollArrowProps.id}`
      )
      const ellipseElement = parentElement.querySelector(`#${ellipseProps.id}`)

      scrollArrowElement.classList.remove(scrollArrowProps.animationClassName)
      ellipseElement.classList.remove(ellipseProps.animationClassName)
    },
  },
}
</script>

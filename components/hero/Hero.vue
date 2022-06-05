<template>
  <div
    class="bg-p-black flex flex-col
    min-h-screen md:min-h-screen-80 xl:min-h-screen"
  >
    <nav-bar class="bg-p-black"/>

    <div
      class="flex flex-col items-center justify-center
      h-screen md:h-screen-80 xl:h-screen"
    >

      <div class="text-center text-p-white">
        <div class="flex flex-col items-center justify-center sm:flex-row">
          <h1 class="mb-5 sm:mb-10 text-5xl md:text-7xl lg:text-8xl font-bold">
            Hello There!
          </h1>

          <div
            id="handEmoji"
            ref="handEmoji"
            class="mb-10
            w-11 sm:w-24 lg:w-32
            text-4xl md:text-7xl lg:text-8xl"
          >
            👋🏻
          </div>
        </div>

        <div class="text-xl md:text-3xl lg:text-4xl">I'm Jan Owyeong!</div>
      </div>

      <scroll-down
        arrow-component-id="scrollArrow"
        class="text-p-white flex justify-center mt-10 md:mt-32"
        ellipse-component-id="ellipseWheel"
      />
    </div>
  </div>
</template>

<script>
import ScrollDown from '~/components/hero/svg/ScrollDown';

export default {
  name: 'NuxtHero',
  components: { ScrollDown },
  data() {
    return {
      emojiElementProps: {
        id: 'handEmoji',
        parentId: null,
        animationClassName: 'wave-hand'
      },
      ellipseProps: {
        id: 'ellipseWheel',
        parentId: 'scrollIcon',
        animationClassName: 'ellipse-wheel'
      },
      ellipseSmallProps: {
        id: 'ellipseWheelSmall',
        parentId: 'scrollIconSmall',
        animationClassName: 'ellipse-wheel-small'
      },
      scrollArrowProps: {
        id: 'scrollArrow',
        parentId: 'scrollIcon',
        animationClassName: 'scroll-down-arrow'
      },
      scrollArrowSmallProps: {
        id: 'scrollArrowSmall',
        parentId: 'scrollIconSmall',
        animationClassName: 'scroll-down-arrow'
      },
      observerOptions: {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
      },
      observer: null
    };
  },
  mounted() {
    const observer = new IntersectionObserver(this.handleAnimationDisplay, this.observerOptions);
    this.elementsToObserve().forEach(element => observer.observe(element));

    this.observer = observer;
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    elementsToObserve() {
      const handEmojiElement = document.getElementById(this.emojiElementProps.id);
      const scrollDownElement = document.getElementById(this.ellipseProps.parentId);
      const scrollDownSmallElement = document.getElementById(this.ellipseSmallProps.parentId);

      return [
        handEmojiElement,
        scrollDownElement,
        scrollDownSmallElement
      ];
    },
    handleAnimationDisplay(entries, _) {
      entries.forEach(entry => {
        const element = entry.target;

        if (entry.isIntersecting) {
          this.addAnimationClassToElement(element);
        } else {
          this.removeAnimationClassToElement(element);
        }
      });
    },
    addAnimationClassToElement(element) {
      const id = element.id;

      switch (id) {
        case this.emojiElementProps.id:
          element.classList.add(this.emojiElementProps.animationClassName);
          return;
        case this.ellipseProps.parentId:
          this.addScrollDownAnimationGroupClass(element, this.scrollArrowProps, this.ellipseProps);
          return;
        case this.ellipseSmallProps.parentId:
          this.addScrollDownAnimationGroupClass(element, this.scrollArrowSmallProps, this.ellipseSmallProps);
      }
    },
    addScrollDownAnimationGroupClass(parentElement, scrollArrowProps, ellipseProps) {
      const scrollArrowElement = parentElement.querySelector(`#${scrollArrowProps.id}`);
      const ellipseElement = parentElement.querySelector(`#${ellipseProps.id}`);

      scrollArrowElement.classList.add(scrollArrowProps.animationClassName);
      ellipseElement.classList.add(ellipseProps.animationClassName);
    },
    removeAnimationClassToElement(element) {
      const id = element.id;

      switch (id) {
        case this.emojiElementProps.id:
          element.classList.remove(this.emojiElementProps.animationClassName);
          return;
        case this.ellipseProps.parentId:
          this.removeScrollDownAnimationGroupClass(element, this.scrollArrowProps, this.ellipseProps);
          return;
        case this.ellipseSmallProps.parentId:
          this.removeScrollDownAnimationGroupClass(element, this.scrollArrowSmallProps, this.ellipseSmallProps);
      }
    },
    removeScrollDownAnimationGroupClass(parentElement, scrollArrowProps, ellipseProps) {
      const scrollArrowElement = parentElement.querySelector(`#${scrollArrowProps.id}`);
      const ellipseElement = parentElement.querySelector(`#${ellipseProps.id}`);

      scrollArrowElement.classList.remove(scrollArrowProps.animationClassName);
      ellipseElement.classList.remove(ellipseProps.animationClassName);
    },
  }
};
</script>

<style>
.wave-hand {
  animation-name: wave-hand-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
}

@keyframes wave-hand-animation {
  0% {
    transform: rotate(0.0deg)
  }
  10% {
    transform: rotate(14.0deg)
  }
  20% {
    transform: rotate(-8.0deg)
  }
  30% {
    transform: rotate(14.0deg)
  }
  40% {
    transform: rotate(-4.0deg)
  }
  50% {
    transform: rotate(10.0deg)
  }
  60% {
    transform: rotate(0.0deg)
  }
  100% {
    transform: rotate(0.0deg)
  }
}

.ellipse-wheel {
  animation-name: float-down;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes float-down {
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(28px);
  }
  100% {
    transform: translateY(0);
  }
}

.ellipse-wheel-small {
  animation-name: float-opposite;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes float-opposite {
  0% {
    transform: translateY(0)
  }
  50% {
    transform: translateY(-17px);
  }
  100% {
    transform: translateY(0)
  }
}

.scroll-down-arrow {
  animation-name: float-up;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}


@keyframes float-up {
  0% {
    transform: translateY(-2vh);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2vh);
  }
}
</style>


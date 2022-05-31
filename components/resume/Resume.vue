<template>
  <div id="resume" class="bg-p-white flex h-screen flex-col">
    <h1 class="mt-10 sm:mt-20 text-center uppercase font-black text-4xl sm:text-5xl mb-7 sm:mb-0">resume</h1>

    <!--      <div class="flex h-screen flex-row items-center justify-center">-->
    <client-only>
      <div
        class="h-screen grid place-items-center
        grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2
        mb-12
        sm:mb-0 sm:px-12 sm:mt-10 sm:mb-14
        md:px-0 md:mt-0 md:mb-0
        lg:px-44
        xl:px-64
        2xl:px-96"
      >
        <viewer :images="[resumeImagePath]" :options="viewConfig" static @inited="cacheViewer">
          <img
            :src="resumeImagePath"
            alt="Resume preview"
            class="max-h-96 md:max-h-128 shadow-md border"/>
        </viewer>

        <div
          class="space-y-7 sm:space-y-10 md:space-y-0
          md:space-x-5 lg:space-x-0 lg:space-y-16
          mt-10 sm:mt-0
          md:flex md:flex-row md:items-center md:justify-center
          lg:block"
        >
          <button
            class="bg-p-yellow text-p-black font-medium rounded-md uppercase shadow-md
            flex flex-row items-center justify-center py-5 px-12"
            @click="showViewer"
          >
            view resume
          </button>

          <button
            class="bg-p-brown text-p-white font-medium rounded-md uppercase shadow-md
            flex flex-row items-center justify-center py-5 px-10"
          >
            <download-icon class="pr-1.5"/>
            download
          </button>
        </div>
      </div>
    </client-only>

    <footer-bar/>
  </div>
</template>

<script>
export default {
  name: 'NuxtResume',
  data() {
    return {
      resumeImagePath: `${require('~/assets/images/Jan_Owyeong_Guo_Yong_Resume_preview.jpg')}`,
      viewConfig: {
        toolbar: {
          title: false,
          zoomIn: true,
          zoomOut: true,
          oneToOne: true,
          reset: true,
          prev: false,
          play: false,
          next: false,
          rotateLeft: false,
          rotateRight: false,
          flipHorizontal: false,
          flipVertical: false
        },
        title: false
      },
      viewer: null
    };
  },
  methods: {
    cacheViewer(viewer) {
      this.viewer = viewer;
    },
    showViewer() {
      this.viewer.show();
    }
  }
};
</script>


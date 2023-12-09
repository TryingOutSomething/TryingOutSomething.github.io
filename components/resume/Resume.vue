<template>
  <div id="resume" class="bg-p-white flex min-h-screen-50 lg:h-screen-70 xl:h-screen flex-col">
    <h1 class="mt-10 sm:mt-20 text-center uppercase font-black text-4xl sm:text-5xl mb-7 sm:mb-0">resume</h1>

    <client-only>
      <div
        class="min-h-screen-50 lg:h-screen grid place-items-center
        grid-cols-1 sm:grid-cols-2
        mb-12
        sm:px-12 sm:mt-10 sm:mb-20
        md:px-20
        lg:px-44
        xl:px-64
        2xl:px-96"
      >
        <viewer :images="[resumeImagePath]" :options="viewConfig" static @inited="cacheViewer">
          <img
            :src="resumeImagePath"
            alt="Resume preview"
            class="max-h-96 lg:max-h-128 shadow-md border"/>
        </viewer>

        <div
          class="space-y-7 sm:space-y-10 md:space-y-10 xl:space-y-16
          mt-10 sm:mt-0
          xl:block"
        >
          <button
            class="bg-p-yellow text-p-black font-medium rounded-md uppercase shadow-md
            flex flex-row items-center justify-center py-5 px-12"
            @click="showViewer"
          >
            view resume
          </button>

          <a
            :download="resumePdfPath"
            :href="resumePdfPath"
            aria-label="DownloadResumePdf"
            class="flex"
          >
            <button
              class="bg-p-brown text-p-white font-medium rounded-md uppercase shadow-md
            flex flex-row items-center justify-center py-5 px-10"
            >
              <download-icon class="pr-1.5"/>
              download
            </button>
          </a>
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
      resumePdfPath: 'Jan_Owyeong_Guo_Yong_Resume.pdf',
      resumeImagePath: `${require('~/assets/images/Jan_Owyeong_Guo_Yong_Resume_preview.PNG')}`,
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


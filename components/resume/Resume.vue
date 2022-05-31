<template>
  <div id="resume" class="bg-p-white flex h-screen flex-col">
    <h1 class="mt-10 sm:mt-20 text-center uppercase font-black text-4xl sm:text-5xl mb-7 sm:mb-0">resume</h1>

    <client-only>
      <div class="flex h-screen flex-col items-center justify-center">
        <viewer :images="[resumeImagePath]" :options="viewConfig" class="cursor-pointer" static>
          <img
            :src="resumeImagePath" alt="Resume preview"
            class="max-h-96 sm:max-h-128"/>
        </viewer>

        <button
          class="bg-p-brown text-p-white mt-10 sm:mt-14 mb-10 rounded-md py-5 px-10 uppercase flex flex-row items-center justify-center"
        >
          <download-icon class="pr-1.5"/>
          download
        </button>
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
      }
    };
  },
};
</script>


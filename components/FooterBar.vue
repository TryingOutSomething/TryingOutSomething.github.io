<template>
  <footer class="bg-p-black">
    <!-- Mobile -->
    <div
      class="text-p-white md:hidden
      flex flex-col justify-center items-center
      py-12 sm:py-5 px-5 sm:px-0"
    >
      <client-only>
        <div class="sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-3">
          <p class="text-lg">Connect with me:</p>

          <div class="flex flex-row space-x-3 justify-center my-5">
            <clickable-icon :aria-label="email.ariaLabel" :link="email.link">
              <email-icon/>
            </clickable-icon>
            <clickable-icon :aria-label="github.ariaLabel" :link="github.link">
              <github-icon/>
            </clickable-icon>
            <clickable-icon :aria-label="linkedIn.ariaLabel" :link="linkedIn.link">
              <linkedin-icon/>
            </clickable-icon>
          </div>
        </div>
      </client-only>

      <div class="sm:hidden">
        <div class="text-center text-sm mb-1">© 2022 Jan Owyeong Guo Yong</div>
        <div class="text-center text-sm">Singapore, Singapore</div>
      </div>

      <div class="text-center text-sm hidden sm:block">© 2022 Jan Owyeong Guo Yong | Singapore, Singapore</div>

      <client-only>
        <div class="mt-5 sm:mt-3 text-xs flex flex-row items-center justify-center space-x-2">
          <p class="capitalize">created with:</p>
          <nuxt-icon :size="mobileToolsIconSize"/>
          <tailwind-icon :size="mobileToolsIconSize"/>
        </div>
      </client-only>
    </div>

    <!-- Desktop -->
    <div
      class="text-p-white text-xs hidden
      md:flex justify-between py-2.5 px-7 lg:px-20 items-center"
    >
      <client-only>
        <div class="flex flex-row space-x-2.5 items-center justify-center">
          <div class="capitalize font-light">created with:</div>
          <nuxt-icon/>
          <tailwind-icon/>
        </div>
      </client-only>

      <div>© 2022 Jan Owyeong Guo Yong | Singapore, Singapore</div>

      <client-only>
        <div class="flex flex-row space-x-2.5 items-center justify-center">
          <div>Connect with me:</div>
          <clickable-icon :aria-label="email.ariaLabel" :link="email.link">
            <email-icon/>
          </clickable-icon>
          <clickable-icon :aria-label="github.ariaLabel" :link="github.link">
            <github-icon/>
          </clickable-icon>
          <clickable-icon :aria-label="linkedIn.ariaLabel" :link="linkedIn.link">
            <linkedin-icon/>
          </clickable-icon>
        </div>
      </client-only>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterBar',
  data() {
    return {
      mobileToolsIconSize: 18,
      mobileConnectIconSize: 32,
      email: {
        link: 'mailto:janowyeong@hotmail.com',
        ariaLabel: 'Email'
      },
      github: {
        link: 'https://github.com/TryingOutSomething',
        ariaLabel: 'Github'
      },
      linkedIn: {
        link: 'https://www.linkedin.com/in/jan-owyeong-guo-yong/',
        ariaLabel: 'LinkedIn'
      }
    };
  }
};
</script>

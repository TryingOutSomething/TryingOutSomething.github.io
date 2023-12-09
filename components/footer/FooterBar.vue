<template>
  <footer class="bg-p-black bottom-0">
    <mobile-footer
      :sns-links="snsLinks"
      :tools-icon-size="mobileToolsIconSize"
      :credits="credits"
      :location="location"
      class="md:hidden
      flex flex-col justify-center items-center
      py-12 sm:py-5 px-5 sm:px-0"
    />

    <desktop-footer
      :credits="credits"
      :location="location"
      :sns-links="snsLinks"
      class="hidden md:flex justify-between py-2.5 px-7 lg:px-20 items-center"/>
  </footer>
</template>
<script>
import MobileFooter from '~/components/footer/MobileFooter';
import DesktopFooter from '~/components/footer/DesktopFooter';

export default {
  name: 'FooterBar',
  components: { DesktopFooter, MobileFooter },
  data() {
    return {
      snsLinks: {
        email: {
          url: 'mailto:janowyeong@hotmail.com',
          ariaLabel: 'Email'
        },
        github: {
          url: 'https://github.com/TryingOutSomething',
          ariaLabel: 'Github'
        },
        linkedIn: {
          url: 'https://www.linkedin.com/in/jan-owyeong-guo-yong/',
          ariaLabel: 'LinkedIn'
        }
      },
      mobileToolsIconSize: 18,
      credits: '© 2023 Jan Owyeong Guo Yong',
      location: 'Singapore, Singapore'
    };
  }
};
</script>

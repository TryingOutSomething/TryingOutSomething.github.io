<template>
  <nav>
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <!-- hamburger menu -->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            aria-controls="mobile-menu"
            aria-expanded="false"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700
              hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            type="button"
            @click="toggleMenuItemsVisibility"
          >
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              aria-hidden="true" class="block h-6 w-6" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              aria-hidden="true" class="hidden h-6 w-6" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <!-- end mobile menu -->
        </div>
        <!-- end hamburger menu -->
        <!-- Nav items -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                aria-current="page"
                class="rounded-md  px-3 py-2 text-sm font-medium text-p-white hover:bg-gray-700"
                href="#about">
                About
              </a>
              <a
                class="rounded-md px-3 py-2 text-sm font-medium text-p-white hover:bg-gray-700"
                href="#projects">
                Projects
              </a>
              <a
                class="rounded-md px-3 py-2 text-sm font-medium text-p-white hover:bg-gray-700"
                href="#">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMenuMobile" id="mobile-menu" class="flex justify-center sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          aria-current="page"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          href="#">About</a>

        <a
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          href="#">Projects</a>

        <a
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          href="#">Resume</a>
      </div>
    </div>
    <!-- end nav items -->
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      showMenuMobile: false
    };
  },
  methods: {
    toggleMenuItemsVisibility() {
      this.showMenuMobile = !this.showMenuMobile;
    }
  }
};
</script>

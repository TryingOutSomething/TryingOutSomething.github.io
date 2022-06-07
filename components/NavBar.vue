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
            <svg
              v-if="showMenuMobile"
              aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg
              v-else
              aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <!-- end mobile menu -->
        </div>
        <!-- end hamburger menu -->
        <!-- Nav items -->
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="(item, i) in navItems" :key="i"
                class="rounded-md  px-3 py-2 text-sm font-medium text-p-white hover:bg-gray-700"
                :href="generateLocalHref(item)">
                {{ generateName(item) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMenuMobile" id="mobile-menu" class="flex justify-center sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a
          v-for="(item, i) in navItems" :key="i"
          class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          :href="generateLocalHref(item)">
          {{ generateName(item) }}
        </a>
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
      showMenuMobile: false,
      navItems: ['about', 'projects', 'resume']
    };
  },
  methods: {
    toggleMenuItemsVisibility() {
      this.showMenuMobile = !this.showMenuMobile;
    },
    generateLocalHref(navItem) {
      return `#${navItem}`;
    },
    generateName(navItem) {
      return navItem[0].toUpperCase() + navItem.slice(1).toLowerCase();
    }
  }
};
</script>

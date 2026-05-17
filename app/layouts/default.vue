<template>
  <div>
    <SettingsLanguageToggle class="fixed right-1 z-50 top-1" />
    <LayoutNavbar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />
    <div class="pb-24 sm:mt-[50px] sm:pb-0">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>

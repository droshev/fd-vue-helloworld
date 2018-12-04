<template>
  <div class="fd-shell">
    <FdActionBar title="Hello World!"></FdActionBar>
    <div class="fd-shell__app">
      <div class="fd-app">
        <main class="fd-app__main">
          <router-link to="/page2">
            <FdButton>Go to Page 2</FdButton>
          </router-link>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1"
};
</script>
<template>
<div class="fd-shell">
  <FdActionBar title="Hello World!">
    <FdButton slot="back" styling="light" compact icon="nav-back" />
  </FdActionBar>
  <div class="fd-shell__app">
    <div class="fd-app">
      <main class="fd-app__main">
        <FdButton>Go to Page 2</FdButton>
      </main>
    </div>
  </div>
</div>
  <div>
    <h1>Fundamental-Vue</h1>
    <FdButton @click="showModal">Show Modal</FdButton>
    <FdModal title="Modal Title" :active.sync="isModalActive">
      <p>Do you want to invite your friends to join the party?</p>
      <template slot="actions">
        <FdButton @click="closeModal" styling="light">Cancel</FdButton>
        <FdButton @click="closeModal" styling="emphasized">Invite Friends</FdButton>
      </template>
    </FdModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalActive: false,
    };
  },
  methods: {
    closeModal() {
      this.isModalActive = false;
    },
    showModal() {
      this.isModalActive = true;
    },
  },
};
</script>
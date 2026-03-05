<template>
  <div>
    <div>Nick: {{ nickname }}</div>
    <div>Role: {{ role }} ({{ exp }} experience years)</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: "Manz",
      exp: 10,
      life: 99
    }
  },
  computed: {
    role() {
      return this.exp > 12 ? "Expert"
        : this.exp > 8 ? "Senior"
        : this.exp > 4 ? "Middle"
        : "Junior"
    }
  }
}
</script>

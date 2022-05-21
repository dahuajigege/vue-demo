<template>
    <div class="welcome">
        <button @click="turnTo">跳转</button>
    </div>
</template>

<script>
export default {
    name: "welcome",
    data() {
        return {}
    },
    methods: {
        turnTo() {
            this.$router.push("people");
        }
    }
}
</script>

<style scoped>

</style>

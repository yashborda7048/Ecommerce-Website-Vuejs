<template>
    <button class="mb-3">{{ button_text }}</button>
</template>

<script>
export default {
    name: "Button",
    props: {
        button_text: String,
    },
}
</script>
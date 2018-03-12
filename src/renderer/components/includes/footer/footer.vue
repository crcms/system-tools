<template>
    <div class="footer">
        Version:{{version}}
    </div>
</template>
<script>
import config from '../../../../../package.json'

export default {
    name: "app-footer",
    data() {
        return {
            version:config.version
        }
    }
}
</script>

<style scoped>
.footer {
    text-align: center;
    color: #FFFFFF;
    height: 40px;
    line-height: 40px;
}
</style>
<template>
    <div class="main">
        <div class="tools-header">
            <ul>
                <li v-for="(value, key, index) in options" :key="'options_' + key"
                    :class="{active:isActive(key)}"
                    @click="setActive(key)">
                    {{value.text}}
                </li>
            </ul>
        </div>
        <div class="text-raw">
            <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="请输入内容"
                    v-model="textRaw">
            </el-input>
        </div>
        <div class="tools-select">
            <el-select v-model="type" placeholder="请选择">
                <el-option
                        v-for="(value, key, index) in activeOperation"
                        :key="'type_' + key"
                        :label="value"
                        :value="key"
                >
                </el-option>
            </el-select>
            <el-button type="primary" @click="cover">转换</el-button>
        </div>
        <div class="text-new">
            <el-input
                    type="textarea"
                    :rows="6"
                    placeholder="请输入内容"
                    v-model="textNew">
            </el-input>
        </div>
    </div>
</template>

<script>
    export default from './controller';
</script>

<style scoped>

    body {
    }

   /* .main-header {
        background: #222233;
        color: #ffffff;
        font-size: 24px;
        line-height: 60px;
        display: block;
    }*/

    /*.main {
        padding: 0px;
    }*/

    .tools-header {
        background: #222233;
        padding-left: 20px;
        padding-bottom: 10px;
    }

    .tools-header ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        margin: 0px;
        padding: 0px;
    }

    .tools-header li {
        list-style: none;
        margin: 0px;
        text-align: left;
        padding: 10px 20px;
        cursor: pointer;
        color: white;
        position: relative;
    }

    .tools-header li.active {
        background: #409EFF;
        border-radius: 15px;
        color: white;
    }

    .tools-header li.active:after {
        border: 10px solid transparent;
        border-bottom: 10px solid #ffffff;
        width: 0;
        height: 0;
        position: absolute;
        bottom: -10px;
        transform: translateX(-50%);
        left: 50%;
        content: ' '
    }

    .text-raw, .text-new, .tools-select {
        margin-top: 20px;
    }
</style>
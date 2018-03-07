<template>
    <div id="index">
        <el-container>
            <el-main class="main">
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
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import ucfirst from 'locutus/php/strings/ucfirst'
    import Base64 from '../../tools/Base64';
    import Hash from '../../tools/Hash';
    import Json from '../../tools/Json';
    import Url from '../../tools/Url';
    import Time from '../../tools/Time';
    import Ip from '../../tools/Ip';

    import Util from '../../tools/Util';

    export default {
        name: "index",
        data() {
            return {
                active: 'hash',
                type: 'md5',
                textRaw: '',
                textNew: '',
                options: {
                    'hash': {
                        'operation': {
                            'md5': 'MD5',
                            'sha1': 'SHA1',
                            'sha256': 'SHA256',
                            'sha512': 'SHA512'
                        },
                        'text': 'HASH'
                    },
                    'base64': {
                        'operation': {
                            'decode': '解密',
                            'encode': '加密'
                        },
                        'text': 'BASE64'
                    },
                    'url': {
                        'operation': {
                            'decode': '解密',
                            'encode': '加密'
                        },
                        'text': 'URL'
                    },
                    /*'json': {
                        'operation': {
                            'encode': '序列化',
                            'decode': '反序列化'
                        },
                        'text': 'JSON'
                    },*/
                    'time': {
                        'operation': {
                            'timestamp': '时间戳',
                            'dateTime': '日期格式'
                        },
                        'text': 'TIME'
                    },
                    'ip': {
                        'operation': {
                            'ipv4ToNumber': 'IPv4转换数字',
                            'numberToIpv4': '数字转换IPv4',
                            'ipv4ToHex': 'IPv4转换十六进制',
                            'hexToIpv4': '十六进制转换IPv4',
                            // 'ipv4ToIpv6': 'IPv4转换IPv6',
                            // 'ipv6ToIpv4': 'IPv6转换IPv4',
                        },
                        'text': 'IPAddress'
                    }
                }
            };
        },
        methods: {
            isActive(current) {
                return current === this.active;
            },
            setActive(current) {
                this.type = Object.keys(this.options[current]['operation'])[0];
                this.active = current;
            },
            cover() {
                if (!this.type) {
                    Util.alert('请选择解析类型');
                    return false;
                }

                if (!this.textRaw) {
                    Util.alert('请输入内容');
                    return false;
                }

                try {
                    let all = {
                        Hash, Base64, Json, Url, Time, Ip
                    };

                    let result = (new all[ucfirst(this.active)]).handle(this.type, this.textRaw);

                    if (result === false) {
                        Util.alert('解析失败');
                    } else {
                        this.textNew = result;
                    }

                } catch (e) {
                    Util.alert('解析错误：' + e.message);
                }
            }
        },
        computed: {
            activeOperation() {
                return this.options[this.active]['operation'];
            }
        }
    }
</script>

<style scoped>

    body {
    }

    .main-header {
        background: #222233;
        color: #ffffff;
        font-size: 24px;
        line-height: 60px;
        display: block;
    }

    .main {
        padding: 0px;
    }

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
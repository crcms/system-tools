import ucfirst from 'locutus/php/strings/ucfirst'
import Base64 from '../../../tools/Base64';
import Hash from '../../../tools/Hash';
import Json from '../../../tools/Json';
import Url from '../../../tools/Url';
import Time from '../../../tools/Time';
import Ip from '../../../tools/Ip';

import Util from '../../../tools/Util';

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
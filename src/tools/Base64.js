'use strict';

import base64Encode from 'locutus/php/url/base64_encode'
import base64Decode from 'locutus/php/url/base64_decode'

class Base64 {

    constructor() {
    }

    handle(type, value) {
        return type === 'encode' ? base64Encode(value) : base64Decode(value);
    }

    _encode(value) {
        return base64Encode(value);
    }

    _decode(value) {
        return base64Decode(value);
    }

}


export default Base64;
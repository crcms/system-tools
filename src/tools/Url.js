import rawUrlEncode from 'locutus/php/url/rawurlencode'
import rawUrlDecode from 'locutus/php/url/rawurldecode'

class Url {

    handle(type, value) {
        return type === 'encode' ? this._encode(value) : this._decode(value);
    }

    _encode(value) {
        return rawUrlEncode(value);
    }

    _decode(value) {
        return rawUrlDecode(value);
    }
}

export default Url;
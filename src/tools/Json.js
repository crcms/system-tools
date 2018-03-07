import jsonEncode from 'locutus/php/json/json_encode'
import jsonDecode from 'locutus/php/json/json_decode'

class Json {

    handle(type, value) {
        return type === 'encode' ? this._encode(value) : this._decode(value);
    }

    _encode(value) {
        return jsonEncode(value);
    }

    _decode(value) {
        return jsonDecode(value);
    }
}

export default Json;
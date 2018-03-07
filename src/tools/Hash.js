'use strict';

import md5 from 'locutus/php/strings/md5';
import sha1 from 'locutus/php/strings/sha1';
// import hash from 'locutus/php/hash'
import jsHashes from 'jshashes';

class Hash {

    handle(type, value) {
        switch (type) {
            case 'md5':
                value = this._md5(value);
                break;
            case 'sha256':
                value = this._sha256(value);
                break;
            case 'sha512':
                value = this._sha512(value);
                break;
            default:
                value = this._sha1(value);
        }

        return value;
    }

    _md5(value) {
        return md5(value);
    }

    _sha1(value) {
        return sha1(value);
    }

    _sha256(value) {
        return (new jsHashes.SHA256()).hex(value);
    }

    _sha512(value) {
        return (new jsHashes.SHA512()).hex(value);
    }
}

export default Hash;
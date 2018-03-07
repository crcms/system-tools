'use strict';

import ipAddress from 'ip-address'

class Ip {

    handle(type, value) {
        console.log(type);
        switch (type) {
            case 'ipv4ToNumber':
                value = this._ipv4ToNumber(value);
                break;
            case 'numberToIpv4':
                value = this._numberToIpv4(value);
                break;
            case 'ipv4ToHex':
                value = this._ipv4ToHex(value);
                break;
            case 'hexToIpv4':
                value = this._hexToIpv4(value);
                break;
        }

        return value;
    }

    _ipv4ToNumber(value) {
        return new ipAddress.Address4(value).bigInteger().toString();
    }

    _numberToIpv4(value) {
        let address = ipAddress.Address4.fromInteger(Number.parseInt(value));
        return address.address;
    }

    _ipv4ToHex(value) {
        return new ipAddress.Address4(value).toHex();
    }

    _hexToIpv4(value) {
        let address = ipAddress.Address4.fromHex(value);
        return address.address;
    }

    _ipv4ToIpv6(value) {

    }

    _ipv6ToIpv4(value) {

    }
}

export default Ip;
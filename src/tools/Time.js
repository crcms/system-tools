'use strict';

import date from 'locutus/php/datetime/date'
import strtotime from 'locutus/php/datetime/strtotime'

class Time {

    constructor() {
    }

    handle(type, value) {
        return type === 'timestamp' ? this._timestamp(value) : this._dateTime(value);
    }

    _timestamp(value) {
        return strtotime(value);
    }

    _dateTime(value) {
        return date('Y-m-d H:i:s', value);
    }

}


export default Time;
import {MessageBox} from "element-ui";

class Util {

    alert(content, title = '提示', callback = {}) {

        let defaultCallback = {
            confirmButtonText: '确定'
        }

        callback = Object.assign(defaultCallback, callback);

        if (!callback) {
            callback = {
                confirmButtonText: '确定'
            };
        }

        MessageBox.alert(content, title, callback);
    }

}

let util = new Util();

export default util;
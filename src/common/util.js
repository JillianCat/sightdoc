const util = {
    getCookie(name) {
        const arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]);
        return null;
    },
    isLogin() {
        // if (util.getCookie('CVR_R') === 1 || util.getCookie('CVR_R') === 2 || util.getCookie('CVR_R') === 3 || util.getCookie('CVR_R') === 4) {
        //     return true;
        // }
        if (!!util.getCookie('CVR_R') && util.getCookie('CVR_R') !== '""') {
            return true;
        }
        return false;
    },
    getQueryString(name) {
        const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        const r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
};

export default util;

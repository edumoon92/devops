function Validate() {

}

Validate.prototype = {
    email: function (email) {
        var regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        return regex.test(email);
    },

    checkId: function (id) {
        var returnOk = false;

        if (id == "testId") returnOk = true;

        return returnOk;
    }
};

module.exports = Validate;
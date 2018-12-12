(function(window){
    function getGUid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const oggApp = new Vue({
        el: '#ogg-app',
        data: {
            textAreaResult: null
        },
        methods: {
            generateBtnClick: function() {
                this.textAreaResult = getGUid();
            }
        }
    })
})(window);

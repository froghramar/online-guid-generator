(function(){

    const guidGenerator = (function () {
        function getGUid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0, v = (c === 'x') ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function getGuidList(numberOfGUIDs) {
            return Array.from(Array(numberOfGUIDs).keys()).map(function () {
                return getGUid();
            });
        }

        return {
            getGuidList: getGuidList
        }
    })();

    const oggApp = new Vue({
        el: '#ogg-app',
        data: {
            textAreaResult: null,
            numberOfGUIDs: 1
        },
        methods: {
            generateBtnClick: function() {
                const guidList = guidGenerator.getGuidList(this.numberOfGUIDs);
                this.textAreaResult = guidList.join(', ');
            }
        }
    })
})();

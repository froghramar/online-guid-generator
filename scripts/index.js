(function(){

    const guidGenerator = (function () {
        function getGUid(guidGeneratorConfig) {
            const guidParts = ['xxxxxxxx', 'xxxx', '4xxx', 'yxxx', 'xxxxxxxxxxxx'];
            const guidFrame = guidParts.join(guidGeneratorConfig.includeHyphens ? '-' : '');
            return guidFrame.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0, v = (c === 'x') ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        function getGuidList(numberOfGUIDs, guidGeneratorConfig) {
            return Array.from(Array(numberOfGUIDs).keys()).map(function () {
                return getGUid(guidGeneratorConfig);
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
            numberOfGUIDs: 1,
            guidGeneratorConfig: {
                includeHyphens: true
            }
        },
        methods: {
            generateBtnClick: function() {
                const guidList = guidGenerator.getGuidList(this.numberOfGUIDs, {
                    includeHyphens: this.guidGeneratorConfig.includeHyphens
                });
                this.textAreaResult = guidList.join(', ');
            }
        }
    })
})();

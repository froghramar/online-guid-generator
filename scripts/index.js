(function(document){

    const guidGenerator = (function () {
        function getGUid(guidGeneratorConfig) {
            const guidParts = ['xxxxxxxx', 'xxxx', '4xxx', 'yxxx', 'xxxxxxxxxxxx'];
            const guidFrame = guidParts.join(guidGeneratorConfig.includeHyphens ? '-' : '');
            return guidFrame.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0, v = (c === 'x') ? r : (r & 0x3 | 0x8);
                return guidGeneratorConfig.upperCase ? v.toString(16).replace(/[abcdef]/g, function(c) {
                    return c.toUpperCase();
                }) : v.toString(16);
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
                commaSeparated: false,
                includeHyphens: true,
                representAsArray: false,
                upperCase: false
            }
        },
        methods: {
            generateBtnClick: function() {
                const guidList = guidGenerator.getGuidList(this.numberOfGUIDs, this.guidGeneratorConfig);
                this.textAreaResult = this.guidGeneratorConfig.representAsArray ? JSON.stringify(guidList): guidList.join(this.guidGeneratorConfig.commaSeparated ? ',\n' : '\n');
            },
            copyToClipBoard: function () {
                const resultTextArea = document.querySelector('#textArea');
                resultTextArea.select();
                document.execCommand('copy');
            }
        }
    })
})(document);

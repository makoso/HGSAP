/**
 * Created by Krzysztof Makowski on 2016-03-25.
 */
var HGSAP = function(){
    var self = this;
    self.allObiects = {
        onLoad  :[],
        onScroll:[]
    };
    self.timelines = [];
    function makeAnimationOnLoad(){
        for( var i in self.allObiects.onLoad){
            var obj = self.allObiects.onLoad[i];
            var index = obj.data('timeline');
            if(!index) index = 1;
            if(self.timelines[index]){
                var objTimeline = self.timelines[index];
                makeAnimOnTimeline(obj, objTimeline);
            } else {
                self.timelines[index] = new TimelineLite();
                makeAnimOnTimeline(obj, self.timelines[index]);
            }
        }
    }
    function makeAnimOnTimeline(obj, timeline){
        var data = obj.data();
        if(data.gFrom){
            timeline.fromTo(obj, data.gTime, {css:data.gFrom}, {css:data.gTo}, data.gPosition);
        } else {
            timeline.to(obj, data.gTime, data.gTo, data.gPosition);
        }
    }
    this.storeObjects = function( selector ){
        self.allObiects = {
            onLoad  :[],
            onScroll:[]
        };
        if(!selector) selector = '[data-timeline]:not([data-finished])';
        $(selector).each(function(){
            var obj = $(this);
            if(obj.data('on_scroll')){
                self.allObiects.onScroll.push(obj);
            } else {
                self.allObiects.onLoad.push(obj);
            }
        });
        makeAnimationOnLoad();
    };

    $("body").bind("DOMSubtreeModified", function() {
        self.storeObjects();
    });

};
var hgsap = new HGSAP();
$(function() {
    hgsap.storeObjects();
});

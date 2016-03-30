/**
 * Created by Krzysztof Makowski on 2016-03-25.
 * TIMELINE
 tl = new TimelineLite();

 TweenLite.to(photo, 2, {width:"200px", height:"150px"});
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
                console.log('istnieje');
            } else {
                console.log('nowa');
                self.timelines[index] = new TimelineLite();
            }
        }
    }






    this.storeObjects = function( selector ){
        self.allObiects = {
            onLoad  :[],
            onScroll:[]
        };
        if(!selector) selector = '[data-timeline]:not([data-finished])';
        $(selector).each(function(){
            var obj = $(this); console.log(obj.data('on_scroll'));
            if(obj.data('on_scroll')){
                self.allObiects.onScroll.push(obj);
            } else {
                self.allObiects.onLoad.push(obj);
            }
        });
        console.log(self);
        makeAnimationOnLoad();
        console.log(self);
    };

    $("body").bind("DOMSubtreeModified", function() {
        self.storeObjects();
        console.log(self);
    });

};
var hgsap = new HGSAP();
$(function() {
    hgsap.storeObjects();
});

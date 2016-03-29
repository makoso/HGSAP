/**
 * Created by Krzysztof Makowski on 2016-03-25.
 * TIMELINE
 tl = new TimelineLite();

 TweenLite.to(photo, 2, {width:"200px", height:"150px"});
 */
var XYZ = function(){
    var self = this;
    this.allObiects = [];
    this.tree = [];
    this.kk = function(){
        for(var i in this.allObiects){
            makeTree(this.allObiects[i].obj);
        }
        return this;
    };
    function makeTree( obj ){
        if(obj.parent().attr('data-index')){
            searchInTree(obj.parent().attr('data-index')).childrens.push({
                index       :obj.attr('data-index'),
                obj         :obj,
                childrens   : []
            });
        } else {
            self.tree.push({
                index       :obj.attr('data-index'),
                obj         :obj,
                childrens   : []
            });
        }
    }
    function searchInTree( index, branch, abs ){
        if(!branch) branch = self.tree;
        var r = branch.filter(function( obj ) {
                return obj.index == index;
        });
        if(r.length !== 0){
            return r[0];
        } else {
            if (abs) {
                if(abs == 2){return false;}
                return searchInTree(index, searchInTree($('[data-index="' + index + '"]').parent().attr('data-index'),abs + 1).childrens);
            }
        }
    }
    $('[data-timeline]').each(function(){
        var obj = $(this);
        var data = obj.data();
        if(!data.index) {
            var index = self.allObiects.length + 1;
            obj.attr('data-index', index);
            self.allObiects.push({index:index,obj:obj});
        }
    });
    return self;
};
$(function() {
    var x = new XYZ();
    console.log(x);
    $("body").bind("DOMSubtreeModified", function() {
        var y = x.kk();
        console.log(y);
    });
    //XYZ.someFn();
    //XYZ.someProperty;
});

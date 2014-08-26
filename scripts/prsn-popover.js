/*
 * Show context menu like option over target element
 * 
 * @author: prasun-pal
 * @date: 25-08-2014
 */

(function($){
    $.fn.prsnPopover = function(options, callback, delegator){
        var defaults = 	{
                width : "210",
                height : "auto",
                color : "black",
                background : "blue",
                opacity : 1,
                onClick : _click,
                onHover : _hover
        };
        var self = this;
        options = $.extend(defaults, options);
        var margin = {};
        margin.top = parseInt(this.css('margin-top'));;
        margin.right = parseInt(this.css('margin-right'));
        margin.bottom = parseInt(this.css('margin-bottom'));
        margin.left = parseInt(this.css('margin-left'));
        var padding = {};
        padding.top = parseInt(this.css('padding-top'));
        padding.right = parseInt(this.css('padding-right'));
        padding.bottom = parseInt(this.css('padding-bottom'));
        padding.left = parseInt(this.css('padding-left'));
        var listMarkup = '<ul style="list-style-type: none;padding: 0px; margin: 5px 10px 5px 10px;">';;
        $.each(options.values, function(index, value){
            listMarkup += '<li ind="' + index +  '" class="menu-popup-li" id="option' + index + '" style="cursor:pointer; " onMouseOver="this.style.background=\'#999966\'" onMouseOut="this.style.background=\'' + options.background + '\'">' 
            + '<span style="color:' + options.color + '">' + value + '</span> </li>';
        });
        listMArkup = '</ul>';
        options.top = self.position().top;
        options.left = self.position().left;
        var css = 'position:absolute; ' 
            + 'overflow: hidden;'
            + 'top:' + options.top + 'px; ' 
            + 'left:' + options.left + 'px; ' 
            + 'min-width: ' + options.width + 'px;' 
            + 'color:' + options.color + ';'
            + 'z-index:100000;'
            + 'background:transparent;';
        
        var markup = '<div style="' + css + '">' 
            + ' <div class="menu-popup round" style="margin-top:7px;background:' + options.background +  '; border: 1px solid grey; ">'
            + '<div>' + listMarkup + '</div>'
            + '</div></div>';
        var $markup = $(markup);
        
        $markup.find('li').click(function () {
            _click(self, $(this).attr('ind'),$(this).find('span').html());
            _hide();
        });
        
        console.log(self.css('margin'));
        var _click = function(self, index, value){
            if(options.onClick){
                options.onClick.call(self, index,value);
            }
        }
        var _hover = function(){
            console.log('blank implementation!!!');
        }
        var _hide = function(){
            $markup.remove();
        }
        self.parent().append($markup);
    }
})(jQuery);
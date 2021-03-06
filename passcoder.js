$.fn.passcoder = function(options) {
	var settings = $.extend({
		characters: 4,
		margin: 5,
	}, options);
	var input_width = (this.width() - (settings.margin * 2 * settings.characters)) / settings.characters;
	var name = this.attr('name');
	var type = this.attr('type');
	var className = this.attr('class');
	var rendered_html = '';
	for (var i=0;i<settings.characters;i++){
		rendered_html += '<input type="' + type + '" class="' + className + ' passcoder" autocomplete="off" type="text" maxlength="1" name="' + name + '-' + i + '" />';
	}
	var html = $.parseHTML('<div class="passcoder-container">' + rendered_html + '</div>');
	$(html).each(function(){
		$(this).children().each(function(){		
			var $this = $(this);
			$this.css('width', input_width + 'px');
			$this.css('margin', settings.margin + 'px');
			$this.css('text-align', 'center');
			$this.css('display', 'inline-block');
		});
	});
    this.replaceWith(html);
	$('.passcoder').keydown(function(e){
		if (e.which == 8){
			e.preventDefault();
			$(this).val('');
			$(this).prevAll('.passcoder:first').focus();
		}
		else if ((e.which > 47 && e.which < 58) || (e.which > 96 && e.which < 106)){
			if ($(this).val() != ''){
				$(this).nextAll('.passcoder:first').focus();				
			}
			else{
				e.preventDefault();
				$(this).val(String.fromCharCode(e.which));
				$(this).nextAll('.passcoder:first').focus();
			}
		}
		else if (e.which == 13){
		}
		else{
			e.preventDefault();
		}
	});
	$($('.passcoder').closest('form')).submit(function(e){
		$('.passcoder-container').each(function(){
			var renderedValue = '';
			var inputName = '';
			$(this).children().each(function(){
				renderedValue += $(this).val();
				var rawName = $(this).attr('name').split('-');
				rawName.pop();
				inputName = rawName.join('-');
				$(this).removeAttr('name');
			});
			html = $.parseHTML('<input style="display:none" name="' + inputName +'" value="' + renderedValue + '" />');
			$(this).append(html);
		});
	});
};

		var selecionado=1;	
		
		function clicado(nr){
			selecionado=nr;
			//console.log(selecionado);
		}	
		
		
		$(document).ready(function(e) {
			$(".accordion").append("<ul>");			
			for(var i=0; i<itens; i++){
				switch(i){
				case 1:
					$(".accordion ul").append("<li><span onclick='clicado("+(i+1)+")'>"+"Tardia ou DIP II" +"</span><div id='a"+(i+1)+"'>"+vet_itens[i]+"</div></li>"	); break;
				case 2:
					$(".accordion ul").append("<li><span onclick='clicado("+(i+1)+")'>"+"Variavel ou DIP III" +"</span><div id='a"+(i+1)+"'>"+vet_itens[i]+"</div></li>"	); break;
				case 3:
					$(".accordion ul").append("<li><span onclick='clicado("+(i+1)+")'>"+"Espicas ou DIP 0" +"</span><div id='a"+(i+1)+"'>"+vet_itens[i]+"</div></li>"	); break;
						
				}
			}
			$(".accordion").append("</ul>");
			
			$(function(){
				$('.accordion li span').click(function(){
					$('.accordion li div').slideUp('fast');
					if($(this).siblings('div').css('display') == 'none'){
						$(this).siblings('div').slideToggle('fast');
					}
				});
			});
        });	
		
		
		

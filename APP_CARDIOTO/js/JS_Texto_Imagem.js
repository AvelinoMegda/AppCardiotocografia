		var selecionado=1;
		
		function add_bolinhas(nr){			
			for(var i=1; i<=nr; i++){
				var nr_bolinhas = $("<a id='b"+i+"' onclick='troca("+i+");' href='#' class='bolinha_b'></a>");
				$(".espaco_bolinhas").append(nr_bolinhas);				
			}			
			$("#b1").attr({class:'bolinha_b ativa_b'});
			selecionado=1;
		}		
		
		function troca(nr){
			for(var i=1; i<=_itens; i++)	
				$("#b"+i).attr({class:'bolinha_p'});
			$("#b"+nr).attr({class:'bolinha_p ativa_p'});
			$("#b"+nr).fadeOut(400);
			$("#b"+nr).fadeIn(400);
			selecionado=nr;	
			
			document.getElementById("txt_box").innerHTML = vet_itens[selecionado-1]; //troca o texto			
			$("#txt_box").fadeOut(1);
			$("#txt_box").fadeIn(600);
			
			if(vet_img.length>1){	
				document.getElementById("box_img").innerHTML ="<img src='imagens/Uni"+unidade+"/"+vet_img[selecionado-1]+"'/>"; //troca a imagem		
				$("#box_img").fadeOut(1);
				$("#box_img").fadeIn(600);
			}
			else document.getElementById("box_img").innerHTML ="<img src='imagens/Uni"+unidade+"/"+vet_img[0]+"'/>"; //troca a imagem	
			
			if(selecionado == _itens) document.getElementById("btn_avancar_1").innerHTML = "<img src='imagens/recomecar_p.png'/>";
			else document.getElementById("btn_avancar_1").innerHTML = "<img src='imagens/avancar_p_1.png'/>";		
		}	
		
		$(document).ready(function(e) {
			
            add_bolinhas(_itens);
			troca(selecionado);
			
			if(_itens<=1) {
				$(".avancar_textos").attr({style:'display:none'});
			}
			
			$("#btn_avancar_1").click(function(){							
				selecionado++;
				if(selecionado >_itens) {
					selecionado=1;					
				}				
				troca(selecionado);
			});
			
			$(function() {      
			  $(".espaco_caixa_texto").swipe( {
				swipe:function(event, direction, distance, duration, fingerCount) {
				  if(direction =="left"){
					  selecionado++;
						if(selecionado >_itens) {
							selecionado=1;					
						}				
						troca(selecionado);
				  }
				  if(direction =="right"){
					  selecionado--;
						if(selecionado ==0) {
							selecionado=_itens;					
						}				
						troca(selecionado);
				  }
				}, threshold:0
			  });
			});			
        });	
		
		
		

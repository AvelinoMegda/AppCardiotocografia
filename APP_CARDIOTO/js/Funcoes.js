
	
	var tamFonte = 16;
	var VetTelas = ["Tela0.html","Tela1.html","Tela2.html","Tela3.html","Tela4.html","Tela5.html","Tela6.html","Tela7.html","Tela8.html","Tela9.html","Tela10.html",];
	var VetTelasVisitadas = new Array(VetTelas.length);
	var posicao=0;
	
	function LipaVisitadas(){
		for(var i=0; i < VetTelasVisitadas.length; i++){
			VetTelasVisitadas[i] = 0;
		}
	}
	
	//**** Função que atualiza a tela Atual ****
	function atualizaNrTelas(){
		$("#nr_tela").html((posicao+1) + "/" + VetTelas.length);
		$("#conteudo").load(VetTelas[posicao]);
		VetTelasVisitadas[posicao] = 1;
	} 

	function BuscaTela(indice){
		$("#nr_tela").html((posicao+1) + "/" + VetTelas.length);
		VetTelasVisitadas[indice] = 1;
		$("#conteudo").load(VetTelas[indice]);
		
	}
		 
	//**** Função que Gera o Sumario no painel Esquerdo ****
	function GeraSumario(){
		for(var i=0; i < VetTelas.length; i++){
			
			switch(i){
					case 0:
						$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>CARDIOTOCOGRAFIA</div></div>");
						break;
					case 1:
						$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>Definição</div></div>");
						break;
					case 2:
						$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>Conceito</div></div>");
						break;
					case 3:
						$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>Sofrimento Fetal: Tipos</div></div>");
						break;
					case 4:
						$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>Polissistolia</div></div>");
						break;
					case 5:
						$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>Padronização</div></div>");
						break;
					case 6:
					$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(i+1)+"</div><div class='nome_slide'>Parâme/ Cardiotocog...</div></div>");
						break;
					case 7:
					$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide4'>"+(7.1)+"</div><div class='nome_slide'>variabilidade</div></div>");
						break;
					case 8:
					$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide4'>"+(7.2)+"</div><div class='nome_slide'>aceleraçoes</div></div>");
					break;
					case 9:
					$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide4'>"+(7.3)+"</div><div class='nome_slide'>desaceleraçoes</div></div>");
					break;
					case 10:
					$(".bt_telas").append("<div id='slide_"+(i+1)+"' class='linha_slide' onclick='SumarioClick( this.id )'><div id='nr_slide_"+(i+1)+"' class='num_slide'>"+(8)+"</div><div class='nome_slide'>Indi/ Cardiotocométri...</div></div>");
						break;
					

			}

		}
	}
	
	function SumarioClick(aux){
		//$("#slide_1 .num_slide").text() isso é feito para retornar o numero do slide clicado
		var vet_nr = aux.split('_');
		//console.log($("#"+aux + " .num_slide").text());
		posicao = parseInt(vet_nr[vet_nr.length-1]) - 1;
		atualizaNrTelas();		
	}
	//**** Mostrar o andamento do curso ****
	function Progresso(){
				
		setInterval(function(){			 
			var nr_visit=0;
			for(var i=0; i < VetTelasVisitadas.length; i++){
				if(VetTelasVisitadas[i]==1) {
					nr_visit++;
					$("#slide_" + (i+1) + " #nr_slide_" + (i+1)).removeClass();
										
					if((VetTelas[i] == "Tela7.html") || (VetTelas[i] == "Tela8.html") || (VetTelas[i] == "Tela9.html"))
						$("#slide_" + (i+1) + " #nr_slide_" + (i+1)).addClass('num_slide4');
						else
							$("#slide_" + (i+1) + " #nr_slide_" + (i+1)).addClass('num_slide3');
				}
			}	
			
			$("#slide_" + (posicao+1) + " #nr_slide_" + (posicao+1)).removeClass();
			$("#slide_" + (posicao+1) + " #nr_slide_" + (posicao+1)).addClass('num_slide3');
					 
			$(".barra_progresso").text(Math.round(nr_visit * 100 / VetTelasVisitadas.length) + "%");			 
			$(".barra_progresso").css("width",($(".barra_progresso").text()));
			//console.log(VetTelasVisitadas);
		},100);
	}
	
	//****Quando a página for carregada
	$(document).ready(function(e) { 
		 $("#conteudo").css("font-size",(tamFonte +"px"));
		 LipaVisitadas();
		 GeraSumario();
		 atualizaNrTelas();
		 Progresso();
		 
		 //**** Aumentar Fonte ****
		 $(".bt_mais").click(function(){
			 if(tamFonte<=50){
				 tamFonte+=2;
				 $("#conteudo").css("font-size",(tamFonte +"px"));
			 }
		 });
		 
		 //**** Diminuir Fonte ****
		 $(".bt_menos").click(function(){
			 if(tamFonte>=10){
				 tamFonte-=2;
				 $("#conteudo").css("font-size",(tamFonte +"px"));
			 }
		 });
		 
		 //**** Avançar Telas ****
		 $("#avancar").click(function(){
			 if(posicao < VetTelas.length-1){
			 	posicao++;
				atualizaNrTelas();
			 }			 
		 });
		 
		 //**** Voltar Telas ****
		 $("#voltar").click(function(){
			 if(posicao > 0){
			 	posicao--;
				atualizaNrTelas();
			 }			 
		 });
		 
    });
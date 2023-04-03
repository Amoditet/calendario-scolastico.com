    
        let giorniv, mesiv, mese, giorno, giornis;


        document.getElementById("pulsante").onclick = function(){
        
            var giorno = document.getElementById("Giorno").value
            var mese = document.getElementById("Mese").value
        

            let giorni = 8 - giorno; 
            let mesi = 6 - mese;
        
                
                
                if (giorni>0){
                mesiv=mesi;
                giorniv=giorni;
                }
            
                if((giorni <0)&&(mese==5)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);
                }
            
                if((giorni <0)&&(mese==4)){
                mesiv = mesi - 1;
                giorni = -(giorno-37);
                }
                     
                    if((giorno>=3 && giorno<=5)&&(mese==4)){                    
                        giorniv = giorni - 23;}                    
            
                        if((giorno==6)&&(mese==4)){       
                            giorniv = giorni - 22;}
            
                            if((giorno==7)&&(mese==4)){       
                                giorniv = giorni - 21;}
            
                                if((giorno==8)&&(mese==4)){       
                                    giorniv = giorni - 20;}
            
                                    if((giorno==9)&&(mese==4)){       
                                        giorniv = giorni - 19;} 
                                        
                                        if((giorno==10)&&(mese==4)){       
                                            giorniv = giorni - 18;}
            
            
                    if((giorno>=11 && giorno<=15)&&(mese==4)){      
                        giorniv = giorni - 17;}                    
            
                    if((giorno>=16 && giorno<=22)&&(mese==4)){     
                        giorniv = giorni - 16;}                    
                    
                        if((giorno==24)&&(mese==5)){       
                            giorniv = giorni - 15;}
        
                            if((giorno==25)&&(mese==5)){       
                                giorniv = giorni - 14;}

                    if((giorno>=26 && giorno<=29)&&(mese==4)){     
                        giorniv = giorni - 13;}  
                        
                        if((giorno==30)&&(mese==4)){       
                            giorniv = giorni - 12;}
        
                            if((giorno==1)&&(mese==5)){       
                                giorniv = giorni - 11;}

                        if((giorno==2)&&(mese==5)){       
                            giorniv = giorni - 10;}
        
                            if((giorno==3)&&(mese==5)){       
                                giorniv = giorni - 9;}
        
                                if((giorno==4)&&(mese==5)){       
                                    giorniv = giorni - 8;} 
                                    
                                    if((giorno>=5 && giorno <=6)&&(mese==5)){       
                                        giorniv = giorni - 7;}    
                                        
                                        if((giorno==8)&&(mese==5)){       
                                            giorniv = giorni - 6;} 
            
                    if((giorno>=9 && giorno<=13)&&(mese==5)){      
                        giorniv = giorni - 5;}                    
            
                    if((giorno>=14 && giorno<=20)&&(mese==5)){      
                        giorniv = giorni - 4;}                     
            
                    if((giorno>=21 && giorno<=27)&&(mese==5)){      
                        giorniv = giorni - 3;}                    
            
                    if((giorno>=28 && giorno<=31)&&(mese==5)){      
                        giorniv = giorni - 2;}                     
            
                    if((giorno==1)&&(mese==6)){                     
                        giorniv = giorni - 2;}  
                        
                    if((giorno==3)&&(mese==6)){                     
                        giorniv = giorni - 1;}    
                        
                    if((giorno>=4 && giorno<=8)&&(mese==6)){      
                        giorniv = giorni;} 
            
            
                            if(mesiv==1){
                                giorniv = giorniv + 30;
                            }
                            
                            if(mesiv==2){
                                giorniv = giorniv + 60;
                            }
                            
                            if((giorniv<0)&&(mesiv==1)){
                                giorniv = 31 -(-giorniv);
                            }

                            if((giorniv<0)&&(mesiv==2)){
                                giorniv = 61 -(-giorniv);
                            }

                            if(mese==4){
                                giorniv = giorniv + 1;
                            }

                            if(mese==5){
                                giorniv = giorniv + 1;
                            }

        var risultato = giorniv;
        document.getElementById("risultato").innerHTML = risultato;
                       
        }
    
        let giorniv, mesiv;

            const d = new Date();
        
            let giorno = d.getUTCDate();
            let mese = d.getMonth() + 1;
        

            let giorni = 8 - giorno; 
            let mesi = 6 - mese; 
        
            
                
                if(giorni>=0){
                mesiv=mesi;
                giorniv=giorni;
                }

                //GIORNI DA TOGLIERE QUANDO SONO <0 PER OGNI MESE
                if((giorni <0)&&(mese==9)){
                mesiv = mesi - 1;
                giorni = -(giorno-37);}

                if((giorni <0)&&(mese==10)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);}
                
                if((giorni <0)&&(mese==11)){
                mesiv = mesi - 1;
                giorni = -(giorno-37);}

                if((giorni <0)&&(mese==12)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);}

                if((giorni <0)&&(mese==1)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);}

                if((giorni <0)&&(mese==2)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);}

                if((giorni <0)&&(mese==3)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);}

                if((giorni <0)&&(mese==5)){
                mesiv = mesi - 1;
                giorni = -(giorno-38);}
                
                if((giorni <0)&&(mese==4)){
                mesiv = mesi - 1;
                giorni = -(giorno-37);}
                //FINE GIORNI <0
                
                //TOGLIERE GIORNI FESTIVI E DOMENICHE
                    //SETTEMBRE
                    if((giorno>=12 && giorno<=17)&&(mese==9)){
                        giorniv = giorni - 71;}
                    if((giorno>=18 && giorno<=24)&&(mese==9)){
                        giorniv = giorni - 70;}
                    if((giorno>=25 && giorno<=30)&&(mese==9)){
                        giorniv = giorni - 69;}
                    if((giorno==1)&&(mese==10)){
                        giorniv = giorni - 69;}
                    if((giorno>=2 && giorno<=8)&&(mese==10)){
                        giorniv = giorni - 68;}
                    if((giorno>=9 && giorno<=15)&&(mese==10)){
                        giorniv = giorni - 67;}
                    if((giorno>=16 && giorno<=22)&&(mese==10)){
                        giorniv = giorni - 66;}
                    if((giorno>=23 && giorno<=29)&&(mese==10)){
                        giorniv = giorni - 65;}
                    if((giorno>=2 && giorno<=8)&&(mese==10)){
                        giorniv = giorni - 64;}
                    if((giorno==30)&&(mese==10)){
                        giorniv = giorni - 63;}
                    if((giorno==31)&&(mese==10)){
                        giorniv = giorni - 62;}
                    if((giorno==1)&&(mese==11)){
                        giorniv = giorni - 61;}
                    if((giorno>=2 && giorno<=5)&&(mese==11)){
                        giorniv = giorni - 60;}
                    if((giorno>=6 && giorno<=12)&&(mese==11)){
                        giorniv = giorni - 59;}
                    if((giorno>=13 && giorno<=19)&&(mese==11)){
                        giorniv = giorni - 58;}
                    if((giorno>=20 && giorno<=26)&&(mese==11)){
                        giorniv = giorni - 57;}
                    if((giorno>=27 && giorno<=30)&&(mese==11)){
                        giorniv = giorni - 56;}
                    if((giorno>=1 && giorno<=3)&&(mese==12)){
                        giorniv = giorni - 55;}
                    if((giorno>=4 && giorno<=10)&&(mese==12)){
                        giorniv = giorni - 54;}
                    if((giorno>=11 && giorno<=17)&&(mese==12)){
                        giorniv = giorni - 53;}
                    if((giorno>=18 && giorno<=22)&&(mese==12)){
                        giorniv = giorni - 52;}
                    //VACANZE NATALIZIE
                        if((giorno==23)&&(mese==12)){
                            giorniv = giorni - 53;}
                            if((giorno==24)&&(mese==12)){
                                giorniv = giorni - 52;}
                                if((giorno==25)&&(mese==12)){
                                    giorniv = giorni - 51;}
                                    if((giorno==26)&&(mese==12)){
                                        giorniv = giorni - 50;}
                                        if((giorno==27)&&(mese==12)){
                                            giorniv = giorni - 49;}
                                            if((giorno==28)&&(mese==12)){
                                                giorniv = giorni - 48}
                                                if((giorno==29)&&(mese==1)){
                                                    giorniv = giorni - 47;}
                                                    if((giorno==30)&&(mese==12)){
                                                        giorniv = giorni - 46;}
                                                        if((giorno==31)&&(mese==12)){
                                                            giorniv = giorni - 45;}
                                                            if((giorno==1)&&(mese==1)){
                                                                giorniv = giorni - 44;}
                                                                if((giorno==2)&&(mese==1)){
                                                                    giorniv = giorni - 43;}
                                                                    if((giorno==3)&&(mese==1)){
                                                                        giorniv = giorni - 42;}
                                                                        if((giorno==4)&&(mese==1)){
                                                                            giorniv = giorni - 41;}
                                                                            if((giorno==5)&&(mese==1)){
                                                                                giorniv = giorni - 40;}
                                                                                if((giorno==6)&&(mese==1)){
                                                                                    giorniv = giorni - 39;}
                                                                                    if((giorno==7)&&(mese==1)){
                                                                                        giorniv = giorni - 38;}
                    
                    
                    
                    if((giorno>=8 && giorno<=14)&&(mese==1)){
                        giorniv = giorni - 37;}
                    if((giorno>=15 && giorno<=21)&&(mese==1)){
                        giorniv = giorni - 36;}
                    if((giorno>=22 && giorno<=28)&&(mese==1)){
                        giorniv = giorni - 35;}
                    if((giorno>=29 && giorno<=31)&&(mese==1)){
                        giorniv = giorni - 34;}
                    if((giorno>=1 && giorno<=4)&&(mese==2)){
                        giorniv = giorni - 34;}
                    if((giorno>=5 && giorno<=11)&&(mese==2)){
                        giorniv = giorni - 33;}
                    if((giorno>=12 && giorno<=18)&&(mese==2)){
                        giorniv = giorni - 32;}
                    if((giorno>=19 && giorno<=23)&&(mese==2)){
                        giorniv = giorni - 31;}
                    if((giorno==24)&&(mese==2)){
                        giorniv = giorni - 30;}
                    if((giorno==25)&&(mese==2)){
                        giorniv = giorni - 29;}
                    if((giorno>=26 && giorno<=28)&&(mese==2)){
                        giorniv = giorni - 28;}
                    if((giorno>=1 && giorno<=4)&&(mese==3)){
                        giorniv = giorni - 28;}
                    if((giorno>=5 && giorno<=11)&&(mese==3)){
                        giorniv = giorni - 27;}
                    if((giorno>=12 && giorno<=18)&&(mese==3)){
                        giorniv = giorni - 26;}
                    if((giorno>=19 && giorno<=25)&&(mese==3)){
                        giorniv = giorni - 25;}
                    if((giorno>=26 && giorno<=31)&&(mese==3)){
                        giorniv = giorni - 24;}
                    if((giorno==31)&&(mese==4)){
                        giorniv = giorni - 24;}
                    if((giorno>=2 && giorno<=5)&&(mese==4)){                    
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
                                giorniv = giorniv + 30;}
                            if(mesiv==2){
                                giorniv = giorniv + 60;}
                            if(mesiv==3){
                                giorniv = giorniv + 90;}
                            if(mesiv==4){
                                giorniv = giorniv + 120;}
                            if(mesiv==5){
                                giorniv = giorniv + 150;}
                            if(mesiv==6){
                                giorniv = giorniv + 180;}
                            if(mesiv==7){
                                giorniv = giorniv + 210;}
                            if(mesiv==8){
                                giorniv = giorniv + 240;}
                            if(mesiv==9){
                                giorniv = giorniv + 270;}
                            
                            if((giorniv<0)&&(mesiv==1)){
                                giorniv = 31 -(-giorniv);}

                            if((giorniv<0)&&(mesiv==2)){
                                giorniv = 61 -(-giorniv);}

                            if(mese==4){
                                giorniv = giorniv + 1;}

                            if(mese==5){
                                giorniv = giorniv + 1;}
                    
                    
        var risultato = giorniv;
        document.getElementById("risultato").innerHTML = risultato;

        
                       
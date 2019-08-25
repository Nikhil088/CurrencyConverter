
	function Converter(){
		var fc= document.getElementById("fromcurr");
		var tc= document.getElementById("tocurr");
		var am= document.getElementById("amount");
    var amc= document.getElementById("amtcon");
		if(fc.value=="rupee"){
			switch(tc.value){
				case "rupee": amc.value= am.value*1 ;
                         break;
        case "usdollar": amc.value= am.value*0.0140 ;
                         break;
        case "euro": amc.value= am.value*0.012 ;
                         break;
        case "pound": amc.value= am.value*0.011 ;
                         break;
        case "yuan": amc.value= am.value*0.098 ;
                         break;
        case "peso": amc.value= am.value*0.072 ;
                         break;
        case "zloty": amc.value= am.value*0.055 ;
                         break;
        case "singdollar": amc.value= am.value*0.019 ;
                         break;                 
			}
		}
    if(fc.value=="usdollar"){
      switch(tc.value){
        case "rupee": amc.value= am.value*71.51 ;
                         break;
        case "usdollar": amc.value= am.value*1 ;
                         break;
        case "euro": amc.value= am.value*0.89 ;
                         break;
        case "pound": amc.value= am.value*0.81 ;
                         break;
        case "yuan": amc.value= am.value*7.10 ;
                         break;
        case "peso": amc.value= am.value*51.51 ;
                         break;
        case "zloty": amc.value= am.value*3.93 ;
                         break;
        case "singdollar": amc.value= am.value*1.39 ;
                         break;                 
      }
    }
    if(fc.value=="euro"){
      switch(tc.value){
        case "rupee": amc.value= am.value*71.51 ;
                         break;
        case "usdollar": amc.value= am.value*1 ;
                         break;
        case "euro": amc.value= am.value*0.89 ;
                         break;
        case "pound": amc.value= am.value*0.81 ;
                         break;
        case "yuan": amc.value= am.value*7.10 ;
                         break;
        case "peso": amc.value= am.value*51.51 ;
                         break;
        case "zloty": amc.value= am.value*3.93 ;
                         break;
        case "singdollar": amc.value= am.value*1.39 ;
                         break;                 
      }
    }
    if(fc.value=="euro"){
      switch(tc.value){
        case "rupee": amc.value= am.value*80.38 ;
                         break;
        case "usdollar": amc.value= am.value*1.12 ;
                         break;
        case "euro": amc.value= am.value*1 ;
                         break;
        case "pound": amc.value= am.value*0.92 ;
                         break;
        case "yuan": amc.value= am.value*7.98 ;
                         break;
        case "peso": amc.value= am.value*57.90 ;
                         break;
        case "zloty": amc.value= am.value*4.41 ;
                         break;
        case "singdollar": amc.value= am.value*1.56 ;
                          break;                 
      }
    }
    if(fc.value=="pound"){
      switch(tc.value){
        case "rupee": amc.value= am.value*87.81 ;
                         break;
        case "usdollar": amc.value= am.value*1.23;
                         break;
        case "euro": amc.value= am.value*1.09 ;
                         break;
        case "pound": amc.value= am.value*1 ;
                         break;
        case "yuan": amc.value= am.value*8.62 ;
                         break;
        case "peso": amc.value= am.value*63.25 ;
                         break;
        case "zloty": amc.value= am.value*4.82 ;
                         break;
        case "singdollar": amc.value= am.value*1.70 ;
                         break;                 
      }
    }
    if(fc.value=="yuan"){
      switch(tc.value){
        case "rupee": amc.value= am.value*10.08 ;
                         break;
        case "usdollar": amc.value= am.value*0.14;
                         break;
        case "euro": amc.value= am.value*0.13;
                         break;
        case "pound": amc.value= am.value*0.11;
                         break;
        case "yuan": amc.value= am.value*1;
                         break;
        case "peso": amc.value= am.value*7.26 ;
                         break;
        case "zloty": amc.value= am.value*0.55 ;
                         break;
        case "singdollar": amc.value= am.value*0.20 ;
                         break;                 
      }
    }
    if(fc.value=="peso"){
      switch(tc.value){
        case "rupee": amc.value= am.value*1.39 ;
                         break;
        case "usdollar": amc.value= am.value*0.019;
                         break;
        case "euro": amc.value= am.value*0.017;
                         break;
        case "pound": amc.value= am.value*0.016;
                         break;
        case "yuan": amc.value= am.value*0.014;
                         break;
        case "peso": amc.value= am.value*1 ;
                         break;
        case "zloty": amc.value= am.value*0.076 ;
                         break;
        case "singdollar": amc.value= am.value*0.027 ;
                         break;                 
      }
    }
    if(fc.value=="zloty"){
      switch(tc.value){
        case "rupee": amc.value= am.value*18.47 ;
                         break;
        case "usdollar": amc.value= am.value*0.26;
                         break;
        case "euro": amc.value= am.value*0.23;
                         break;
        case "pound": amc.value= am.value*0.21;
                         break;
        case "yuan": amc.value= am.value*1.83;
                         break;
        case "peso": amc.value= am.value*13.30;
                         break;
        case "zloty": amc.value= am.value*1 ;
                         break;
        case "singdollar": amc.value= am.value*0.36 ;
                         break;                 
      }
    }
    if(fc.value=="singdollar"){
      switch(tc.value){
        case "rupee": amc.value= am.value*51.56 ;
                         break;
        case "usdollar": amc.value= am.value*0.72;
                         break;
        case "euro": amc.value= am.value*0.64;
                         break;
        case "pound": amc.value= am.value*0.59;
                         break;
        case "yuan": amc.value= am.value*5.05;
                         break;
        case "peso": amc.value= am.value*37.13;
                         break;
        case "zloty": amc.value= am.value*2.82;
                         break;
        case "singdollar": amc.value= am.value*1 ;
                         break;                 
      }
    }
	}

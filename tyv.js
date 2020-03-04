function figur(nr) {
     if(nr == 0) {
       return 'kirsebaer.gif'
     }
     else if(nr == 1) {
       return 'ananas.gif'
     }
     else if(nr == 2) {
       return 'bar.gif'
     }
}
   function vaerdi(felt1,felt2,felt3) {
     if(felt1 == 0 && felt2 == 0 && felt3 == 0) {
return 20 }
     else if(felt1 == 0) {
       return 10
     }
     else if(felt1 == 1 && felt2 == 1 && felt3 == 1) {
return 40 }
     else if(felt1 == 2 && felt2 == 2 && felt3 == 2) {
       return 100
}
else {
return 0 }
}
   function spil() {
     ok = true
     total = 0
     while(ok == true) {
       felt1 = Math.floor(3*Math.random())
       felt2 = Math.floor(3*Math.random())
       felt3 = Math.floor(3*Math.random())
       hjul1.src = figur(felt1)
       hjul2.src = figur(felt2)
       hjul3.src = figur(felt3)
gevinst = vaerdi(felt1,felt2,felt3)
total = total + gevinst - 10
ok = confirm('Din gevinst er '+gevinst+' kr\nDin saldo er '+total+
                    ' kr\n\nVil du prøve igen?')
} }

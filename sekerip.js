var rs = 0;
    const divs = ["Home", "Accounting", "Master", "Reports", "Contacts"];
    var grace=""; 
    
            const keles = ["lightgrey", "lightskyblue", "rgb(250, 189, 242)", "yellow", "rgb(46, 167, 46)","rgb(60, 245, 220)"];
            function ngitung(){
                document.getElementById("gob").innerHTML="1000";
            }

            function formatNumber(num) {
                return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
            }

           
            function dowo(){  
                document.getElementById("repot").innerHTML =screen.width;
            }

            function mengger(){
                document.getElementById("pengger").style.transition =    "ease-in-out 1.5s";     
            }
            function mariberhitung(nomer){
                // DISKON DULU
                dbaru = (document.getElementById("xqtyso"+nomer).value / document.getElementById("xqtysoa"+nomer).value) * document.getElementById("xDISKON3A"+nomer).value;
                document.getElementById("xDISKON3"+nomer).value = dbaru;
                document.getElementById("lDISKON3"+nomer).innerHTML = dbaru;

                document.getElementById("xqty"+nomer).value = document.getElementById("xqtyso"+nomer).value * document.getElementById("xkonvso"+nomer).value;
                document.getElementById("xSUBTOTAL"+nomer).value = document.getElementById("xHARGASATUAN"+nomer).value * document.getElementById("xqtyso"+nomer).value * document.getElementById("xkonvso"+nomer).value;

                document.getElementById("lqty"+nomer).innerHTML = formatNumber(  document.getElementById("xqty"+nomer).value );
                document.getElementById("lSUBTOTAL"+nomer).innerHTML = formatNumber(document.getElementById("xSUBTOTAL"+nomer).value); 
            }

            function enol(nomer){
                document.getElementById("xqtyso"+nomer).value = 0;
                mariberhitung(nomer);
            } 

            function pilter(name){                 
                let index = document.getElementById("kolom").selectedIndex;
                let say = document.getElementById("filter").value.toLowerCase();
                let yes ;

                let no = document.getElementById(name).rows.length - 1;
                
                for(i=1;i<=no;i++){ document.getElementById(name).rows[i].style.display = ""; }
                if(say!=""){
                    for(i=1;i<=no;i++){yes = document.getElementById(name).rows[i].cells[index].innerHTML.trim().toLowerCase(); 
                        if(yes.indexOf(say) >=0 ){
                            document.getElementById(name).rows[i].style.display = "";
                        }else{
                            document.getElementById(name).rows[i].style.display = "none";
                        }
                    }
                }                
            } 
            
            function bacabarcode(){                
                if(document.getElementById("bcdx").value.length == 4){
                    document.getElementById("ff").submit();                    
                }
            }
            function mencolot(lot){  
                location.href = "mlist.php?md="+lot+"&t1="+document.getElementById("tgl1").value+"&t2="+document.getElementById("tgl2").value+"&p=1&q="+document.getElementById("filter").value+"&kolom="+document.getElementById("kolom").value;
            }
            function mecetat(lot){  
                location.href = "memlist.php?md="+lot+"&t1="+document.getElementById("tgl1").value+"&t2="+document.getElementById("tgl2").value+"&p=1&q="+document.getElementById("filter").value+"&kolom="+document.getElementById("kolom").value;
            }
            function ciutmbegar(jenenge){ 
            }

            function ajaxakudong(grace, s, kelir) {
                document.getElementById("f").innerHTML = "";
                for (i = 1; i <= 6; i++) {
                    try {
                        document.getElementById(i + "a").style.background = 'white';
                        if(i!=6){
                            document.getElementById(i + "a").style.color = 'blue';
                        }else{
                            document.getElementById(i + "a").style.color = 'white';
                        }
                    }
                    catch(err) {  }
                }
                    try {
                            document.getElementById(s + "a").style.background =keles[s - 1];
                            document.getElementById(s + "a").style.color = "white";
                            document.getElementById(s + "a").style.transition = "ease-in-out 0.5s";
                            if(s==6){
                                document.getElementById("b").style.color = "white";
                            }else{
                                try {
                                    document.getElementById("b").style.color = "forestgreen";
                                }
                                catch(err) {  }
                            }
                            ss = s;
                            if(grace!=""){
                                var xhttp = new XMLHttpRequest();
                                xhttp.onreadystatechange = function () {
                                    if (this.readyState == 4 && this.status == 200) {
                                        document.getElementById("f").innerHTML = this.responseText; 
                                    }
                                };
                                xhttp.open("GET", grace, true);
                                xhttp.send();
                            }
                           // alert(grace);
                            if(grace == "main.php"){
                                document.getElementById("repot").innerHTML =screen.width;
                            }
                            
                        }
                        catch(err) {  }
            }
            
            function klos(s){
                document.getElementById(s).style.visibility = 'hidden';
            }

            function isi2(forever,together){
                for(i=0;i<=together-1;i++){
                   let Lisa = document.getElementById("ms2").rows[forever].cells[i].innerHTML;
                   let Ronny = document.getElementById("ms2").rows[forever].cells[i].id.replace("2", ""); 
                   document.getElementById(Ronny).value = Lisa;
                }
                klos('kotakuwek');
            }

            function isi(forever,together){
                for(i=0;i<=together-1;i++){
                   let Lisa = document.getElementById("ms").rows[forever].cells[i].innerHTML;
                   let Ronny = document.getElementById("ms").rows[forever].cells[i].id.replace("2", ""); 
                   document.getElementById(Ronny).value = Lisa;
                }
                klos('kotakuwek');
            }

            function buk(){
                muncul = 'visible'; hilang = 'hidden';
                try {
                    document.getElementById('pdetail').style.visibility = muncul;
                    document.getElementById('sh').style.visibility = muncul;
                }
                catch(err) {  }
            }
            
            function getMoney(){
                document.getElementById('kotakuwek').style.visibility = 'visible';
            }

            function getMoney2(){
                document.getElementById('kotakuwek2').style.visibility = 'visible';
            }

            function buka(){
                mode="new";
                document.getElementById("ctrl").style.visibility='visible';
                document.getElementById("sh").style.visibility='visible';
                document.getElementById("dd1").style.visibility='visible'; 
                let ms = formatDate(Date.now()); 
                document.getElementById('dt1').value = ms;
                muncul = 'visible'; hilang = 'hidden';
                try {                    
                    document.getElementById('bb5').style.visibility = muncul;
                    document.getElementById('bb1').style.visibility = muncul; 
                    document.getElementById('bb3').style.visibility = muncul; 
                    document.getElementById('pp').style.visibility = muncul; 
                    document.getElementById('idiamin').style.visibility = muncul;
                }
                catch(err) {  }
            }

            function buka3(pp){
                mode="new"; 
                document.getElementById("dd1").style.visibility='visible'; 
                let ms = formatDate(Date.now()); 
                    if(pp!=1){
                        document.getElementById('dt1').value = ms;
                    }
                muncul = 'visible'; hilang = 'hidden';
                try {                    
                    document.getElementById('bb5').style.visibility = muncul;
                    document.getElementById('bb1').style.visibility = muncul; 
                    document.getElementById('bb3').style.visibility = muncul; 
                    document.getElementById('pp').style.visibility = muncul; 
                    document.getElementById('idiamin').style.visibility = muncul;
                    document.getElementById('idiamin').style.transition = "ease-in-out 2.5s";  
                }
                catch(err) {  }
                try{
                    document.getElementById('duit').disabled = false;
                    document.getElementById('duit').style.opacity = "100%";
                    document.getElementById('duit').style.transition = "ease-in-out 1.5s";

                    document.getElementById('nn').disabled = false;
                    document.getElementById('nn').style.opacity = "100%";
                    document.getElementById('nn').style.transition = "ease-in-out 1.5s";


                }catch(err) {  }

            }

            function buka2(){
                mode="new";
                document.getElementById("ctrl").style.visibility='visible';
                document.getElementById("sh").style.visibility='visible';
                document.getElementById("dd1").style.visibility='visible';  
                muncul = 'visible'; hilang = 'hidden';
                try {                    
                    document.getElementById('bb5').style.visibility = muncul;
                    document.getElementById('bb1').style.visibility = hilang; 
                    document.getElementById('bb3').style.visibility = muncul; 
                    document.getElementById('pp').style.visibility = muncul;
                }
                catch(err) {  }
            }            

            function tutup(){ 
                document.getElementById("ctrl").style.visibility='hidden';
                document.getElementById("sh").style.visibility='hidden';                
                document.getElementById("dd1").style.visibility='hidden';
            }
            function tutup2(){ 
                document.getElementById("ctrl").style.visibility='hidden';
                document.getElementById("sh").style.visibility='hidden';                
                document.getElementById("dd1").style.visibility='hidden';
                document.getElementById("pdetail").style.visibility='hidden';
            }

            function glek(tt){
               if(mode!=""){
                    document.getElementById("ige").style.visibility='visible';
                    if(tt == 't'){
                        document.getElementById("ige").style.visibility='hidden';
                    }
               }
            }

            function glek2(tt){
                if(mode!=""){
                     document.getElementById("gei").style.visibility='visible';
                     if(tt == 't'){
                         document.getElementById("gei").style.visibility='hidden';
                     }
                }
             }

            function glekk(tt){                
                     document.getElementById(tt).style.visibility='hidden';                     
                
             }

            function lek2(docno){
                document.getElementById("gei").style.visibility='hidden';
                // document.getElementById("jn").style.display='none';
                // document.getElementById("jn2").style.display='block';
                // document.getElementById("jn2").value = docno;
            }
            function lek(){
                document.getElementById("gei").style.visibility='hidden';
            }

            function getcell2(a1,b1){
                a1 = a1.replaceAll('_', ' ');
                b1 =  b1.replaceAll('_', ' ');
                 muncul = 'visible'; hilang = 'hidden';
                 glek2('t');
                 
                 document.getElementById("bn").value = b1;
                 document.getElementById("idb").value = a1;
                 try{
                    document.getElementById("ttidbank").value = a1;
                 }catch(err){}
            }
            var g=0;
            function gudang(id,name,baris){ 
                a1 = id.replaceAll('_', ' ');
                b1 =  name.replaceAll('_', ' ');
                 document.getElementById("xwid").value = a1;
                 document.getElementById("xwname").value = b1;

                baris = parseInt(baris)+ 1;
                g = document.getElementById("yam").rows.length - 1;                   
                for(i=2;i<=g;i++){                 
                  document.getElementById("yam").rows[i].cells[1].style.backgroundColor  = "white";
                  document.getElementById("yam").rows[i].cells[1].style.color  = "black";
                } 
                document.getElementById("yam").rows[baris].cells[1].style.backgroundColor  = "blue";
                document.getElementById("yam").rows[baris].cells[1].style.color  = "white";
            }

            function gudang(v1,name,baris){
                a1 = v1.replaceAll('_', ' ');
                b1 =  name.replaceAll('_', ' ');
                 document.getElementById("xwid").value = a1;
                 document.getElementById("xwname").value = b1;

                baris = parseInt(baris)+ 1;
                g = document.getElementById("yam").rows.length - 1;
                for(i=2;i<=g;i++){                 
                  document.getElementById("yam").rows[i].cells[1].style.backgroundColor  = "white";
                  document.getElementById("yam").rows[i].cells[1].style.color  = "black";
                } 
                document.getElementById("yam").rows[baris].cells[1].style.backgroundColor  = "blue";
                document.getElementById("yam").rows[baris].cells[1].style.color  = "white";
            }

            function gudangt(v1,name,baris){
                a1 = v1.replaceAll('_', ' ');
                b1 =  name.replaceAll('_', ' ');
                 document.getElementById("xwid2").value = a1;
                 document.getElementById("xwname2").value = b1;

                baris = parseInt(baris)+ 1;
                g = document.getElementById("yam").rows.length - 1;
                for(i=2;i<=g;i++){                 
                  document.getElementById("yam").rows[i].cells[1].style.backgroundColor  = "white";
                  document.getElementById("yam").rows[i].cells[1].style.color  = "black";
                } 
                document.getElementById("yam").rows[baris].cells[1].style.backgroundColor  = "blue";
                document.getElementById("yam").rows[baris].cells[1].style.color  = "white";
            }

            function gudang2(v1,v2){
                a1 = v1.replaceAll('_', ' ');
                b1 =  v2.replaceAll('_', ' ');
                 document.getElementById("kvm2").value = a1;
                 document.getElementById("sm2").value = b1;
                
            }

            function getcell(a1,b1){
              a1 = a1.replaceAll('_', ' ');
              b1 =  b1.replaceAll('_', ' ');
               muncul = 'visible'; hilang = 'hidden';
               glek('t');
               document.getElementById("accnm").value = a1;
               document.getElementById("accno").value = b1;
                try {
                    document.getElementById('dd1').style.visibility = muncul;
                }
                catch(err) {  }
                try {
                    document.getElementById('dd2').style.visibility = muncul;
                }
                catch(err) {  }
                try {
                    document.getElementById("ttaccountno").value = b1;
                    document.getElementById("tname").value = a1;
                }
                catch(err) {  }
                try {
                    document.getElementById("dc").value = b1; 
                }
                catch(err) {  }
            }
            
            function ceklik(){
                t = document.getElementById('gom'); 
            } 
            
            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();
            
                if (month.length < 2) 
                    month = '0' + month;
                if (day.length < 2) 
                    day = '0' + day;
            
                return [year, month, day].join('-');
            }

            function mbanking(){
                document.getElementById('mbank').style.visibility = "visible";
            }

            function anyar(){
                mode="new";
                muncul = 'visible'; hilang = 'hidden';
                let ms = formatDate(Date.now());
                document.getElementById('dt1').value = ms; 
                try {
                    document.getElementById('pp').style.visibility = muncul;
                }
                catch(err) {  }
                
                document.getElementById('bb5').style.visibility = muncul;
                document.getElementById('bb1').style.visibility = hilang; 
                document.getElementById('bb3').style.visibility = muncul; 
                // document.getElementById('t1').style.opacity = 1;
                // document.getElementById('t1').style.transition = "ease-in-out 0.5s"; 
               
            }

            function anyar2(){
                mode="new";
                muncul = 'visible'; hilang = 'hidden';
              
                // document.getElementById('sh').style.visibility = muncul;

                document.getElementById('bb1').style.visibility = hilang; 
                document.getElementById('bb3').style.visibility = muncul;
                document.getElementById('bb5').style.visibility = muncul;
                document.getElementById('pp').style.visibility = muncul; 
                // document.getElementById('t1').style.opacity = 1;
                // document.getElementById('t1').style.transition = "ease-in-out 0.5s";
            }

            function cb(){
                document.getElementById("gei").style.visibility='visible';
            }

            function firststate(){
                mode="";
                muncul = 'visible'; hilang = 'hidden';

                // document.getElementById('sh').style.visibility = muncul;

                document.getElementById('bb1').style.visibility = muncul; 
                document.getElementById('bb3').style.visibility = hilang;
                document.getElementById('bb5').style.visibility = hilang;
                 
                // document.getElementById('t1').style.opacity = 1;
                // document.getElementById('t1').style.transition = "ease-in-out 0.5s";
                try {
                    document.getElementById("ctrl").style.visibility = "hidden";
                    document.getElementById("dd1").style.visibility = "hidden";
                    document.getElementById("ige").style.visibility = "hidden";
                    document.getElementById("sh").style.visibility = "hidden";
                    document.getElementById('pp').style.visibility = hilang;
                    document.getElementById('pdetail').style.visibility = hilang;
                    document.getElementById('idiamin').style.visibility = hilang;
                }
                catch(err) {  }
                
                try{
                    document.getElementById('duit').disabled = true;
                    document.getElementById('duit').style.opacity = "0%";
                    document.getElementById('duit').style.transition = "ease-in-out 1.5s";

                    document.getElementById('nn').disabled = true;
                    document.getElementById('nn').style.opacity = "0%";
                    document.getElementById('nn').style.transition = "ease-in-out 1.5s";
                }catch(err) {  }
            }

            function cl(){
                firststate();
                rusakKomp();
            }

            function guid() {
                return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                );
              }

            function cld(){
                document.getElementById("accnm").value = '';
                document.getElementById("accno").value = '';
            }
            
            function tambahbaris(){
                i = (document.getElementById("yom").rows.length)  ;
                var table = document.getElementById("yom");
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = "";
                cell2.innerHTML = "";
                cell3.innerHTML = "0";
                cell4.innerHTML = "0";
                j = (document.getElementById("yom").rows.length)-1 ;
                cell5.innerHTML = "<a href='#' onclick='ed("+j+")' >Edit</a> <a href='#' onclick='de("+j+")'>Delete</a>";
            }

            function de(s){
                mode="delete";   
                    document.getElementById("yom").deleteRow(s); 
                mode ="new";
            } 

            function gaeKomp(nomer,ssid){
                var i0 = document.createElement("input");
                i0.setAttribute('type', 'text');
                i0.setAttribute('name', 'alfa'+nomer);i0.setAttribute('id', 'xalfa'+nomer);
                if(ssid!=null){
                    i0.setAttribute('value', ssid.replaceAll(' ', '')); 
                }else{
                    i0.setAttribute('value', guid());
                }
                i0.setAttribute("style", "display:none;");
                document.getElementById("fg").appendChild(i0);

                var i1 = document.createElement("input");
                i1.setAttribute('type', 'text');
                i1.setAttribute('name', 'ac'+nomer);i1.setAttribute('id', 'xac'+nomer);
                i1.setAttribute('value', document.getElementById("yom").rows[nomer].cells[0].innerHTML.replaceAll(' ', ''));
                i1.setAttribute("style", "display:none;");
                document.getElementById("fg").appendChild(i1);

                var i2 = document.createElement("input");
                i2.setAttribute('type', 'text');
                i2.setAttribute('name', 'an'+nomer);i2.setAttribute('id', 'xan'+nomer);
                i2.setAttribute('value', document.getElementById("yom").rows[nomer].cells[1].innerHTML.replaceAll(' ', ''));
                i2.setAttribute("style", "display:none;");
                document.getElementById("fg").appendChild(i2);

                 var i3 = document.createElement("input");
                 i3.setAttribute('type', 'text');
                 i3.setAttribute('name', 'db'+nomer);i3.setAttribute('id', 'xdb'+nomer);
                 i3.setAttribute('value', document.getElementById("yom").rows[nomer].cells[2].innerHTML.replaceAll(' ', ''));
                i3.setAttribute("style", "display:none;");
                document.getElementById("fg").appendChild(i3);

                 var i4 = document.createElement("input");
                 i4.setAttribute('type', 'text');
                 i4.setAttribute('name', 'kr'+nomer);i4.setAttribute('id', 'xkr'+nomer);
                 i4.setAttribute('value', document.getElementById("yom").rows[nomer].cells[3].innerHTML.replaceAll(' ', ''));
                i4.setAttribute("style", "display:none;");
                document.getElementById("fg").appendChild(i4);
                    try {
                        document.getElementById("tjj").value = nomer;
                    }
                    catch(err) {  } 
            }

            function rusakKomp(nomer){
                try{
                    for(i=1;i<=1000;i++)
                    {
                        document.getElementById("xac"+i).remove();
                        document.getElementById("xan"+i).remove();
                        document.getElementById("xdb"+i).remove();
                        document.getElementById("xkr"+i).remove(); 
                    }
                }catch(err) {} 
            } 

            function editKomp(nomer){
                document.getElementById("xac"+nomer).value=document.getElementById("yom").rows[nomer].cells[0].innerHTML ;
                document.getElementById("xan"+nomer).value=document.getElementById("yom").rows[nomer].cells[1].innerHTML ;
                document.getElementById("xdb"+nomer).value=document.getElementById("yom").rows[nomer].cells[2].innerHTML ;
                document.getElementById("xkr"+nomer).value=document.getElementById("yom").rows[nomer].cells[3].innerHTML ;
            }

            function ed(s){mode="edit"; rs=s;
               document.getElementById("accno").value = document.getElementById("yom").rows[s].cells[0].innerHTML.replaceAll(' ', '');
               document.getElementById("accnm").value = document.getElementById("yom").rows[s].cells[1].innerHTML.replaceAll(' ', '');
                  if(document.getElementById("yom").rows[s].cells[2].innerHTML.replaceAll(' ', '') != "0"){
                    document.getElementById("nom").value   = document.getElementById("yom").rows[s].cells[2].innerHTML.replaceAll(' ', '');
                    document.getElementById("hayo").value = "Debet";
                   }else{ 
                    document.getElementById("nom").value   = document.getElementById("yom").rows[s].cells[3].innerHTML.replaceAll(' ', '');
                    document.getElementById("hayo").value = "Credit";
                   }
                   document.getElementById("ctrl").style.visibility = "visible";
                //    alert('a');
                   document.getElementById("sh").style.visibility = "visible";
                   document.getElementById("dd1").style.visibility = "visible";
            }

            function ed2(s){mode="edit";
               document.getElementById("accnm2").value = document.getElementById("yom").rows[s].cells[0].innerHTML.replaceAll(' ', '');
               
               document.getElementById("accno2").value = document.getElementById("yom").rows[s].cells[1].innerHTML.replaceAll(' ', '');
                document.getElementById("accnm").value = document.getElementById("yom").rows[s].cells[2].innerHTML.replaceAll(' ', '');
            //    .replaceAll(' ', '');
                // document.getElementById("accno").value = document.getElementById("yom").rows[s].cells[3].innerHTML;
            //    .replaceAll(' ', '');
                document.getElementById("tran").value = document.getElementById("yom").rows[s].cells[3].innerHTML.replaceAll(' ', '');
            //    .replaceAll(' ', '');     
            }

            var debet=0; var kredit=0;var jdebet=0; var jkredit=0;
            function cek_balance(){
               
            }

            function tambahbariscb(){
                var cell = [];
                cell.length = 19;

                // const ex = [2,3,12,13,14,15,16,17];
                const ex = [0,1,2,3,4,6,7,8,10,12,13,14,15,16,17];
               
              
                i = (document.getElementById("yom").rows.length)  ;
               
                var table = document.getElementById("yom");
            
                var row = table.insertRow(i);

                for(i=0;i<=18;i++){
                    cell[i] = row.insertCell(i);
                }

                //:exCeption
                for(j=0;j<=ex.length-1;j++){
                    cell[ex[j]].style.display = "none";
                }
                //:exCeption

                j = (document.getElementById("yom").rows.length)-1 ; 
                cell[18].innerHTML = "<a href='#' onclick='ed("+j+")' >Edit</a> <a href='#' onclick='de("+j+")'>Delete</a>";
            }
            
            function numberWithCommas(x) {
                var parts = x.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return parts.join(".");
            }

            function gaeKompcb(nomer,ssid){
                let delok="none";
                // document.getElementById("yom").rows[1].cells[5].innerHTML  = document.getElementById("dn").value; //nominal 
                var i0 = document.createElement("input");
                i0.setAttribute('type', 'text');
                i0.setAttribute('name', 'nominal'+nomer);i0.setAttribute('id', 'xnominal'+nomer);
                i0.setAttribute('value', document.getElementById("yom").rows[nomer].cells[5].innerHTML);
                i0.setAttribute("style", "display:"+delok+";");
                    document.getElementById("yom").rows[nomer].cells[5].innerHTML = 
                    numberWithCommas(document.getElementById("yom").rows[nomer].cells[5].innerHTML);
                document.getElementById("fg").appendChild(i0);

                // document.getElementById("yom").rows[1].cells[7].innerHTML  = "0"; //rate
                var i1 = document.createElement("input");
                i1.setAttribute('type', 'text');
                i1.setAttribute('name', 'rate'+nomer);i1.setAttribute('id', 'xrate'+nomer);
                i1.setAttribute('value', document.getElementById("yom").rows[nomer].cells[7].innerHTML.replaceAll(' ', ' '));
                    document.getElementById("yom").rows[nomer].cells[7].innerHTML = 
                    numberWithCommas(document.getElementById("yom").rows[nomer].cells[7].innerHTML);
                i1.setAttribute("style", "display:"+delok+";");
                document.getElementById("fg").appendChild(i1);

                // document.getElementById("yom").rows[1].cells[8].innerHTML  = document.getElementById("dnr").value; //specialrate
                var i2 = document.createElement("input");
                i2.setAttribute('type', 'text');
                i2.setAttribute('name', 'spcrate'+nomer);i2.setAttribute('id', 'xspcrate'+nomer);
                i2.setAttribute('value', document.getElementById("yom").rows[nomer].cells[8].innerHTML);
                    document.getElementById("yom").rows[nomer].cells[8].innerHTML = 
                    numberWithCommas(document.getElementById("yom").rows[nomer].cells[8].innerHTML);
                i2.setAttribute("style", "display:"+delok+";");
                document.getElementById("fg").appendChild(i2);

                // document.getElementById("yom").rows[1].cells[9].innerHTML  = document.getElementById("dts").value; //notes
                var i3 = document.createElement("input");
                i3.setAttribute('type', 'text');
                i3.setAttribute('name', 'ddts'+nomer);i3.setAttribute('id', 'xddts'+nomer);
                i3.setAttribute('value', document.getElementById("yom").rows[nomer].cells[9].innerHTML.replaceAll(' ', ''));
                                    
                i3.setAttribute("style", "display:"+delok+";");
                document.getElementById("fg").appendChild(i3);

                // document.getElementById("yom").rows[1].cells[11].innerHTML = document.getElementById("dc").value; //acc2
                var i4 = document.createElement("input");
                i4.setAttribute('type', 'text');
                i4.setAttribute('name', 'dc'+nomer);i4.setAttribute('id', 'xdc'+nomer);
                i4.setAttribute('value', document.getElementById("yom").rows[nomer].cells[11].innerHTML.replaceAll(' ', ''));
                i4.setAttribute("style", "display:"+delok+";");
                document.getElementById("fg").appendChild(i4);
                try {
                    var i = document.createElement("input");
                    i.setAttribute('type', 'text');
                    i.setAttribute('name', 'nid'+nomer);i.setAttribute('id', 'xid'+nomer);
                    i.setAttribute('value', document.getElementById("yom").rows[nomer].cells[19].innerHTML);
                    i.setAttribute("style", "display:"+delok+";");
                    document.getElementById("fg").appendChild(i);
                }
                catch(err) {  } 

                try {
                    document.getElementById("tjj").value = nomer;
                }
                catch(err) {  } 
            }

            function killerinstinct(jt){

                alert(jt);
                
            }
            function savedcb(){
                if(mode =="new"){
                    i = (document.getElementById("yom").rows.length);                    
                    if(i==2){
                        document.getElementById("yom").rows[1].cells[5].innerHTML  = document.getElementById("dn").value; //nominal
                        document.getElementById("yom").rows[1].cells[7].innerHTML  = "0"; //rate
                        document.getElementById("yom").rows[1].cells[8].innerHTML  = document.getElementById("dnr").value; //specialrate
                        document.getElementById("yom").rows[1].cells[9].innerHTML  = document.getElementById("dts").value; //notes
                        document.getElementById("yom").rows[1].cells[11].innerHTML = document.getElementById("dc").value; //acc2
                             gaeKompcb(1);
                             tambahbariscb();
                    }else{
                        j = (document.getElementById("yom").rows.length) - 1;
                        document.getElementById("yom").rows[j].cells[5].innerHTML  = document.getElementById("dn").value; //nominal
                        document.getElementById("yom").rows[j].cells[7].innerHTML  = "0"; //rate
                        document.getElementById("yom").rows[j].cells[8].innerHTML  = document.getElementById("dnr").value; //specialrate
                        document.getElementById("yom").rows[j].cells[9].innerHTML  = document.getElementById("dts").value; //notes
                        document.getElementById("yom").rows[j].cells[11].innerHTML = document.getElementById("dc").value; //acc2
                            gaeKompcb(j);
                            tambahbariscb();
                    }
                    //alert(mode);
                }
                if(mode == "edit") {
                    // document.getElementById("yom").rows[rs].cells[0].innerHTML = document.getElementById("accno").value;
                    // document.getElementById("yom").rows[rs].cells[1].innerHTML = document.getElementById("accnm").value;
                    // if(document.getElementById("hayo").value == "Debet"){
                    //     document.getElementById("yom").rows[rs].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                    //     document.getElementById("yom").rows[rs].cells[3].innerHTML = 0;
                    // }else{
                    //     document.getElementById("yom").rows[rs].cells[2].innerHTML = 0;
                    //     document.getElementById("yom").rows[rs].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                    // }
                    
                    alert(mode);
                    // editKomp(rs);
                }                
                mode="new";
            }

            function editedcb(){               
                if(mode =="new"){
                    i = (document.getElementById("yom").rows.length);
                    // if(i==2){
                    //     document.getElementById("yom").rows[1].cells[5].innerHTML  = document.getElementById("dn").value; //nominal
                    //     document.getElementById("yom").rows[1].cells[7].innerHTML  = "0"; //rate
                    //     document.getElementById("yom").rows[1].cells[8].innerHTML  = document.getElementById("dnr").value; //specialrate
                    //     document.getElementById("yom").rows[1].cells[9].innerHTML  = document.getElementById("dts").value; //notes
                    //     document.getElementById("yom").rows[1].cells[11].innerHTML = document.getElementById("dc").value; //acc2

                    //         gaeKompcb(1);
                    //         tambahbariscb();
                    // }else{
                        j = (document.getElementById("yom").rows.length-1) ;                        
                        tambahbariscb();
                        document.getElementById("yom").rows[j].cells[5].innerHTML  = document.getElementById("dn").value; //nominal
                        document.getElementById("yom").rows[j].cells[7].innerHTML  = "0"; //rate
                        document.getElementById("yom").rows[j].cells[8].innerHTML  = document.getElementById("dnr").value; //specialrate
                        document.getElementById("yom").rows[j].cells[9].innerHTML  = document.getElementById("dts").value; //notes
                        document.getElementById("yom").rows[j].cells[11].innerHTML = document.getElementById("dc").value; //acc2
                            gaeKompcb(j);
                            tambahbariscb();
                    // }
                }
                if(mode == "edit") {
                    // document.getElementById("yom").rows[rs].cells[0].innerHTML = document.getElementById("accno").value;
                    // document.getElementById("yom").rows[rs].cells[1].innerHTML = document.getElementById("accnm").value;
                    // if(document.getElementById("hayo").value == "Debet"){
                    //     document.getElementById("yom").rows[rs].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                    //     document.getElementById("yom").rows[rs].cells[3].innerHTML = 0;
                    // }else{
                    //     document.getElementById("yom").rows[rs].cells[2].innerHTML = 0;
                    //     document.getElementById("yom").rows[rs].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                    // }
                    // editKomp(rs);
                }                
                mode="new";  
            }

            function saved(){
                if(mode =="new"){
                    i = (document.getElementById("yom").rows.length);
                    if(i==2){
                        document.getElementById("yom").rows[1].cells[0].innerHTML = document.getElementById("accno").value.replaceAll('_', ' ');
                        document.getElementById("yom").rows[1].cells[1].innerHTML = document.getElementById("accnm").value.replaceAll('_', ' ');
                        if(document.getElementById("hayo").value == "Debet"){
                           
                            document.getElementById("yom").rows[1].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                        }else{
                            document.getElementById("yom").rows[1].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                        }
                            gaeKomp(1);
                            tambahbaris();
                    }else{
                        j = (document.getElementById("yom").rows.length) - 1;
                        document.getElementById("yom").rows[j].cells[0].innerHTML = document.getElementById("accno").value;
                        document.getElementById("yom").rows[j].cells[1].innerHTML = document.getElementById("accnm").value;                    
                        if(document.getElementById("hayo").value == "Debet"){
                            document.getElementById("yom").rows[j].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                        }else{
                            document.getElementById("yom").rows[j].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                        }
                            gaeKomp(j);
                            tambahbaris();
                    }                    
                }
                if(mode == "edit") {
                    document.getElementById("yom").rows[rs].cells[0].innerHTML = document.getElementById("accno").value;
                    document.getElementById("yom").rows[rs].cells[1].innerHTML = document.getElementById("accnm").value;
                    if(document.getElementById("hayo").value == "Debet"){
                        document.getElementById("yom").rows[rs].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                        document.getElementById("yom").rows[rs].cells[3].innerHTML = 0;
                    }else{
                        document.getElementById("yom").rows[rs].cells[2].innerHTML = 0;
                        document.getElementById("yom").rows[rs].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                    }
                    
                    //edit comp baru
                    editKomp(rs);
                }                
                mode="new";
                document.getElementById("ctrl").style.visibility = "hidden";
                document.getElementById("sh").style.visibility = "hidden";
                document.getElementById("dd1").style.visibility = "hidden";
            }
    
            function test(event) {
                x = event.clientX;
                y = event.clientY;
                // console.log(x);
            }

            function edited(){
                document.getElementById("ctrl").style.visibility = "hidden";
                document.getElementById("sh").style.visibility = "hidden";
                document.getElementById("dd1").style.visibility = "hidden";
                            if(mode =="new"){
                                i = (document.getElementById("yom").rows.length);
                                if(i==2){
                                    document.getElementById("yom").rows[1].cells[0].innerHTML = document.getElementById("accno").value.replaceAll('_', ' ');
                                    document.getElementById("yom").rows[1].cells[1].innerHTML = document.getElementById("accnm").value.replaceAll('_', ' ');
                                    if(document.getElementById("hayo").value == "Debet"){
                                        document.getElementById("yom").rows[1].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                                    }else{
                                        document.getElementById("yom").rows[1].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                                    }
                                        gaeKomp(1);
                                        tambahbaris();
                                }else{
                                    j = (document.getElementById("yom").rows.length-1) ;
                                    tambahbaris();
                                    document.getElementById("yom").rows[j].cells[0].innerHTML = document.getElementById("accno").value;
                                    document.getElementById("yom").rows[j].cells[1].innerHTML = document.getElementById("accnm").value;                    
                                    if(document.getElementById("hayo").value == "Debet"){
                                        document.getElementById("yom").rows[j].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                                    }else{
                                        document.getElementById("yom").rows[j].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                                    }
                                        gaeKomp(j);
                                        gaeKomps(j,'');
                                        tambahbaris();
                                }                    
                            }
                            if(mode == "edit") {
                                document.getElementById("yom").rows[rs].cells[0].innerHTML = document.getElementById("accno").value;
                                document.getElementById("yom").rows[rs].cells[1].innerHTML = document.getElementById("accnm").value;
                                if(document.getElementById("hayo").value == "Debet"){
                                    document.getElementById("yom").rows[rs].cells[2].innerHTML = document.getElementById("nom").value.toLocaleString();
                                    document.getElementById("yom").rows[rs].cells[3].innerHTML = 0;
                                }else{
                                    document.getElementById("yom").rows[rs].cells[2].innerHTML = 0;
                                    document.getElementById("yom").rows[rs].cells[3].innerHTML = document.getElementById("nom").value.toLocaleString();
                                }
                                editKomp(rs);
                            }                
                            mode="new";  
            }
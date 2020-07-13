var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML = year;

function showDialog1(){
var dl1 = document.getElementById('dialogone');
var btnhd1 = document.getElementById('btnhd1');
var btnsd1 = document.getElementById('btnsd1');
dl1.style.display = "block";
btnsd1.style.display = "none";
btnhd1.style.display = "inline";
}
function hideDialog1(){
    var dl1 = document.getElementById('dialogone');
    var btnhd1 = document.getElementById('btnhd1');
    var btnsd1 = document.getElementById('btnsd1');
    dl1.style.display = "none";
    btnsd1.style.display = "inline";
    btnhd1.style.display = "none";
    }
    function showDialog2(){
        var dl2 = document.getElementById('dialogtwo');
        var btnhd2 = document.getElementById('btnhd2');
        var btnsd2 = document.getElementById('btnsd2');
        dl2.style.display = "block";
        btnsd2.style.display = "none";
        btnhd2.style.display = "inline";
        }
        function hideDialog2(){
            var dl2 = document.getElementById('dialogtwo');
            var btnhd2 = document.getElementById('btnhd2');
            var btnsd2 = document.getElementById('btnsd2');
            dl2.style.display = "none";
            btnsd2.style.display = "inline";
            btnhd2.style.display = "none";
            }

            function showDialog3(){
                var dl3 = document.getElementById('dialogthree');
                var btnhd3 = document.getElementById('btnhd3');
                var btnsd3 = document.getElementById('btnsd3');
                dl3.style.display = "block";
                btnsd3.style.display = "none";
                btnhd3.style.display = "inline";
                }
                function hideDialog3(){
                    var dl3 = document.getElementById('dialogthree');
                    var btnhd3 = document.getElementById('btnhd3');
                    var btnsd3 = document.getElementById('btnsd3');
                    dl3.style.display = "none";
                    btnsd3.style.display = "inline";
                    btnhd3.style.display = "none";
                    }

                    function showDialog4(){
                        var dl4 = document.getElementById('dialogfour');
                        var btnhd4 = document.getElementById('btnhd4');
                        var btnsd4 = document.getElementById('btnsd4');
                        dl4.style.display = "block";
                        btnsd4.style.display = "none";
                        btnhd4.style.display = "inline";
                        }
                        function hideDialog4(){
                            var dl4 = document.getElementById('dialogfour');
                            var btnhd4 = document.getElementById('btnhd4');
                            var btnsd4 = document.getElementById('btnsd4');
                            dl4.style.display = "none";
                            btnsd4.style.display = "inline";
                            btnhd4.style.display = "none";
                            }


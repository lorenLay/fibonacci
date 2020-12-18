var num = prompt("Enter desired range of the fibonacci sequece :", " "); 
var var1 = 0;
var var2 = 1;

document.write("<b>Desired Range: ",num, "<br>");
document.write("<b>The fibonacci series : ");
document.write(" ", var1, " ");
document.write(" ", var2, " ");

var i,var3;
for(i=2; i<num; i++)
{
var3=var1+var2;
var1=var2;
var2=var3;
document.write(" ",var3," ");
}
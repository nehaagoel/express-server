var x=Number(process.argv[2])
equilateral(x)
function equilateral(x)
{
    console.log("Print equilateral with rows " +x)
    if(x<2 && x>10)
    return (0);
    out="";
    for( i=1;i<=x;i++)
    {
        for( j=i; j<=x-1;j++)
        {
            out=out+" ";
        }
        for(k=i;k>=1;k--)
        {
            out=out+ "* "
        }
        out+="\n"
    }
    console.log(out)
}
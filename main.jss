function DoDoList()
{
    var item = document.getElementById("DoDoInput").value;
    var text = document.createTextNode(item);
    var newitem = document.createElement("li");
    newitem.appendChild(text);
    document.getElementById("DoDoList").appendChild(newitem);

}

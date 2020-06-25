function innerChat()
{
    var chat = document.getElementById("message").value;//將輸入框中的值取出存入"chat"
    var node = document.createElement("p");//創建一個<p></p>
    node.innerHTML = chat;//在<p></p>中間放入"chat"
    node.appendChild(document.createElement("br"));//node = <p>"chat"</p><br>
    document.getElementById("messageBox").appendChild(node);
}

function openSidebar()
{
    document.getElementById("mySidenav").style.width = "250px";//打開測欄
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";//主區塊背景變暗
}

function startChat()
{
    document.getElementById("startChat").style.display = "none";
    document.getElementById("wrapper").style.display = "block"
}
function DeleteFile(filename){
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE","/api/delete");
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send(`filename=${filename}`);

    xhttp.onreadystatechange = function(){
        if(this.status==200 & this.readyState==4){
            //var response = JSON.parse(this.responseText); 
            window.location='/';
        }
        else{
            return false;
        }
    }
}

function DownloadFile(filename){
    alert('Upcoming feature');
    return false;
}
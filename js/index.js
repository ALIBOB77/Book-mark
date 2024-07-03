
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");

var allSites = [];


    if(localStorage.getItem("sitesContainer") !== null){
        allSites = JSON.parse(localStorage.getItem("sitesContainer"))

        displayData();
    }

function addwebsite(){

    if(validationSites(siteName , 'msgName')  &&  validationSites(siteUrl , 'msgUrl')){
        var webSite = {
            name:siteNameInput.value,
            url:siteUrlInput.value,
        };
    
        allSites.push(webSite);
    
        localStorage.setItem("sitesContainer", JSON.stringify(allSites));
    
        displayData();
    
        clearForm();
    
        console.log(allSites);
    }
    else{
        alert("what you doing")
    }

    }


    function clearForm(){
         siteNameInput.value = null; 
         siteUrlInput.value = null; 
    }
    

    function displayData(){
        var cartona = "";

        for(var i = 0 ; i < allSites.length ; i++){
            cartona+= ` 
            <tr>
            <td>${i}</td>
            <td>${allSites[i].name}</td>
            <td>
                <button onclick="visitSite(${i})" class="btn btn-outline-warning btn-sm px-3">Visit</button>
            </td>
            <td>
                <button onclick="deleteSite(${i})" class="btn btn-outline-danger btn-sm px-3">Delete</button>
            </td>
        </tr>`;

        }

        document.getElementById("tableData").innerHTML= cartona;
    }


        function deleteSite(siteIindex){

            console.log(allSites);

            allSites.splice(siteIindex , 1);

            localStorage.setItem("sitesContainer", JSON.stringify(allSites));

            displayData();
        }
        
            
        function visitSite(index){
            window.open(allSites[index].url , "_blank");
        }
      


        function validationSites(element, msgId) {
            var msg = document.getElementById(msgId);
            var regex = {
              siteName: /^[A-Z][a-z]{3,8}$/,
              siteUrl:
                /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
            };
          
            if (regex[element.id].test(element.value) == true) {
              element.classList.add("is-valid");
              element.classList.remove("is-invalid");
              msg.classList.add("d-none");
          
              return true;
            } else {
              element.classList.add("is-invalid");
              element.classList.remove("is-valid");
              msg.classList.remove("d-none");
          
              return false;
            }
          }
     



















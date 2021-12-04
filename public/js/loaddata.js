      let holddata;
      let element;
      element = document.getElementById("form");

      fetch(
        "http://flip3.engr.oregonstate.edu:33233/ChIJW69I7FhZwokR61IbDPnsqTo"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          for (let i = 0; i< 3; i++){
            
            holddata = document.createElement("p");
            //holddata.appendChild(document.createTextNode("Rating: "));
            //holddata.appendChild(document.createTextNode("Rating: "));
            //console.log(holddata.outerHTML);
            holddata.innerText = data[i].rating;
            document.getElementById("form").appendChild(holddata) ;

            holddata = document.createElement("p");
            holddata.innerText = data[i].text;
            document.getElementById("form").appendChild(holddata);
            
          }
          
        })
        .catch(function () {
          console.log("Booo");
        });
fetch('http://flip3.engr.oregonstate.edu:33233/ChIJW69I7FhZwokR61IbDPnsqTo')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.dir(myJson);
  });
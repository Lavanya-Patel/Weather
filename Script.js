function fetchdata() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => cardlist(data.data))
      .catch((err) => console.log(err));
  }
  
  fetchdata();
  
  function cardlist(data) {
    let store = data.map((el) =>
      singlecard(el.id, el.email, el.first_name, el.last_name, el.avatar)
    );
    document.querySelector(".container").innerHTML = store.join(""); 
  }
  
  function singlecard(id, email, first_name, last_name, avatar) {
    let card = `
      <div class="card">
        <h3>${id}</h3>
        <h3>${email}</h3>
        <h3>${first_name}</h3>
        <h3>${last_name}</h3>
        <img src="${avatar}" alt="${first_name} ${last_name}" height="90px" width="100px">
      </div>
    `;
    return card;
  }



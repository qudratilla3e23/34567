let foydalanuvchilar =

fetch("https://dummyjson.com/users?limit=100")
  .then(res => res.json())
  .then(data => {
    foydalanuvchilar = data.users;
    chizish(foydalanuvchilar);
  });

function chizish(a) {
  const ota = document.getElementById("ota");
  ota.innerHTML = "";

  a.forEach(mah => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${mah.image}" alt="amg">
          <h2>Ism: ${mah.firstName}  Familyasi: ${mah.lastName} </h2>
          <h3>Email: ${mah.email} </h3>
          <h3>Phone: ${mah.phone} </h3>
          <h3>Age: ${mah.age} </h3>
          <h3>Gender: ${mah.gender} </h3>
          <p>Address: ${mah.address} hjyht</p>
    `;
    ota.appendChild(div);
  });
}

const input = document.getElementById("input");
const select = document.getElementById("select");

input.addEventListener("input", filtrlash);
select.addEventListener("change", filtrlash);

function filtrlash() {
  const qidiruv = input.value.toLowerCase();
  const filter = select.value;

  let natija = foydalanuvchilar.filter(mah =>
    `${mah.firstName} ${mah.lastName}`.toLowerCase().includes(qidiruv)
  );

  if (filter === "male") {
    natija = natija.filter(u => u.gender === "male");
  } else if (filter === "female") {
    natija = natija.filter(u => u.gender === "female");
  } else if (filter === "Age") {
    natija = natija.sort((a, b) => a.age - b.age);
  }

  chizish(natija);
}


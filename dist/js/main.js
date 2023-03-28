const getWord = async () => {
  const res = await fetch("/getword");
  const word = await res.json();

  document.getElementById("hello").innerText = word.message;
};

const getUsers = async () => {
  const res = await fetch("/api/users");
  const users = await res.json();

  users.forEach((user) => {
    const list = document.createElement("li");
    const text = document.createTextNode(user.name);

    list.appendChild(text);
    document.getElementById("users").appendChild(list);
  });
};

getWord();
getUsers();

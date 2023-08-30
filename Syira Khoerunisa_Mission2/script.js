var notAddedFriends = ["John ", "Garcia", "Anna" , "Alessandro" , "Sophie" , "Diego" , "Silva"];
var username = ["@john ", "@garcia", "@anna" , "@alessandro" , "@sophie" , "@diego" , "@silva"];
var addedFriends = [];

function updateLists() {
  var notAddedList = document.getElementById("notAddedList");
  var friendList = document.getElementById("friendList");
  
  notAddedList.innerHTML = "";
  friendList.innerHTML = "";

  for (var i = 0; i < notAddedFriends.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
      ${notAddedFriends[i]}
      <button onclick="addFriend(${i})">Follow</button>
    `;
    notAddedList.append(listItem);
  }

  for (var i = 0; i < addedFriends.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = `
      ${addedFriends[i]}
      <button1 onclick="removeFriend(${i})">Unfollow</button1>
    `;
    friendList.append(listItem);
  }
}

function addFriend(index) {
  var friendName = index !== undefined ? notAddedFriends[index] : document.getElementById("friendName").value;
  notAddedFriends.splice(index, 1);

  addedFriends.push(friendName);
  updateLists();
}

function removeFriend(index) {
  var removedFriend = addedFriends.splice(index, 1);
  notAddedFriends.push(removedFriend[0]);
  updateLists();
}

// Panggil updateLists() saat halaman pertama kali dimuat
window.onload = updateLists;

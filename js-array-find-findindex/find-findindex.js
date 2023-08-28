function findUserByUsername(usersArray, username) {
  return usersArray.find(function (user) {
    return user.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  const userIdx = usersArray.findIndex(function (user) {
    return user.username === username;
  });
  console.log(usersArray);
  if (userIdx !== -1) {
    return usersArray.splice(userIdx, 1)[0];
  } else {
    return undefined;
  }
}

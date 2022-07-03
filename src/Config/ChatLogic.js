export const getSender = (l, users) => {
  return l._id === users[0]._id ? users[1].name : users[0].name;
};

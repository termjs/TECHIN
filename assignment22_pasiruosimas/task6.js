// 6. Deep destructuring of nested objects

// Given:

// const data = {
//   status: "ok",
//   user: {
//     id: 15,
//     profile: {
//       name: "Laura",
//       email: "laura@example.com"
//     },
//     roles: ["user", "editor"]
//   }
// };

// Using destructuring, extract:

//     status
//     userId (from id)
//     name
//     primaryRole (first element in roles)

// All as separate variables (no data. accesses allowed in your final code).

const data = {
  status: "ok",
  user: {
    id: 15,
    profile: {
      name: "Laura",
      email: "laura@example.com",
    },
    roles: ["user", "editor"],
  },
};

const {
  status,
  user: {
    id: userId,
    profile: { name },
    roles: [primaryRole],
  },
} = data;

console.log(status, userId, name, primaryRole);

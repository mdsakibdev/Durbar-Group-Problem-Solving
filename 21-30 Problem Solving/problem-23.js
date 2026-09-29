/**
 * * 
 */

let user = {
  name: "Rafi",
  address: {
    city: "Dhaka"
  },
  social: {
    followers: 0
  }
}
// let name = user.name ?? "Anonymous"
// let city = user?.address?.city ?? "Unknown"
// let followers = user?.social?.followers ?? 0


function generateProfileCard(user) {

    let name = user?.name ?? "Anonymous"

    let city = user?.address?.city ?? "Unknown"

    let followers = user?.social?.followers ?? 0

    return `${name} | ${city} | followers: ${followers} `;
}
console.log(generateProfileCard(user))
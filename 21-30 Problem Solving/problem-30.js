/**
 * * এই problem-এ মূলত array + includes() + push() + splice() + string handling লাগবে।
 */

let command = [
  "join Rafi",
  "join Sara",
  "serve",
  "join Alex",
  "leave Sara",
  "serve"
]

let queue = [];
let served = [];


function simulateTicketQueue(commands) {
    let queue = [];
    let served = [];

    for (let command of commands) {

        if (command === "serve") {
            if (queue.length > 0) {
                let name = queue.shift();
                served.push(name);
            }

        } else if (command.startsWith("join ")) {
            let name = command.slice(5);

            if (!queue.includes(name)) {
                queue.push(name);
            }
            
        } else if (command.startsWith("leave ")) {
            let name = command.slice(6);
            let index = queue.indexOf(name);

            if (index !== -1) {
                queue.splice(index, 1);
            }
        }
    }

    return {
        queue,
        served
    };
}
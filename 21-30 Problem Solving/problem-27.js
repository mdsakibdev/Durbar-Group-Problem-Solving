let skills1 = ["JS", "React", "Node"];
let skills2 = ["react", "css", "js"];

function commonSkills(skills1, skills2) {

    let normalizedSkills1 = skills1.map(skill => skill.toLowerCase());

    let skillSet = new Set(normalizedSkills1);

    let normalizedSkills2 = skills2.map(skill => skill.toLowerCase());

    let resultSet = new Set();

    for (let skill of normalizedSkills2) {

        if (skillSet.has(skill)) {

            resultSet.add(skill);

        }
    }

    let arr = [...resultSet].sort();

    return arr;
}

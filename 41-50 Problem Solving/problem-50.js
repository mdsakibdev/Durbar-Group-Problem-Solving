function countConnectedFriends(friendships, startPerson) {
  const graph = new Map();

  for (const [person1, person2] of friendships) {
    if (!graph.has(person1)) graph.set(person1, []);
    if (!graph.has(person2)) graph.set(person2, []);

    graph.get(person1).push(person2);
    graph.get(person2).push(person1);
  }

  const visited = new Set([startPerson]);
  const stack = [startPerson];

  while (stack.length > 0) {
    const person = stack.pop();

    for (const friend of graph.get(person) || []) {
      if (!visited.has(friend)) {
        visited.add(friend);
        stack.push(friend);
      }
    }
  }

  return visited.size;
}
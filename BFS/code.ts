const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["tom", "jenny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["tom"] = [];
graph["jenny"] = [];

function personIsSeller(name: string) {
    return name[name.length - 1] === "m";
}

function bfs_search(name: string) {
    let searchQueue: any = [...graph[name]];
    let searched: any = [];

    while (searchQueue) {
        let person = searchQueue.shift() as string;
        if (searched.includes(person)) continue;
        if (personIsSeller(person)) return true;
        searchQueue.push(...graph[person]);
        searched.push(person)
    }

    return false;
}

console.log(bfs_search("you"))
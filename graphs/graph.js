let Vertex = require('./vertex');
let Edge = require('./edge');

let A = new Vertex('A');
let B = new Vertex('B');
let C = new Vertex('C');
let D = new Vertex('D');
let E = new Vertex('E');
let F = new Vertex('F');

let e1 = new Edge(A, B, 10);
let e2 = new Edge(A, C, 5);
let e3 = new Edge(C, B, 3);
let e4 = new Edge(A, D, 9);
let e5 = new Edge(C, D, 2);
let e6 = new Edge(E, D, 9);
let e7 = new Edge(F, E, 3);
let e8 = new Edge(F, D, 3);
// let e9 = new Edge(F, A, 3);

function visit(vertex, stack, visited) {
    visited[vertex.value] = true;
        
    vertex.inEdges.forEach((edge) => {
        let neighbor = edge.fromVertex;

        if (!visited[neighbor.value]) {
            visit(neighbor, stack, visited);
        }
    })

    stack.push(vertex);
}

function topologicalSort(verticies) {
    let stack = [];
    let visited = {};
    
    verticies.forEach((vertex) => {
        if (!visited[vertex.value]) {
            visit(vertex, stack, visited);
        }    
    });

    return stack;
}

console.log(
    topologicalSort([B,C, D,F, A, E])
        .map((vertex) => { 
            return vertex.value + ' ' + vertex.inEdges.length
        })
    );

function dijkstra(graph, source, target) {
    
}

dijkstra([A, B, C, D, E, F], C, F);
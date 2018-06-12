class Edge {
    constructor(fromVertex, toVertex, cost = 1) {
        this.fromVertex = fromVertex;
        this.toVertex = toVertex;
        this.cost = cost;

        toVertex.inEdges.push(this);
        fromVertex.outEdges.push(this);
        fromVertex.neighbors.push(this.toVertex);
    }    
}

module.exports = Edge;
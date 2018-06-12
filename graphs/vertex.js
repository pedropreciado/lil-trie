class Vertex {
    constructor(value = null) {
        this.value = value;        
        this.inEdges = [];
        this.outEdges = [];
        this.neighbors = [];
    }
}

module.exports = Vertex;
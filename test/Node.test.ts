import Node from '../src/Node';
import {} from 'mocha';
import {assert} from 'chai'

describe('Test suit for Node', ()=>{
    
    let node1: Node;
    let node2: Node; 
    let node3: Node; 
    let node4: Node; 
    let node5: Node; 
    let node6: Node; 
    let node7: Node; 
    let node8: Node; 
    let node9: Node; 
    let node10: Node;

    node8 = new Node(8, []);
    node9 = new Node(9, []);
    node10 = new Node(10, []);
    node5 = new Node(5, [node8]);
    node6 = new Node(6, [node9]);
    node7 = new Node(7, [node9, node10]);
    node3 = new Node(3, [node6]);
    node4 = new Node(4, [node7]);
    node2 = new Node(2, [node4, node5]);
    node1 = new Node(1,[node2, node3]);    
    
    it("Test dfs in Node",()=>{
        let actual = node1.dfs(10).length;
        let expected = 6;
        assert.equal(actual, expected, "dfs(10)");

        actual = node1.dfs(8).length;
        expected = 8;
        assert.equal(actual, expected, "dfs(8)");
    })
    it("Test bfs in Node", ()=>{
        let actual = node1.bfs(6).length;
        let expected = 6;
        assert.equal(actual, expected, "bfs(6)");

        actual = node1.bfs(9).length;
        expected = 9;
        assert.equal(actual, expected, "bfs(9)");
    })
})
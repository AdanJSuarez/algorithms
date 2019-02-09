// Traverse a tree recursively

export default class Node {
    private data: any;
    private children: Node[];

    constructor(data: any, children: Node[]){
        this.data = data;
        this.children = children;
    }
    public setData(data: any){
        this.data = data;
    }
    public setChild(node: Node){
        this.children.push(node);
    }
    public getData(): any {
        return this.data;
    };
    public getChildren(): Node[]{
        return this.children;
    };
    public bfs(data: any):any {
        function fnNode(n: Node, todo: Node[], visited: Node[], acc: number): any {
            if(visited.includes(n)){
                return fnLON(todo, visited, acc);
            }
            visited.push(n);
            if(n.getData() === data){
                return visited;
            }
            todo = todo.concat(n.getChildren())
            acc += 1;
            return fnLON(todo, visited, acc);
        };
        function fnLON(todo: Node[], visited: Node[], acc: number): any {
            if (!todo.length){
                return visited;
            }
            else {
                return fnNode(todo[0], todo.slice(1), visited, acc);
            }
        }
        return fnNode(this, [], [], 0);
    }
    public dfs(data: any):any{
        function fnNode(n: Node, todo: Node[], visited: Node[], acc: number): any {
            if(visited.includes(n)){
                return fnLON(todo, visited, acc);
            }
            visited.push(n);
            if(n.getData() === data){
                return visited;
            }
            todo = n.getChildren().concat(todo);
            acc += 1;
            return fnLON(todo, visited, acc);
        };
        function fnLON(todo: Node[], visited: Node[], acc: number): any {
            if (!todo.length){
                return visited;
            }
            else{
                return fnNode(todo[0], todo.slice(1), visited, acc);
            }
        }
        return fnNode(this, [], [], 0);
    }
    public fractal(x: number, memo: any = {}) {
        if (x <= 1){
            return 1;
        } else {
            if (memo[x]) {
                return memo[x];
            } else {
                let result: number = x * this.fractal(x-1);
                memo[x] = result;
                return result;
            }
        }
    }
}

// 分页类
export class Pages {
    private page: number;
    private pageSize: number;
    private total: number;
    constructor( page: number = 1,pageSize:number=10,total:number=0) {
        this.page = page;
        this.pageSize = pageSize;
        this.total = total;
    }
    getPage(){
        return this.page
    }
    getSize(){
        return this.pageSize
    }
    getTotal(){
        return this.total
    }

  // 每页显示页数改变触发
   sizeChange(size:number) {
    this.page = 1;
    this.pageSize = size;
  }
}  

console.log(new Pages().getPage(),new Pages().getSize())

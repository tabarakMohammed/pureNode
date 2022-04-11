export class admin{
    adminId:number = 0;
    adminName:string ='';
    adminType:string='';

    setAdminId(_adminId:number){
     this.adminId = _adminId;
    }

    setAdminName(_adminName:string){
        this.adminName = _adminName;
    }

    setAdminType(_adminType:string){
        this.adminType = _adminType;
    }



    getAdminId():number{
        return this.adminId;
     }
   
    getAdminName():string{
        return this.adminName;
    }
   
    getAdminType():string{
        return this.adminType;
     }

}
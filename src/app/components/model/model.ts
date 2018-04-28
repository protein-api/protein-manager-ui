
export class Protein {

    public id:number
    public codigoUniProt:string
    public nombre:string
    public secuencia:string
    public organismo:string
    public familia:string
    public codigoKegg:string
    public reacciones =[]
    public estructurasPDB =[]
    public dois =[]
    public sitiosActivo:any

}

export class Enlace{
    public id:number;
    public nombre:string;
    public codigo:string;
    public link:string;
    public tipo:string;
}

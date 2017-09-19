/**
 * Created by murmu on 19/09/17.
 */
/**
 * Created by murmu on 15/06/17.
 */
export class Protein{

    public id:number;
    public codigoUniProt:string;
    public nombre:string;
    public secuencia:string;
    public organismo:string;
    public familia:string;
    public codigoKegg:string;

}

export class Enlace{
    public id:number;
    public nombre:string;
    public codigo:string;
    public link:string;
    public tipo:string;
}
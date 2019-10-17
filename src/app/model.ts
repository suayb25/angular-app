export class Model{
    user;
    items;
    constructor(){
        this.user="Şuayb Talha";
        this.items=[
            new Item("Kahvaltı",false),
            new Item("Spor",true),
            new Item("Kitap Okumak",false),
            new Item("Sinema",false),
          ];
    }
}
export class Item{
    description;
    action;

    constructor(description,action){
        this.description=description;
        this.action=action;
    }
}
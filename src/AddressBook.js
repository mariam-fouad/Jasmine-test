class AddressBook{

    constructor(){
        this.contactList = [];
    }
     
    addContact(conatct){
        this.contactList.push(conatct);
    }

    getContact(index){
        return this.contactList[index];
    }

    deleteContact(index){
        this.contactList.splice(index,1);
    }
}
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
}
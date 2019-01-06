class AddressBook{

    constructor(){
        this.contactList = [];
        initialComplete = false;
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

    getInitialAddress  (cb){

        setTimeout(() => {
            this.initialComplete=true;
            if(cb){
                return cb;
            }
        }, 3000);
    }

}
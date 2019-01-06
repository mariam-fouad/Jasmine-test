describe ("AddressBook",()=>{

    let addressBook,contact;

    beforeEach(()=>{
        addressBook = new AddressBook ();
       contact = new Contact ();
    });

    it("Should be able to add a contact",()=>{
        addressBook.addContact(contact);

        expect(addressBook.getContact(0)).toBe(contact);
    });

    it("Should be able to delete a contact",()=>{
        addressBook.addContact(contact);

        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
}) ;
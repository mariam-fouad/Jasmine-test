describe ("AddressBook",()=>{
    it("Should be able to add a contact",()=>{
        const addressBook = new AddressBook ();
        const contact = new Contact ();

        addressBook.addContact(contact);

        expect(addressBook.getContact(0)).toBe(contact);
    });

    it("Should be able to delete a contact",()=>{
        const addressBook = new AddressBook ();
        const contact = new Contact ();

        addressBook.addContact(contact);

        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
}) ;
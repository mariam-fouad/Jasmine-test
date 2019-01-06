describe ("AddressBook",()=>{
    it("Should be able to add contact",()=>{
        const addressBook = new AddressBook ();
        const contact = new Contact ();

        addressBook.addContact(contact);

        expect(addressBook.getContact(0)).toBe(contact);
    });
}) ;
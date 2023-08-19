function createPetList() {
    let petList = [];
    return function addPetToList(name) {
        if (!name) {
            console.log(petList);
        } else {
            petList.push(name);
        }
    };
}
const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

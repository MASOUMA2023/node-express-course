const {people} = require("../data.js");

const getPeople = (req, res) =>{
    res.status(200).json(people);
}
const addPerson=(req,res) =>{
    const {id, name} = req.body;
    if(!id || !name){
        return res.status(400).send('please provide name and id')
    }
    const newPerson = {
        id : people.length + 1,
        name : req.body.name,
    };
    people.push(newPerson);
    res.status(201).json(newPerson)
});

const getPersonById = (req, res) => {
    const personId = parseInt(req.params.id);  
    const person = people.find(p => p.id === personId);

    if (!person) {
        return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json(person);
};

const updatePerson = (req, res) => {
    const personId = parseInt(req.params.id);  
    const person = people.find(p => p.id === personId);

    if (!person) {
        return res.status(404).json({ message: 'Person not found' });
    }
    const { id, name } = req.body;
    person.name = name || person.name;
    person.id = id || person.id;

    res.status(200).json(person);
};
const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id);  
    const personIndex = people.findIndex(p => p.id === personId);

    if (personIndex === -1) {
        return res.status(404).json({ message: 'Person not found' });
    }
    people.splice(personIndex, 1);
    res.status(200).json({ message: 'Person deleted' });
};

module.exports = {
    getPeople,
    addPerson,
    getPersonById,
    updatePerson,
    deletePerson
};
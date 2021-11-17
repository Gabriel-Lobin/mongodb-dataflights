db.voos.find({ vooId: 756807 },
{ "empresa.sigla": true, "empresa.nome": true, _id: false,  "passageiros": true });
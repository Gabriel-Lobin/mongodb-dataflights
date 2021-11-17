db.voos.find({ vooId: 756807 },
{ "passageiros": true, "empresa.sigla": true, "empresa.nome": true, _id: false });
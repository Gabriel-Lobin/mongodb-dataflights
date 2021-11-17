db.voos.deleteMany({ $and: [
  { "empresa.nome": { $eq: "AZUL" } },
  { litrosCombustivel: { $lt: 400 } },
] }).count();
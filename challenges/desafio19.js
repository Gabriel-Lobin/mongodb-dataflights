db.voos.find({ litrosCombustivel: { $exists: true } },
    { vooId: true, _id: false }).limit(1);
const estadosController = {
  obtenerEstados: async(req, res) => {
    try {
          const response = await fetch('http://localhost:3000/api/estados');
          const estados = await response.json();
          res.json(estados);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al obtener los estados' });
        }
  },
  obtenerEstadoPorId: async(req, res) => {
    try {
          const id = req.params.id;
          const response = await fetch(`http://localhost:3000/api/estados/${id}`);
          const estado = await response.json();
          res.json(estado);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al obtener el estado' });
        }
  },
  crearEstado: async(req, res) => {
    try {
          const response = await fetch('http://localhost:3000/api/estados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body)
          });
          const estadoCreado = await response.json();
          res.json(estadoCreado);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error al crear el estado' });
        }
  },
  actualizarEstado: async(req, res) => {
    try {
      const id = req.params.id;
      const response = await fetch(`http://localhost:3000/api/estados/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      const estadoActualizado = await response.json();
      res.json(estadoActualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el estado' });
    }
  },
  eliminarEstado: async(req, res) => {
    try {
      const id = req.params.id;
      const response = await fetch(`http://localhost:3000/api/estados/${id}`, {
        method: 'DELETE'
      });
      const resultado = await response.json();
      res.json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el estado' });
    }
  },
};

module.exports = estadosController;

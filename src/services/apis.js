import axios from 'axios'
export async function obtenerUsuarios() {
  const response = await axios.get('/usuarios.json')
  return response.data
}
export async function cambiarNombre(nombreNuevo) {
  const response = await axios.get(
    'http://secondtry.test/backend/conexion.php?nombreNuevo' + nombreNuevo,
  )
  return response.data
}

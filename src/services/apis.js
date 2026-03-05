import axios from 'axios'
export async function obtenerUsuarios() {
  const response = await axios.get('/usuarios.json')
  return response.data
}

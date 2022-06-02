import Dashboard from "./Dashboard";
import Productos from "./Productos";

function ContenedorPag(){ /* content row top */
  return (
   
    <div className="flex-uno">
      <Dashboard />
      <Productos />
    </div>
  )
}
export default ContenedorPag;
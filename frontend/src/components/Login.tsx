import React, {useState} from 'react'
const Login = () => {
    
    const [radio, setRadio] = useState('')

    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center  space-y-4">
            <p className="text-6xl">Sua enquete</p>
            <div className="flex flex-row space-x-5">
              <div>
                <label htmlFor="tipoAdmin">Admin</label>
                <input
                  type="radio"
                  name="tipoLogin"
                  id="tipoAdmin"
                  className="ms-1"
                  value={'admin'}
                  onChange={(e) => setRadio(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="tipoEleitor">Eleitor</label>
                <input
                  type="radio"
                  name="tipoLogin"
                  id="tipoEleitor"
                  className="ms-1"
                  value={'eleitor'}
                  onChange={(e) => setRadio(e.target.value)}
                />
              </div>
            </div>

            {radio == 'admin' && (
                <div className="space-y-4">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="ms-5 border border-neutral-700"/>
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" className="ms-3 border border-neutral-700" />
                </div>
              
            </div>
            )}

            {radio == 'eleitor' && (
                <div>
                <label htmlFor="codigo">Código:</label>
                <input type="text" name="codigo" id="codigo" className="ms-3 border border-neutral-700" />
            </div>
            )}
            
            
          </div>
        </div>
      </>
    );
}

export default Login;
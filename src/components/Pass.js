import React, { useState } from 'react'
import client from '../client'
import techniciens from '../techniciens'



const Pass = () => {
    const [clients, setClients] = useState(client);
    const [technicien, setTechniciens] = useState(techniciens);

    return (
        <div className='center'>
            <form>
                <h4>Sélection du client</h4>
                <select name="client">
                    {clients.map(client => (
                        <option
                            key={client.name}
                            value={client.name}>
                            {client.name}
                        </option>
                    ))}
                </select>
                <h4>Sélection du technicien</h4>
                <select name="tech">
                    {technicien.map(technicien => (
                        <option
                            key={technicien.name}
                            value={technicien.name}>
                            {technicien.name}
                        </option>
                    ))}
                </select>
                <h4>Date de l'entrerien</h4>
                <input type="date" name="bday" />
                <h4>Observations :</h4>
                <textarea name="myTextarea" placeholder="Les observation à faire"></textarea>
                <div className='monSubmit'>
                <input type="submit" value="Submit" />
                </div>
                <div className='App-footer'>
                    <img src={require(`../image/logo-clean3000-mini.png`)} alt="logo" className="logo-miniT" />
                </div>
              
            </form>
        </div>

    )
}

export default Pass
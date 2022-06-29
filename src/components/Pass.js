import React, { useState } from 'react'
import client from '../client'
import techniciens from '../techniciens'



const Pass = () => {
    const [clients, setClients] = useState(client);
    const [technicien, setTechniciens] = useState(techniciens);
    const [PClient, setPClient] = useState("");
    const [PTech, setTech] = useState("");
    const[Madate,setMaDate] = useState("");
    const[Textarea,setTextarea] = useState("");

      const handleSubmit = (event) => {
        event.preventDefault();
          alert(`-----Avis de passage-----\nNom du client: ${PClient}\nNom du technicien:${PTech}\nDate de l'intervention: ${Madate}\nObservation ${Textarea}`
        )
      }
    return (
        <div className='center'>
            <form onSubmit={handleSubmit}>
                <h4>Sélection du client</h4>
                <select name="PClient"  onChange={(e) => setPClient(e.target.value)}>
                    {clients.map(client => (
                        <option
                            key={client.name}
                            value={client.name}
                           >
                            {client.name}
                        </option>
                    ))}
                </select>
                <h4>Sélection du technicien</h4>
                <select name="tech" onChange={(e) => setTech(e.target.value)}>
                    {technicien.map(technicien => (
                        <option
                            key={technicien.name}
                            value={technicien.name}
                           >
                            {technicien.name}
                        </option>
                    ))}
                </select>
                <h4>Date de l'entrerien</h4>
                <input type="date" name="bday" onChange={(e) => setMaDate(e.target.value)} />
                <h4>Observations :</h4>
                <textarea name="myTextarea" placeholder="Les observation à faire" onChange={(e) => setTextarea(e.target.value)}></textarea>
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
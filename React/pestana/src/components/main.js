import React, {useState} from 'react';


const Links = () => {

    const [links, setLinks]=useState([{titulo:"Tab one",estado:'active', contenido:'Hola! Soy el primer contenido 😁'},
    {titulo:"Tab Two",estado:'', contenido:'queria ser una foto 😥'},
    {titulo:"Tab three", estado:'', contenido:'pero mi creadora no lo logro 😅'}])

    const changeActive = (i) => {
        let newLinks = links.map((link,indice) => {
            indice ===i ? link.estado = 'active': link.estado = "";
            return link;
        })
        setLinks(newLinks);
    }
    return (
    <div>
            <h1>Mis primeras Pestañas/Tabs</h1>
            <div className='tabs'>
            {
               links.map((link,i) => {
                    return(<p key={i} className={link.estado} onClick={()=>changeActive(i)}> {link.titulo}</p>)
                    })
            }
            </div>
            
            <div className='info'>
            
            {links.filter(link=>link.estado==='active').map((link,i)=>(<a key={i} className="contenido">{link.contenido} </a>))}
            </div>
         
        </div>
    );
} 

export default Links;
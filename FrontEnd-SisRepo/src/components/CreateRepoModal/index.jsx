import React, { useState } from 'react';
import { toast } from 'react-toastify';
import closeImg from '../../assets/close.svg';
import api from '../../services/api';
import { PlusCircle } from 'phosphor-react';

import { Container, Button, ModalContent } from './style';

export default function CreateRepositoryModal({ onRequestClose }) {
 
  const [url, setUrl] = useState('');

  console.log('URL', url);

  async function handleCreateRepository() {

   const user_id = localStorage.getItem("@mmsystem:userID");

   console.log(user_id);

   //const repositoryName = getRepositoryName(repositoryURL)

    try {
     /* await api.post(`/users/${user_id}/repositories`, {
        user_id,
        name: repositoryName,
        url: repositoryURL
      });

      console.log(user_id, name, url)

      toast.success("Repositório cadastrado com sucesso");*/

    } catch (error) {
      //console.log("ERRO", error);
      return toast.error("Não foi possível cadastrar este repositório");
    }
  }

  /*const getRepositoryName = (event) => {

    // procurar melhor regex para url
    //const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*);
    
    const url = 'https://github.com/HVDgeek/mocksocialmediawebsite'
    const regex = new RegExp(/^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i);
    
    const match = url.match(regex);

    console.log('match', match);

    setUrl(match);
  
    if(match[2]) {
      const values = match[2].split('/');
  
      console.log('values', values)
  
      return `${values[1]}/${values[2]}`
    }
  }*/

  return (
    <Container>
      <Button
        type="button"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar modal" />
      </Button>
      <ModalContent>
        <p>Adiconar Repositório</p>
        <input 
          type="text" 
          name='repo' 
          placeholder='Link repositório'
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <div>
          <button
            type='button'
            onClick={() => {handleCreateRepository(); onRequestClose()} }>
            Adicionar
            <PlusCircle size={24} />
          </button>
        </div>
      </ModalContent>
    </Container>
  )
}

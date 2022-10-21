/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import type { MdUserData } from '../utils/constants'

type AdminInstagramPropertyProps = {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

const AdminInstagramProperty = ({
  setSuccess
}: AdminInstagramPropertyProps) => {
  const [userSettings, setUserSettings] = useState<MdUserData>()
  const [menuOptions, setMenuOptions] = useState('grid')
  const [imageQuantity, setImageQuantity] = useState(6)
  const [documentId, setDocumentId] = useState('')
  const [btnDisable, setBtnDisable] = useState(true)
  // const [mdBody, setMdBody] = useState<MdUserData>()

  // NOTE - Pega informações do MD
  useEffect(() => {
    axios
      .get(
        'https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/get_user_list_from_md'
      )
      .then((response) => {
        setUserSettings(response.data[0])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [documentId])

  // NOTE - altera os valores dos states atuais
  useEffect(() => {
    if (userSettings?.token) {
      setMenuOptions(userSettings?.exhibition_mode ?? '')
      setImageQuantity(userSettings?.image_quantity ?? 6)
      setDocumentId(userSettings?.id ?? '')
      setBtnDisable(false)
    }
  }, [userSettings])

  const setUserPreference = async () => {
    const body = {
      id: userSettings?.id,
      token: userSettings?.token,
      duration: userSettings?.duration,
      lastUpdate: new Date(),
      image_url: null,
      exhibition_mode: menuOptions,
      image_quantity: imageQuantity
    }

    await axios.post(
      'https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/post_user_configs_md',
      body
    )
  }

  // NOTE - função para excluir usuário do Master Data
  const excludeUser = () => {
    axios
      .delete(
        `https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/delete_user_profile?id=${documentId}`
      )
      .then(() => {
        setSuccess(false)
      })
      .catch((err) => {
        console.error(err)
      })
    setSuccess(false)
  }

  return (
    <>
      <h4>Usuário logado {userSettings?.id}</h4>
      <div className="mb5">
        <Input
          placeholder="Regular with data-attributes"
          dataAttributes={{ 'hj-white-list': true, test: 'string' }}
          label="Quantidade de imagens exibidas (Max.: 21)"
          value={imageQuantity}
          onChange={(e: any) => setImageQuantity(e.target.value)}
        />
      </div>

      <div className="mt5">
        <Button
          variation="danger-tertiary"
          size="regular"
          onClick={() => excludeUser()}
        >
          Excluir conta
        </Button>
        <Button
          variation="primary"
          onClick={() => setUserPreference()}
          disabled={btnDisable}
        >
          Salvar
        </Button>
      </div>
    </>
  )
}

export default AdminInstagramProperty

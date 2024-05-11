"use client"
import { Container, Flex, Grid } from '@radix-ui/themes'
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Top = () => {
  const [data, setData] = useState<{ ok: boolean, message?: string, res?: any }>({ ok: false });
  const params = useSearchParams()
  const page = params.get("page") || 1;

  const BASE_URL = process.env.BASE_URL
  useEffect(() => {
    
  }, []);

  return (
    <Container size="3">
      <Flex>
        {
          data ?
            data.ok ? (
              <Grid gap="3" columns="5">
                {page}
              </Grid>
            )
            :
              <React.Fragment />
          : 
            <React.Fragment />
        }
      </Flex>
    </Container>
  )
}

export default Top
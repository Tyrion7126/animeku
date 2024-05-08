import { StarFilledIcon } from '@radix-ui/react-icons'
import { Box, Card, Flex, Heading, Inset, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  year: number
  rating: number
  src: string
  alt: string
  key: number
  badge?: React.ReactNode
  children?: React.ReactNode
}
const CardPoster = (props: Props) => {
  return (
    <Flex display="inline-flex" maxWidth={"190px"}>
      <Card size="1" variant="surface" key={props.key}>
        <Box position={"absolute"} top={"0"} left={"0"}>
          {props.badge}
        </Box>
        <Inset clip="padding-box" side="top" mb="2">
          <Image src={props.src} alt={props.alt} className='max-w-[190px] max-h-[250px]' width={200} height={200} objectFit="contain" />
        </Inset>
        {props.children}
        <Flex justify={"between"} mb="4" mt="3">
          <Flex gap="2" align={"center"} direction={"row"}>
            <StarFilledIcon className='text-yellow-500' width={20} height={20} />
            <Text as="p">{props.rating}</Text>
          </Flex>
          <Text as="p">{props.year}</Text>
        </Flex>
        <Flex maxWidth={"170px"}>
          <Text truncate as='label' weight="medium">{props.title}</Text>
        </Flex>
      </Card>
    </Flex>
  )
}

export default CardPoster
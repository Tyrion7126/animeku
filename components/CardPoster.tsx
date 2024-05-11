import { StarFilledIcon } from '@radix-ui/react-icons'
import { Box, Card, Flex, Inset, Text } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

interface Props {
  title: string
  year: number
  rating: number
  src: string
  href: string
  alt: string
  badge?: React.ReactNode
  children?: React.ReactNode
  className?: string
}
const CardPoster = (props: Props) => {
  return (
    <Flex display="inline-flex" maxWidth={"190px"}>
      <Card className={props.className} size="1" variant="surface">
        <Box position={"absolute"} top={"0"} left={"0"}>
          {props.badge}
        </Box>
        <Inset clip="padding-box" side="top" mb="2">
          <Image src={props.src} alt={props.alt} sizes="100vw" className='max-w-[200px] w-[200px] h-[270px] object-cover' width={"0"} height={"0"} />
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
          <Text truncate weight="medium">{props.title}</Text>
        </Flex>
      </Card>
    </Flex>
  )
}

export default CardPoster
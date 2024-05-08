"use client"
import { Flex, Text } from '@radix-ui/themes'
import React from 'react'
import * as Toolbar from '@radix-ui/react-toolbar';
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Top",
      href: "/top"
    },
    {
      label: "Anime",
      href: "/anime"
    },
    {
      label: "News",
      href: "/news"
    }
  ]

  return (
    <header className='bg-gray-100/60 dark:bg-gray-800/60 p-3 backdrop-blur-md'>
      <Flex gap="5" mx="3">
        <h1>Logo</h1>
        <Toolbar.Root>
          <Flex justify="between">
            <Flex gap="5">
              {
                navItems.map((item, index) => (
                  <Toolbar.Button className="font-medium" key={index} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Toolbar.Button>
                ))
              }
            </Flex>
          </Flex>
        </Toolbar.Root>
      </Flex>
    </header>
  )
}

export default Navbar
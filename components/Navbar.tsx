"use client"
import { Button, Container, Flex, IconButton, Text } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import * as Toolbar from '@radix-ui/react-toolbar';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

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

  const [loaded, setLoaded] = useState(false)
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <header className='border-b border-gray-200 dark:border-gray-700 p-3 backdrop-blur-md'>
      <Container size="3" mt="0">
        <Flex align={"center"} justify="between">
          <Flex className='sm:hidden' align={"center"} gap="5">
            {
              navItems.map((item, index) => (
                <div className="font-medium text-gray-950/60 dark:text-white/80 dark:hover:text-indigo-400 hover:text-indigo-500" key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </div>
              ))
            }
          </Flex>
          <div>
            <Flex align={"center"} gap="3">
              <Button variant="soft" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
              <IconButton className='sm:hidden' size="3" mx="1" loading={!loaded} onClick={() => toggleTheme()} variant='ghost'>
                {
                  loaded ? 
                    (
                      theme === "light" ? <MoonIcon width={18} height={18} /> : <SunIcon width={18} height={18} />
                    )
                  : 
                  ""
                }
              </IconButton>
            </Flex>
          </div>
        </Flex>
      </Container>
    </header>
  )
}

export default Navbar
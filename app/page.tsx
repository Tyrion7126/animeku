"use client";
import CardPoster from "@/components/CardPoster";
import { Badge, Box, Button, Container, Flex, Grid, Heading, Section } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ResponseData {
  trending?: any
  popular?: any
  error?: string
}

export default function Home() {
  const [data, setData] = useState<ResponseData | null>(null);

  const badgeColors: any = {
    "1": "amber",
    "2": "gray",
    "3": "brown"
  }

  useEffect(() => {
    const fetchTrendingAnimes = async () => {
      try {
        const { data } = await axios.get("/api/trending", {
          params: {
            perPage: 12
          }
        });
        setData({ ...data, trending: data.results });
      } catch(error) {
        setData({ error: (error as Error).message });
      }
    }
    const fetchPopularAnimes = async () => {
      try {
        const { data } = await axios.get("/api/popular", {
          params: {
            perPage: 12
          }
        });
        setData({ ...data, popular: data.results });
      } catch(error) {
        setData({ error: (error as Error).message });
      }
    }

    fetchTrendingAnimes();
    fetchPopularAnimes();
  }, []);

  return (
    <Container align="center" py={"6"} size="3">
      <Section pt={"3"}>
        <Flex align={"center"} justify={"between"} mb={"4"}>
          <Flex>
            <Box className="bg-gradient-to-r from-violet-400 rounded-md" mr={"1"} ml={"-2"} position={"relative"} width={"30px"} height={"20px"} />
            <Heading>Most Popular</Heading>
          </Flex>
          <Button variant="ghost">
            <Link href="/top">View All</Link>
          </Button>
        </Flex>
        {
          data ? (
            data.trending ?
              (
                <Grid columns="4" gapY="5" gapX="3">
                  {
                    data.trending.map((item: any, index: number) => (
                      <Link key={index} href={`/anime/${item.id}`}>
                        <CardPoster
                          title={item.title.userPreferred || item.title.english || item.title.romaji}
                          year={item.status}
                          rating={item.rating}
                          src={item.image}
                          alt={item.title.romaji}
                          key={index}
                          href={`/anime/${item.mal_id}`}
                          className="hover:shadow-lg hover:shadow-slate-300 dark:shadow-none"
                          badge={index < 3 ? (
                            <Badge radius="none" size={"3"} variant="solid" color={badgeColors[(index + 1).toString()]}>
                              {index + 1}
                            </Badge>
                          )
                            :
                            <React.Fragment />}
                        />
                      </Link>
                    ))
                  }
                </Grid>
              )
              :
              data.error
          )
            :
            <p>Loading...</p>
        }
      </Section>
    </Container>
  );
}

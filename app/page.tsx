"use client";
import CardPoster from "@/components/CardPoster";
import { Badge, Box, Container, Flex, Grid } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>("");

  const badgeColors: any = {
    "1": "amber",
    "2": "gray",
    "3": "brown"
  }

  useEffect(() => {
    fetch("/api/top")
    .then((res) => {
      if (!res.ok) {
        return Promise.reject();
      }
      return res.json();
    })
    .then((res) => setData({ ok: true, res: res }))
    .catch((err) => setData({ ok: false, message: "Something went wrong." }));
  }, []);

  return (
    <Container align="center" py={"6"} size="2">
      {
        data ? (
          data.ok ?
          (
            <Flex display={"inline-flex"} direction="row" overflowX={"scroll"} width={"auto"} gap="3">
              {
                data.res.data.map((item: any, index: number) => (
                  <CardPoster
                    title={item.title}
                    year={item.year}
                    rating={item.score}
                    src={item.images.jpg.image_url}
                    alt={item.title}
                    key={index}
                    badge={index < 3 ? (
                      <Badge radius="none" size={"3"} variant="solid" color={badgeColors[(index + 1).toString()]}>
                        {index + 1}
                      </Badge>
                    )
                    :
                    <React.Fragment />}
                  />
                ))
            }
            </Flex>
          )
          :
          data.message
        )
        :
        <p>Loading...</p>
      }
    </Container>
  );
}

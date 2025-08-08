import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Card,
  rem,
} from "@mantine/core";
import classes from "./CardsCarousel.module.css";
import tripPlanner from "../../assets/tripPlanner.jpg";
import bookBlog from "../../assets/bookBlog.jpg";
import jokeGenerator from "../../assets/jokeGenerator.jpg";
import recycleAI from "../../assets/recycleAI.jpg";
import myHealth from "../../assets/HealthApp.jpg";
import { PortfolioItem } from "types";
import React from "react";

const CardProp = ({
  color,
  title,
  description,
  category,
  links,
}: PortfolioItem): React.JSX.Element => {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundColor: `${color}`, height: "25rem" }}
      className={`${classes.card}`}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Text className={classes.category} size="xs">
          {description}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <div
        className="flex flex-col gap-2"
        style={{ position: "absolute", bottom: "1rem" }}
      >
        {links?.map((link, idx): React.ReactNode => {
          return (
            <a
              key={idx}
              rel="noreferrer"
              href={link.link}
              target="_blank"
              className="mr-3"
            >
              <Button variant="white" color="dark">
                {link.name}
              </Button>
            </a>
          );
        })}
      </div>
    </Paper>
  );
};
const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    image: bookBlog,
    title: "Flashcards App",
    category: "Web Development",
    description: "Typescript, React, Javascript, Next.js, Express.js, Docker",
    color: "#FFE4E1",
    links: [
      {
        id: "1",
        link: "https://easyflashcards.org/",
        name: "View website",
      },
      {
        id: "2",
        link: "https://github.com/rsun19/easy-cards-docker",
        name: "View source code",
      },
    ],
  },
  {
    id: "2",
    image: bookBlog,
    title: "Book Blog App",
    category: "Web Development",
    description: "Python, JavaScript, Flask, HTML, CSS",
    color: "#95D2B3",
    links: [
      {
        id: "1",
        link: "https://www.robertsrandomreviews.com",
        name: "View website",
      },
      {
        id: "2",
        link: "https://github.com/rsun19/book-blog-",
        name: "View source code",
      },
    ],
  },
  {
    id: "3",
    title: "Trip Planning App",
    image: tripPlanner,
    category: "Mobile App Development",
    description: "Dart, Python, Flask, Firebase, PostgreSQL",
    color: "beige",
    links: [
      {
        id: "1",
        link: "https://github.com/rsun19/Trip-Planner-App",
        name: "View source code",
      },
    ],
  },
  {
    id: "4",
    image: jokeGenerator,
    title: "Joke Generator App",
    category: "Fullstack and iOS Development",
    description: "JavaScript, React.js, Swift, Python, Flask",
    color: "#BACD92",
    links: [
      {
        id: "1",
        link: "https://github.com/rsun19/jokegenerator",
        name: "View source code",
      },
    ],
  },
  {
    id: "5",
    image: recycleAI,
    title: "Image Classifier App",
    category: "ML/AI",
    description: "Python, Flask, PyTorch",
    color: "#EEA5A6",
    links: [
      {
        id: "1",
        link: "https://github.com/rsun19/RecycleImageClassifier_dev",
        name: "View source code",
      },
    ],
  },
  {
    id: "6",
    image: myHealth,
    title: "Mental Health App",
    category: "iOS Development",
    color: "#B0A695",
    description: "Swift",
  },
];

export default function PortfolioSlider() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = portfolioItems.map((item) => (
    <Carousel.Slide key={item.id}>
      <CardProp {...item} />
    </Carousel.Slide>
  ));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h1 className="text-3xl text-center pb-6">Portfolio</h1>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Card>
  );
}

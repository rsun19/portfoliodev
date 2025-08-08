import { Timeline, Text, Card } from "@mantine/core";
import React from "react";
import { PortfolioItem } from "types";

export default function WorkTimeline(): React.JSX.Element {
  const workItems: PortfolioItem[] = [
    {
      id: "1",
      title:
        "Software Engineer Intern - OpenShift AI Dashboard Team at Red Hat",
      description:
        "Engineered bug fixes for multiple parts of the dashboard, including pipeline and workbench errors, authorization vulnerabilities (based on Kubernetes RBAC), CI test failures, and general UI bugs. Added Cypress end-to-end tests, created test functionality for intercepting MLMD requests, designed unit tests, improved repository-wide type definitions and narrowing, and configured ESLint rules which improved overall code quality and test coverage",
      date: "May 2024 - Present",
    },
    {
      id: "2",
      title: "Software Engineer Intern - ConsoleDot Team at Red Hat",
      description:
        "Constructed webpages, generated search indices, improved form rendering, increased viewport reliability, and made cleaner UIs in the Red Hat Hybrid Cloud Console website. Developed validation scripts for Kafka requests and JSON files and crafted Cypress end-to-end unit tests for web pages. These efforts successfully identified bugs and bolstered backend and frontend reliability",
      date: "May 2023 – July 2023",
    },
    {
      id: "3",
      title: "Undergraduate Teaching Assistant at University of Virginia",
      description:
        "Graded assignments and held office hours for a software development class containing over 440 students.",
      date: "August 2023 – December 2023",
    },
  ];
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <h1 className="text-3xl text-center pb-6">Work Experience</h1>
      <Timeline active={3} bulletSize={24} lineWidth={2}>
        {workItems.map((item, idx) => {
          return (
            <Timeline.Item key={idx} title={item.title}>
              <Text c="dimmed" size="sm">
                {item.description}
              </Text>
              <Text size="xs" mt={4}>
                {item.date}
              </Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Card>
  );
}

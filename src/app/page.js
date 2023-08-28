"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>

      <Rating size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      />

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider mt="sm"></Divider>

      <Group position="center">
        <Title align="center" mt="sm" order={4}>
          Elon Musk
        </Title>
        <Rating readOnly defaultValue={5} mt="sm" />
      </Group>
      <Text align="center" color="grey">Best pizza in this world. I give you X score.</Text>

      <Divider mt="sm"></Divider>

      <Group position="center">
        <Title align="center" mt="sm" order={4}>
          Mark Zuck
        </Title>
        <Rating readOnly defaultValue={4} mt="sm" />
      </Group>
      <Text align="center" color="grey">My favourite part is pepperoni</Text>

      <Pagination total={20} position="center" color="orange" mt="md" />

      <Text align="center" color="dimmed" my="md">
        Copyright © 2023 Nunnapat Sirithanachokpaisan 650610776
      </Text>
    </Container>
  );
}

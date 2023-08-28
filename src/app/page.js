"use client";
import {
  Container,
  Rating,
  Text,
  Textarea,
  Title,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Textarea
        mt="xs"
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
      />
      <Button type="submit" mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination total={20} position="center" color="orange" mt="md" />

      <Text align="center" color="dimmed" mt="sm">
        Copyright © 2023 Anuwat Aeamsri 650610819
      </Text>
    </Container>
  );
}

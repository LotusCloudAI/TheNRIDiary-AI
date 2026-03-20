export type Story = {
  id: string;
  title: string;
  category: string;
  location: string;
};

export function filterStories(
  stories: Story[],
  category: string,
  state?: string | null
) {
  let filtered = stories.filter(
    (s) => s.category === category
  );

  if (state) {
    filtered = filtered.filter(
      (s) => s.location === state
    );
  }

  return filtered;
}

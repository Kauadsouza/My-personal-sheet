"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GitHubCalendarClient() {
  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="Kauadsouza"
        colorScheme="dark"
        fontSize={12}
        blockSize={12}
        blockMargin={4}
        theme={{
          dark: [
            "hsl(155, 12%, 8%)",
            "hsl(140, 30%, 20%)",
            "hsl(140, 40%, 35%)",
            "hsl(140, 45%, 50%)",
            "hsl(140, 55%, 65%)",
          ],
        }}
      />
    </div>
  );
}
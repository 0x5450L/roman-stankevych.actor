"use client";

import { useEffect, useState } from "react";

const cache = new Map<string, Promise<string | null>>();

function fetchThumb(id: string): Promise<string | null> {
  if (!cache.has(id)) {
    const url = `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(
      `https://vimeo.com/${id}`,
    )}&width=1280`;
    cache.set(
      id,
      fetch(url)
        .then((r) => (r.ok ? r.json() : null))
        .then((d: { thumbnail_url?: string } | null) => d?.thumbnail_url ?? null)
        .catch(() => null),
    );
  }
  return cache.get(id)!;
}

export function useVimeoThumb(id?: string) {
  const [thumb, setThumb] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;
    let alive = true;
    fetchThumb(id).then((t) => alive && setThumb(t));
    return () => {
      alive = false;
    };
  }, [id]);
  return id ? thumb : null;
}

export const vimeoPage = (id: string) => `https://vimeo.com/${id}`;
export const vimeoEmbed = (id: string) =>
  `https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`;

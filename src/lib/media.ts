import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Bucket = "birthday-images" | "birthday-videos" | "birthday-music";

const cache = new Map<string, { url: string; exp: number }>();

/** Resolve a content src: local "/..." paths pass through; others become 1h signed URLs from a private bucket. */
export async function resolveMedia(src: string, bucket: Bucket): Promise<string | null> {
  if (src.startsWith("/") || src.startsWith("http")) return src;
  const key = `${bucket}/${src}`;
  const hit = cache.get(key);
  if (hit && hit.exp > Date.now()) return hit.url;
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(src, 3600);
  if (error || !data) return null;
  cache.set(key, { url: data.signedUrl, exp: Date.now() + 50 * 60 * 1000 });
  return data.signedUrl;
}

export function useMedia(src: string, bucket: Bucket, enabled = true) {
  const [url, setUrl] = useState<string | null>(src.startsWith("/") ? src : null);
  const [missing, setMissing] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    resolveMedia(src, bucket).then((u) => {
      if (!alive) return;
      setUrl(u);
      setMissing(!u);
    });
    return () => { alive = false; };
  }, [src, bucket, enabled]);
  return { url, missing };
}

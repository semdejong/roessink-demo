"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { GalleryImage } from "@/content";

export default function ProjectGallery({
  images,
  label,
}: {
  images: GalleryImage[];
  label: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const small = images.every((image) => image.width <= 390);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIndex(null);
        triggerRef.current?.focus();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current + 1) % images.length));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
      }
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [index, images.length]);

  const current = index === null ? null : images[index];

  return (
    <>
      <div className={small ? "flex flex-wrap gap-1.5 bg-lood" : "grid gap-1.5 bg-lood sm:grid-cols-2"}>
        {images.map((image, imageIndex) => (
          <figure key={image.src} className="bg-papier" style={{ maxWidth: image.width }}>
            <button
              type="button"
              className="block w-full text-left"
              aria-label={`Vergroot: ${image.alt}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setIndex(imageIndex);
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                unoptimized
                className="block h-auto w-full"
                style={{ maxWidth: image.width }}
              />
            </button>
          </figure>
        ))}
      </div>

      {current && index !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-lood p-4" role="presentation" onClick={() => {
          setIndex(null);
          triggerRef.current?.focus();
        }}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="flex max-h-[94vh] w-full max-w-5xl flex-col bg-lood text-wit"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <p id={titleId} className="font-slab text-xl">
                {label}
              </p>
              <button ref={closeRef} type="button" className="inline-flex min-h-11 items-center bg-wit px-4 font-semibold text-lood" onClick={() => {
                setIndex(null);
                triggerRef.current?.focus();
              }}>
                Sluiten
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center px-4">
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                unoptimized
                className="h-auto w-auto max-h-[68vh] max-w-full"
                style={{ maxWidth: current.width }}
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <button
                type="button"
                className="inline-flex min-h-11 items-center bg-wit px-4 font-semibold text-lood"
                onClick={() => setIndex((currentIndex) => (currentIndex === null ? currentIndex : (currentIndex - 1 + images.length) % images.length))}
              >
                Vorige
              </button>
              <p className="text-sm">
                Foto {index + 1} van {images.length}
              </p>
              <button
                type="button"
                className="inline-flex min-h-11 items-center bg-wit px-4 font-semibold text-lood"
                onClick={() => setIndex((currentIndex) => (currentIndex === null ? currentIndex : (currentIndex + 1) % images.length))}
              >
                Volgende
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

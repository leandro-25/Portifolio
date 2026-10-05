"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectGallery({ images, title, contain = false }: { images: string[]; title: string; contain?: boolean }) {
  const [mainRef, mainApi] = useEmblaCarousel({ loop: true });
  const [thumbRef, thumbApi] = useEmblaCarousel({ axis: "y", containScroll: "keepSnaps", dragFree: true });
  const [selected, setSelected] = React.useState(0);
  const [zoomed, setZoomed] = React.useState(false);

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const i = mainApi.selectedScrollSnap();
    setSelected(i);
    thumbApi.scrollTo(i);
  }, [mainApi, thumbApi]);

  React.useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  const scrollTo = React.useCallback((i: number) => mainApi?.scrollTo(i), [mainApi]);

  return (
    <div className="flex h-full gap-3">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[10px] border border-[#303841]/35 bg-white shadow-[0_4px_20px_rgba(48,56,65,0.12)]">
        <div ref={mainRef} className="h-full overflow-hidden">
          <div className="flex h-full">
            {images.map((src, i) => (
              <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={i === 0 ? title : ""}
                  onClick={() => setZoomed(true)}
                  className={`absolute inset-0 h-full w-full cursor-zoom-in ${contain ? "object-contain" : "object-cover"}`}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setZoomed(true)}
          aria-label="Ampliar imagem"
          className="absolute bottom-3 right-3 rounded-full bg-[#303841]/85 p-2 text-[#EEEEEE] backdrop-blur transition-colors hover:bg-[#D72323]"
        >
          <ZoomIn size={15} />
        </button>
        <button
          onClick={() => mainApi?.scrollPrev()}
          aria-label="Anterior"
          className="sr-only"
        >
          <ArrowLeft size={15} />
        </button>
        <button
          onClick={() => mainApi?.scrollNext()}
          aria-label="Próxima"
          className="sr-only"
        >
          <ArrowRight size={15} />
        </button>
      </div>
      <div ref={thumbRef} className="hidden w-20 shrink-0 overflow-hidden md:block">
        <div className="flex h-full flex-col justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-20 w-20 shrink-0 overflow-hidden rounded-[8px] border-2 transition-all",
                i === selected ? "border-[#D72323] shadow-[0_2px_8px_rgba(48,56,65,0.2)]" : "border-[#303841]/30 opacity-70 hover:opacity-100",
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className={`h-full w-full ${contain ? "object-contain bg-white" : "object-cover"}`} />
            </button>
          ))}
        </div>
      </div>
      {zoomed &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#303841] p-4 md:p-10"
            onClick={() => setZoomed(false)}
          >
            <button
              aria-label="Fechar zoom"
              className="absolute right-5 top-5 rounded-full bg-white/15 p-2.5 text-[#EEEEEE] transition-colors hover:bg-[#D72323]"
            >
              <X size={18} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[selected]}
              alt={title}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-[10px] object-contain"
            />
          </div>,
          document.body,
        )}
    </div>
  );
}

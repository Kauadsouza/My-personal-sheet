"use client";

export function HeroBlob() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <div className="blob-main blob-primary absolute top-1/2 right-[-8%] -translate-y-1/2 w-[480px] h-[480px] md:w-[600px] md:h-[600px]" />
      <div className="blob-secondary blob-accent absolute top-[20%] right-[15%] w-[180px] h-[180px] md:w-[240px] md:h-[240px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
    </div>
  );
}
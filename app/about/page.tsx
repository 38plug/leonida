import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-void pt-28 text-mist">
      <div className="mx-auto max-w-[800px] px-6 py-16 md:px-10">
        <p className="text-[11px] tracking-[0.24em] text-champagne">ABOUT</p>
        <h1 className="mt-3 font-display text-6xl tracking-[0.06em]">LEONIDA</h1>
        <p className="mt-8 text-[16px] leading-[1.8] text-mute">
          Leonida is the public face of Vice Ops — a night-city house for original characters,
          gated AI agents, and a boutique that ships China → customer. We borrow atmosphere from
          Vice City without claiming Rockstar&apos;s world.
        </p>
        <p className="mt-6 text-[16px] leading-[1.8] text-mute">
          Spend never auto-fires. Pedro approves. Metrics stay empty until someone actually buys.
        </p>
        <Link href="/boutique" className="btn-primary mt-10 inline-flex">
          Enter the Boutique
        </Link>
      </div>
    </div>
  );
}

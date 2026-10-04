"use client";

import { useState } from "react";

const games = [
  ["Lucky Jet", "✈️", "390 playing", "linear-gradient(145deg,#6840e8,#9a4ff2)"],
  ["Rocket Queen", "👑", "87 playing", "linear-gradient(145deg,#cf20e9,#f03cc9)"],
  ["Coin Flip", "🪙", "21 playing", "linear-gradient(145deg,#ef8517,#ffb51f)"]
];

const allGames = [
  ["Aviator", "✈️", "1,384 playing", "linear-gradient(145deg,#c9001d,#ee2440)"],
  ["Fortune Gems 2", "💎", "59 playing", "linear-gradient(145deg,#f27312,#ffb52d)"],
  ["Fortune Rabbit", "🐰", "570 playing", "linear-gradient(145deg,#a700bf,#d61fe8)"]
];

const continueGames = [
  ["Aviator", "✈️", "1,384 playing", "linear-gradient(145deg,#c9001d,#ee2440)"],
  ["Lucky Streak", "🎲", "48 playing", "linear-gradient(145deg,#51170e,#9a3715)"],
  ["Spooky Coin", "🪙", "32 playing", "linear-gradient(145deg,#6e1710,#b12c16)"]
];

const casinoGames = [
  ["Crazy Time", "🎡", "LIVE", "linear-gradient(145deg,#bb001e,#f12a45)"],
  ["Hindi Roulette", "🎰", "LIVE", "linear-gradient(145deg,#090b0f,#20252c)"],
  ["Super Andar Bahar", "🃏", "LIVE", "linear-gradient(145deg,#061733,#17448c)"]
];

function Section({ title, icon, children }: { title: string; icon?: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <div className="section-head">
        <h2>{icon && <span>{icon}</span>}{title}</h2>
        <button className="see-all">All <b>›</b></button>
      </div>
      {children}
    </section>
  );
}

function Carousel({ items }: { items: string[][] }) {
  return (
    <div className="carousel">
      {items.map(([name, art, players, background]) => (
        <article className="game-card" key={name}>
          <div className="game-art" style={{ background }}>
            <span className="provider">PLAYZONE</span>
            <strong>{name}</strong>
            <div className="art-symbol">{art}</div>
          </div>
          <div className="players"><i />{players}</div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("Home");

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">P<span>Z</span></div>
        <div className="wallet">
          <div className="coin">₮</div>
          <strong>75.00</strong>
          <span className="currency">USDT</span>
          <span className="chevron">⌄</span>
        </div>
        <button className="wallet-btn" aria-label="Wallet">▣</button>
        <button className="icon-btn" aria-label="Notifications">♟<em /></button>
      </header>

      <div className="content">
        <section className="hero">
          <div className="hero-copy">
            <small>PLAYZONE</small>
            <h1>VIP CLUB</h1>
            <p>JOIN &amp; WIN</p>
            <div className="dots"><b /><b /><b /><b /></div>
          </div>
          <div className="hero-figures"><span>♠</span><span>♣</span></div>
        </section>

        <div className="promo-grid">
          <div className="promo free">
            <div><b>Free<br />money</b><p>Giving away premium prizes</p></div>
            <span>🏎️</span>
          </div>
          <div className="promo bonus"><b>Bonuses</b><span>🎁</span></div>
        </div>

        <Section title="Top Events" icon="♨">
          <div className="event-card">
            <div className="event-title"><span>🏏</span><div><b>World. Tour Match</b><small>Cricket</small></div></div>
            <div className="live-pill">◉ Live</div>
            <div className="score-row"><span>Tamil Nadu U-23</span><b>547</b></div>
            <div className="score-row"><span>Rest of India U-23</span><b>610</b></div>
            <p className="market-title">Innings #2. Tamil Nadu U-23 total runs of the first 25 overs</p>
            <div className="markets"><div>116.5 under <b>1.84</b></div><div>116.5 over <b>1.84</b></div></div>
          </div>
        </Section>

        <Section title="Continue playing" icon="◷">
          <Carousel items={continueGames} />
        </Section>

        <Section title="PlayZone games" icon="✦">
          <Carousel items={games} />
        </Section>

        <Section title="All games" icon="▦">
          <Carousel items={allGames} />
        </Section>

        <Section title="Live casino" icon="♠">
          <Carousel items={casinoGames} />
        </Section>

        <div className="bottom-space" />
      </div>

      <nav className="bottom-nav">
        {[
          ["☰", "Menu"],
          ["⌂", "Home"],
          ["⚙", "Casino"],
          ["🎁", "Free money"],
          ["✎", "Sports"]
        ].map(([icon, label]) => (
          <button key={label} className={active === label ? "active" : ""} onClick={() => setActive(label)}>
            <span>{icon}</span><small>{label}</small>
          </button>
        ))}
      </nav>
    </main>
  );
}

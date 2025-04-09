import React, { useEffect } from 'react';
import './Project5Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';

import titleImage from '../assets/3KingdomsTitleScreen.png';
import mapImage from '../assets/3KingdomsMap.JPG';
import fullMapImage from '../assets/3KingdomsFullMap.JPG';

function Project5Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <img src={titleImage} alt="3 Kingdoms Title Screen" className="project-img" />
          <h1>3 Kingdoms: Game Design Concept Showcase</h1>
          <p className="project-status-paused">🚧 This game project is currently paused</p>

          <p>
            <strong>3 Kingdoms</strong> is a turn-based strategy RPG concept I created, inspired by the mechanics of
            classic <em>Pokémon</em> and <em>Zelda</em>, but reimagined with mature themes, narrative depth, and
            personalized class progression. While not a developed game, this project reflects a complete game design vision
            — including lore, systems, characters, combat, and world mechanics.
          </p>

          <p>
            The story is set in a realm ruled by three kingdoms under one king, with each citizen conscripted into military service.
            Players take the role of a seemingly neutral diplomat, sent to forge peace — only to uncover a massive conspiracy involving
            mass mind-control, poisoned villagers, and a secret fourth faction rooted in spiritual belief. The deeper you dive,
            the more your choices matter.
          </p>

          <h2>🌌 Narrative Themes & Story Arc</h2>
          <p>
            Your role as a peacemaker leads you across three ideologically opposed kingdoms, each representing a core class culture: 
            <strong>Warrior</strong>, <strong>Mage</strong>, and <strong>Rogue</strong>. However, the king who sent you has secretly
            tainted the wine and beer of the realm with a dormant spell. When triggered, this spell turns villagers into obedient soldiers.
            As players investigate towns, they may discover sick or altered citizens — subtle hints of the king's plot.
          </p>
          <p>
            Through diplomacy, deception, and strategic support, players can shape alliances, betray factions, and confront the looming
            manipulation of power — while discovering that a hidden fourth faction exists across all regions as a belief system,
            not a nation. This faction may be the key to true freedom — or final ruin.
          </p>

          <h2>🎮 Core Gameplay Systems</h2>
          <ul className="custom-feature-list">
            <li>🌀 <strong>Turn-based combat</strong> influenced by Pokémon/Zelda classics with modern tactical depth</li>
            <li>🃏 <strong>Class + Tarot + Astrology</strong>: character growth is guided by Tarot cards (e.g. The Fool, The Tower) and Zodiac signs (e.g. Libra, Aries)</li>
            <li>🪐 <strong>Planetary Weapons:</strong> Each planet is tied to a mythic weapon, unlocked by defeating the planet's boss and collecting its sigil</li>
            <li>🏰 <strong>Kingdom Buffs:</strong> Supporting a nation grants passive bonuses, new gear, and faction-specific storylines</li>
            <li>🗺️ <strong>Tower Linking:</strong> Magical towers representing major arcana provide global passive effects when linked to the player</li>
            <li>🧠 <strong>Alignment System:</strong> Player decisions shift alignment (e.g. Chaotic Evil, Neutral Good), affecting abilities, dialogue, and endgame arcs</li>
            <li>🔓 <strong>Special Doors:</strong> Planet-aligned doors can only be opened after defeating their corresponding boss</li>
          </ul>

          <h2>⚔️ Class System & Combat Design</h2>
          <p>Players choose from three core paths — Mage, Warrior, or Rogue — each with unique subclasses and planetary buffs. Here are a few examples:</p>

          <ul className="custom-feature-list">
            <li><strong>Knight:</strong> Great Slash, Taunt, Block, Throw</li>
            <li><strong>Rogue:</strong> Backstab, Sneak Attack, Smoke Bomb, Ambush</li>
            <li><strong>Sorcerer:</strong> Star Shot, Astro Beam, Solar Flare, Black Hole</li>
            <li><strong>Cleric:</strong> Heal, Sun Beam, Jupiter’s Storm</li>
            <li><strong>Enchanter:</strong> Gem Grenade, Enchant Weapon, Enchant Self, Magic Arrow</li>
          </ul>

          <p>
            Each subclass is also affected by <strong>planetary energy</strong> (e.g. Mars powers Knights, Mercury powers Mages), adding an additional layer of strategy based on
            gear, environment, and tower influence.
          </p>

          <h2>🌠 Planetary Weapons & Lore</h2>
          <p>Each planet corresponds to a legendary boss and weapon:</p>

          <ul className="custom-feature-list">
            <li><strong>Mercury:</strong> The Magician — Quicksilver Shot (Spell)</li>
            <li><strong>Venus:</strong> The Empress — Morning Star (Mace)</li>
            <li><strong>Mars:</strong> The Sun — Olympuses Might (Greatsword)</li>
            <li><strong>Jupiter:</strong> Wheel of Fortune — Storm of Fate (Sword)</li>
            <li><strong>Saturn:</strong> The World — Rings of Saturn (Crescent Blades)</li>
            <li><strong>Neptune:</strong> The Hanged Man — Abyssal Trident (Trident)</li>
            <li>...and more, including Pluto, Uranus, Moon, and Sun-linked encounters</li>
          </ul>

          <p>
            Defeating each boss grants a unique planetary weapon and unlocks a sealed door in the world — a mechanic that ties lore directly to exploration and
            player progression. The ultimate goal? Align all planets.
          </p>

          <p><em>"The king sent you to save the realm. He never told you it was already poisoned."</em></p>

          <div className="tech-tags">
            <span className="tag">Turn-Based Combat</span>
            <span className="tag">Godot Engine</span>
            <span className="tag">Game Design</span>
            <span className="tag">World-Building</span>
            <span className="tag">Narrative Systems</span>
            <span className="tag">Tarot & Astrology</span>
            <span className="tag">Original Lore</span>
          </div>
        </div>

        {/* World Map Sections */}
        <div className="gallery-wrapper">
          <section className="gallery-section">
            <h2>World Map Overview</h2>
            <img src={mapImage} alt="3 Kingdoms Regional Map" className="project-img" />
          </section>

          <section className="gallery-section">
            <h2>Full Map Layout</h2>
            <img src={fullMapImage} alt="3 Kingdoms Full Map" className="project-img" />
          </section>
        </div>

        <ContactFooter />
      </div>
    </div>
  );
}

export default Project5Page;

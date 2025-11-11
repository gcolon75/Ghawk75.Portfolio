import React, { useEffect } from 'react';
import './Project5Page.css';
import Header from './Header';
import ContactFooter from './ContactFooter';
import ProjectMeta from './ProjectMeta';
import projectData from '../data/projects.json';

import titleImage from '../assets/3KingdomsTitleScreen.png';
import mapImage from '../assets/3KingdomsMap.JPG';
import fullMapImage from '../assets/3KingdomsFullMap.JPG';

function Project5Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectData.projects.find(p => p.id === '3kingdoms');

  return (
    <div className="App">
      <div className="content">
        <div className="project-page">
          <Header />

          <img src={titleImage} alt="3 Kingdoms title art" className="project-img" />
          <h1>3 Kingdoms — Game Design Concept</h1>

          <ProjectMeta
            role={project?.role}
            skills={project?.tags?.disciplines}
            concepts={project?.tags?.specialties}
            tools={project?.tags?.tools}
          />

          <p className="project-status-concept">🎨 Design concept only — no prototype or code was built</p>

          <p>
            <strong>3 Kingdoms</strong> is a turn-based strategy RPG <em>concept</em> I authored. It explores narrative,
            world-building, and systems design inspired by classics like <em>Pokémon</em> and <em>Zelda</em>, reframed with
            mature themes and player agency. This page showcases my design thinking—lore, mechanics, encounter structure,
            and class fantasies—not a shipped or in-progress build.
          </p>

          <p className="note">
            Scope: design documentation and maps only. No engine, art production, or programming work was undertaken.
          </p>

          <h2>🌌 Narrative Themes & Story Arc (Concept)</h2>
          <p>
            The realm is ruled by three kingdoms under a single king. You’re sent as a diplomat to forge peace, only to uncover
            a conspiracy: the king has laced the realm’s drinks with a latent spell that can conscript civilians into soldiers.
            Towns show subtle symptoms; a hidden fourth faction—more faith than nation—threads through every region and may be
            the key to true freedom or final ruin.
          </p>

          <h2>🎯 Design Pillars</h2>
          <ul className="custom-feature-list">
            <li>🧭 <strong>Player agency</strong>: diplomacy, deception, or escalation reshape alliances and outcomes</li>
            <li>🎭 <strong>Class identity</strong>: Warrior, Mage, Rogue cultures shape gear, quests, and dialogue</li>
            <li>🗺️ <strong>Exploration with meaning</strong>: lore, locked doors, and towers that alter world rules</li>
            <li>🧪 <strong>Simple tactics, deep choices</strong>: approachable turn-based combat with layered synergies</li>
          </ul>

          <h2>🎮 Intended Gameplay Systems</h2>
          <ul className="custom-feature-list">
            <li>🌀 <strong>Turn-based combat</strong> with modern tactical twists and readable abilities</li>
            <li>🃏 <strong>Class + Tarot + Astrology</strong>: growth guided by Major Arcana & Zodiac themes</li>
            <li>🪐 <strong>Planetary Weapons</strong>: defeat a planetary boss to unlock its mythic weapon & sigil</li>
            <li>🏰 <strong>Kingdom Buffs</strong>: support a nation to gain passives, gear, and faction storylines</li>
            <li>🗼 <strong>Tower Linking</strong>: magical towers confer global passives once attuned</li>
            <li>🧠 <strong>Alignment System</strong>: choices shift alignment (e.g., Neutral Good → Chaotic Evil) and endings</li>
            <li>🚪 <strong>Sigil Doors</strong>: planet-sealed doors open after earning corresponding sigils</li>
          </ul>

          <h2>⚔️ Class Fantasy & Combat Direction</h2>
          <p>Three core paths (Warrior, Rogue, Mage) with subclasses and planetary influences.</p>
          <ul className="custom-feature-list">
            <li><strong>Knight (Warrior):</strong> Great Slash, Taunt, Block, Throw</li>
            <li><strong>Rogue:</strong> Backstab, Sneak Attack, Smoke Bomb, Ambush</li>
            <li><strong>Sorcerer (Mage):</strong> Star Shot, Astro Beam, Solar Flare, Black Hole</li>
            <li><strong>Cleric (Mage):</strong> Heal, Sun Beam, Jupiter’s Storm</li>
            <li><strong>Enchanter (Mage):</strong> Gem Grenade, Enchant Weapon/Self, Magic Arrow</li>
          </ul>

          <p>
            Subclasses draw on <strong>planetary energy</strong> (e.g., Mars empowers Knights; Mercury favors Mages),
            adding strategic layers across gear, environments, and tower effects.
          </p>

          <h2>🌠 Planetary Weapons & Lore (Concept)</h2>
          <p>Bosses represent planets and tie directly to exploration and progression:</p>
          <ul className="custom-feature-list">
            <li><strong>Mercury — The Magician:</strong> Quicksilver Shot (Spell)</li>
            <li><strong>Venus — The Empress:</strong> Morning Star (Mace)</li>
            <li><strong>Mars — The Sun:</strong> Olympus’s Might (Greatsword)</li>
            <li><strong>Jupiter — Wheel of Fortune:</strong> Storm of Fate (Sword)</li>
            <li><strong>Saturn — The World:</strong> Rings of Saturn (Crescent Blades)</li>
            <li><strong>Neptune — The Hanged Man:</strong> Abyssal Trident (Trident)</li>
            <li>…plus Pluto, Uranus, Moon, and Sun-linked encounters</li>
          </ul>

          <p><em>“The king sent you to save the realm. He never told you it was already poisoned.”</em></p>

          <div className="tech-tags">
            <span className="tag">Game Design Concept</span>
            <span className="tag">Narrative Design</span>
            <span className="tag">World-Building</span>
            <span className="tag">Systems Design</span>
            <span className="tag">Paper Prototype</span>
          </div>
        </div>

        {/* World Map Sections (concept art / layout) */}
        <div className="gallery-wrapper">
          <section className="gallery-section">
            <h2>World Map Overview (Concept)</h2>
            <img src={mapImage} alt="3 Kingdoms regional map — concept" className="project-img" />
          </section>

          <section className="gallery-section">
            <h2>Full Map Layout (Concept)</h2>
            <img src={fullMapImage} alt="3 Kingdoms full map — concept" className="project-img" />
          </section>
        </div>

        {/* Skills & Activities (what you did) */}
        <div className="skills-contributions-wrapper">
          <div className="skills-contributions-row">
            <section className="skills-section">
              <h2>Skills Demonstrated</h2>
              <ul>
                <li>Narrative & world-building</li>
                <li>Systems & encounter design</li>
                <li>Progression & economy framing</li>
                <li>Player experience & alignment design</li>
                <li>Documentation & communication</li>
              </ul>
            </section>
            <section className="contribution-section">
              <h2>What I Produced</h2>
              <ul>
                <li>Story outline, factions, and thematic pillars</li>
                <li>Class fantasies, sample abilities, planetary weapon list</li>
                <li>Map concepts and exploration gates (sigil doors)</li>
                <li>Systems notes for towers, alignment, and faction buffs</li>
              </ul>
            </section>
          </div>
        </div>

        <ContactFooter />
      </div>
    </div>
  );
}

export default Project5Page;

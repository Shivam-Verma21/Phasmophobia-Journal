# 👻 Phasmophobia Journal

A high-performance, interactive companion tool for **Phasmophobia** players. Quickly identify ghost types by tracking evidence and eliminating possibilities in real-time.

---

## 🔍 What is Phasmophobia?

**Phasmophobia** is a 4-player online co-op psychological horror game. You and your team of paranormal investigators enter haunted locations filled with paranormal activity to gather as much evidence as possible. 

The goal is to use specialized equipment (like EMF readers, Spirit Boxes, and UV lights) to identify what kind of ghost is haunting the location. Each ghost type has a unique set of three evidences.

## 📓 About This Project

This web-based **Journal** serves as a digital version of the in-game journal. It helps investigators:
- **Track Evidence:** Check off evidence as you find it.
- **Filter Ghosts:** Automatically see which ghosts match your current findings.
- **Eliminate Possibilities:** Cross out evidence you've ruled out or ghosts you know it can't be.
- **Quick Reference:** Instantly view ghost descriptions, strengths, and weaknesses without flipping through pages.

## ✨ Features

- **Dynamic Filtering:** The list of possible ghosts updates instantly as you select or deselect evidence.
- **Evidence Management:** Supports three states for each evidence:
  - ✅ **Found:** Ghost must have this evidence.
  - ❌ **Ruled Out:** Ghost cannot have this evidence.
  - ⚪ **Neutral:** Evidence state is unknown.
- **Ghost Database:** Comprehensive list of ghosts including custom or rare types, complete with their specific traits.
- **Responsive Design:** Optimized for use on second monitors, tablets, or phones while you play.
- **Fast & Lightweight:** Built with Next.js 15 and Tailwind CSS for a smooth, lag-free experience.

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React Framework
- [React 19](https://react.dev/) - UI Library
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/phasmophobia-journal.git
   cd phasmophobia-journal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 How to Use

1. **Observe:** Use your equipment in-game to find evidence.
2. **Mark Evidence:** Click a checkbox once to mark it as **Found** (✅), twice to **Rule it Out** (❌), and a third time to reset.
3. **Identify:** The list of "Possible Ghosts" will narrow down. 
4. **Research:** Click on a ghost's name to see more details about their behavior, strengths, and weaknesses to help you make your final decision.

---

*Happy Hunting! Don't forget your smudge sticks.* 🕯️

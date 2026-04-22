# 🚢 Battleship Game (JavaScript)

A fully functional Battleship game built as part of **The Odin Project** curriculum.
This project focuses on object-oriented design, test-driven development, and DOM manipulation using vanilla JavaScript.

---

## 🎯 Features

- ⚔️ Turn-based gameplay (Human vs Computer)
- 🤖 Computer makes random valid moves (no duplicates)
- 🎯 Hit & Miss tracking with visual feedback
- 🚫 Prevents repeated attacks on same cell
- 🏁 Game ends when all ships are sunk
- 🔄 Restart game functionality
- 🧠 Clean state management using `gameOver`

---

## 🧱 Tech Stack

- JavaScript (ES6 Modules)
- HTML5
- CSS3
- Jest (Unit Testing)

---

## 🧪 Testing

Unit tests are written using **Jest** for:

- Ship logic (`hit`, `isSunk`)
- Gameboard logic:
  - Ship placement
  - Attack handling
  - Miss tracking
  - Win condition

Run tests:

```bash
npm test
```

---

## 📂 Project Structure

```
battleship/
│
├── src/
│   ├── modules/
│   │   ├── Ship.js
│   │   ├── Gameboard.js
│   │   ├── Player.js
│   │
│   ├── dom/
│   │   └── dom.js
│   │
│   ├── styles/
│   │   └── main.css
│   │
│   ├── index.js
│
├── tests/
│   ├── Ship.test.js
│   ├── Gameboard.test.js
│
├── index.html
├── package.json
```

---

## 🧠 Key Concepts Learned

- Object-Oriented Programming (OOP)
- Separation of Concerns
- Event-driven architecture
- State management (`gameOver`)
- Test-driven development (TDD mindset)
- DOM manipulation and rendering

---

## 🚀 How to Run

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Open `index.html` in browser

---

## 📌 Future Improvements

- Drag & drop ship placement
- Smarter AI (target adjacent cells after hit)
- Better UI/UX design
- Mobile responsiveness
- Replace reload with state-based restart

---

## 🙌 Acknowledgements

- [The Odin Project](https://www.theodinproject.com/) for the project idea and guidance

---

## 📜 License

This project is open-source and available for learning purposes.

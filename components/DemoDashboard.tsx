"use client";

import { useState } from "react";

const CATS = [
  { name: "Housing", spent: 2253, budget: 2900 },
  { name: "Groceries", spent: 897, budget: 900 },
  { name: "Utilities", spent: 528, budget: 600 },
  { name: "Shopping", spent: 518, budget: 450 },
  { name: "Dining Out", spent: 426, budget: 500 },
  { name: "Transport", spent: 242, budget: 260 },
  { name: "Insurance", spent: 187, budget: 190 },
  { name: "Subscriptions", spent: 102, budget: 120 },
  { name: "Kids", spent: 55, budget: 150 },
  { name: "Entertainment", spent: 44, budget: 120 },
];

const FINDINGS = [
  { label: "Gym — last visit: never", amt: 34.99 },
  { label: "Hulu — billed twice", amt: 17.99 },
  { label: "“Free” trial, now month 9", amt: 11.99 },
  { label: "Storage unit, forgotten", amt: 68.0 },
  { label: "Waivable “courtesy” bank fee", amt: 12.0 },
  { label: "Wrong-ATM tax", amt: 7.0 },
];

const INCOME = 5898;
const SPEND = 5712;
const RECOVERED = FINDINGS.reduce((s, f) => s + f.amt, 0); // 151.97

function money(n: number) {
  return "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export function DemoDashboard() {
  const [fixed, setFixed] = useState(false);
  const spend = fixed ? SPEND - RECOVERED : SPEND;
  const savings = INCOME - spend;
  const rate = ((savings / INCOME) * 100).toFixed(1);

  const tiles = [
    { k: "INCOME", v: money(INCOME), tone: "" },
    { k: "SPENDING", v: money(spend), tone: fixed ? "down" : "" },
    { k: "SAVINGS", v: money(savings), tone: fixed ? "up" : "" },
    { k: "SAVINGS RATE", v: rate + "%", tone: fixed ? "up" : "" },
  ];

  return (
    <div className="dd">
      <div className="dd__bar">
        <span className="dd__title mono">DEMO HOUSEHOLD · MONTHLY VIEW</span>
        <button
          className={`dd__toggle mono${fixed ? " is-on" : ""}`}
          onClick={() => setFixed((v) => !v)}
          aria-pressed={fixed}
        >
          {fixed ? "✓ AUDIT APPLIED" : "▶ SHOW ME THE FIXES"}
        </button>
      </div>

      <div className="dd__tiles">
        {tiles.map((t) => (
          <div key={t.k} className={`dd__tile dd__tile--${t.tone}`}>
            <span className="dd__tilek mono">{t.k}</span>
            <span className="dd__tilev mono">{t.v}</span>
          </div>
        ))}
      </div>

      <div className="dd__grid">
        <div className="dd__panel">
          <p className="dd__panelh mono">SPENDING BY CATEGORY VS BUDGET</p>
          {CATS.map((c) => {
            const pct = Math.min((c.spent / c.budget) * 100, 100);
            const over = c.spent > c.budget;
            return (
              <div key={c.name} className="dd__row">
                <span className="dd__rowname">{c.name}</span>
                <span className="dd__track">
                  <span
                    className={`dd__fill${over ? " is-over" : ""}`}
                    style={{ width: pct + "%" }}
                  />
                </span>
                <span className={`dd__amt mono${over ? " is-over" : ""}`}>{money(c.spent)}</span>
              </div>
            );
          })}
        </div>

        <div className="dd__panel dd__panel--find">
          <p className="dd__panelh mono">WHAT THE AUDIT FOUND</p>
          {FINDINGS.map((f) => (
            <div key={f.label} className={`dd__find${fixed ? " is-cut" : ""}`}>
              <span className="dd__findl">{f.label}</span>
              <span className="dd__finda mono">−${f.amt.toFixed(2)}</span>
            </div>
          ))}
          <div className="dd__findtotal mono">
            <span>{fixed ? "RECOVERED / MO" : "BLEEDING / MO"}</span>
            <span className={fixed ? "pos" : "neg"}>
              {fixed ? "+" : "−"}${RECOVERED.toFixed(2)}
            </span>
          </div>
          <p className="dd__note mono">
            + one-time: 2 overdrafts $70 · HelloFresh double-charge $72
          </p>
        </div>
      </div>
      <p className="dd__disclaimer mono">
        DEMO HOUSEHOLD · REAL MATH · THIS IS THE ACTUAL TEMPLATE, RUNNING
      </p>
    </div>
  );
}

# Idium Whitepaper v1.0

**Emagin Project, *Idium Whitepaper v1.0*** (2026-08)

> This is the English edition of the Korean original. Where the two diverge, the Korean text prevails.

> **Revision History**
> * **v1.0 (2026-08)** — Elevation to a verifiable design. ① Canonical issuance equation fixed as `ΔS_k = (m + c + g)·U_k` — resolving the contradiction of two coexisting issuance formulas (5.2.2) ② Natural balancing equation and honesty clause codified (5.5.0) ③ The Cantillon effect named, and the 'progressivity of inflation' identity (2.1.2, 5.5.2) ④ Asymmetric carry — the structural argument for speculation defense (5.5.2, FAQ Q6) ⑤ Redefinition of clawback as 're-circulation' — a three-tier design of accounting identity, two-way automatic damper, and parameter-setting procedure (5.5.3) ⑥ The value stack (data → real economy) and quasi-market price mechanism with reservation prices introduced (3.3.1, 5.4.4) ⑦ New appendix with the economic simulation baseline (Appendix A) ⑧ Three-tier naming hierarchy fixed — Emagin (project) / Idium (currency) / IDmine (platform) / MonoID (identity layer) ⑨ Terminological and logical alignment with the book *Personhood Capitalism* (redefinition of "standard," the parable of the two villages, three-tier issuance conditions) ⑩ Korea named as testbed, the Worldcoin regulatory case, a securities self-assessment table, five added risks, and roadmap phases converted into gates ⑪ New Executive Summary (Korean and English) and bibliography chapter.
> * **v0.1** — Initial draft. Baseline design of the Personhood Standard, a UBI-embedded currency, the Data-Backed Standard, and cooperative governance.
> * **v0.2 (2026-06)** — Revision incorporating external review and debate. ① The modern definition of "standard" — the standard as issuance discipline — made explicit (3.1.1) ② New principle separating anonymity from accountability (4.2.3) ③ New position and communication principles on price (5.5.1) ④ Bootstrapping on national identity infrastructure made explicit (6.4.2) ⑤ Design principles for the AI review body (the 'Philosopher Council') specified (8.2.3) ⑥ 'Text and artifact' — the relationship between the book and the project established (Chapter 13) ⑦ FAQ Q8 (price) added ⑧ The trade of political risk for market risk made explicit (2.3.3) ⑨ The 'verified data' asset class defined (3.3) ⑩ The strategic meaning of the roadmap — a prepared alternative (Chapter 11).
> * **v0.3 (2026-06)** — Reflecting the finalized MVP design. ① MonoID's core function redefined — from 'a service you enter data into' to 'a service where data gathers to the user' (6.2) ② Client-first architecture — the recipient is always the user (6.2.2) ③ Regulatory position on delegated exercise of the data portability right — a tool, not a collector (new 9.3.3) ④ Two-layer insight structure and the free-safety-information principle (5.4.1) ⑤ Phased approach and roadmap Phase 0/1 updated (3.4.3, Chapter 11).

## Names & Hierarchy

The names used in this whitepaper and its surrounding documents are fixed in the following hierarchy: **paradigm (Personhood Capitalism) ⊃ monetary regime (the Personhood Standard) ⊃ currency (Idium) ⊃ platform (IDmine) ⊃ identity layer (MonoID)**, with **Emagin** as the entity that leads the whole.

| Name | Status |
|---|---|
| **Personhood Capitalism** | The paradigm. The book *Personhood Capitalism* is the original public narrative; this whitepaper is its blueprint |
| **The Personhood Standard** | The monetary regime. The issuance discipline this whitepaper designs |
| **Idium** | The currency. The subject of this whitepaper. Its unit symbol is IDM |
| **IDmine** | The main platform and service. The public-facing service name of the Korean testbed — a double meaning of ID (personhood, identity) and mine (what is mine; to mine) |
| **MonoID** | The identity and account layer. A submodule of the platform |
| **Emagin** | The project and issuing entity. Ecosystem for Monetary Autonomous Governance with Information-Neutrality |

The usage rule is simple: Emagin in organizational, historical, and community contexts; Idium in monetary and economic contexts; IDmine in user and app contexts — one name per context. Definitional sentences of terms match, word for word, Appendix B (Glossary) of the book, and for every overlapping sentence this whitepaper is the single source of truth.

## Executive Summary

**Problem.** Fiat money is born at the top: the gains of new issuance accrue in order of proximity to the spigot (the Cantillon effect), and liquidity reaches asset markets before the real economy. Meanwhile, the value of personal data accrues to platforms, not to the people who produce it. Concentration of wealth is not an accident but a structural consequence of the geometry of issuance and ownership.

**Proposal.** The Personhood Standard places people — not gold, not the state — in the seat that disciplines monetary issuance. The supply of Idium follows a single canonical equation: `ΔS_k = (m + c + g) · U_k`. New issuance in each period is proportional only to the number of verified persons (U_k); m (one UBI unit per person) is inviolable, while c (contribution-reward pool) and g (public-good fund) are governance-adjustable accruals. Issuance is equal because it is grounded in existence; circulation admits differences earned by contribution — an equal starting line and unequal flows coexist by design.

**Properties.** Three results follow. First, **progressive inflation**: with uniform issuance and pro-rata dilution, the break-even point is exactly the average balance, so Idium's inflation is accounting-identical to a wealth tax redistributed as a uniform dividend. Second, **asymmetric carry**: because new issuance flows only to verified persons, a speculative holder bears dilution without receiving UBI — the expected return of pure speculation is structurally suppressed. Third, **natural balancing**: real inflation ≈ nominal issuance rate − demand growth, where demand growth is carried by account growth in the growth phase and by the value stack in maturity, while the issuance rate decays as 1/t toward a quasi-steady state.

**Demand.** A currency's real value comes from what it buys. Idium's use cases expand along a value stack — data → information → insight → expertise → intellectual property → real-economy integration — and prices are set by markets or quasi-markets; the platform sets no prices. Fees are not burned into nothing but re-circulated into the UBI pool, with the re-circulation ratio adjusted by a two-way automatic damper tied to an internal price index.

**Governance & execution.** Ownership and operation rest with a cooperative: core principles (the issuance rule, unconditional UBI, data sovereignty) can be changed only by one-person-one-vote assembly, while operating parameters follow a contribution-weighted track. The first testbed is Korea (IDmine·MonoID). Roadmap phases are defined as gates — what must be verified to advance — and the economic claims are backed by a 10-year, 10,000-agent simulation baseline (Appendix A), with parameters to be finalized against Phase 2 testnet measurements.

**Honesty.** We also state what this design does not promise: in maturity, total real UBI equals the issuance rate × network utility — if growth stops, the real value of balances is preserved, but the real value of the UBI flow is a function of growth. This limit, and open problems such as balance concentration, are registered in Chapter 12.

## 1. Introduction

For decades, the world has lived inside a structure in which opportunity and wealth flow, again and again, toward the few who already hold capital — financial assets, real estate, equities. In this distorted arrangement, appreciation of assets already owned yields greater returns than income earned through productive work; it is the combined result of fiat money's credit-creation mechanism, asset inflation, and the data monopolies of platform capitalism. Along the way, the behavioral, biographical, and interest data individuals leave behind is exploited like a new 'digital gold' — yet the individuals who actually produce that data are granted almost no ownership of it and no share of its returns.

This whitepaper begins from that structural diagnosis. We propose a new monetary system that simultaneously moves beyond three sets of problems: the excessive monetary expansion and asset inflation of existing fiat currencies; the deflation, early wealth concentration, and absence of UBI in Bitcoin-style cryptocurrencies; and the funding constraints and political dependency that limit conventional basic income (UBI) proposals. The system combines two pillars: the **Personhood Standard**, which grounds money not in gold or the state but in each individual's personhood and the value of the data they hold, and a basic-income-based currency paid periodically, on that foundation, to every participant.

The coin we design has no abrupt Bitcoin-style halvings, yet neither does it expand almost without limit through multiplier effects as fiat money does. Total supply is engineered so that **the ratio of new issuance to the existing stock gradually declines over time**. As a result, in the early stage when users are growing rapidly, network value rises alongside the money supply, easing inflationary pressure; as the system matures, it is guided toward convergence on a quasi-steady state in which new issuance is a very small share of the stock. Over the long run, the aim is a monetary structure that avoids both excessive deflation and excessive inflation while sustaining a durable basic income.

The underlying asset of this currency is the user's **personhood data — business cards, résumés, profiles, and the like**. Through the business-card and résumé creation features of the platform (IDmine) provided by the Emagin cooperative, individuals create their data profiles and deposit them in a data bank, forming the network's value base. Combined with decentralized identity (DID), this data becomes one pillar of a Sybil-resistance mechanism that preserves anonymity and privacy while guaranteeing one person, one personhood / one person, one account. The project's legal form is a cooperative, designed so that tokens, revenues, and governance rights are distributed to the community as a whole rather than to a small circle of shareholders.

Ultimately, the goal of this project is not merely to create yet another cryptocurrency. We aim to build **an economic system in which every person is guaranteed a minimum of dignity from birth**, realized as global infrastructure that operates on the basis of each individual human being rather than states or corporations. This whitepaper explains what a Personhood-Standard, basic-income-based currency means as the **new gold standard of the data age (the Data-Backed Standard)**, how it can ease the structural problems of existing capitalism and platform capitalism, and how it can ultimately lay a foundation on which ordinary people live in a better world. Since its first edition (v0.1), this document has passed through external review and debate (v0.2) and the finalization of the MVP design (v0.3), and is now elevated to v1.0 — with every economic proposition backed by equations or simulation, and fully aligned with the book *Personhood Capitalism*.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/currency-evolution.jpeg" alt="The evolution of money: from the gold standard to the Personhood Standard" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">The evolution of money: from the gold standard to the Personhood Standard</figcaption>
</figure>
## 2. Background & Problem Statement

The problem this project targets is not simply "poverty" or "inequality."
The crisis we face is that **the very way wealth is accumulated and multiplied is structurally distorted**, and that **a new asset class born in the data era is reproducing the same pattern of inequality once again**.

In particular,

1. **The existing capitalist and fiat-currency system is designed to favor asset holders**,
2. **The data individuals produce is monopolized and expropriated by platforms**,
3. **Fiat currency, existing cryptocurrencies, and traditional UBI debates each carry their own inherent limitations**
   — and as these three interlock, we are left with an entrenched reality in which the trajectory of a life diverges radically depending on birth, nationality, and the size of one's parents' assets.

This section examines these problems on three levels.

---

### 2.1 Capitalism and the Concentration of Wealth

#### 2.1.1 Asset Income Growing Faster Than Labor Income

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/money-makes-money.jpg" alt="The structure in which money makes money: labor income vs. capital income" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Labor income vs. capital income: a structure in which assets multiply wealth faster</figcaption>
</figure>

In modern capitalist societies, the most direct means by which an individual makes a living is still **labor income**. Yet over the past several decades, most of those who actually accumulated great wealth did so not through labor but through **the appreciation of assets**. Stocks, bonds, real estate, private equity, venture investments — these financial and real assets offer further investment opportunities to those who can access them, and the returns in turn allow the purchase of still more assets.

Out of this process arises "an asset gap that labor alone can never close."

* Even high-earning professionals find themselves **struggling to keep pace with rising housing and education costs**,
* Those who already hold assets gain ever easier access to **additional loans, leverage, and investment products**,
* And in the end, the structure in which "money makes money" overwhelms the structure in which "people earn money by working."

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/unbalanced_wealth.jpg" alt="Chart of global wealth concentration" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Global wealth concentration: the top 20% hold roughly 80% of the world's assets</figcaption>
</figure>

#### 2.1.2 Fiat Currency, Credit Creation, and Asset Inflation

In the existing fiat-currency system, the money supply expands mainly through **bank credit creation** and central-bank **quantitative easing (QE)**. The liquidity newly supplied in this process does not necessarily flow into productive activity in the real economy; a substantial share heads instead into **equity, real estate, and other asset markets**. The result is **asset inflation — asset prices rising faster than the consumer prices ordinary citizens experience**.

* The money supply grows →
* Liquidity is supplied first to financial institutions and large investors →
* Funds flow into asset markets →
* Asset prices rise →
* The wealth of asset holders compounds ever faster.

This cycle structurally widens the gap between "those who already hold assets" and "those who do not."

This phenomenon has a name. As the eighteenth-century banker Richard Cantillon perceived, the gains from new money are distributed in order of proximity to the point of issuance — capital standing beside the tap spends the money before prices rise, while those at the far end receive only the higher prices (**the Cantillon effect**). That trickle-down never trickled was no accident but the consequence of the geometry of issuance. The Personhood Standard relocates this tap — from capital to people.

#### 2.1.3 The Entrenchment of Generational, Regional, and Class Divides

This asset inflation is especially devastating to **younger generations and those who have not yet accumulated assets**. From the moment a child is born, already,

* which country the child is born in,
* how much wealth the parents hold,
* and how that society's real estate, education, and healthcare systems are structured

determine, to an extreme degree, the breadth of opportunity that child will enjoy.

In effect, we live inside an economic system organized around **"assets"** rather than "personhood (people)."
It is precisely at this point that this project draws on the idea of the **Personhood Standard**: an attempt to shift the anchor to which money is pegged away from gold, government bonds, or central banks, and toward **the person as such, together with the data and activity that person accumulates**.

---

### 2.2 The Exploitative Structure of Data Assets

#### 2.2.1 Data Is the New 'Digital Gold' — but Individuals Hold No Ownership

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/data-is-new-gold.jpg" alt="Data = the new gold" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Where we once mined gold, we now mine data</figcaption>
</figure>

Today most people leave behind vast quantities of data every day through their smartphones and the internet.
Search histories, location data, purchase records, social media activity, content consumption patterns, tastes and social graphs — from the standpoint of platforms and corporations, all of this is **high-value refined data**, a new asset underpinning artificial intelligence, recommendation algorithms, advertising businesses, and credit scoring.

In reality, however:

* The **authority to collect, store, analyze, and sell** data is monopolized almost entirely by platforms,
* The **actual value** of that data accrues to corporations in the form of advertising revenue, marketing efficiency, and improved model accuracy,
* And the individuals who actually generated the data receive little more than **free service access** in return.

In short, data now plays the role of a new **gold** — yet the miners (individuals) who actually dig the gold out of the mine receive no share of it.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/data-exploitation.jpg" alt="The structure of data exploitation: user compensation = 0" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">The platform data monopoly: users produce the data, yet their compensation is zero</figcaption>
</figure>

#### 2.2.2 Platform Capitalism and Asymmetric Power

As data assets concentrate in platforms, the platforms acquire the following forms of power.

* The **information asymmetry** to predict and steer user behavior
* The **economic advantage** gained by selling or providing data to advertisers, merchants, and third parties
* The **speed of innovation** to seize new services and markets first through data-driven AI models

Individuals, by contrast:

* cannot know precisely where and how their data is used,
* have almost no access to the economic gains that data generates,
* and possess **no meaningful means of control** beyond the formality of "consenting to the use of personal information."

This is not merely a privacy issue; it is a question of **how ownership of, and the right to profit from, the new asset called data ought to be distributed**. The **Data-Backed Standard** this whitepaper describes is an attempt to redesign precisely this point.

#### 2.2.3 The Data Bank and the Need for Individual-Level "Accounts"

This project takes the **business-card, resume, and profile data** provided through Idium as its starting point.
Through the service, individuals organize their data into structured form and **deposit it in a "data bank."** The data thus deposited:

* is an asset expressing the individual's **Digital Personhood**,
* serves as the **collateral — the value base — of the entire network**,
* and returns a share of the profits it generates to the individual in the form of **basic income and additional rewards**.

This approach is the first step in converting the old formula, "personal data = platform property," into a new one: "personal data = an asset the individual has deposited."

---

### 2.3 The Limits of Existing Money, Cryptocurrencies, and UBI

#### 2.3.1 The Structural Limits of Fiat Currency

The existing fiat-currency system carries the following problems.

* **Near-unlimited credit creation**: the money supply can expand rapidly through bank lending, derivatives, and the like,
* **The political and economic constraints of monetary policy**: central banks and governments must forever walk a tightrope between economic stability and political decision-making.
* **Asset inflation**: newly supplied money flows into asset markets ahead of the real economy, driving up real estate and equity prices and deepening asset inequality.

As a result, fiat currency is **less "a neutral instrument offering everyone a fair opportunity" than a structure that works ever more to the advantage of asset holders**.

#### 2.3.2 The Limits of Existing Cryptocurrencies: Deflation, Early Concentration, and the Absence of UBI

First-generation cryptocurrencies such as Bitcoin emerged as a reaction against the unlimited monetary expansion of fiat currency. Yet they, too, carry the following problems.

* **Strongly deflationary design**: supply caps and halving schedules cause new issuance to shrink sharply over time, producing a deflationary asset that favors long-term holders.
* **Concentration of wealth among early participants**: a small number of early miners and buyers come to hold a substantial share of the total supply — a design more likely to reproduce asset inequality in a new form than to resolve it.
* **No basic-income design**: most cryptocurrencies serve merely as stores of value or as speculative and investment products; they do not embed **"a basic income periodically distributed to every person"** in their structure.

In other words, while existing cryptocurrencies raised a meaningful critique of fiat money's problems, they **failed to adequately realize "a fair distribution mechanism designed around the number of people."**

#### 2.3.3 The Limits of Traditional UBI Debates: Funding and Political Dependency

UBI (Universal Basic Income) is an idea long debated in social policy, economics, and philosophy. Yet cases of actual large-scale implementation are extremely limited, chiefly for the following reasons.

* **The funding problem**: adding yet another form of "fixed expenditure" while maintaining the current tax structure and welfare system imposes a heavy fiscal burden.
* **Political dependency**: UBI policies can easily be abolished or scaled back with elections and changes of government, undermining the institution's sustainability.
* **A frame bound to the nation-state**: most UBI debates are designed only within the fiscal and economic structure of a particular country, and fail to reflect the reality of a **cross-border digital economy and data economy**.

In the end, existing UBI remains long on "good intentions" but short on a **sustainable mechanism of execution**.

One thing must be honestly recorded here. This project's approach of embedding UBI at the level of the monetary system is a trade that **exchanges political risk — traditional UBI's weakness — for market risk**. In return for a basic income that no change of government can take away, one accepts a basic income whose value may thin out if the market turns away. We do not claim this exchange is unconditionally favorable. Two conditions justify it. First, market risk, unlike political risk, **can be managed by design** — the stacking of real-world use, the dual rails, and tapering issuance (Chapter 5) are the instruments of that management. Second, the two paths are complements, not competitors. Welfare and dividends operated by the state through public finance, and a personhood-backed currency operating by systemic principle, have different failure modes — so when both exist together, society's overall safety net grows thicker.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/currency-comparison.jpg" alt="Comparison table: fiat currency vs. Bitcoin vs. Personhood Standard currency" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Comparing the key properties of fiat currency, Bitcoin, and Personhood Standard currency</figcaption>
</figure>

---

### 2.4 The Problem Definition This Project Targets

To summarize, the problems this project targets are as follows.

1. **An economic structure in which opportunity and dignity are divided by whether one owns assets**
2. **A structure of data capitalism in which the data individuals produce is expropriated by platforms**
3. **The fact that fiat currency, existing cryptocurrencies, and traditional UBI each remain trapped within their own limitations**

The **"Personhood Standard + basic-income-based currency"** proposed in this whitepaper targets all three of these problems at once.

* It shifts the anchor of money away from **gold, the state, and assets** toward **"personhood (people)" and "data value,"**
* designs the money supply so that **new issuance shrinks progressively as a share of the existing supply**,
* and embeds, at the system level, **a basic income paid periodically to every person**.

The next chapter (3. Project Vision and Goals) explains, on the foundation of this problem statement, **what the Personhood Standard is**, and **what long-term vision and concrete goals it carries**.
## 3. Vision & Goals

In the previous chapter we examined how the current structures of capitalism, fiat money, and data capitalism entrench the concentration of wealth and inequality of opportunity. This chapter articulates, in the language of vision and goals, **what real-world referent the proposed system takes as the basis for designing its currency**, and **what forms of basic income and data economy** it seeks to build on top of that foundation.

The core vision of this project can be summarized in a single sentence.

> **"To build a global economic infrastructure grounded in personhood, in which every human being is guaranteed a minimum of dignity from the moment of birth."**

The paradigm on which this vision stands is called **Personhood Capitalism** — a paradigm that places the starting point of the economy not in human 'production' but in human 'existence.' The book *Personhood Capitalism — What Is Human Worth in the Age of AI?* (Korean monograph) carries its philosophy and public narrative (the why), while this whitepaper translates it into a verifiable design (the what). The hierarchy is as stated in the introduction: Personhood Capitalism ⊃ the Personhood Standard ⊃ Idium ⊃ IDmine ⊃ MonoID.

To this end, we propose a new monetary and economic model that combines three pillars—

1. **the Personhood Standard**,
2. **a UBI-native Currency**,
3. **a Data-Backed Currency (the "business-card standard" / the Data-Backed Standard)**.

---

### 3.1 Defining the Personhood Standard

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/personhood-standard.jpg" alt="Conceptual diagram of the Personhood Standard" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">The Personhood Standard: a network of individuals forms the total money supply and the economy</figcaption>
</figure>

#### 3.1.1 From the Gold Standard to the Personhood Standard

Historically, the "Gold Standard" was an attempt to secure the credibility and stability of money by pegging its value to **a physical asset — gold**. After the gold standard collapsed and the world transitioned to today's fiat money regime, the value of money came to be underwritten chiefly by **the credit of states and governments and the policies of central banks**.

The **Personhood Standard** proposed by this project is an attempt to shift the "standard" of money once more. The standard we propose is as follows.

* Money is pegged **not to states or gold, but to the existence of "persons (personhood)."**
* Each person is regarded as an **equal atomic unit**, and
* each person is treated as an **"Account" guaranteed a minimum of economic rights and basic income**.

Here, "personhood" is not merely an ID or an account name; it is a concept that encompasses

* the physical human being, and at the same time,
* the **Decentralized Identifier (DID)** that represents that person on digital networks, and
* the **data, history, and reputation** that person has generated and accumulated.

**On the word 'standard.'** Recalling that the essence of the gold standard was convertibility into gold, one may fairly ask whether the word 'standard' can be used for a system in which no convertibility exists. Our answer is this: money after 1971 has no convertibility anyway. In modern money, a 'standard' is not a question of "what the money can be exchanged for" but of **"what disciplines issuance."** Under the gold standard, the quantity of gold in the vault disciplined issuance; under fiat money, the credit of the state and the institutions of central banking did. Under the Personhood Standard, the number of verified persons disciplines issuance.

One point, however, must be stated honestly. The standard behind fiat money (state credit) performs two functions at once — disciplining issuance and creating demand (taxes can be paid only in that currency) — whereas the personhood standard performs only **the discipline of issuance**. The reason to accept this currency — that is, demand — must be procured separately, by the Data-Backed Standard (3.3) and by the layering of real use cases (5.4, 5.5.1). Not blurring this division of labor is the honesty of this design.

#### 3.1.2 An Atomic Unit Beyond States and Borders

What the Personhood Standard aims for is to implement, at the level of the monetary system itself,

* beyond the status of citizen of a particular state,
* customer of a particular company,
* or user of a particular platform,

**"a minimum of economic rights conferred simply by virtue of being a person."**

In other words, the criterion for issuing and distributing money in this system is defined as follows.

* Not "which country is this person from?" but
* "is this person a single, actually existing personhood?"

This perspective leads to the design principle of **one person, one personhood / one person, one account**, and provides a consistent criterion across Sybil-attack defense, DID design, and the entire onboarding process.

A small parable captures the heart of this institution. Suppose a village decides to create a new currency. The first village decrees, "we will give currency in proportion to the harvest you bring in." The granaries of the strong and healthy fill up, but children, the elderly, and the sick stand outside the currency from the very start. The second village promises "one coin each month, equally, to every living person here," and above that lets trade and wages flow freely. The diligent still save more, and the skilled still earn more. But no one starts empty-handed. What divides the two villages is not the quantity of redistribution but **the place where money is born**. The Personhood Standard chooses the path of the second village.

---

### 3.2 UBI-native Currency

#### 3.2.1 Not a Welfare Policy, but Part of the Currency's Design

The existing debate on basic income (UBI) has mostly framed it as **"a policy in which the government pays citizens a fixed amount at regular intervals, funded by taxes."** Framed this way, UBI remains **a policy that can be cut back or abolished at any time** depending on political and fiscal conditions.

The UBI-native currency we propose is different.

* Basic income is designed **not at the level of government policy, but at the level of the protocol and the monetary system**.
* That is, a **"basic income paid periodically to every person"** is built into the money-supply rules and the token economy.
* As a result, basic income does not depend on the will of a particular administration or on budget appropriations; it operates as a **default function of the system**.

#### 3.2.2 The Principle of "One Living Person = One Unit of Basic Income"

The core of the basic-income design is extremely simple.

> **"One living person = one unit of basic income."**

This principle carries the following implications.

* The criterion for payment is **independent of income, assets, nationality, occupation, gender, or race**.
* It carries through the perspective of **"Income by Personhood" — you receive it because you are a person.**
* To prevent duplicate accounts and fraudulent claims by the same person, a **DID + Sybil-resistance mechanism** is an essential complement.

Concrete parameters — the payment cycle (monthly/weekly, etc.), the amount per payment, testnet/point-based experiments in the early phase — are covered later in **Chapter 7, Basic Income (UBI) Design**. In this chapter we stress only one point: basic income is **not a "welfare program" but an "essential function of the monetary system."**

#### 3.2.3 Basic Income That Grows with the Network

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/supply-curve-comparison.jpg" alt="Comparison of gradual, sustainable money-supply concepts" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Bitcoin's step-shaped halvings vs. the proposed model's smooth, gradual decline</figcaption>
</figure>

The money-supply structure we design aims, in the early phase, to carry out **a relatively high rate of new issuance** alongside network growth, so as to **fill the UBI pool sufficiently**. But this issuance does not multiply and balloon the way fiat money does; instead, it has a structure in which **the share of new issuance relative to the existing supply gradually declines over time**.

* Early phase:

  * Secure the basic-income and reward funding needed for new-user inflow and ecosystem expansion.
  * The money supply grows, but network value grows at the same time, offsetting inflationary pressure.
* Maturity:

  * The share of new issuance shrinks substantially, converging toward a **quasi-steady (near-stable) state**.
  * Basic-income funding is sustained through new issuance plus a structure that re-circulates fees and revenues.

In this way, we pursue a third design that avoids the two extremes of **"the coin as a deflationary asset" and "fiat money that fails to control inflation."**

---

### 3.3 The Concept of the Data-Backed Standard

This project begins from an abstract philosophy, but it is realized through a very concrete, everyday resource—
the user's **"profile data."**

Idium aims to provide the following capabilities.

* An interface through which anyone can easily **create a digital business card and résumé**.
* Structuring the resulting information (education, work history, skills, interests, social accounts, etc.) into a well-defined data schema.
* Depositing this data in the individual's **"data bank"**, to be connected later with a variety of internal and external services.

In the Personhood-Standard monetary system, this data is used as follows.

* It functions as **"Digital Gold" that expresses each individual's personhood and activity**.
* The information deposited in the data bank is used for

  * DID-based Sybil resistance,
  * contribution measurement,
  * matching and recommendation services within the ecosystem,
  * and additional rewards based on data value.

In other words, the role that **"gold"** played under the gold standard is, in this project, partly taken over by **"personhood data structured as a profile."**

What the project aims for in the long run is the broader **"Data-Backed Standard."**

* The various data an individual generates (learning records, creative works, social activity, volunteering, project participation, etc.)
* **accumulates in that individual's own data bank**;
* part of it, in anonymized and aggregated form, constitutes network value;
* and **a share of the economic gains arising from it re-circulates to the individual** in the form of tokens, basic income, and rewards.

Through this structure, we intend to experiment with a new data-economy model that redistributes to **individuals, communities, and cooperatives** the **data revenues that under platform capitalism accrued unilaterally to the platforms**.

**Why it is different this time — 'verified data' as an asset class.** Personal-data marketplaces have been attempted many times before, and most failed on the demand side: buyers preferred platforms' aggregated data over self-reported data offered directly by individuals. The reason this project's data can command a different price structure is not the volume or the proactivity of the data but its **verifiability**. A record of career, learning, and contribution that is bound to a DID, vouched for by identity, and hard to forge is a different asset class from a self-reported résumé. It solves the problem that hiring and matching markets have actually been paying for — the cost of verification. The 'data' in the Data-Backed Standard refers not to behavioral logs drifting about, but to verified records vouched for by personhood.

#### 3.3.1 The Value Stack: From Data to the Real Economy

Idium's use cases are designed not as a list of standalone products but as **a ladder that extends upward from below, along tiers of value**.

> **Data** (the lowest, cheapest unit transaction) → **information** → **insight** → **expert knowledge** → **intellectual property** → **incorporation into the real economy**

The lower tiers are easy to supply and bootstrap the economy; the upper tiers have no free substitutes and give the currency a basis for real purchasing power. This stack is precisely the substance of what 4.4.2 calls "dynamics linked to growth in data value," and it is the engine of demand growth at maturity (5.5.0).

* **The reputation-ladder clause**: the track record built in the lower tiers — a sales and rating history attributed to one's DID — becomes the credential qualifying one to sell in the upper tiers. The tiers are at once a ladder of products and a ladder of reputation, and this is a moat that single-tier competitor platforms cannot replicate (connecting to the reputation system of 5.3.2).
* **The fee principle**: not tier-differentiated rates but a flat **ad valorem** rate. Since price reveals the tier by itself, classification disputes over "is this product data or insight?" and fee-arbitrage games are precluded at the source.
* **Sealing the scope**: the data bank (deposit and custody) is the default, and trading is opened in stages along the tiers of this stack. Deposits of résumé- and business-card-type 'verified records' come first; trading of behavioral data comes only after it passes the protective tiers of the sensitivity matrix (6.5.2).
* **Honesty about operating funds**: in the closed phase before incorporation into the real economy, fee revenue is denominated in Idium and therefore cannot cover fiat-denominated costs (servers, payroll). Operations until then depend on a runway of external funding (equity, grants, impact investment) (8.4), and the arrangement whereby the operating entity is compensated in Idium is part of the incentive alignment (5.6) whereby "the operators earn only if the economy takes hold."

---

### 3.4 Ultimate Goals

#### 3.4.1 A Personhood-Centered Economic Infrastructure

The ultimate goal of this project is to redesign the economic system itself "on the basis of personhood."

* Whatever country a child is born in,
* whatever occupation or assets its parents hold,
* a state in which, from the moment of birth, **a minimum economic safety net stands automatically open for the sole reason that a "personhood" exists**.

What we seek to build is **"an account and a basic-income entitlement already issued to children the moment they are born"** — implemented independently of any state, **at the level of global digital infrastructure**.

#### 3.4.2 A Person-Level Infrastructure Beyond States and Corporations

Another core goal is that this system **not become the monopoly of any particular state or corporation**.

* The legal entity adopts a **cooperative** structure, so that
  * ownership and governance authority are distributed, and
  * members and the community participate directly in decision-making.

* At the level of technology and protocol as well, we take into account
  * openness (Open),
  * interoperability (Interoperability),
  * and forkability & extensibility (Forkability & Extensibility).

This is not a matter of merely repeating the slogan of "decentralization"; it is a long-term attempt to build **"a new layer in which infrastructure operating at the level of each individual person takes precedence over states and corporations."**

#### 3.4.3 A Realistic, Phased Approach

Finally, this vision is not a monumental project completed in a single stroke. We start from **a small MVP that works from day one on top of verified identity**, and adopt a strategy of **gradual expansion**, beginning with small, testable units.

* Phase 1: one-person-one-account sign-up based on Korea's public mobile ID + periodic point payments + linked lookup and management via MyData (Korea's data-portability regime) + insights (the first use case).
* Phase 2: turning 'verified data' into assets — e.g., résumés auto-generated and vouched for from linked public data — plus data-bank expansion and B2B verification services.
* Phase 3: establishing the cooperative, actual token issuance, and a pilot in a limited community.
* Phase 4: expanding connections with various internal and external services.

This roadmap will be laid out again, with concrete milestones, in **Chapter 11, Roadmap**.
## 4. Design Principles

This project did not begin with the simple notion of "let's create a new coin."
What we are designing is **an economic infrastructure whose smallest unit is the individual human being**, and at the same time an attempt to experiment with **a new gold standard for the data age**.

Accordingly, the system is built from the outset on a few clear philosophies and principles.

1. **One person, one personhood / one person, one account**
2. **Privacy & data sovereignty**
3. **Cooperative ownership structure**
4. **Gradual, sustainable monetary supply**

Each principle is explained in detail below.

---

### 4.1 One Person, One Personhood / One Person, One Account

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/one-person-one-account.jpg" alt="One person, one personhood / one person, one account structure" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">DID-based Sybil attack prevention: strengthening security and establishing trust through one person, one account</figcaption>
</figure>

#### 4.1.1 A Structure with as Many "Basic Units" as There Are People

The most important premise of this project is the following.

> **"One living person = one basic unit (account) within the system."**

"Personhood" here means something beyond administrative or technical units such as

* citizenship of a particular state,
* a customer ID at a particular company,
* an account (username) on a particular service

— it means **"an actually existing human being."**

This principle matters for the following reasons.

* **The legitimacy of basic income (UBI)**:
  * The project's coin aims at a structure that pays a periodic basic income to every person.
  * Because the criterion is not wealth, income, or occupation but "the number of people," the definition of the personhood unit must be unambiguous.

* **Preventing fraud and duplicate claims**:
  * One person must be prevented from creating multiple accounts and collecting basic income more than once.
  * To this end, we combine a range of Sybil-resistance mechanisms: **DID (decentralized identity)**, on- and off-chain verification, and social-graph-based validation.

* **Fairness in governance**:
  * Realizing the principle of "one person, one vote" as fully as possible likewise requires a design that minimizes duplication at the level of personhood.

#### 4.1.2 Connecting DID to the Real World

To implement one person, one personhood, the project pursues a structure built on **DID (Decentralized Identifier)**.

* An on-chain address is merely one **expression linked to a DID**, not the whole of a personhood.
* Through minimal off-chain verification (even short of full KYC — for example, **trusted social attestation**),
  * we gradually build up confidence that "this DID represents a real, existing person."

* Over the long term, in partnership with various states, institutions, NGOs, and educational bodies,
  * we seek **"a structure in which children, adolescents, and vulnerable groups can safely be issued DIDs and remain protected."**

---

### 4.2 Privacy & Data Sovereignty

#### 4.2.1 Data Belongs to the Individual; the System Uses It Only by Delegation

From its very first stage, this project adopts the following principles.

> **"Ownership of data always rests with the individual."**
> **"The system is merely delegated the right to use that data."**

Concretely, the implementation aims for the following.

* The business-card, résumé, and profile data an individual creates through Idium
  * is treated by default as **an asset deposited in the individual's data bank**.

* The system and platform
  * use that data only in **anonymized, aggregated form**, or
  * apply it to **recommendation, matching, and analytics** only within the scope the user has explicitly consented to.

* The economic value generated from data use (e.g., matching fees, a share of advertising and service revenue)
  * is designed to **flow back to individuals and the community in the form of tokens or points**.

#### 4.2.2 Balancing Privacy Protection and Transparency

Upholding data sovereignty requires a balance between **privacy protection** and **transparency and auditability**.

* **On the privacy side**
  * Detailed personal data is kept, wherever possible, in off-chain, encrypted storage.
  * Only minimal hashes, indicators, and proofs go on-chain, making it possible to verify only the fact that "something existed."

* **On the transparency side**
  * How data is collected, used, and monetized is provided in two forms:
  * **policies stated in human-readable language**, and
  * **a machine-interpretable format (e.g., a data-use policy schema)**.

* **On auditability**
  * "This data was used for this purpose, generated this much revenue, and this portion was distributed to users, the UBI pool, and the public-interest fund" —
  * the goal is to record this in reports and on-chain records that anyone can verify.

#### 4.2.3 Separating Anonymity from Accountability

In an age when AI mass-produces text, images, and voices, what society will actually come to demand is not the sender's 'identity' but proof of two facts: **Is it a person, and is it one person?**

This project does not reject anonymity. Through zero-knowledge-proof (ZKP) based selective disclosure, a participant can prove "I am a verified, unique human being" without revealing who they are. Under this design, anonymous bot armies are blocked, while anonymous speakers — whistleblowers, dissenting voices — are protected.

Freedom of expression and social trust were locked in a mutually corrosive trade-off only in an era when technology could not separate anonymity from accountability. This project makes that separation a core value of the system: the moment 'proof of humanity' slides into 'exposure of identity,' the system reproduces the very surveillance structure it has criticized.

---

### 4.3 Cooperative Ownership Structure

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/coop-governance.jpg" alt="Cooperative organizational chart and comparison with token-based governance" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Combining the cooperative organizational structure with token-based governance</figcaption>
</figure>

#### 4.3.1 Choosing the Cooperative as Legal Form

From the outset, this project proceeds on the premise that **its legal personality takes the form of a 'cooperative.'**

* **To avoid concentration of equity and voting power**
  * We reject structures in which a particular VC, a dominant shareholder, or a founder group monopolizes all decision-making.

* A cooperative
  * takes **one member, one vote** as its basic principle, and
  * is well suited to safeguarding the project's long-term direction and public-interest character.

The detailed cooperative design (capital contributions, membership eligibility, voting structure, revenue distribution, etc.) is covered in a later chapter (9. Governance & Cooperative Structure); what matters in this chapter is that **"the project's ownership and control structure is oriented toward decentralization and the public interest at the level of design philosophy itself."**

#### 4.3.2 Combining with Token Governance

The cooperative ownership structure can be combined with on-chain token governance as follows.

* **Core protocol changes, monetary rules, use of the public-interest fund, and the like**
  * require deliberation and approval at the level of the cooperative's general assembly or representative body.

* **Fine-grained parameter adjustments, proposals and experiments, and operational improvements**
  * can proceed quickly through token-based governance (e.g., a hybrid model of one person, one vote plus token weighting).

* In this way, we pursue a balance between
  * **"a structure that honors each individual personhood," and
  * "a structure that reflects actual participation in and contribution to the ecosystem."**

---

### 4.4 Gradual, Sustainable Monetary Supply

#### 4.4.1 Not Halvings, but a Gently Flattening Supply Curve

Bitcoin, through its hard issuance cap and halving structure, became **a powerfully deflationary asset**.
The goal of this project, however, is not to create "a scarce asset that favors only early participants," but **a currency with a moderate degree of inflation and stability — one that can keep paying basic income over the long run**.

To that end, we aim for the following design.

* Instead of an **abrupt halving**, in which issuance drops by half at fixed points in time,
* we adopt **a structure in which the ratio of new issuance to existing supply declines gradually over time**.

That is,

* In the early phase,
  * a **relatively high rate of new issuance** is allowed, to support network growth and UBI payments;

* As time passes,
  * the share of new issuance relative to total supply naturally shrinks,
  * so that the system converges, over the long run, toward a **quasi-steady (near-stable) state**.

#### 4.4.2 Avoiding the Extremes of Inflation and Deflation

The goal of this structure is simple.

* Avoid **fiat-style, uncontrollable inflation**, while also
* avoiding **the standstill of circulation caused by extreme deflation**.

The project's monetary supply design aims for the following.

* Maintain the minimum new issuance needed for UBI, ecosystem rewards, and the public-interest fund, while
* keeping growth in the money supply balanced against growth in overall value, by
  * designing dynamics tied to **growth in user numbers, network activity, and data value**.
  * The governing equation of these dynamics is specified in 5.5.0 (natural balancing), and the substance of "growth in data value" is the value stack (3.3.1).

* Over the long term,
  * a portion of **fees, platform revenue, and partnership revenue**
  * is re-circulated into the UBI pool,
  * progressively reducing dependence on new issuance.
## 5. Economic Model & Tokenomics

*(Economic Model & Tokenomics)*

The purpose of this chapter is to explain the **economic dynamics** of a basic-income currency built on the Personhood Standard.
The token we are designing is not a mere speculative asset; it must simultaneously perform three roles:

1. **the medium of a per-person basic income**,
2. **the settlement instrument of a Data-Backed Standard economy**,
3. **a governance tool for the cooperative ecosystem**.

Accordingly, what matters for this token is not "how much can be earned" but **"how it is used, and where it returns."**

---

### 5.1 Token Overview

#### 5.1.1 Roles of the Token

Idium performs the following roles.

1. **Means of basic-income payment**

   * It is the **unit of UBI**, distributed periodically to every verified person.
   * It is the concrete embodiment of the design principle "one living person = one (or more) unit of UBI per cycle."

2. **Means of payment within the network**

   * It is used to pay for services provided by Idium and affiliated offerings, including
     * data storage,
     * search and matching,
     * premium features,
     * verification services.
       
   * When integrated with third-party partner services, it serves as the **default payment token** within that ecosystem.

3. **Contribution rewards & incentives**

   * It is the **means of reward for activities that contribute to the ecosystem** — development work, translation and community operations, education, partner onboarding, and more.
   * Rather than simple mining, the design **concentrates rewards on "proof of contribution" for people, data, and community**.

4. **Governance & cooperative linkage**

   * Members of the cooperative who hold Idium or cooperative equity above a certain threshold may exercise **decision-making authority** over
     * protocol upgrades,
     * treasury spending,
     * disbursement of the public-benefit fund.

   * How the "one person, one vote" principle is combined with **contribution-based weighting** is treated in detail in the governance chapter.

#### 5.1.2 Token Types

While its interpretation may vary with the legal and regulatory environment, at the design stage Idium aims at the following.

* **UBI Token (Universal Basic Income Token)**:
  * The distribution mechanism used for UBI and contribution rewards.

* **Governance Token**:
  * Token holding and staking may be one of the conditions for governance participation.

That said, for the project's legal stability and regulatory compliance,
we give priority to **minimizing any element that could cause the token to be construed as a "security token."**

---

### 5.2 Supply Model

#### 5.2.1 Basic Concepts

The currency supply of this project follows these principles.

1. **No hard cap on issuance is fixed in advance.**
   * We aim neither for unlimited inflation, as with fiat currency,
   * nor for strong deflation, as with Bitcoin.

2. **The rate of new issuance declines gradually over time.**
   * Rather than dropping sharply at specific moments, as with a "halving,"
   * we adopt a **curve-shaped structure that decreases naturally** as time passes.

3. **The primary purposes of issuance are UBI, contribution rewards, and the public-benefit fund.**
   * We do not issue to satisfy speculative demand;
   * we issue as **fuel for real people, real data, and public-benefit activity**.

**Basic supply equations**

* $$ S_k $$: total supply through the k-th epoch (e.g., month/block/round)  
* $$ \Delta S_k $$: the amount newly issued in the k-th epoch  

Recurrence:  
$$ S_k = S_{k-1} + \Delta S_k $$

With this basic skeleton in place, how $$ \Delta S_k $$ is defined becomes, in practice, the heart of the algorithm design.

#### 5.2.2 Canonical Issuance Rule

Idium does not adjust issuance as a ratio of the existing supply. Instead, **each cycle it issues an additional amount equal to "the number of verified persons × a fixed absolute issuance per person."** The rate is never touched; as cumulative supply grows, **the relative issuance rate declines naturally**. There is exactly one issuance rule, given below, and every other figure and statement in this whitepaper follows this canonical form.

* New issuance in cycle k:  
  $$ \Delta S_k = (m + c + g) \cdot U_k $$  
  * $$ m $$: the per-person UBI unit — **one unit per person, inviolable**. The moment it is issued, the full amount is paid to that person.  
  * $$ c $$: the per-person accrual to the contribution reward pool — the reward budget at the circulation layer (5.3.2).  
  * $$ g $$: the per-person accrual to the public-benefit fund — the budget for the children's and vulnerable-populations fund.  
  * $$ U_k $$: the number of verified persons (accounts) in that cycle.

* Total supply:  
  $$ S_k = S_{k-1} + \Delta S_k $$
* Relative rate of new issuance:  
  $$ r_k = \frac{\Delta S_k}{S_{k-1}} = \frac{(m + c + g) \cdot U_k}{S_{k-1}} $$

As time passes, the denominator $$ S_{k-1} $$ grows, so $$ r_k $$ declines naturally without any separate "halving" parameter. This is a design that **supplies the same per-person UBI during the network's early expansion phase, while over the long run the share of new issuance relative to cumulative supply shrinks and inflationary pressure eases**.

There is nothing in the issuance rule except the number of people — no activity metrics, no assets, no prices enter into issuance. The "one unit per person" principle is held inviolable in m, and governance debates about allocation ratios apply only to c and g. The initial values of c and g, and the procedure for adjusting them, follow the parameter-decision procedure of 5.5.3.

> Issuance functions that were considered but not adopted (rate-linked variants and the like), together with the reasons for their rejection, are recorded in **Appendix B**. The simplicity of the canonical rule — the fact that issuance is proportional to the number of persons and nothing else — is at once this institution's design and its narrative.

---

### 5.3 Distribution Model

How the token is distributed — **to whom, and by what criteria** — determines the character of the system.

#### 5.3.1 Basic Income (UBI) Distribution

* **Recipients**:
  * **All participants** verified under the one person, one personhood principle.

* **Criterion**:
  * **Equal per person**, regardless of income, assets, gender, or occupation.

* **Cycle**:
  * E.g., once a month or once a week (to be determined by experimental results).

* **Funding**:
  * **The entirety** of the UBI share of new issuance, $$ m \cdot U_k $$ — the principle "one living person = one unit of basic income" is inviolable within this share (5.2.2). Because contribution rewards and the public-benefit fund are issued as separate accruals (c and g), debates over allocation ratios cannot encroach on UBI.
  * To this is added **fee re-circulation** (5.5.3); as the system matures, we aim for re-circulation to outweigh new issuance as a source of UBI funding.

The detailed figures of UBI design (amounts, cycles, upper and lower bounds, and so on)
are treated more fully in Chapter **7. Basic Income (UBI) Design**.
Here we make clear only that **UBI is the central axis of token distribution**.

#### 5.3.2 Contribution Rewards

If UBI is a reward for **"the value of existence,"**
contribution rewards are a reward for **"the value of action."** In the language of the monograph: **"equality at issuance, difference in circulation"** — the starting line is equal, but the flows may differ. The share owed to dignity is given without asking anything; rewards for contribution are a separate layer stacked on top of it.

* Examples of contribution activities:

  * software development and bug reports,
  * translation, documentation, design,
  * production of educational content,
  * community operations and meetup hosting,
  * running programs for children and vulnerable populations,
  * sourcing and managing partnerships, and more.

* Reward method:
  * Based on contribution records kept on-chain or off-chain,
  * a DAO/cooperative committee **allocates rewards according to policy and criteria**.
  * Over the long run, linkage with a **contribution reputation system** is also under consideration.

#### 5.3.3 Service Usage & Fee Redistribution

* **A portion of the fees** arising from service usage within the network (data storage, search, matching, verification, etc.)
  is redistributed as follows:

  1. Rewards for infrastructure operators (storage and compute providers)
  2. Cooperative operating costs
  3. Replenishment of the UBI/reward pools
  4. The public-benefit and children's support fund

Through this structure, the token acquires a **circular structure in which, as it moves, it sustains the system and accrues to people**.

---

### 5.4 Utility & Use Cases

Only when it is clear where the token is actually used can

* its value be formed by **real usage and network effects** rather than speculation.

#### 5.4.1 Idium and Affiliated Services

* **Premium insight access** — in-depth analysis, benchmarks, and recommendations based on one's own data. Free daily insights build the habit of returning, and premium insights become the **first sink for points/tokens**. However, **safety-related information — breach and risk alerts — is always free**: the moment a system that promises a floor of dignity puts safety behind a paywall, it betrays its own narrative.
* **Digital business cards, résumés, portfolios** — profile assets automatically generated and attested from public data (see 6.2).
* **Temporary cloud storage upgrades (expanded capacity and duration)**
* **Personalized AI analysis and recommendation services** (e.g., career coaching, networking recommendations)

These features may follow a freemium model by default,
and are designed so that **premium features and certain advanced services are payable in Idium**.

#### 5.4.2 Third-Party Partner Services

* Education platforms, NGOs, hiring platforms, local community services, and the like

  * can integrate by
    * using Idium for **scholarships, activity stipends, and participation rewards**, or
    * offering certain services at a discount, or denominated, in Idium.

In that case, Idium functions not as mere "in-app points" but as
**"a value token linked to a person's personhood and data" + "a common payment instrument binding multiple services together."**

#### 5.4.3 Governance & Stake Functions

* By **staking** the governance token, one can
  * acquire **governance rights** — submitting proposals, voting, serving on committees.

This deters malicious behavior and
raises the network's trustworthiness through the dual structure of
**"a trustworthy person + a real token stake."**

#### 5.4.4 Price Mechanism: Markets and Quasi-Markets

Apart from the uniform issuance of basic income, every price in the Idium economy is set **in a market or a quasi-market**. The platform sets no prices. However, posted prices at the lowest tier (small data transactions) tend to stick to psychological anchors and fail to reflect changes in the money supply; therefore, the system **presents default/suggested prices indexed to per-capita money supply**, from which sellers are free to deviate (a quasi-market). Negotiated prices in the upper tiers naturally follow market transmission. The system supports a **reservation price** mechanism by which a seller declares "I will not sell below this price."

This provision guarantees by design the "price transmission" that is a precondition for natural balancing (5.5.0) — without it, the logic of inflation-type balancing breaks down at the lowest tier.

---

### 5.5 Stability & Value

The token of this project is **not a stablecoin in the traditional sense (1:1 fiat peg)**.
It nonetheless pursues **relative stability** through the governing equation and structural factors below.

#### 5.5.0 Natural Balancing: the Governing Equation of Real Value

The real-value dynamics of this currency can be summarized in one line.

> **Real inflation rate ≈ nominal issuance rate ($$ r_k $$) − demand growth rate**

Here, demand growth is carried by two engines operating in sequence. **In the growth phase, the increase in the number of accounts (persons)** offsets issuance — the very premise of a growing money supply is a growing account base, which means the network's trust and utility are growing with it. As Bitcoin's early years demonstrate, even a nominal issuance rate in the double digits per year can be overwhelmed by demand growth, and the currency appreciates instead. **In the maturity phase, the rise of the value stack (3.3.1)** takes over demand growth. Since $$ r_k $$ decays naturally as 1/t by design (5.2.2), both forces diminish together and the system converges to a quasi-steady state.

**Honesty clause.** We state the maturity-phase identity explicitly. Let Y denote total real currency value (network utility); then **total real UBI = $$ r_k $$ × Y**. As $$ r_k $$ declines, sustaining real basic income presupposes continued growth of Y — that is, the value stack's absorption into the real economy. In other words, this design protects the real value of balances even if growth stops, but **the real value of the basic-income flow is a function of growth**. This limitation is also registered in the risk chapter (12.2).

Under this equation, the structural factors underpinning stability are as follows.

1. **A Diffusing Asset (Diffusion)**

   * As the network grows, so does the UBI-receiving population; the token becomes **an asset whose ownership keeps diffusing — one whose expected return to large holdings is structurally low, weakening the incentive to accumulate** (the asymmetric carry of 5.5.2).
   * Uniform issuance to everyone creates a constant diffusion of the asset, structurally narrowing the range within which a few whales' selling or accumulation can shake the price.

2. **Demand Linked to Data Value**

   * As more people deposit their data and services and partnerships multiply,
   * **real usage demand that must be settled in the token** grows along the tiers of the value stack (3.3.1).

3. **Fee Re-circulation**

   * Rather than being burned into nothing, fees return to the basic-income pool.
   * The accounting structure of re-circulation and its two-way automatic damper are designed in 5.5.3.

4. **Value Independent of Exchange Listing**

   * CEX/DEX listings may be necessary for liquidity and accessibility,
   * but the project's design philosophy focuses on ensuring that **"the exchange price" never becomes "the whole of the token."**
   * Real value must be assessed from the standpoint of **people, data, and public benefit**.

#### 5.5.1 Price Stance and Communication Principles

This project formalizes the following stance on token price.

> **"We promise no price. What we promise is a place to spend."**

1. **No price forecasts.** No official document, announcement, or marketing material shall present target prices, expected appreciation, or return projections. This is a design philosophy before it is a regulatory strategy (avoiding securities characterization). The moment one sells the expectation of price appreciation, this token slides into the grammar of the very speculative assets it has criticized.

2. **North-star metrics.** The core metrics the project publishes and tracks are not exchange quotes but these two: **the number of active persons**, and **the annual volume of real transactions settled in Idium**. A token's sustainable price is not a promise but a function, and these two metrics are that function's inputs. If real transactions grow, price follows; if they do not, no promise can hold a price up.

3. **Value Layering roadmap.** Real transaction volume is built up in stages. We begin with the lightest thing — transactions in data (profiles, verification) — and raise the average transaction value through information, professional expertise, and eventually physical goods such as second-hand items. This is the path walked by marketplaces that grew from the sale of a single pencil.

4. **Dual Rail principle.** Layering the marketplace and layering the currency are different problems. To avoid forcing on every transaction the friction of "why Idium rather than fiat," in the early stages we consider a dual rail: fiat payment runs in parallel while rewards, fee discounts, and settlement are carried out in Idium. A path that enters as points and grows into money has a better survival probability than one born as money and wandering in search of a place to be spent.

5. **Supporters are users, not holders.** What we offer early supporters is not an asset that will rise but a place to spend — member-priority services, fee payment, governance participation. The value of a token held purely on conviction is a function of conviction, and conviction wavers. Only support converted into usage remains as fundamentals.

6. **Dilution is not a defect but a distribution device.** Because issuance continues to follow people, even if the token's value rises, latecomers still keep receiving their share of the issuance flow. This property — the structural moderation of the early entrant's premium — is this design's deliberate answer to the early-concentration problem of fixed-supply cryptocurrencies.

#### 5.5.2 The Progressivity of Inflation and Asymmetric Carry

**The progressivity of inflation.** Under the combination of uniform issuance and holdings-proportional dilution, the break-even point is exactly the **average balance**. A person holding less than the average is a net beneficiary each time issuance occurs, while those holding more than the average bear the net burden. Idium's inflation is therefore **accounting-identical to levying a wealth tax at rate $$ r_k $$ and paying everyone a flat dividend**. With no separate tax apparatus, the currency's issuance method itself operates as a redistribution system. If inflation in existing currencies was a hidden regressive tax on the weak, inflation in a personhood-standard currency is a progressive re-circulation that winds back inequality.

**Asymmetric Carry.** New issuance flows only to verified persons. A speculative holder who merely buys the currency from outside bears the full dilution from issuance ($$ r_k $$) while receiving no UBI.

> Real return of a participating person = network growth − $$ r_k $$ + UBI  
> Real return of a speculative holder = network growth − $$ r_k $$

Near equilibrium, the expected return to speculative holding is pressed to zero, and only participating persons come out ahead by the amount of their UBI. If Bitcoin's issuance flowed to miners — that is, to capital — structurally reinforcing concentration and speculation (2.3.2), the issuance structure of a personhood-standard currency tilts in exactly the opposite direction. Their problem, we solve with the structure of issuance.

#### 5.5.3 Redefining Clawback: the Three-Part Design of Re-circulation

The burning and lockups left "under review" in v0.x are settled in v1.0 by the following design.

**(1) Stating the accounting identity.** Burning fees and then issuing to cover the shortfall is accounting-identical to re-circulating fees into the UBI pool and issuing only the remaining shortfall (numerically confirmed identical in simulation — Appendix A). The mechanism's official name is therefore unified as **re-circulation** — "the fees you pay do not disappear; they become everyone's basic income." Burning is merely the accounting expression of re-circulation. Fee redistribution (5.3.3) and UBI pool replenishment (8.3.4) are integrated on this principle.

**(2) A two-way automatic damper.** On top of quasi-market prices (5.4.4), we measure an **internal price index** — a basket of basic services: median access fees, storage, matching fees, and so on — and introduce an **automatic rule that ties the re-circulation/retention split of fees to price drift**. If real value slides below the target band, the re-circulation share is raised to ease pressure on the circulating supply; if it overheats above the band, the share is lowered. The principle that the market sets all prices is not violated — what is adjusted is never a price, only the allocation ratio of fees. And this damper must be **strictly two-way**: a credibly one-directional appreciation invites external leverage and derivative speculation (Minsky dynamics). The goal is to keep the maturity-phase real appreciation rate within a band of a few percent per year.

**(3) Parameter-decision procedure.** This whitepaper does not fix figures such as the initial re-circulation rate, band width, or basket composition. Instead, it codifies the decision procedure: **they are determined empirically on the Phase 2 testnet against the economic-simulation baseline (Appendix A), and subsequent changes belong to the flexible-decision track of the dual governance structure (8.2).** "Undecided" and "undecided with a defined decision procedure" are entirely different things for a whitepaper's credibility — the latter is this whitepaper's way.

---

### 5.6 Incentive Alignment

Finally, the life of an economic model depends on **how well the incentives of each actor are aligned**.

* **Individual users**

  * gain a minimum of stability through UBI, and
  * by depositing and managing their own data,
    * earn additional rewards and service benefits.

* **Contributors, developers, community builders**

  * see their activity translate into **direct token rewards and rising reputation**.

* **The cooperative and operating entities**

  * are rewarded not by short-term swings in the token price,
  * but by **growth in UBI, the public-benefit fund, and data value = the project's long-term sustainability**.

* **Partner institutions (education, NGOs, local communities)**

  * can use Idium to

    * run education, welfare, and pilot programs,
    * while providing direct incentives to participants and to those in need.

Through this alignment of incentives, we aim for
**a transition from "a structure where money makes money" to "a structure where people, data, and public benefit create value."**
## 6. Technical Architecture & Implementation Roadmap

This project does not end with "a single coin." It aims at a **multi-layer architecture** in which

* an **application layer** centered on digital business cards and résumés,
* a **protocol layer** implementing the Personhood Standard basic income and the Data-Backed Standard,
* and an **infrastructure layer** encompassing DID, the data bank, storage, security, and governance

interlock with one another.

The core goals of the technical architecture are the following four.

1. **Security** – Because the system handles finances, identity, and data, it must avoid any fatal single point of failure (SPOF).
2. **Privacy & Data Sovereignty** – Personhood data is controlled by the user, and the chain records only the minimum.
3. **Scalability** – A structure that can accommodate global users, data, and partners.
4. **UX** – It must be naturally usable even by people who are not "crypto users."

---

### 6.1 Architecture Overview

At the big-picture level, the architecture can be divided into the following layers.

1. **Application Layer**

   * Idium web and mobile apps
   * Partner services (education, NGOs, hiring platforms, etc.)
   * User wallet and DID management UI

2. **Service / Middleware Layer**

   * API gateway and authentication/authorization management
   * DID resolution service
   * Data bank access and search APIs
   * AI analysis and recommendation services (career, matching, risk analysis, etc.)

3. **Protocol / Smart Contract Layer**

   * UBI distribution smart contracts
   * Token issuance, burning, and staking contracts
   * Governance contracts (voting, proposals, parameter changes)
   * DID/personhood registry (only minimal information recorded on-chain)

4. **Data & Storage Layer**

   * On-chain data (essential metadata, hashes, state)
   * Off-chain storage (business cards, résumés, profiles, logs)
   * Encryption and key management (user-centric encryption)

5. **Identity & Security Layer**

   * DID standards and implementation
   * Sybil resistance mechanisms (e.g. social graphs, human attestation, and in the long run integration with other solutions)
   * Access control, audit logs, anomaly detection

This layered structure aims to be composed of **"replaceable modules,"** not bound to any particular blockchain or technology stack.

---

### 6.2 The Idium Application Layer: MonoID

The project's first point of contact is the service people actually use:
the **Idium application (working title: MonoID)**.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/user-onboarding-journey.jpg" alt="Onboarding user journey" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">The five stages of the user journey: sign-up (public mobile ID) → receipt of basic points → viewing data connections → insights → management and expansion</figcaption>
</figure>

#### 6.2.1 Core Features (Redefined in v0.3)

The initial concept had users entering data themselves as they created business cards and résumés. But with access to Korea's public mobile ID (one-person-one-identity verification without biometrics) and the data portability right (MyData, Korea's data-portability regime), the MVP was redefined: **from "a service where users enter data" to "a service where data gathers around the user."**

* **Sign-up and login via mobile ID (one person, one account)**
  * Verifies one identity per person without collecting biometric data.
  * Because Sybil resistance (6.4) is secured at the moment of sign-up, **safe point distribution becomes possible from day one** — structurally blocking the account-farming problem that plagues services that pay rewards without identity verification.

* **Periodic distribution of basic points**
  * Not a one-time sign-up bonus but an 'existence share' paid **periodically and unconditionally**, even if small (the points-stage implementation of UBI, Chapter 7).
  * The payment screen states the reason explicitly — "Because you are a person."

* **Viewing and managing MyData connections**
  * Through delegated exercise of the data portability right, users can see the list of platforms and institutions that hold their data.
  * They can manage consent withdrawal and account deletion for unnecessary connections, and receive notifications about new connections and changes.
  * This is where data sovereignty (4.2) becomes **a tangible experience right after sign-up**, not an abstract principle.

* **Insights — free daily + premium**
  * Short daily insights based on one's own data (free) build the habit of returning,
  * while premium insights unlocked with points become the first spending venue (sink) (5.4.1).
  * Safety-related information, such as breach and risk alerts, is always free.

* **Automatic generation of profile assets (later stage)**
  * Résumés and career credentials are automatically composed and attested from connected public data — the 'verified data' assetization of (3.3).
  * The business cards and résumés of the initial concept are not discarded; they **evolve from documents you type into assets that are auto-generated and attested**.

* **Integrated wallet/account UX**
  * Users unfamiliar with "crypto wallet" conventions onboard through a familiar login experience,
  * while a DID and wallet are created and linked in the background.

#### 6.2.2 UX Principles

* **The recipient is always the user — a client-first architecture**
  * Data and identity information retrieved by exercising the data portability right are stored **only on the user's device (the client)**.
  * The server handles only verification results, metadata, and hashes; when server-side processing is unavoidable, the principle is to **obtain the user's consent each time, receive the data from the client, and retain nothing after processing**.
  * "We do not accumulate your data on our servers" — this is not a hidden security policy but a core differentiator placed front and center.

* **Web2-level convenience + Web3-level ownership**
  * Users access the service through a familiar UX (login, profile editing),
  * while the actual data, tokens, and DID remain under the user's control.

* **Progressive disclosure / settings-driven**
  * What to disclose and what to keep closed, and which services may see what —
  * users get hierarchical privacy controls, and the history of consent itself is available for the user to review ("what did I allow, and when").

---

### 6.3 On-Chain vs. Off-Chain: What Goes Where

One of the most important design decisions in this project is
**"which data to keep on-chain, and which data to keep off-chain."**

#### 6.3.1 What Goes On-Chain (Essential Minimum Information)

* **Token state**
  * Each address's balance, UBI receipt records, staking status, burn history, and so on.

* **UBI and governance logic**
  * The rules for calculating UBI cadence and amounts,
  * and voting, proposal, and approval procedures are embedded in smart contracts so they are immutable or changeable only through very strict procedures.

* **Minimal metadata in the DID/personhood registry**
  * Minimal trust indicators implying that "this address/this DID is linked to a valid personhood" (e.g., verification level, issuing entity, status flags).
  * No concrete personal information goes on the chain.

* **Hashes of data bank records**
  * Actual business card, résumé, and profile data is stored off-chain,
  * while before-and-after hashes of changes are posted on-chain to guarantee integrity and timestamps.

* **A registry of consent state (ConsentRegistry)**
  * A contract that records the grant and withdrawal status of data-use consent, as hashes only.
  * The content of the consent (which data, to whom) stays off-chain; only proof of its state remains on-chain — the point is that the fact "it was withdrawn" is recorded in a way that cannot be forged.

#### 6.3.2 What Stays Off-Chain (Personal Data & Large Volumes)

* **The detailed contents of business cards, résumés, and profiles**
  * Sensitive information such as name, contact details, address, work history, education, and projects.

* **Logs and activity records**
  * In-app behavioral logs, recommendation and matching records, statistical data, and so on.

* **AI model inputs and outputs**
  * Personal career analyses, recommendation results, conversational records, and so on.

Off-chain storage takes the following elements into account.

* Encrypted object storage (e.g., encrypting with the user's key before storing)
* A mix of distributed storage and commercial cloud where needed
* APIs through which users can perform "download/delete my data" requests at any time

---

### 6.4 DID & Sybil Resistance Architecture

#### 6.4.1 The DID (Decentralized Identifier) Layer

In a Personhood Standard system, the DID becomes **the "root" of the digital personhood**.

* Each user is assigned a DID during onboarding,
  * or can connect a DID they already hold.

* The DID Document can contain
  * the public keys the personhood uses,
  * service endpoints (wallet, data bank API, etc.),
  * and verification metadata (verifying institution, verification level).

The DID infrastructure is not tied to any particular chain; it aims for

* a structure based on **standard DID methods (e.g., the did:... form)**,
* reusable across different chains and systems.

#### 6.4.2 Sybil Attack Defense Strategy

The "one person, one personhood" design requires deterring the same individual from creating multiple personhood accounts.
To this end, we pursue a multi-layered approach that **combines multiple strategies**.

* **Social-graph-based verification**
  * Onboarding new personhoods through "referrals and attestations" from already-verified persons.
  * Attaching accountability for false attestations (reputation loss, stake slashing, etc.).

* **Offline and partner-based verification**
  * Through partners such as educational institutions, NGOs, and public organizations,
    * supporting personhood verification for specific groups (e.g., children, refugees, local communities).

* **Technical auxiliary measures (in the long run)**
  * Various techniques such as device fingerprinting, behavioral patterns, and biometric authentication can be used **in an auxiliary role**,
  * but compulsory collection of personal data is avoided; adoption is opt-in and consent-based only.

The important point is that, rather than aiming for **"perfect Sybil defense,"** we

* raise the cost of defense to the point where "large-scale, organized abuse is economically irrational,"
* and combine this with a structure in which abuse carries **reputational, stake-based, and legal consequences**.

**Leveraging national identity infrastructure (testbed stage).** Where public infrastructure exists — like Korea's public mobile ID — that can verify one identity per person across all ages, without collecting biometrics, at near-zero marginal cost, we use it as the primary verification means for onboarding. We do not hide that this stands in tension with the long-term vision of an 'infrastructure independent of the state' (3.4). We name it not a contradiction but a **bootstrap** — even a layer that seeks to go beyond the state begins, at first, on the rails the state has laid. Two principles apply, however. First, the system receives only the result of verification ("this is a person, and one person") and does not store the identity information itself (the selective-disclosure principle of 4.2.3). Second, this approach must be redesigned for each country: transplanting it to another society is premised not on replication but on reinvention fitted to that society's identity infrastructure.

---

### 6.5 Data Bank & Storage Design

#### 6.5.1 The Personal Data Bank Concept

The data bank is like a **"bank account"** for the data each personhood owns.

* Through the Idium app, users
  * create their business cards, résumés, and profiles,
  * and "deposit" them in the data bank.

* Deposited data
  * can be used by search, matching, and analysis services,
  * but part of the resulting revenue is re-circulated to the user in the form of tokens, points, and service benefits.

#### 6.5.2 Data Access Control

The data bank follows the following access control model.

* **The user themselves**
  * Read/write/delete permissions.
  * Export, backup, and migration functions.

* **The system/services**
  * Access only within the scope the user has explicitly permitted.
  * Operating under a "data use agreement" that specifies the purpose, scope, and duration of access.

* **Third-party partners**
  * E.g., employers, educational institutions, NGOs.
  * Limited access to specific data items with the user's consent.
  * For example, referencing only "anonymized skill and career information" without name and contact details is also possible.

The basic unit of access control is **Per-Transaction Consent**, not blanket terms of service.

* Viewing and use of data is consented to per transaction, and revenue is distributed per transaction (**Revenue Share**). We do not build a structure where "one consent keeps flowing forever."
* Data is classified in a **category × sensitivity matrix**, separating tradable tiers from protected tiers. Sensitive information (health, biometrics, raw location data, etc.) belongs to the protected tier and is not tradable by default; the opening of trade proceeds gradually along the tiers of the value stack (3.3.1).
* The grant and withdrawal status of consent is recorded in the ConsentRegistry (6.3.1), so the effectiveness of withdrawal is technically guaranteed.

Technically, this is implemented by combining

* encrypted data storage +
* access tokens +
* usage logs (who accessed what, and when).

---

### 6.6 Scalability & Interoperability

#### 6.6.1 Chain-Agnostic Design

This project aims for a **chain-agnostic design**, not fixed to any particular L1/L2 chain.

* In the early stage,
  * considering the developer ecosystem, security, fees, and community,
  * a single primary chain may be selected.

* At the architectural level, however,
  * so that UBI, tokens, DID, and data hashes can be mirrored to other chains,
  * a **modular bridge and synchronization system** is considered.

In the long run, this secures

* the flexibility to **move, replicate, or fork**
  * in response to a given chain's policy changes, fee spikes, or security issues.

#### 6.6.2 Integration with Off-Chain Services

* Standard interfaces such as REST/GraphQL APIs and gRPC are provided
  * to make integration with Web2 services easy.

* Example:
  * A hiring platform calls the anonymous-profile search API of the Idium data bank
    * to find candidates,
    * and requests detailed information only when the candidate consents.

#### 6.6.3 Client Diversity

* Beyond web and mobile apps,
  * lightweight CLIs and command-based clients,
  * plus SDKs for partners (JavaScript/Python/mobile, etc.) are provided
  * so the system can be easily integrated in diverse environments.

---

### 6.7 High-level Implementation Roadmap

Technical implementation follows a staged approach.

1. **v0 – Experimental stage**

   * A simple business-card creation web app + temporary storage
   * Centralized DB, minimal on-chain integration
   * User feedback and UX validation

2. **v1 – Introducing the data bank & DID**

   * Introduction of per-user data bank accounts
   * Transition to a DID-based account structure
   * Beginning to record some metadata on-chain

3. **v2 – Testnet UBI & token experiments**

   * On a separate testnet or a point system,
     * experimenting with UBI distribution logic and contribution-reward logic

   * Token issuance/distribution simulations

4. **v3 – Mainnet integration & formal launch of the cooperative**

   * Actual token issuance
   * Incorporation of the cooperative entity and the start of governance
   * Pilot programs with early partners and communities

5. **v4+ – Global expansion & building the partner ecosystem**

   * Partnerships across countries, languages, and sectors
   * Launch of programs for children, youth, and vulnerable groups
   * Long-term expansion alongside policy, legal, and technical research
## 7. UBI Mechanism

*(UBI Mechanism)*

In the preceding chapters, we explained that this project aims to build **"a currency with basic income built in at the level of the economic system."** Here we set out **how basic income is actually paid out**, and **how it combines with accounts for children and adolescents and with activity-based rewards**.

The core principle can be summarized in a single sentence.

> **"One living person = one unit of basic income"**

That is, basic income is paid regardless of income, assets, occupation, nationality, productivity, or any other condition — it is **income received simply for being a person**.

---

### 7.1 Distribution Structure

*(Distribution Structure)*

#### 7.1.1 Payout Cycle and Rhythm

UBI is designed with **the rhythm of daily life and fiscal stability** in mind. The basic direction is as follows.

* **Payout cycle**

  * First pilot: weekly payouts (the easiest form to understand).
  * Over the long term:
    * Daily payouts (small amounts, aligned with the rhythm of daily life)

* **Policy goals**

  * "A minimal floor that carries a person through a week, or through a day"
  * At the same time, calibrated so that it **does not become so generous that it fully displaces work, learning, and creation**.

The concrete amounts (parameters) will be determined through **modeling and community consensus**, taking into account

* the token supply structure (Chapter 5),
* inflation targets,
* the ecosystem's revenue structure,
  while the current version of this whitepaper focuses on defining them at a **conceptual level**.

#### 7.1.2 Eligibility: "One Living Person = One Unit of Basic Income"

The eligibility rule is very simple.

* **Who receives it**:
  * Under the principle of one person, one personhood,
  * **every person** verified through DID and Sybil-resistance mechanisms.

* **Conditions**:
  * Independent of income, assets, credit score, hours worked, and the like.
  * As a matter of principle, **no formal activity conditions such as "logging in" or "checking in" are attached** either.

* **Method of payment**:
  * Automatic transfer to the wallet/DID account linked to each person.
  * Even if a user does not sign in for an extended period, payouts are designed to **accumulate in the account** up to a certain point.

This principle matters for two reasons.

1. **It grounds dignity not in "whether one contributes" but in "the existence of the person as such."**
2. It draws a clear line between UBI and the **activity-based additional rewards (7.3)** described later,

   * preventing UBI from degenerating into "performance pay."

**The one-person-one-basic-income formula**

* \(B_t\): the basic income payout per person at time t
* \(U_t\): the total UBI payout at time t

Formula:
$$ U_t = B_t \cdot N_t $$

→ This expression makes the principle of "one living person = one unit of basic income" intuitively visible.

#### 7.1.3 Direction of Amount Design (Conceptual Model)

The amount of a single basic income payout \(U_t\) (the UBI unit at time t) can be designed with the following major factors in mind.

* **State of the money supply**:
  * Total issuance, the rate of new issuance, the amount in circulation.

* **Network scale**:
  * The number of active verified persons, activity indices.

* **Ecosystem revenue**:
  * Fees, partner revenue, the state of the public-interest fund.

Conceptually, this can be expressed as

> \(U_t = f(\text{network stage, money supply, revenue structure})\)

and, in practice,

* in the early stages,
  * a relatively generous level of UBI may be provided to spur network growth,

* while in the mature stage,
  * for the sake of token value stability and inflation management,
  * the payout amount and cycle may be **adjusted gradually**.

These adjustment rules are to be **recorded in the protocol as explicitly as possible**,
with the aim of ensuring that UBI cannot be altered arbitrarily or politically.

---

### 7.2 UBI for Minors

*(UBI for Minors)*

The goal of a currency on the Personhood Standard is to "guarantee a minimum of dignity to every person from birth." **Designing UBI for children and adolescents** is therefore a crucial part of this project.

#### 7.2.1 Basic Principles

The direction set out in the Outline can be summarized as follows.

* A minor's basic income is **not spent directly by the minor**; instead it is deposited into
  * a **guardian account**, or
  * a **trust account** designed by the project.

* Upon reaching a certain age (e.g., 18, or the age of majority in each country),
  * **partial or full control** over the deposited assets
  * is transferred to the individual in stages.

#### 7.2.2 Guardian and Trust Structures

Many concrete models are possible, but conceptually they take the following forms.

1. **Guardian-delegation model**

   * Once a child's DID/account is created,
     * the linked guardian account
       * may use a portion of the child's UBI for living expenses, education, and the like.

   * The usage history
     * is "recorded" on the child's account,
     * but protected so that it can be viewed and reviewed only once the child reaches adulthood.

2. **Trust account model**

   * A substantial portion of a child's UBI
     * accumulates automatically in a **staking/savings account subject to restrictions**.

   * Upon reaching majority:
     * withdrawals may be released in installments at a set ratio,
     * and the design may prioritize specific purposes such as education, housing, or starting a business.

The two models will require different combinations depending on country, legal regime, and culture;
in the pilot stage, the most **conservative and safe trust model** available will be applied first,
with gradual adjustments made through community discussion.

#### 7.2.3 Balancing Child Protection and Rights

What matters most in designing UBI for children and adolescents is **the balance between protection and rights**.

* **On the protection side**

  * A minor must not suddenly come into a large sum
    * and thereby be exposed to fraud, addiction, or risky behavior.

  * **Direct spending authority** is therefore restricted,
    * and safeguards ensure the funds are used first for **basic needs** such as education, health, and housing.

* **On the rights side**

  * At the same time, a child must be able,
    * upon reaching adulthood,
    * to verify — and contest — where and how their UBI was used.

  * The design should foster the understanding that basic income is not "money someone managed on my behalf,"
    * but **"an economic right granted to me from birth."**

Through this design, UBI for children becomes not mere cash support but
**"the seed of economic citizenship."**

---

### 7.3 Activity-based Rewards

*(Activity-based Rewards)*

If basic income rests on the principle of being **unconditional and contribution-free**,
activity-based rewards are the **"second layer"** built on top of it.

#### 7.3.1 A Clear Separation from Basic Income

First, a point that must be made explicit:

> **Basic income (UBI) is never conditionally tied to any activity.**
> **Activity-based additional rewards are a separate incentive layer stacked on top of it.**

This distinction matters because,

* if UBI becomes a "carrot" for particular behaviors,
  * it collides with the founding philosophy (income for existence itself),
  * and can easily degenerate into the logic of "excluding those who do not contribute."

* Conversely,

  * activity-based rewards are
    * highly useful for encouraging socially desirable behavior
    * such as **learning, creation, volunteering, and community contribution**.

At the design stage, therefore,

* at the level of UI/UX, documentation, and smart contracts,

  * we aim to **present UBI and rewards through clearly distinct channels**.

#### 7.3.2 Rewards for Activities That Create Social Value

Activity-based rewards can cover activities such as the following.

* **Learning**
  * Completing online/offline educational programs,
  * earning certifications and skills,
  * participating in project-based learning, and more.

* **Volunteering**
  * Serving local communities, children and the elderly, environmental protection, and bridging the digital divide.

* **Creation**
  * Art, music, and writing,
  * open-source software,
  * producing educational content and tutorials.

* **Ecosystem Contribution**
  * Bug reports, feedback, translation, outreach, hosting meetups, mentoring, and more.

These activities accumulate into a **trustworthy record of contribution** through

* on-chain records,
* off-chain attestation (signatures from educational institutions, NGOs, and partners),
* and community verification (reputation systems).

Idium is then distributed from a separate **Reward Pool**

* on a regular schedule or on an event basis,
* according to a structure designed for that purpose.

#### 7.3.3 Cautions in Reward Design

There are also pitfalls to avoid in designing activity-based rewards.

1. **Oversimplified performance metrics**

   * If only crude quantitative metrics are used —
     * "hours attended," "number of assignments submitted" —
     * **perfunctory activity** may proliferate instead of real value.

2. **Reverse discrimination against the vulnerable**

   * So that those who lack time, or who find it hard to participate for reasons of health or circumstance,
     * are not perpetually left behind in rewards,
     * UBI must remain **the core of the basic safety net**.

3. **Inducing excessive competition**

   * If rewards take on an overly competitive structure,
     * they can degenerate into a "points game"
     * rather than "cooperation toward a better ecosystem for everyone."

Activity-based rewards must therefore be

* adjusted continuously —
* **experimentally, transparently, and with community feedback**.

---

### 7.4 Summary: Four Keywords of UBI Design

In sum, this project's basic income design can be captured in four keywords.

1. **Unconditional**
   * Grounded in the existence of the person as such, with no contribution conditions attached.

2. **Person-based**
   * "One living person = one unit of basic income."

3. **Children-first**
   * UBI for children and adolescents accumulates safely through guardian and trust structures,
   * and becomes **the starting point of economic rights** upon adulthood.

4. **Layered Incentives**
   * On top of basic income, a separate **activity-based reward layer** is stacked
   * for learning, volunteering, creation, and ecosystem contribution.

Along these four axes, we seek to realize a two-tier UBI: **"a floor that guarantees the dignity of existence, plus an incentive structure that expands social value."**
## 8. Governance & Cooperative Structure

*(Governance & Cooperative)*

From the very beginning, this project starts from the premise that **"we choose a cooperative as our legal entity."**
This is not merely a choice of organizational form; it is a philosophical choice that runs through

* the ownership structure,
* the decision-making process,
* the distribution of revenue,
* and the fundraising strategy

as a whole.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/images/coop-revenue-flow.jpg" alt="Cooperative revenue distribution flow" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  <figcaption style="margin-top: 0.75rem; font-size: 0.9rem; color: #6b7280;">Distribution of cooperative revenue: operating costs, development costs, member dividends, and reward-pool replenishment</figcaption>
</figure>

This chapter explains how the **off-chain governance** centered on the cooperative
interlocks with the **on-chain governance** based on tokens and smart contracts.

---

### 8.1 Cooperative Legal Entity

*(Cooperative Legal Entity)*

#### 8.1.1 Why a Cooperative

The goal of this project is not "a successful startup exit," but
**"long-term infrastructure for children and future generations."**

For this goal,

* rather than a traditional corporate structure in which equity and voting rights
  are concentrated in particular founders, VCs, or major shareholders,
* a cooperative built on the basic principle of **one person, one vote** is a better fit.

The advantages of choosing a cooperative are as follows.

* **Alignment of ownership and use**
  * The people who use the service (users, partners, contributors)
    become the project's owners and its decision-makers.

* **Public purpose and long-term orientation**

  * Rather than short-term share prices or valuations,
    * the structure makes it easier to stay focused on long-term goals
      such as UBI, programs for children and vulnerable groups, and data sovereignty.

* **Participation by diverse stakeholders**

  * Users, developers, partner institutions, investors, and others
    * can each participate as members in different forms
    * and reconcile their perspectives with one another.

#### 8.1.2 Member Types and Eligibility

The cooperative may establish one or several classes of members as needed. For example:

1. **User Members**

   * Individual users who use the Idium service
   * and have completed DID/personhood registration.
   * Membership is granted upon meeting certain criteria (e.g., minimum activity, a small capital contribution).

2. **Contributor Members**

   * Developers, designers, translators, community organizers, and others
     who contribute continuously to building the ecosystem.
   * Depending on their contribution, part of the capital contribution may be substituted with tokens or labor.

3. **Partner Members**

   * Educational institutions, NGOs, social enterprises, local community organizations, and the like.
   * They enter into a formal partnership with the project
     * and jointly carry out children's programs, education, and on-the-ground initiatives.

4. **Financial / Impact Members**

   * Impact investors, social finance institutions, and the like.
   * They provide financial support through capital contributions, loans, and other means,
   * while participating only within limits that do not infringe on the one-person, one-vote principle.

Each member type may differ in

* minimum and maximum capital contributions,
* the scope of voting rights,
* and the form of participation in dividends and revenue,

but for **agenda items tied to the core mission** — the core protocol, UBI, children's programs, and so on —
the design ensures, as far as possible, that **equal, person-by-person voices are reflected**.

#### 8.1.3 Capital Contributions and Liability

* Each member can join the cooperative through a **small capital contribution**.
* Contributions are used for
  * initial operating costs,
  * legal, security, and infrastructure expenses,
  * and seed capital for the public-interest fund.

* The cooperative's legal liability (debts, risks) is
  * designed as limited liability in accordance with the cooperative law and bylaws of the relevant country.

The key point is that
**"anyone can become an owner of the project through a small contribution and participation, without excessive financial burden."**

---

### 8.2 Decision-making Structure

*(Decision-making Structure)*

#### 8.2.1 One Person, One Vote vs. Token-Based: A Dual Structure

This project **refuses to fall for the romance of complete decentralization.** A structure in which everyone decides everything sounds beautiful, but in practice it tends to end in decision paralysis or capture by a few. This governance therefore combines **two axes**.

1. **Cooperative general assembly / member resolutions (one person, one vote)**
2. **On-chain token governance (token/contribution-weighted voting)**

The two axes are responsible for decisions of different kinds.

* **Cooperative general assembly (off-chain, one person, one vote)**
  * Changes to the project's mission and vision
  * Amendments to the core token-economy rules (the UBI structure, issuance rules)
  * The direction of the public-interest fund (children, vulnerable groups, the environment, etc.)
  * Amendments to the cooperative's articles, mergers, dissolution, and the like
    → Responsible for matters that touch "the soul of the project."

* **Token governance (on-chain, weighted voting)**
  * Parameter adjustments (fee rates, reward-distribution ratios, etc.)
  * Concrete development roadmaps and priority-setting
  * Reward policies, and the launch or rollback of experimental features
    → Responsible for operations, experiments, and detailed policies — areas that require **more flexible and frequent change**.

In this way,

* the **one-person, one-vote democracy** befitting the philosophy of the Personhood Standard
* can coexist with the realism of granting **somewhat greater influence**
  to participants who actually contribute more and bear more risk.

#### 8.2.2 Committees and Working Groups

As the organization grows, not every agenda item can go to a full member vote.
The following **committee/working-group** structures may therefore be established.

* **UBI & Token Economy Committee**

  * Conducts economic modeling and simulations
  * Proposes adjustments to issuance volumes and UBI levels

* **Children & Public-Interest Programs Committee**

  * Plans and operates programs for children, youth, and vulnerable groups
  * Reviews cooperation with NGOs and educational institutions

* **Technology & Security Committee**

  * Protocol upgrades, security reviews, incident response

* **Community & Partnerships Committee**

  * Meetups, education, partner onboarding, communications, and the like.

These committees are

* formed through member votes,
* or composed of people who meet certain conditions (contribution, reputation, staking, etc.),
* and the design requires that important decisions always pass through **approval by the full membership**.

#### 8.2.3 An AI Review Body — the 'Philosopher Council' (Long-Term Concept)

As a long-term governance concept, we are considering a **review body composed of multiple AI models** (provisionally, the 'Philosopher Council'), separate from the human general assembly and committees. The human assembly, elected committees, and the AI review body would check and balance one another. The core design principles are as follows.

1. **Elected AI.** What gets elected as a council member is not a 'model name' but an **entire fixed configuration** — the model version (pinned by hash), a published system prompt, an operating entity, and publicly disclosed reasoning logs. This bundle is elected by member vote, serves a term, and is subject to recall (impeachment) procedures. Changing the configuration mid-term is prohibited. Because the same model becomes an entirely different judge depending on its version and instructions, unless the object of election is fixed as the entire configuration, the legitimacy of being 'elected' remains a mere formality.

2. **Plurality.** The council is composed of multiple models from different developers, blocking dependence on — and capture by — any single vendor.

3. **Limits on authority.** The Philosopher Council holds neither the power of initiative nor a final veto. Its authority is limited to two things — (1) **review** of whether a resolution violates the core principles (issuance rules, the unconditionality of UBI, data sovereignty), and (2) **publication of open dissenting opinions** on the results of that review. It is not a governing body; its role is closer to a constitutional court's review of constitutionality and the publication of minority opinions.

4. **The human final say — exercised, not merely held.** The more consistently excellent the AI's recommendations become, the greater the risk that the human power of override, though legally alive, becomes a formality in practice. Judgment is not taken away; it is laid down. To prevent this, the design (1) mandates human-committee re-deliberation of a fixed sample of the Philosopher Council's review results, and (2) subjects the Philosopher Council itself to periodic reconfirmation votes. The principle that humans are the final judges is maintained not as a declaration, but as a procedure whose exercise is compelled.

In this structure, the AI's power is delegated from humans, and the human general assembly can always revoke that delegation.

---

### 8.3 Revenue & Distribution

*(Revenue & Distribution)*

A cooperative is not a nonprofit.
**It earns revenue — but how that revenue is shared** is the essential difference from an ordinary company.

The revenue sources arising in this project are roughly as follows.

* Fees from Idium premium services
* Revenue from data / matching / verification services
* Fees from partnerships and program operations
* Returns on investments and fund management (conservative)
* Other Web3 ecosystem grants, research funding, and the like

This revenue is distributed through the following **multi-basket structure**.

#### 8.3.1 Operating & Development Costs

* Servers, storage, security, payroll, legal, accounting, audit, and so on
* The essential costs of **sustainable service operations**.
* Budgets and expenditure records are
  * reported to members on a regular basis,
  * and deliberated at online or offline general assemblies when necessary.

#### 8.3.2 Member Dividends

* When an annual surplus arises,
  * a portion is returned as **member dividends**.

* The dividend formula
  * need not be a simple contribution ratio;
  * a hybrid model that weighs **contribution of capital + contribution of work + degree of use** is also possible.

* However, so that dividends
  * do not become centered on maximizing short-term profit,
  * the articles may stipulate that **"the share allocated to the public-interest fund and UBI funding must remain above a certain level."**

#### 8.3.3 Public-Interest & Children's Support Fund

* A portion of revenue is
  * set aside in a dedicated public-interest fund for
    **children's and youth programs, support for vulnerable groups, education and research, and local community projects**.

* This fund is
  * deliberated on and disbursed jointly by
  * the cooperative's public-interest committee and
    partner institutions (NGOs, educational institutions, etc.).

* The goal is
  * "to build a structure in which the token does not merely circulate in the digital realm,
    but **reaches real-world children and people directly**."

#### 8.3.4 UBI & Reward Pool Replenishment

This replenishment is not a separate mechanism but the accounting implementation of the **re-circulation principle** established in 5.5.3 — fees do not vanish; they become everyone's basic income.

* A fixed share of revenue is
  * reinvested into the **UBI pool (basic-income funding)** and
  * the **contribution reward pool (rewards)**.

* In this way,
  * over time,
    * dependence on new issuance decreases,
    * and the structure of "revenue from real economic activity → flowing back to people" is strengthened.

---

### 8.4 Fundraising Strategy

*(Fundraising Strategy)*

First, something must be stated honestly. During the closed phase before real-world assets are brought in, fee revenue is denominated in Idium and therefore **cannot cover fiat-currency costs** such as servers and payroll (the operating-funds clause of 3.3.1). Until then, operations depend on the external funding runway below, and this gap itself is registered in the risk chapter (12.5).

While maintaining the cooperative structure,
the project must still raise its initial development, legal, and infrastructure funds.

Here, rather than the **classic crypto funding centered on "security-token sales,"**
we give priority to **more distributed, public-interest-oriented means of raising capital**.

#### 8.4.1 Membership Capital

* The most basic fundraising instrument is
  * **member capital contributions**.

* Advantages:
  * Ownership and governance come together.
  * Only those who share the project's long-term vision participate.

* Disadvantages:
  * The initial capital base may not be large,
  * so it must be combined with other instruments.

#### 8.4.2 Crowdfunding & Donations

* From individuals and organizations who share the project's social values,
  * the cooperative can receive **online crowdfunding, sponsorships, and donations**.

* The rewards offered here —
  * merchandise, service credits, membership eligibility,
  * symbolic Idium airdrops, and the like —
  * must be designed within a **legally and regulatorily safe scope**.

#### 8.4.3 Impact Investment & Social Finance

* Cooperation with
  * **impact investment funds and social finance institutions** — those pursuing social value and financial return together — is also considered.

* In this case,
  * investors may be incorporated as one of the member classes,
  * with voting rights limited so as not to undermine the one-person, one-vote principle.

* It is advisable that investment agreements include
  * a **"Mission Lock"** clause
  * guaranteeing that the project's core mission —
  * children, vulnerable groups, UBI, and so on — will not be compromised.

#### 8.4.4 Web3 Partnerships & Grants (Avoiding Security Status)

* From L1/L2 networks, wallet and infrastructure projects, public-interest DID/ID projects, and other
  * partners across the Web3 ecosystem,
  * the project can receive **grants (cool grants, builder grants, etc.)**.

* What matters here is
  * designing so that Idium grants no investor **security-like rights (dividends, liquidation preference, etc.)**.
  * The token functions strictly as
    * a **utility, reward, and governance instrument**,
    * and must not become a substitute for stocks or bonds.
## 9. Regulation & Compliance

This project touches several sensitive domains at once: **virtual assets, data, identity, and cooperatives**.
A design that respects the **legal and regulatory environment** is therefore just as essential as the technical and economic model.

We do not intend to be a project that merely holds its breath in legal gray zones. Instead, we aim for

* **a structure that can engage in dialogue with regulators**,
* **a structure that protects users' rights in legal terms as well**,
* **a structure that respects national and regional differences while maintaining a consistent philosophy**.

Rather than citing specific national statutes, this chapter sets out the **principles and direction** the project intends to follow.

---

### 9.1 Virtual Assets & Securities Considerations

*(Token Classification)*

Idium is an asset with the following characteristics.

* **In-network utility** — basic income, rewards, governance, and more
* A means of payment for the data bank and services
* A token linked to certain governance rights

The key point is **managing the risk of being classified as a "security token."** Rather than vaguely saying we will "minimize" that risk, we state an item-by-item self-assessment against the relevant tests (the U.S. Howey test and Korea's token-securities guidelines).

| Test element | Where Idium stands |
|---|---|
| Investment of money | Token-sale fundraising (ICOs and the like) is not the primary route. Capital formation is separated into cooperative member contributions, grants, and impact investment (8.4) |
| Investment in a common enterprise | Cooperative equity (member contributions) and the token are legally separate. Holding the token carries no cooperative equity, dividend, or liquidation claim |
| Expectation of profits from the efforts of others | UBI is not "profit" but an issuance structure — it is paid per person, regardless of holdings, and the expected return on large holdings is in fact structurally suppressed by asymmetric carry (5.5.2). The project offers no price forecasts whatsoever (5.5.1) |
| Initial form | It begins as a point system with no trading function, expanding in stages through dialogue with regulators (Phase gates — Chapter 11) |

#### 9.1.1 Design Goals

* The token is designed so that it does not directly substitute for
  traditional securities rights such as **dividends or claims on residual assets in liquidation**.

* Token holdings alone must not confer
  * corporate equity, or
  * board-level control.
  * The fundamental decisions of the legal entity (the cooperative) are made through the **membership structure**.

* **Large-scale fundraising through token sales (ICOs and the like)** is not a primary objective;
  * member contributions, impact investment, grants, and other
  * **legally well-defined routes** are used first.

#### 9.1.2 Monitoring the Regulatory Environment

Because each country and region differs in

* how it defines virtual assets,
* how it tests for securities and investment contracts, and
* how it regulates exchange listings,

the project commits to the following.

* In key jurisdictions (e.g., Korea, the EU, and select Web3-forward countries),
  * work closely with lawyers and legal experts.

* When designing the token's functions, issuance mechanics, and sale structure,
  * regularly review the **securities tests** of each relevant jurisdiction.

* Where necessary,
  * restrict token circulation and sales in specific regions, and
  * adopt a local operating model of **"services only, token not offered."**

---

### 9.2 KYC & Anti-Money Laundering

The Personhood Standard system aims at "one person, one personhood,"
but that does not mean binding every user worldwide to **heavy KYC**.

#### 9.2.1 Risk-based Approach

* **Small-value, everyday use**
  * Receiving basic income, managing a profile, and the like
  * For these low-risk areas,
    * participation is designed to require only minimal DID/Sybil verification.

* **Large transactions and fiat on/off-ramps**
  * For areas connected to centralized exchanges (CEXs) or
  * fiat deposits and withdrawals,
    * the KYC/AML rules of the relevant operator apply.

* **Cooperative member contributions and receipt of certain public-interest funds**
  * Where required, under each country's laws,
    * additional steps such as real-name and address verification may apply.

The core principle is
**not "force strong KYC on every action," but
"apply a reasonable level of KYC only at the points where risk is high."**

#### 9.2.2 AML / Counter-Terrorist Financing

* To ensure the service and the token are not used for
  * money laundering, tax evasion, or the concealment of criminal proceeds,
    * we review AML processes in line with industry standards, including
    * **transaction monitoring, anomaly detection, and cooperation with regulators**.

* In particular,
  * to prevent funds related to children and vulnerable groups
    * from being exploited by political or criminal organizations,
    * we take special care in selecting partner institutions and tracing fund flows.

---

### 9.3 Data Protection & Privacy

This project handles **personal personhood data**.
A design that respects each country's **data-protection regimes (GDPR, Korea's Personal Information Protection Act, and others)** is therefore essential.

#### 9.3.1 Data Minimization and Purpose Limitation

* Collect only the information strictly necessary to provide the service.
* At the time of collection,
  * clearly inform users of the purpose, retention period,
  * and whether data is shared with third parties.

* Even for the same data,
  * **only hashes/indicators go on-chain**,
  * while details are **stored off-chain, encrypted** — as a matter of principle.

#### 9.3.2 Guaranteeing User Rights

Users hold the following rights.

* **Right of access**:
  * Users can see in what form their data is stored.

* **Right to rectification and erasure**:
  * Users can request correction or deletion of erroneous or unnecessary information.
  * Since on-chain data is hard to erase completely,
    * we establish a policy of de-identification and invalidation (so the data is no longer referenced).

* **Data Portability**:
  * Users can move their profile and history data
    * to other services, or
    * back it up to personal storage, via an export function.

#### 9.3.3 Delegated Exercise of the Data Portability Right — Positioned as a 'Tool,' Not a 'Collector'

At the MVP stage, access to MyData (Korea's data-portability regime) is not license-based direct receipt of data but a model in which the service **exercises the user's data portability right on their behalf**. The legal recipient of the data is always the user, and the data's destination is the user's device, not the company's servers (the client-first architecture of 6.2.2).

This combination achieves two things at once.

1. The service positions itself not as a 'business that collects and holds personal data' but as **a tool that helps users exercise their own rights** — a position that lowers both regulatory burden and the breach risk that comes with data concentration (becoming a honeypot).
2. The philosophy of data sovereignty (4.2) is realized not as a declaration but **at the level of legal structure**.

That said, in the financial sector, even a delegated model may fall under separate regulation such as Korea's licensed personal-credit-information management business (MyData licensing). We therefore start with non-financial and public-sector data and expand in stages after legal review.

---

### 9.4 Jurisdiction & Launch Strategy

Launching in every country at once, in identical form, is not realistic.
We therefore take a phased, region-by-region strategy.

**First testbed: Korea.** This project's starting point is not a simultaneous global launch but Korean society. Korea is a society where compressed growth, extreme educational competition, the world's lowest birth rate, fast digital infrastructure, and a **public mobile ID infrastructure** that lets people prove who they are without surrendering biometric data (the applied-tier implementation of the Sybil resistance stack in 6.4.2) all overlap at once. Paradoxically, it may be the most sensitive testbed for trying out — at small scale — the value of human existence, data sovereignty, basic income, and participant ownership. The Korean implementation's public-facing service name is **IDmine**, and the model validated there is transplanted elsewhere not by copying but by reinvention fitted to each society's institutions and infrastructure (the same argument as Chapter 9, Section 04 of the monograph).

**The lesson Worldcoin left behind.** Even projects that start from the same problem — proving humanness in the AI era — end up in different places depending on their design. Worldcoin, the iris-based identity project, had its operations suspended in Kenya (2023), received temporary suspension orders from supervisory authorities in Spain and Portugal (2024), and was fined KRW 1.104 billion by Korea's Personal Information Protection Commission (2024). This is precisely why the Personhood Standard rules out centralized collection of biometric data from the outset, and takes data minimization, self-control, decentralization, and institutional oversight as preconditions. This project survives only as one that **grows with regulation**, not one that grows by evading it.

* Phase 1:
  * Pilot in a small number of regions where regulation is relatively clear and
  * Web3, cooperative, and social-finance infrastructure is well established — for the reasons above, Korea comes first.

* Phase 2:
  * Expand to countries with education and NGO partners and
  * strong demand for child and youth programs.

* Phase 3:
  * Building on the experience of dialogue with regulators,
  * expand into more complex environments (large markets).

Throughout, we hold to the stance that
**legal and regulatory risk is not "something to evade" but "a counterpart to be embraced as part of the design."**

---
## 10. Use Cases & Scenarios

*(Use Cases & Scenarios)*

In this chapter we set the abstract architecture aside for a moment
and show, in scenario form, **how this system might actually be used** by real people and organizations.

---

### 10.1 Individual User Scenario: "Junho, a 25-Year-Old Freelancer"

* Name: Junho (25, freelance designer)
* Situation: Two to three years into his career, but his projects are scattered, making it hard to keep track of his work history.

**1) Creating a Digital Business Card and Resume**

* Junho signs up for Idium and
  * enters his basic profile, contact information, and portfolio links.

* Based on what he enters, the service creates
  * a digital business card and
  * an auto-generated resume draft.

**2) Data Bank Deposit & DID Issuance**

* The business card and resume data
  * are deposited in Junho's data bank.

* At the same time, a DID is linked,
  * registering the personhood "Junho" on the network.

**3) Receiving Basic Income**

* Once his DID is verified,
  * Junho receives a fixed amount of Idium each month as UBI.

* The amount is not large yet,
  * but it is enough to offset part of his basic digital service costs.

**4) Project Participation & Additional Rewards**

* Drawing on his design skills, Junho
  * creates visual materials for the whitepaper or
  * produces educational tutorials, joining the contributor program.

* These activities
  * are recorded along with a contribution score,
  * and he receives Idium rewards on a periodic basis.

---

### 10.2 Job Seeker / Career Changer Scenario: "Mina, 32, Returning After a Career Break"

* Name: Mina (32, on a career break after raising a child)
* Situation: Previously worked five years at a marketing firm; now weighing a return to work or a career change.

**1) Rebuilding Her Work History**

* Mina enters her past experience, projects, and skill set into Idium.
* Through AI analysis, the system
  * suggests "skill combinations that could be advantageous in the current market" and
  * recommends the training courses she would need.

**2) Learning & Rewards**

* Mina enrolls in the recommended online training programs.
* Upon completion,
  * the record is added to her data bank,
  * and she receives a small amount of Idium as a learning reward.

**3) Matching & Referral**

* Through integrations with partner recruitment platforms, the project
  * matches Mina's anonymized profile with companies that need her skills.

* When Mina chooses to apply or respond,
  * her identifying information is shared in stages.

Throughout this process,
**ownership of the data remains with Mina,
and the value that data generates (matching, recommendations, and so on)
returns to her in part as tokens and service benefits.**

---

### 10.3 NGO / Educational Institution Scenario

* Suppose a regional education NGO
  * runs a digital literacy program for low-income youth.

**1) Supporting DID & Account Issuance**

* The NGO
  * helps the young participants onboard to Idium and
  * assists each of them in opening a DID and data bank account.

**2) Recording Educational Activity & Rewards**

* Program completion, assignment submissions, project participation —
  * every activity accumulates in the data bank as a "learning record."

* The participants receive,
  * beyond their base UBI,
  * additional Idium as learning rewards.

**3) A Role as a Long-Term Asset**

* This data
  * can later serve as supporting evidence
  * for **personal statements and portfolios** in job applications, school admissions, and scholarship applications.

* The NGO
  * can analyze the program's effectiveness
  * using anonymized data
  * and report the results to sponsors and government agencies.

---

### 10.4 Children, Youth & Guardian Scenario

* When a child is born,
  * a guardian or a public institution/NGO
    * opens the child's DID and basic account on their behalf.

**1) An "Economic Account" That Opens at Birth**

* In the child's account,
  * a small amount of UBI accumulates each month.

* These assets
  * can be used by the guardian, within defined limits,
    * for education, health, and basic living expenses.

**2) On Reaching Adulthood**

* When the child comes of age,
  * direct control over some or all
  * of the accumulated assets transfers to them.

* This provides
  * "the experience of starting out with at least a minimal economic cushion (a buffer),
    rather than being thrown into society with nothing."

---

### 10.5 Long-Term Macro Scenario

Suppose that, in time,

* tens of millions — hundreds of millions — of persons
  * join the Personhood Standard network. What would happen?

1. **A Data-Based Global UBI Layer**

   * Regardless of nationality or occupation,
   * a "base layer" emerges in which a minimal basic income
   * is paid out on top of a shared digital infrastructure.

2. **Established Data Sovereignty**

   * Personal data is no longer the monopolized asset of platforms,
   * but is managed as the asset of individuals, communities, and cooperatives.

3. **Child-Centered Welfare & Education Innovation**

   * Building on the accumulated assets in children's and youths' accounts,
   * more stable models of education, care, and startup support can be tested.

This scenario is not mere fantasy;
it is **the natural consequence of each mechanism proposed in this whitepaper
operating "long enough, and broadly enough."**

---

## 11. Roadmap

*(Roadmap)*

A roadmap is a promise of "what we will do by when,"
and at the same time a declaration that "we will not try to do everything at once."

The project's roadmap consists of roughly the following phases.

**The strategic meaning of the roadmap — a prepared alternative.** This roadmap carries a strategy that goes beyond a list of phases. Just as Bitcoin was chosen because it existed as a 'ready-made answer to the existing system' in the immediate aftermath of the 2008 financial crisis, basic income will suddenly become an urgent agenda the moment AI brings the legitimacy crisis of labor income to a head. What will be decisive at that moment is not whether a good idea exists, but whether there exists a **distribution infrastructure that is already operating — built on verified identity, insulated from political swings**. The purpose of Phases 0–2, therefore, is not rapid growth but carrying this option, alive, to that moment. Light enough to survive on its own revenue until the crisis; solid enough to scale immediately when it comes.

**Gates, not stages.** From v1.0 onward, each Phase is defined not as a timetable but as a gate — what must be verified before moving on. If a gate is not passed, we do not proceed to the next phase; that is not failure but how this roadmap is designed to work.

**Current position (as of v1.0 publication).** Phase 0 in progress — whitepaper v1.0, the completed manuscript of the book *Personhood Capitalism*, the economic simulation baseline (Appendix A), and a prototype for a Korean hackathon (Flutter, 22 screens) are done. Meeting the Phase 1 entry gate (below) is the next task.

---

### 11.1 Phase 0 – Exploration & Experimentation

**Goal:** Define the problem, establish the philosophy, and run small-scale MVP experiments

* On the Personhood Standard, the Data-Backed Standard, and the UBI structure:
  * conceptual groundwork and the first draft of the whitepaper (v0.1)

* Develop an **identity-based MVP** (reflecting the v0.3 redefinition in 6.2)
  * Sign-up via Korea's public mobile ID (one person, one account) + periodic point payouts
  * MyData (Korea's data-portability regime) connection, viewing, and management + daily/premium insights (the first use case)
  * Settled in advance: legal review of the delegated exercise of the data portability right and the client-side receipt structure; unit economics reflecting authentication and API costs

* With a small group of early users (acquaintances, communities),
  * collect UX feedback

* Build a network of technical, legal, and economic advisors

> **Gate for entering Phase 1:** The MonoID MVP works with real users (mobile-ID onboarding + periodic point payouts), and the legal review of the delegated data portability right and the unit-economics validation are complete.

---

### 11.2 Phase 1 – Data Bank & DID-Based Services

**Goal:** Build the personal data bank and the DID-based account structure

* Implement the 'verified data' assetization feature, in which resumes and career credentials
  * are auto-generated and attested from connected public data (the evolved form of the manually entered business card and resume)

* Introduce the basic DID structure
  * Link each user's individual account to a DID

* Provide, at a minimum level,
  * privacy settings and data viewing/deletion features

* With a handful of partners (education, recruitment, community services),
  * run initial integration PoCs

> **Gate for entering Phase 2:** The data bank alpha supports the deposit and retrieval of 'verified data,' and repeat usage is observed in the first paid use case (insights).

---

### 11.3 Phase 2 – Testnet UBI & Token Experiments

**Goal:** Validate the UBI mechanism on a testnet/points basis, not with real currency

* Using points or testnet tokens,
  * experiment with the UBI payout logic

* Also test activity-based reward scenarios (learning, contribution, volunteering, etc.)

* On inflation and the distribution structure,
  * run simulations and data analysis

* Based on community feedback,
  * refine the token design and the UBI model

> **Gate for entering Phase 3:** Testnet measurements fall within an explainable range of the simulation baseline (Appendix A), and the initial values of key parameters — the re-circulation rate, the damper band, and others — are fixed from live measurements (5.5.3-③).

---

### 11.4 Phase 3 – Cooperative Formation & Mainnet Launch

**Goal:** Establish the cooperative as a legal entity, alongside actual token issuance and the initial mainnet launch

* Establish the cooperative
  * Finalize the bylaws, member structure, and decision-making rules

* Issue Idium and
  * execute the genesis distribution structure

* With a restricted user group,
  * run a live UBI payout pilot

* Operate the governance and reward systems
  * on-chain and off-chain in parallel

> **Gate for entering Phase 4:** The cooperative legal entity is established and the dual governance structure (8.2) is handling real agenda items, and in the restricted-group pilot, UBI payouts and re-circulation run incident-free for at least one full cycle.

---

### 11.5 Phase 4 – Partner Ecosystem & Public-Interest Program Expansion

**Goal:** Scale up public-interest programs centered on children, youth, and vulnerable groups

* Expand partnerships with educational institutions, NGOs, and local communities
* Launch the onboarding program for children's and youth accounts
* In youth education, scholarship, and mentoring programs,
  * run pilot projects that incorporate UBI and rewards

* Using the data,
  * support research on education and welfare policy proposals

> **Gate for entering Phase 5:** In the Korean testbed, the full cycle (issuance → use → re-circulation), including children's accounts and the public-interest programs, is verified, and at least one partner institution sustains its program on its own budget.

---

### 11.6 Phase 5 – Global Expansion & Institutional Connection

**Goal:** Expand into diverse countries and cultures, and explore connections with institutions and policy

* Expand sequentially, starting with countries whose regulatory environments permit it
* Partner with cooperatives, social finance, and public-interest organizations in each country
* Over the long term,
  * explore the possibility of concluding
  * "policy experiment partnerships" with certain national and local governments
  * (e.g., local UBI pilots in partnership with municipal governments)

---
## 12. Risks & Limitations

However beautiful the vision this project pursues,
we must soberly recognize the risks and limitations of reality.

---

### 12.1 Technical Risks

* **Security vulnerabilities**

  * In the smart contracts, the DID system, and the data bank infrastructure,
    * bugs, hacks, and key leaks can occur.

  * On the premise that perfect integrity is impossible,
    * we reduce risk through multiple audits, bug bounties, and gradual rollouts.

* **Scalability issues**

  * If users and transactions surge,
    * chain fees and throughput can become bottlenecks.

  * To address this,
    * we maintain an architecture that can flexibly adopt
    * a range of scaling solutions — L2s and rollups, cross-chain bridges, off-chain computation, and more.

---

### 12.2 Economic & Token-Design Risks

* **Unexpected inflation or deflation**

  * Contrary to our modeling,
    * money supply and demand may swing sharply.

  * To guard against this,
    * we do not hardcode the parameters,
    * but make them gradually adjustable through governance,
    * with strict procedures to prevent abuse.

* **Risk of speculation**

  * If Idium is listed on exchanges,
    * short-term speculators may flood in.

  * In preparation,
    * we design the UBI and value-distribution structures
    * so that they are not subordinated to short-term price swings.

We additionally register the risks revealed by v1.0's reinforced economic model (5.5) and simulations (Appendix A).

* **Growth dependence of real UBI** — In maturity, the total real UBI = $$ r_k $$ × Y (the honesty clause of 5.5.0). If the growth of network utility stagnates, the real value of balances is preserved, but the real value of the basic-income flow erodes.
* **Balance concentration (Gini ~0.75)** — In simulation, the popularity skew of royalty-type income drove the balance Gini coefficient up to about 0.75, and this persists regardless of the clawback method (Appendix A-5). It is a problem that re-circulation cannot solve; separate distribution levers, such as a diminishing-returns curve on per-view income, are a Phase 2 validation task.
* **Volatility imported via external derivatives and leverage** — The moment the currency connects to external markets, leverage and derivative products can import volatility into the system. The two-way automatic damper (5.5.3-②) is the first line of defense, and its premise is never creating a credible expectation of one-way appreciation.
* **The fiat gap of the closed phase** — Before real-world integration, fee revenue is denominated in Idium and cannot cover fiat operating costs (8.4). If the external funding runway is cut, the project halts regardless of the economic model.
* **Long-run growth of nominal figures** — Because issuance continues in perpetuity, the number of digits in nominal balances and prices grows over the long run. Management of the display unit (including redenomination) may someday be necessary; we state in advance that this is a matter of notation, unrelated to real value.

---

### 12.3 Regulatory & Political Risks

* Regulatory changes in each country
  * may restrict or prohibit token circulation, cooperative operations, or data processing.

* Shifts in the political environment
  * may spread negative perceptions of UBI or of new economic systems.

To mitigate this,

* we avoid excessive dependence on any single country early on,
* and with researchers, NGOs, and civic groups who can take part in legal and policy discussions,

  * we cooperate closely.

---

### 12.4 Social & Cultural Risks

* **Difficulty of building trust**
  * The project may be perceived as "just another coin project."

* **Cultural differences**
  * Perceptions of UBI and data sovereignty
    * may differ greatly by region, generation, and ideology.

The project must

* through transparent disclosure,
* long-term communication,
* and real-world examples (such as the children's and youth programs),

  * build trust gradually.

---

### 12.5 Internal Project Risks

* Staffing shortages, burnout, or financial distress
  * may leave the long-term vision unfinished.

* To reduce this,
  * from the very beginning we consciously design
  * **a structure in which the cooperative and the whole community — not any particular individual —**
  * carry the project forward.

---

## 13. Conclusion & Call to Action

Rather than a "finished answer," this whitepaper is
**a living document that poses a new question (currently v1.0)**.

The question we pose is very simple.

> "Why are we still discussing our children's lives and futures
> inside **an economic system designed around assets**?"

We wish to answer it this way.

* Let the standard of money
  * rest not on gold and the state, but on **people's personhood and data**;

* Let basic income
  * be built in not as a political pledge, but as **a system-level function**;

* Let the fruits of the data economy
  * be shared not with platforms, but with **individuals, communities, and children** — and let us design the structure that makes this so.

This project is

* technically, an experiment in Web3, DID, and data infrastructure;
* economically, an experiment in new UBI/token design;
* and socially, a small starting point on the long journey toward a "child-centered economy."

We wish to walk this journey

* with developers, designers, and researchers,
* with educators, activists, parents, and everyone who loves children.

**The text and the working thing.** The monetary and cooperative experiments that survived history always had two things together: a **central text** around which the community gathered (the Rochdale Principles, the Bitcoin whitepaper), and a **working thing** that ran every day without stopping (the store, the ledger). Movements with only slogans and no working thing scattered; services with only a working thing and no text lost their philosophy. In this project, those two seats are deliberately kept separate. The book *Personhood Capitalism* is the text of the question — asking why this experiment is necessary; the campfire around which scattered people find one another — while this whitepaper and the Idium service are the working thing that tests that question in reality. The book is not the project's promotional material, and the project is not the book's appendix. The text survives even if the experiment fails, and the experiment holds the right to prove the text wrong.

If, having read this whitepaper,

* your heart is moved by **the work of changing the world our children will live in**,
* then even a small share of capital, a small contribution, a small proposal is welcome —
  we ask you to join this project.

> In the end, what we want to build is
> **"an economic system that runs on people as its standard,
> in which every child can live with dignity."**

This whitepaper is only its first blueprint.
Its completion will happen in the hands of those who join.


## 14. FAQ (Frequently Asked Questions)

---

### Q1. Is basic income inevitable in the age of AI and robots? How does the transition happen?

**Q:** Basic income may become an unavoidable current driven by AI and robots. But shouldn't it be a way of sharing newly created wealth (e.g., an AI tax) rather than redistributing existing wealth, so the transition can happen without social instability? How can the timing of such a transition and cooperation among countries be brought about?

**A:**
This is precisely why the project is grounded not in the direct redistribution of existing wealth, but in **new areas of value creation (the data economy, digital personhood)**. Touching existing assets and vested interests directly provokes fierce resistance, but designing the rules of the newly forming digital economy differently from the start is comparatively feasible.

The question of cooperation among countries is also why this project aims from the outset at **global infrastructure at the level of the individual, not the nation-state**. Rather than waiting for intergovernmental agreement, we seek to first build a network that individuals join voluntarily, and to let its scale and results pull policy discussion along.

---

### Q2. The role of data — a condition of currency issuance, or an object of trade?

**Q:** It is doubtful that resume/profile data itself will hold much trading value in the AI era. More substantive personal data — genomic, medical, preference data — will be what carries value, so won't the real issue be whether sharing such data becomes a precondition for basic income?

**A:**
The answer to this question splits into two layers.

**A. The role of data in basic income:** Data serves only as **Proof of Personhood** — for preventing duplicate accounts and confirming identity. It does not determine the quantity or quality of basic income issued through the currency. That is, the principle of **"one living person = one unit of basic income"** is independent of what data you provide, or how much.

**B. The role of data in trade:** Separately from currency issuance, in the realm of 'trade,' when data is provided as 'consideration' for currency in circulation, the price-setting mechanism of the market economy applies. The quantity and quality of data affect the quantity and quality of the reward.

**A and B are complementary**, faithfully inheriting the mechanism of reformed capitalism. **A ensures that every human can preserve a minimum of dignity; B allows competition to be induced.** Whether to open up additional personal data is entirely the individual's choice, and is not a condition of basic income.

That said, an individual service built on top of the protocol may set 'keeping one's own data account open' as a requirement of participating in that service, to secure the minimum data circulation the early experimental economy needs to run. This does not conflict with the unconditionality principle at the protocol layer — the requirement is merely a threshold of the individual service, and in no case does contributing more data increase one's basic income.

---

### Q3. The problem of data, track records, and reputation becoming a new class

**Q:** If data, track records, and reputation themselves carry value, they can become a class of their own, and various attempts at manipulation may arise. In particular, how do you view the possibility that ecosystem-contribution activity concentrates in a tiny few?

**A:**
An accurate point. That is why the design principles **clearly separate basic income (UBI) from activity-based additional rewards**:

1. **Basic income for dignity** is given with no questions asked (the unconditionality principle)
2. **Rewards based on data, track records, and reputation** are a separate layer stacked on top

In the age of AI and robots, the very meaning of "contribution" will change greatly, and new forms of uniquely human contribution — and reward designs for them — that we cannot imagine today will be needed. The contribution activities presented in the current whitepaper (development, translation, community, etc.) are examples only, an area to be continually redefined as the times move and the community deliberates.

---

### Q4. Concerns about decision-making paralysis in the DAO/cooperative

**Q:** Decentralization and power distributed to everyone may look romantic, but in reality it is common for decision-making to become impossible or for the quality of decisions to fall. Won't token-weighted models, too, ultimately lead to concentration or dictatorship?

**A:**
A very important concern. This project intends **not to fall for the romance of complete decentralization**. Hence it adopts a **dual structure**:

1. **The cooperative general assembly (one person, one vote):** core decisions that constitute the project's "soul"
2. **Token governance (contribution-weighted):** flexible decisions on operations, experiments, and detailed policy

Woven into this is the question of why modern democracy does not grant greater decision weight to those holding more than a certain stake (or does so only indirectly).

We are also examining the idea of **elite governance checked by a large body of anonymous elites**, and if an age of AI superintelligence arrives, this too may need to be reconsidered. We recognize the limits of the cooperative form and keep open the option of modifying it or hybridizing it with other organizational forms when needed.

---

### Q5. How will you draw in mass participation?

**Q:** To start small in cooperative form and spread worldwide requires a very strong emotional motivation at first — but paradoxically, couldn't that very motivation keep the project local and small?

**A:**
The project's conservative premise is that **visible utility, not sympathy for the vision, is the growth engine**. We design on the assumption that the public is moved not by ideals but by 'commensurate, visible returns.'

The division of roles follows that premise. This whitepaper handles the **What** — a verifiable design of currency, economy, and governance — while the **How** of drawing in the public — screens, utility, participation thresholds, growth mechanisms — belongs to the service-layer document (IDmine). The book *Personhood Capitalism* takes the **Why** — the public narrative and philosophy.

What lies ahead:
- **Short-term, macro:** induce mass participation by delivering Benefit as a service
- **Long-term, micro:** unfold the vision

In this respect, the project arguably holds far more realistic milestones than an ordinary cooperative.

---

### Q6. Speculative demand and currency concentration

**Q:** The main purpose of issuance is reward, but as long as the currency itself trades freely, speculative demand and concentration can arise. Considering human "envy" and relative scarcity, can the purpose of issuance or restrictions alone prevent speculation?

**A:**
We do not claim speculation can be fully prevented. We do, however, aim to mitigate the risk of speculation through the following design:

1. Design so that **the UBI and value-distribution structures are not subordinated to short-term price swings**
2. **Re-circulation of fees and the two-way automatic damper** (5.5.3)
3. **Value formation centered on real-use demand** — so that the exchange price never becomes the whole of the token
4. **Asymmetric carry (5.5.2)** — the structural line of defense. Because new issuance flows only to verified persons, a speculator who merely buys the currency from outside bears the full dilution from issuance while receiving no UBI. The economics of holding are always worse for them than for people who live inside the system. Where Bitcoin's issuance flowed to miners (capital) and fed speculation and concentration, this currency's issuance structure is tilted in the opposite direction.

We also sympathize with the view that a distribution algorithm free of human intervention may be more precise than policy, and this remains a task to keep examining through economic modeling and empirical work.

---

### Q7. The dangers of UBI for children and youth

**Q:** A good idea — but alongside the philosophical debate over who raises the child (the state, the cooperative, the parents), one must avoid the trap of trying so hard to do good that over-tightening produces the opposite result. Attempts to control human self-interest have always failed.

**A:**
We agree with the lesson of history. That is why we make **the balance of protection and rights** a core principle:

- **Protection:** restrict minors' direct spending authority so they are not exposed to fraud and danger
- **Rights:** when a child comes of age, they can review the usage history and raise objections

The key is **"nudge," not "coercion and control."** We steer funds toward basic needs like education, health, and housing first, but without tightening the screws coercively. Different combinations will be needed across states, legal regimes, and cultures; in the pilot phase we apply a **conservative, safe trust model** first and adjust gradually through community deliberation.

---

### Q8. How high can the price of Idium go?

**Q:** If I join early, couldn't the token price rise sharply? Is there a target price?

**A:**
We do not answer this question with a number, for two reasons.

First, offering a price forecast would turn this token into an investment product, which runs against both the project's design philosophy and its regulatory strategy (5.5.1).

Second — the more honest reason — the token's sustainable price is not a promise but a **function**. What ultimately determines the price is the volume of real transactions settled in Idium. The metrics we publish and track are not the exchange quote but the **number of active persons** and the **annual real transaction volume denominated in Idium**; as the value-stack roadmap (data → information → knowledge → the real economy) advances and those metrics grow, the price follows. If they do not grow, no promise can hold the price up.

What we intend to offer early supporters is not the expectation of price appreciation, but places of use and seats in governance available only through this currency. And one thing the structure says on our behalf — because issuance continues along with people, early arrivals do not monopolize the fruits; latecomers keep receiving their share of issuance too. If this currency succeeds, its fruits are divided not by the order of holding but by the fact of participation.

---
## Appendix A. Economic Simulation Baseline

We record here, as an official baseline, the key results of a **ten-year, 10,000-agent closed-economy simulation** conducted in August 2026. This appendix serves as a **pre-registration** for the Phase 2 testnet validation — if the measured results diverge from this baseline, the divergence itself becomes verification data.

**Setup.** 10,000 agents, weekly epochs over ten years. A closed economy in which one unit is issued per person per epoch, with assigned propensities to spend on internal services (viewing, storage, matching) and distributions of sales (royalty-type income). Prices and demand are held fixed.

**Results.**

1. **With no recovery mechanism** — per-capita money supply accumulates without bound, and the ratio of weekly spending to median balance collapses to 0.8% (the "sense of spending" vanishes). This is quantitative proof that a design without recovery does not hold together.
2. **Transaction-tax burning alone** — fails twice over. The equilibrium burn rate is a knife-edge balance dependent on activity levels: a 20% drop in activity sends the supply diverging again, and even at equilibrium only spenders (the median user) are taxed while the accumulation of popular sellers goes untaxed.
3. **Balance-proportional recovery (demurrage-equivalent)** — is the only self-stabilizing option. Per-capita supply converges exactly to m/δ, and the sense of spending is preserved permanently. The adopted design implements the equivalent **through an inflation tax** rather than explicit demurrage (the progressivity identity of 5.5.2).
4. **Numerical identity of burning ≡ re-circulation** — burning fees and then issuing the shortfall, versus re-circulating fees and issuing only the remainder, produce identical values on every metric in the simulation. This grounds 5.5.3-① (unifying the terminology under re-circulation).
5. **Unresolved metric** — the popularity skew of royalty-type income drives the balance Gini coefficient up to roughly 0.75, and this persists regardless of the recovery mechanism. It is registered as a risk in 12.2, and candidate distribution levers, such as a diminishing per-view revenue curve, are a Phase 2 validation task.

**Limitations of the model.** Prices and demand are assumed fixed, and behavioral responses (demurrage avoidance, changes in velocity of circulation) are not modeled. The results are directional guidance only; final parameters are set through the procedure in 5.5.3-③.

---

## Appendix B. Rejected Issuance Functions

Alongside the canonical issuance formula, v0.1 also carried the following ratio-linked example function.

$$ I_t = \left(a + b \cdot \frac{N_t}{N_{t-1}}\right) \cdot \frac{M_{t-1}}{1 + k t} $$

v1.0 does not adopt this function and retains it only for the record. There are two grounds for rejection.

1. **Arbitrariness of parameters** — the three free parameters a, b, and k have no independent justification for their individual values, and serve only to widen the surface for governance manipulation.
2. **Loss of the direct link between the number of persons and issuance** — a structure that multiplies the existing money supply (M) by a ratio breaks the core property of the Personhood Standard: that issuance is proportional to the number of people, and nothing else. Since the progressivity identity (5.5.2) and asymmetric carry both follow from that property, a design that loses it is not a simplification but a corruption of the foundation.

The canonical formula is the single expression $$ \Delta S_k = (m + c + g) \cdot U_k $$ of 5.2.2, and the issuance formula contains nothing but the number of people.

---

## References

*(Cross-aligned with the references of the monograph *Personhood Capitalism*. For overlapping entries, the bibliographic notation is identical across the two documents.)*

* Richard Cantillon, *Essai sur la Nature du Commerce en Général* (1755). — The original source of the 'Cantillon effect': the path by which new money enters determines distribution.
* Satoshi Nakamoto, "Bitcoin: A Peer-to-Peer Electronic Cash System" (2008). — Proof of money without a central bank. A case of high early issuance coexisting with demand growth, and a cautionary counterexample of a structure in which issuance accrues to capital (mining).
* Elinor Ostrom, *Governing the Commons* (1990). — The institutional conditions for community self-governance. The basis for the cooperative governance design.
* Thomas Piketty, *Le Capital au XXIe siècle* (2013). — r > g and the concentration of wealth.
* Matthew Rognlie, "Deciphering the Fall and Rise in the Net Capital Share," *Brookings Papers on Economic Activity* (2015). — The leading rebuttal to Piketty.
* Bank of England, "Money creation in the modern economy" (2014). — The official statement of credit-money theory: lending creates deposits.
* Dennis Egger et al., "General Equilibrium Effects of Cash Transfers," *Econometrica* (2022). — The local-economy multiplier of cash transfers in Kenya (roughly 2.5x).
* Eva Vivalt et al., "The Employment Effects of a Guaranteed Income" (OpenResearch/NBER Working Paper, 2024). — A three-year unconditional cash-transfer experiment with 3,000 participants.
* Damon Jones & Ioana Marinescu, "The Labor Market Impacts of Universal and Permanent Cash Transfers" (2022). — Analysis of the employment effects of the Alaska Permanent Fund Dividend (1982–).
* Kela & the Finnish Ministry of Social Affairs and Health, final evaluation of the Finnish basic income experiment (2020). — Improved mental well-being; limited employment effects.
* Worldcoin regulatory cases — suspension of operations in Kenya (2023), temporary suspension orders by the Spanish and Portuguese supervisory authorities (2024), an administrative fine by Korea's Personal Information Protection Commission (2024). — The basis for the principle of excluding centralized biometric collection (6.4.2, 9.4).
* Statistics Korea, *Household Production Satellite Account (Valuation of Unpaid Domestic Labor)* (2021). — An official estimate of the value of time outside the market.
* The Emagin project, *Personhood Capitalism — What Is Human Worth in the Age of AI?* (Korean monograph). — The original source of this whitepaper's paradigm (Personhood Capitalism) and its entry point for a general audience.

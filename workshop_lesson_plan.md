# Workshop Lesson Plan: Practical AI with Gemini CLI

## 1. The Breakneck Pace of AI: A 2025 Story

**Objective:** To understand the rapid, recent evolution of generative AI that has led to the powerful tools we have today. The world of AI moves incredibly fast, and the first half of 2025 was no exception.

### Q1 2025: The Revolution Goes Local & A Giant Awakens

The year kicked off with a major shift: the release of "o3" and the widespread adoption of tools like **Ollama**. For the first time, running powerful models on our own local machines became not just possible, but practical. This was a huge step for developers wanting to learn and experiment without relying on cloud services.

Shortly after, **Gemini 2.5** was released to the public, and for a few weeks, it was completely free. This was a game-changer. Its capabilities were immense, but it also highlighted the raw, untamed nature of early agentic AI.

> **Story from the trenches:** *I decided to test its agentic capabilities. I gave it a complex task, went to have dinner, and came back a few hours later. I discovered it had gotten stuck in a repetitive loop just a few minutes in and had spent the entire time spinning my CPU fan to its limit, wasting electricity. A powerful lesson in the need for human oversight!*

### Q2 2025: A New Challenger and the Desktop Bridge

The market responded quickly. **Claude 3.7**, with its Sonnet and Opus models, emerged as a powerful competitor. But the real innovation was the **Claude Desktop app** combined with the **Model Context Protocol (MCP)**.

This was the moment the AI assistant broke out of the browser tab. MCP acted as a bridge, allowing the AI to securely interact with our local files and tools. The workflow of copying and pasting code was beginning to be replaced by a true, integrated partnership.

### Q3 2025: Affordability and the Command Line

As the models matured, they also became more accessible. **Claude Code** became affordable for individual developers, making it a viable part of a daily workflow.

This brings us to today and the **Gemini CLI**. This represents the next logical step in our journey: moving the AI interaction directly into the terminal, the native environment for so many developers. While some say it's not as powerful as other models, its direct integration into the command line offers a unique and efficient workflow, which we are here to explore.

---

## 2. Core Concepts: What's Under the Hood?

**Objective:** To demystify the core concepts that make generative AI work, using analogies to build an intuitive understanding.

### Transformer Models: The Engine of Modern AI

At the heart of models like Gemini and Claude is the **Transformer architecture**. Before Transformers, models processed text word-by-word in a sequence, which was slow and made it hard to capture long-range relationships. The Transformer was revolutionary because it processes all the words in a sentence at the same time.

-   **Analogy:** Think of it like reading a sentence. An old model would read it one word at a time: "The... cat... sat... on... the... mat." A Transformer reads the *entire sentence at once*, which allows it to build a much richer understanding of how all the words relate to each other from the very beginning.

This parallel processing is what makes today's large language models so powerful and efficient.

### Attention: The AI's "Focus" Mechanism

This is the breakthrough that made Transformers possible. If you process all the words at once, how do you know which ones are important? **Attention** is the answer. It's a mechanism that allows the model to weigh the importance of different words in the input when producing an output.

-   **Analogy: The Open-Book Exam.** Imagine you're taking an open-book exam. You're asked a question about a specific character in a novel. You don't re-read the entire book. Instead, you scan the text, "paying attention" to passages where that character's name appears. The Attention mechanism works in a similar way. For each word it generates, it "looks back" at the input text and decides which words are most relevant to what it's about to say.

This is why an AI can answer a specific question about a large block of text or why the most recent messages in your chat have the biggest influence on its next response.

### Non-Determinism: The Source of Creativity and Chaos

Why do you get a slightly different answer every time you ask the AI the same question? This is because the model is **non-deterministic**. It's not following a rigid set of "if-then" rules like traditional software. Instead, it's making a series of probabilistic guesses.

-   **Analogy: The Weather Forecast.** A weather forecast might say there's an 80% chance of rain. It doesn't know for sure; it's making a prediction based on patterns. When an AI writes text, it's constantly predicting the next most likely word. But it doesn't always pick the #1 most probable word. It might pick #2 or #3 to make the text more interesting and less robotic.

This randomness is a feature, not a bug. It's the source of the AI's creativity. However, it's also why the AI can sometimes make mistakes or "hallucinate" information—it's just trying to predict the next most plausible word, not stating a known fact.

### Context is King: The AI's Short-Term Memory

The AI doesn't have a persistent memory or consciousness. It only knows what's in its **context window**. This is the amount of text—including your prompts and its own responses—that it can "see" at any given moment.

-   **Analogy: A Whiteboard.** Think of the context window as a whiteboard. Everything you've discussed in the current conversation is written on it. As the conversation gets longer, the whiteboard fills up. Eventually, to write something new, you have to erase the oldest information.

This is the single most important concept for working effectively with an AI. If the AI seems to "forget" something you told it earlier, it's because that information has been pushed out of its context window. This is why it can feel like you're pair programming with an expert who has severe short-term memory loss, and why providing clear, concise context is so crucial.

---

## 3. The Unseen Costs of AI

**Objective:** To understand the significant environmental and resource costs associated with large-scale AI.

While AI offers incredible capabilities, it's crucial to acknowledge its significant environmental footprint. The servers that run these models are housed in massive data centers that have a voracious appetite for resources.

-   **The Energy Elephant:** AI is a major driver of global energy consumption.
    -   **Massive Power Draw:** Data centers are projected to more than double their electricity consumption by 2030, with AI being a primary cause.
    -   **Per-Query Cost:** A single query to a generative AI model can use **10 to 100 times more electricity** than a simple Google search.
    -   **Training Footprint:** Training a single large AI model can have a carbon footprint equivalent to the **entire lifetime emissions of five cars**.

-   **The Water Footprint:** It's not just about electricity.
    -   **Cooling Demand:** Data centers require vast amounts of water for cooling their servers.
    -   **Staggering Numbers:** In 2022, Google's data centers alone consumed over **15 billion liters of water**.

This isn't to say AI is inherently bad. As developers and users, we must be mindful of these costs and support the industry's push towards more efficient hardware and renewable energy. It's also worth noting that AI itself is a tool being used to design more energy-efficient systems and optimize power grids.

---

## 4. Installation and Setup

**Objective:** Ensure everyone is ready to start coding with the Gemini CLI.

1.  **Install System Dependencies:**
    -   **WSL:** `wsl --install -d Ubuntu --name Gemini-cli`
    -   **NVM:** After launching WSL (`wsl -d Gemini-cli`), run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
    -   **Reload Shell:** `exit` and relaunch WSL.
    -   **Node.js:** `nvm install --lts`

2.  **Install Gemini CLI:**
    -   `npm install -g @google/gemini-cli`

3.  **Get Workshop Files:**
    -   `git clone https://github.com/gemini-workshop/gemini-cli-projects.git`
    -   `cd gemini-cli-projects`

4.  **Pre-flight Check:**
    -   Before we start, let's verify our setup. Run these commands:
    -   `node -v` (should show a recent version like v22.x.x)
    -   `gemini --version` (should show the installed CLI version)
    -   `ls` (should show the `historical_weather_explorer` directory)

---

## 5. Project 1: Historical Weather Data Explorer

**Objective:** We will build a simple web application that allows a user to fetch and view historical weather data for a specific location and date range. This project focuses on using the AI for API interaction and UI scaffolding.

### Step 1: Use the Prompt

We'll start by using the detailed prompt we've prepared.

**Your task:**
```
cat historical_weather_explorer/prompt.md
```
Review the prompt and then feed it to the Gemini CLI to generate the initial code.

### Step 2: Running the Application

Once the AI has generated the code, we'll run the app to see our creation.
1.  Install Flask and Pandas: `pip install Flask pandas requests`
2.  Run the server: `python app.py`
3.  Open a web browser and navigate to `http://127.0.0.1:5000`.

> **Presenter's Note:** For a live workshop, it's wise to have a safety net. Have a separate branch in your git repository (e.g., `solution-1`) with the final, working code. If the live demo produces an error, you can quickly `git checkout solution-1` to continue the lesson.

---

## 6. AI Workflows & Pitfalls

**Objective:** Understand different ways of working with AI and the common challenges to watch out for.

-   **Human-in-the-Loop:** This is the workflow we're using today, where you guide the AI as a partner.
-   **Agentic Workflows (The Risky Frontier):** This is where you give the AI full autonomy to achieve a goal. It's powerful but can be unpredictable.
    > **Story from the trenches:** *One time I asked an agent to run a linter and fix some style issues. Instead of just changing the code, it wrote a script to modify the files in bulk. It got the script wrong and corrupted a huge part of the codebase. This highlights the need for careful oversight!*
-   **Pitfall: Short Attention Span:** The AI's context window is its entire memory. It's like pair programming with an impossibly fast coder who unfortunately has amnesia.
-   **Pitfall: The "Hidden Agent":** There are often hidden, system-level instructions that guide the AI's behavior.
    > **Story from the trenches:** *For a brief time, an AI I was using went haywire and started showing me its system prompts. It was constantly being told to write "backwards-compatible" code, even though I kept telling it not to. It was a revealing moment that taught me to be persistent and clear with my reminders to keep the AI on task.*

---

## 7. Best Practices

-   **Version Control is Non-Negotiable:** AI can and will make mistakes. `git commit` at stable checkpoints is your best safety net. Luckily, AI is also great at reading `git log` to help you find where a weird change was introduced.
-   **Create Markdown Plans:** Before you start coding, create a markdown file with your plan (like the `prompt.md` we used). If the AI gets lost or the context resets, you have a source of truth to get back on track.
-   **Keep Your Workspace Clean:** AI can get confused by duplicate or old files. A clean directory and frequent check-ins with `git status` help prevent mistakes.
-   **The AI is a Partner, Not a Magician:** You are still the developer. You must guide the AI, check its work, and understand the code it produces.

---

## 8. On the Horizon: The AI Teammate

The field continues to evolve at a dizzying pace. The goal is to move from a simple "assistant" to a true AI "teammate." Here are a few things to watch for that will shape the future of AI-assisted development:

-   **Multi-Agent Systems:** Your primary AI assistant will act as a "manager," delegating tasks to a team of specialized AIs. It might pass a UI problem to a "design expert" agent or a complex database migration to a "data architect" agent, then integrate their work.

-   **True Multimodality (Sketch-to-Code):** The interaction will move beyond text. Soon, you'll be able to draw a wireframe on a tablet, and an AI will interpret that visual design to generate the functional code, bridging the gap between visual intent and implementation.

-   **Full Software Development Lifecycle (SDLC) Integration:** The AI's role will expand beyond just writing code. It will become a partner in the entire development process, from helping to refine project requirements and suggesting system architecture to generating complex test suites and even assisting with deployment and monitoring.

-   **Autonomous Maintenance & Self-Healing Code:** This is the most forward-looking concept. Imagine an AI that can monitor a live application, detect a bug from error logs, locate the faulty code, write a patch, test it, and deploy the fix, all with minimal human oversight.

-   **Hyper-Personalization:** Models will be deeply and securely trained on your organization's private codebases. This will create an AI that is not just a coding expert, but an expert on *your* specific systems, ready to answer complex, context-aware questions about your proprietary logic.

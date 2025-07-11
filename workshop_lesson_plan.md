# Workshop Lesson Plan: Practical AI with Gemini CLI

## 1. Introduction: The New Landscape of Development

**Objective:** To set the stage by explaining how AI functions as a new type of tool in the developer's toolkit.

**Talking Points:**
-   "AI has fundamentally changed my job. As a developer, I now have a tool that can generate code in any language. It's like having a universal translator and a junior programmer for every tech stack rolled into one. But like any tool, it needs to be directed."
-   "As an architect, my role hasn't changed much. I was already focused on the bigger picture: patterns, high-level design, and organizing tasks. AI has become a powerful instrument for implementation, but the architectural vision remains a human task."
-   "Today is about learning how to manage this new tool. Each AI has its own quirks and failure modes, and the rapid pace of change means these are constantly shifting. Learning to manage the tool and adapt to its changes is the key skill."

---

## 2. Workshop Goals

**Objective:** To clearly state what attendees will learn and be able to do by the end of the session.

-   **Understand the Landscape:** Get a realistic overview of how AI tools fit into a modern development workflow.
-   **Learn the "Why":** Grasp the core concepts that make these tools work and the common pitfalls to avoid.
-   **Develop Practical Skills:** Learn repeatable, effective workflows for using the Gemini CLI for real-world tasks.
-   **Build Confidence:** Leave with the ability to start using these tools on your own projects immediately.

---

## 3. The Rapid Pace of AI Development: A 2025 Timeline

**Objective:** To review the rapid, recent evolution of generative AI to understand the tools available today.

-   **The Pace of Change:** "Never pay for a year of an AI service. The field is changing so fast that a model that seems useful today might be superseded in three months. Stick to monthly subscriptions."

### AI Model Comparison
-   Instead of a static table, we'll use live resources. Different leaderboards track different types of models.
-   **For Open-Source Models:** The **Hugging Face Open LLM Leaderboard** is an excellent, up-to-date site for tracking and comparing the performance of various open-source models.
    -   **Link:** [https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)
-   **For Commercial Models:** The **LMSYS Chatbot Arena Leaderboard** is a great resource that ranks models based on anonymous, randomized battles and human-voted preferences.
    -   **Link:** [https://chat.lmsys.org/?leaderboard](https://chat.lmsys.org/?leaderboard)

---

## 4. Core Concepts: How It Works

**Objective:** To demystify the core concepts that make generative AI work, using analogies to build an intuitive understanding.

### Transformer Models: The Engine of Modern AI
At the heart of models like Gemini is the **Transformer architecture**. It processes all the words in a sentence at the same time, which allows it to build a much richer understanding of how words relate to each other.

### Attention: The AI's "Focus" Mechanism
This is the breakthrough that made Transformers possible. **Attention** is a mechanism that allows the model to weigh the importance of different words in the input when producing an output. It's how the AI "pays attention" to the most relevant parts of your prompt.
-   **Further Reading:** For a great visual explanation, see "[The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)" by Jay Alammar.

### Non-Determinism & The Context Window
The model's behavior is shaped by two key concepts:
-   **Non-Determinism:** It makes creative, probabilistic guesses, which is the source of its creativity but also its unpredictability.
-   **The Context Window:** This is the model's short-term memory. It only knows what's in the current conversation. If information scrolls "out of view," it's forgotten. This is the most critical concept to manage when working with an AI.
-   **Further Reading:** For a good overview, see IBM's article, "[What is a context window?](https://www.ibm.com/topics/context-window)".

---

## 5. AI Workflows: From Assistant to Agent

**Objective:** Understand the different ways of working with AI and their respective trade-offs.

### The Core Pattern: Human-in-the-Loop
This is the most reliable and effective pattern. It's a simple three-phase process:
1.  **Planning:** The human defines the goal. Create markdown documents of your plans so if the AI fails or you run out of context you don’t need to redo the plan.
2.  **Implementation:** The AI generates the code.
3.  **Review & Test:** The human verifies the output.

### Types of AI Interaction
-   **Copy/Paste (UI-based):** The most basic workflow. You prompt in a web UI and copy the code into your editor.
-   **Integrated (CLI / MCP):** The AI has access to your file system. This is more efficient but requires more trust and careful oversight.
-   **Agentic (Unpredictable):** You give the AI a high-level goal and let it run autonomously.
    -   "I have been using this for low-stakes, low-context tasks, like creating basic UIs, while I work on other things. I just check on it every 15 minutes or so."
    -   "Frankly, the output is often not very useful considering the amount of time it spends working, but it's a workflow to be aware of."

---

## 6. Pitfalls & Best Practices

**Objective:** Learn from common failure modes to develop robust habits for working with AI.

### Pitfalls: Common Failure Modes
-   **Short Attention Span / Context Amnesia:**
    -   "It’s like pair programming with a fast but forgetful coder. It can test your patience."
    -   Each time the context is reset, you are working with a *new* instance that has no memory of the previous conversation.
-   **Erratic Behavior & Unintended Consequences:**
    -   > **War Story 1:** "To fix some minor linting issues, it created a script that destroyed all the code. I used git to recover but lost about an hour of work. It took a simple instruction and executed it in the most destructive way possible."
    -   > **War Story 2:** "Recently, an AI stopped using its file system tools but insisted everything was working perfectly. I had to restart the entire session to make it recognize its own failure. It cannot self-diagnose."
-   **The "Hidden Prompt":**
    -   "There are hidden instructions that influence the AI's behavior. For a brief time, an AI I was using went haywire and started showing me its system prompts. It was constantly being told to write 'backwards-compatible' code, even though I kept telling it not to. This taught me that you have to be persistent with your own instructions to override these hidden defaults."

### Best Practices: Your Safety Net
-   **Use Version Control Relentlessly:** The AI will make mistakes. `git commit` is your only real safety net.
    -   "On the plus side, the AI is very good at searching git history. You can ask it to find when a specific piece of code was introduced, and it can usually pinpoint the commit for you."
-   **Maintain a Clean Workspace:** The AI can get confused by duplicate or old files. A clean directory and frequent check-ins with `git status` help prevent mistakes.
-   **Remind It Constantly:** You have to actively manage the AI's focus. "Even if you tell it at the start you are just planning, it might eventually start coding. Constantly dropping reminders that 'we are still in the planning phase' will help it stay on task."
-   **Use WSL for Consistency:** "Working in WSL on Windows can cause permissions issues. I run my integration tests and static code analyzers *inside* WSL to keep my environment consistent with the AI's."

---

## 7. Installation and Setup

**Objective:** Ensure everyone is ready to start coding with the Gemini CLI.

1.  **Install WSL (Windows Subsystem for Linux):**
    -   `wsl --install -d Ubuntu --name Gemini-cli`
2.  **Launch WSL:**
    -   `wsl -d Gemini-cli`
3.  **Install NVM (Node Version Manager):**
    -   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
4.  **Reload Shell & Install Node:**
    -   Exit and relaunch WSL.
    -   `nvm install --lts`
5.  **Install Gemini CLI:**
    -   `npm install -g @google/gemini-cli`
6.  **Set Your API Key:**
    -   Get your key from Google AI Studio.
    -   `export GEMINI_API_KEY="YOUR_API_KEY_HERE"`
7.  **Install Git & Get Workshop Files:**
    -   `sudo apt update && sudo apt install git -y`
    -   `git clone https://github.com/ross-futuri/gemini-cli-workshop.git`
    -   `cd gemini-cli-workshop`
8.  **Pre-flight Check:**
    -   `node -v` (e.g., v22.17.0)
    -   `gemini --version`
    -   `ls`

---

## 8. Let's Work with Gemini!

**Objective:** Do some small example projects to see the workflow in action.

-   Historical Weather Data Explorer
-   (Add another small project idea here)

---

## 9. Advanced Techniques

**Objective:** Explore more sophisticated applications of AI tools in a development workflow.

-   **AI-Powered Code Investigation:** Use the AI as an analytical tool. Instead of just writing code, have it analyze it.
    -   **Example:** Pipe the output of `git log --patch` or `git blame` for a specific file into the AI and ask, "Based on this history, what was the original intent of the `calculate_interest` function?" or "When was the logic for handling leap years removed?"
-   **Automated Static Analysis & Refactoring:** Go beyond just running a linter.
    -   **Workflow:**
        1.  Run your static code analyzer (linter, type-checker, etc.).
        2.  Feed the list of errors and warnings to the AI.
        3.  Instruct it: "Here are 15 linting errors in `main.py`. Please fix them according to the project's style guide."
-   **Advanced MCP Usage (Task Chaining):** Use the AI to orchestrate multi-step tasks that involve several tools.
    -   **Example:** "Read the `api_spec.json`, then generate a basic Python client for it, and finally, write a simple `test_client.py` that calls the `/health` endpoint." This chains reading, code generation, and test creation in one prompt.
-   **Infrastructure as Code (IaC) Generation:** Use the AI to scaffold configuration and deployment files.
    -   **Example:** "I have a Python Flask application in `app.py` that uses Redis. Write me a `Dockerfile` and a `docker-compose.yml` to run them together for local development."

---

## 10. Future Directions

### Things I Haven’t Tried Yet
-   Sub-agents
-   In-depth MCP work
-   Custom reminder commands

### The Energy Cost of AI
-   (This is already covered well in the existing presentation, can be merged).
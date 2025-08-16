# **Vyvíjíme AI aplikace: 2denní hands-on bootcamp pro vývojáře**

Vymyslet smysluplný use-case, vybrat správný model, postavit prototyp a dovést ho do produkce – spolehlivě, bezpečně a měřitelně. Tenhle kurz je pro týmy, které chtějí **AI funkce v reálných aplikacích** (web/e-shop, interní nástroje, mobil) – ne sliby, ale výsledky.

## **Proč byste u toho neměli chybět**

-   **Od nápadu k prototypu za 1 den**, druhý den věnujeme kvalitě, bezpečnosti a provozu.
-   Naučíte se stavět AI funkce tak, aby šly **testovat a verifikovat** (golden sady, automatizované evaly). [deepeval.com](https://deepeval.com/docs/evaluation-introduction?utm_source=chatgpt.com)[GitHub](https://github.com/confident-ai/deepeval?utm_source=chatgpt.com)[docs.ragas.io](https://docs.ragas.io/en/latest/?utm_source=chatgpt.com)
-   Budete používat **structured outputs** (JSON Schema), takže integrace do backendu nebolí a UI nepadá na špatných formátech. [OpenAI Platform](https://platform.openai.com/docs/guides/structured-outputs?utm_source=chatgpt.com)[Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/structured-outputs?utm_source=chatgpt.com)
-   Bezpečnost neobětujeme rychlosti: projdeme **OWASP LLM Top 10** a praktické guardrails pro produkci. [OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/?utm_source=chatgpt.com)[GitHub](https://github.com/OWASP/www-project-top-10-for-large-language-model-applications/?utm_source=chatgpt.com)

## **Pro koho je školení určené**

Vývojáři webu/backendu, mobilů i interních systémů, tech leadi a architekti, kteří chtějí přidat AI funkce do stávajících produktů nebo rozjet nové. Dává smysl pro týmy do **15 osob** (ideálně 2 lektory pro vysokou interaktivitu).

## **Co se během 2 dnů naučíte**

-   **Use-case design:** jak vybírat problémy, kde AI dává hodnotu (interní asistenti, vyhledávání v datech, sumarizace, generování obsahu).
-   **Volba modelu & poskytovatele:** kdy nasadit uzavřené modely (Responses API) vs. otevřené; kompromisy cena/latence/kontext.
-   **Architektury AI aplikací:** **RAG** (ingest → chunking → embeddings → retrieval → generace), hybridní vyhledávání, reranking, a kdy přidat agenty/tool-calling. [docs.llamaindex.ai](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/?utm_source=chatgpt.com)
-   **UX pro AI:** transparentnost, „escape hatches“, zdrojování odpovědí, práce s chybami a fallback na člověka.
-   **Kvalita a testování:** golden sady, LLM-as-judge/heuristiky, CI evaly s **DeepEval** a **Ragas**. [deepeval.com](https://deepeval.com/docs/evaluation-introduction?utm_source=chatgpt.com)[docs.ragas.io](https://docs.ragas.io/en/latest/?utm_source=chatgpt.com)
-   **Structured outputs & integrace:** JSON Schema, validace, stabilní kontrakty. [OpenAI Platform](https://platform.openai.com/docs/guides/structured-outputs?utm_source=chatgpt.com)
-   **Bezpečnost a governance:** hrozby podle OWASP LLM Top 10, mitigace a provozní zásady. [OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/?utm_source=chatgpt.com)
-   **Náklady a výkon:** caching, batchování, streaming, monitoring metrik (latence p95, deflection rate, cena/požadavek).

## **Program ve zkratce**

**Den 1 – Od nápadu k prototypu (8 h):**Use-case workshop → výběr modelu → návrh architektury (RAG/agent) → **Lab: Hello, RAG** (LlamaIndex/LangChain + Responses API) → měření kvality, rychlosti a nákladů na první baseline. [docs.llamaindex.ai](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/?utm_source=chatgpt.com)

**Den 2 – Kvalita, bezpečnost a produkce (8 h):**Testování & evaluace (DeepEval/Ragas) → structured outputs a robustní integrace → bezpečnost podle OWASP LLM Top 10 → **Capstone Lab**: od POC k mini-produktu s guardrails a reportem kvality. [deepeval.com](https://deepeval.com/docs/evaluation-introduction?utm_source=chatgpt.com)[docs.ragas.io](https://docs.ragas.io/en/latest/?utm_source=chatgpt.com)[OpenAI Platform](https://platform.openai.com/docs/guides/structured-outputs?utm_source=chatgpt.com)[OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/?utm_source=chatgpt.com)

## **Co si účastníci odnesou**

-   **Referenční kód**: minimální RAG aplikace + příklady structured-output pipeline. [docs.llamaindex.ai](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/?utm_source=chatgpt.com)[OpenAI Platform](https://platform.openai.com/docs/guides/structured-outputs?utm_source=chatgpt.com)
-   **Checklisty & šablony**: výběr use-case, architektura RAG, prompt-UI, bezpečnostní checklist podle OWASP LLM Top 10, metriky kvality a nákladů. [OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/?utm_source=chatgpt.com)
-   **Eval toolchain** připravený do CI (DeepEval/Ragas) včetně ukázkových „goldens“. [deepeval.com](https://deepeval.com/docs/evaluation-introduction?utm_source=chatgpt.com)[docs.ragas.io](https://docs.ragas.io/en/latest/?utm_source=chatgpt.com)

## **Praktické info**

-   **Režie:** 2×8 hodin čistého času + oběd a 2 coffee breaky denně.
-   **Technika:** notebook s Dockerem, Python 3.10+, GitHub; API klíče a sandbox dodáme.
-   **Formát:** ~60 % praxe, ~40 % best practices; on-site / online.

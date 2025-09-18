<!--

mějte pod kontrolou svoje závislosti

Pokud jste neslali, že můj příspěvek bude o drogách, jediná droga zde je že JavaScript a NPM a špatný systém instalace balíčků, ale nebojte v mém příběhu bude figurovat i gang s kokainem:



Máte krásnou vymazlenou aplikaci, spoustu bezpečnostních pravidel spoustu pravidel ohledně toho jak psát kód, linting, strict typescript rules, reviews,... dokonce máte i nějaký bezpečnostní monitoring.

jako prakticky každá aplikace dneska používáte nějaké komponenty třetích stran, vy jste nainstalovali pomocí npm i a pravidelně je auditujete a aktualizujete

každý týden děláte pravidelný release

včera jste žádný release nedělali, avšak stejně aplikace najednou začala fungovat jinak a to tím úplně nejhorším způsobem – všechny jména a hesla která kterýma se přihlašují i vaše uživatele se začaly posílat na nějakou neznámou podezřele vypadající doménu

k tomu jako na potvoru byly všichni uživatele odhlášení, takže se všichni musí přihlásit znovu

pro uživatele platí zlaté pravidlo, že na různých službách mají mít různá hesla, ale kdo tohle reálně dodržuje

zcela bez iluzr je vám jasné že jste udělali průšvih, že dobrá polovina uniklý hesel který jsou desítky tisíc, mají ti to uživatelé úplně stejná napříč emailem sociální sítěmi možná dokonce bankovním účtem

mnoha rodinný příslušníkům vašich (už možná bývalých uživatelů a zákazníků) začínají chodit SMSky od svých dětí rodičů sourozenců
"Ahoj mami prosím tě dostala jsem se do problémů v zahraničí, potřeboval bych půjčit peníze"

samozřejmě na tenhle podvod drtivá většina známých obětí tohodle průšvihu nenalétne

ale mnoho z nich také ano

miliony korun se odstnou na mnoha různých ukradených i zahraničních účtech, policie dokáže odstavit pouze malý zlomek z nich

začne rozsáhlé vyšetřování soudy mediální tahanice A co je na tom nejhorší že co měsíc dojde k nějakému novému podvodu protože databáze kradených údajů se přeprodává na darknetu spolu s kokainem a p||em a ještě není zdaaaaaaaleka vytěžená

najednou se vaše úžasná služba která měla změnit svět dostává do kontextu s ruskými hackery podvodnými zprávami úniky informací a špatným zabezpečení

zní to jako noční můra
samozřejmě jsem byl trochu přehnal a nastínil fakt špatný scénář

však nic z toho co píšu není nereálné a může se stát i přes vaše dobře nastavená bezpečnostní pravidla Pokud pominete jednu často přehlíženo věc:

tenhle druh útoku se jmenuje supply chain attack, jde o bohužel poměrně běžný problém kdy nemáme bezpečnostní díru aplikace samotné ale v nějakém softwaru třetí strany který používáme

tohle se s AI kódováním bude dít víc a víc, protože odevzdávám víc a víc kontroli AI agentům a automatizovaným pipelinam

Používejte AI nástroje
Používejte AI agenty
Ale cokoliv co jde do Hlavní produkce prosím berte vážně

a pokud tady mám někoho z vás kdo vydává balíčky na NPM (například Já jich mám několik poměrně populárních) nic tenhle proces o level lepší

tahle chyba se může stát bohužel poměrně lehce, bohužel npm je nastavené tak že automaticky instaluje balíček tím způsobem, že nemáte jsou přesnou verzi a autor nebo ten kdo autora hackne může odstrčit pod rouškou "bezpečnostní záplaty" verzi malicious

AI coding tohle výrazně zhoršuje protože pokud nenastavíte explicitně dobrá pravidla svému AI agentovi, vygeneruje vám dokonalý skvělý kód ve kterém čeká tahle nepříjemná chyba

Pokud uděláte kritickou chybu ve své aplikace s 10 000 uživatele, ovlivní to 10 000 lidí, Pokud uděláte chybu v knihovně s 10 projekty který používají, můžete klidně ovlivnit několik milionů lidí

Pokud jste prodat owner prodat manager nebo vlastníte firmu, tohle je jedno z těch míst na které se fakt dejte pozor, je trochu zbytečné řešit s vaší pozice zda se na produkci používá react 17 nebo 18, absolutní kruciální mít vyřešené bezpečnostní procesy a Management závislostní.

Já sám nejsem bezpečnostní expert a nedokážu vám kvalifikovaně poradit se ze správním nastavením všech bezpečnostních procesů, na to mějte člověk a podle vel


---

npm naprosto katastrofální design rozhodnutí, které každý den vnáší miliony potenciálních bezpečnostních zranitelností do všech aplikací napříč celým světem

nejste programátor a netýká se vás to omyl, vzal mi pravděpodobně týká.

nemusíš je být programátor, o tuhle věc byste se měli zajímat i pokud jste majitel firmy (která má cokoliv na webu) prodat manager product owner, vibecoder,...

i pokud jste uživatel obyčejného chytré obyčejného telefonu, mám pro vás na konci dobrou bezpečnostní radu


jen tenhle týden bylo několik útoků které cesta let přesně kvůli tomuhle Pokud vás to zajímá napište do komentářů HACK a pošlu vám

Pokud lásko ale zajímá v kontextu AI vývoje nebo jiné aspekty toho jak začít využívat AI při vývoji aplikací, nabízím firemní školení

-->

Mějte pod kontrolou svoje závislosti 💉
Obzvlášť v době AI Agentů a Vibecodingu

Můj příspěvek nebude o drogách, jediná droga zde je že JavaScript a NPM a špatný systém instalace balíčků, ale nebojte v mém příběhu bude figurovat i gang s k0ka1nem na darkwebu:

[☀]
Máte krásnou vymazlenou aplikaci, spoustu bezpečnostních pravidel, spoustu pravidel ohledně toho jak psát kód, linting, strict typescript rules, reviews,... dokonce máte i nějaký bezpečnostní monitoring.

[🌤]
Jako prakticky každá aplikace dneska používáte nějaké komponenty třetích stran, vy jste nainstalovali pomocí npm install a pravidelně je auditujete a aktualizujete

[🌥]
Každý týden děláte pravidelný release. Včera jste žádný release nedělali, avšak stejně aplikace najednou začala fungovat jinak a to tím úplně nejhorším způsobem – všechny jména a hesla která kterýma se přihlašují i vaše uživatele se začaly posílat na nějakou neznámou podezřele vypadající doménu.

A teď se dostáváme k jádru problému. Jak je možné, že se tohle stalo? Odpověď leží v závislostech vaší aplikace. I když jste si mysleli, že máte všechno pod kontrolou, jedna z vašich závislostí mohla být kompromitována.

[🌧]
K tomu jako na potvoru byli všichni uživatelé odhlášeni, takže se všichni musí přihlásit znovu. Pro uživatele obecně platí zlaté pravidlo, že na různých službách mají mít různá hesla, ale kdo tohle reálně dodržuje?

Najednou bez iluzí je Vám jasné, že jste udělali průšvih, že dobrá polovina uniklých hesel, která jsou desítky tisíc, mají ti uživatelé úplně stejná napříč emailem, sociálními sítěmi, možná dokonce bankovním účtem.

[🌨]

Mnoha rodinným příslušníkům vašich (už možná bývalých) uživatelů a zákazníků začínají chodit SMSky od svých dětí, rodičů, sourozenců:

> Ahoj mami, prosím tě, dostala jsem se do problémů v zahraničí, potřeboval bych půjčit peníze.

Samozřejmě na tenhle podvod drtivá většina známých obětí tohodle průšvihu nenalétne. Ale mnoho z nich také ano.

[🌦]

Miliony korun se odstnou na mnoha různých ukradených i zahraničních účtech, policie dokáže odstavit pouze malý zlomek z nich. Začne rozsáhlé vyšetřování, policie, státní zastupitelství, soudy, mediální tahanice, TUNA vs, Blesk, Černé Ovce. A co je na tom nejhorší, že co měsíc dojde k nějakému novému podvodu, protože databáze kradených údajů se přeprodává na darknetu spolu s k0ka1nem ještě není zdaaaaaaaaaaaaaaleka vytěžená.

[⛈]
Najednou se vaše úžasná služba, která měla změnit svět, dostává do kontextu s hackery, podvodnými zprávami, úniky informací a špatným zabezpečením.

---

Zní to jako totální noční můra. Samozřejmě jsem byl trochu přehnal a nastínil faaaaaakt přehnaně špatný scénář. Však nic z toho co píšu není nereálné a může se stát i přes vaše dobře nastavená bezpečnostní pravidla. Pokud pominete jednu často přehlíženou věc:

Tenhle druh útoku se jmenuje supply chain attack, jde o bohužel poměrně běžný problém kdy nemáme bezpečnostní díru aplikace samotné ale v nějakém softwaru třetí strany který používáme.

NPM balíčkovací systém učinil naprosto katastrofální rozhodnutí, které každý den vnáší miliony potenciálních bezpečnostních zranitelností do všech aplikací napříč celým světem. Nové závislosti se přidávají tím způsobem, že nemáte pod kontrolou přesnou verzi, lze aktualizovat na nejnovější verzi i bez vašeho vědomí a commitu ve vašem repozitáři. Autor nebo ten kdo autora hackne může podstrčit pod rouškou "bezpečnostní záplaty" hacknutou verzi.

[💡]
Řešení je vlastně opravdu jednoduché, V package.json NEPOUŽÍVEJTE ^ ani tildu ~ u verzí vašich závislostí. Používejte přesné verze. Tím zajistíte, že se vám balíčky neaktualizují samy od sebe a vy máte plnou kontrolu nad tím, kdy a jaké aktualizace provedete.

✅

```json
"dependencies": {
  "@promptbook/utils": "0.101.0-5",
}
```

❌

```json
"dependencies": {
  "@promptbook/utils": "^0.101.0-5",
}
```

Zní to jako drobnost, ale jen v posledních týdnech došlo k několika útokům, přesně kvůli tomuhle.

Tahle věc se kvůli AI Vibecodingu bude dít víc a víc, protože odevzdáváme víc a víc kontroly AI agentům, automatizovaným pipelinám a defaultním nastavením. Používejte AI nástroje, používejte AI agenty, ale cokoliv co jde do hlavní produkce prosím berte vážně.

Pokud Vás to zajímá napište do komentářů HACK a pošlu vám odkazy na víc podrobností. A pokud Vás AI v kontextu vývoje, vibecoding nebo jiné aspekty toho jak začít využívat AI při vývoji aplikací a v aplikacích, nabízím na tohle téma firemní školení.

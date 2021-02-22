# Webapplicatie: kunstkijken

[Live link](https://max-hauser.github.io/web-app-from-scratch-2021/kunstkijken/index.html)

![voorblad](https://github.com/max-hauser/web-app-from-scratch-2021/blob/master/kunstkijken/images/voorblad.png)

# Web App From Scratch @cmda-minor-web 2020 - 2021

Tijdens dit onderdeel van de Minor Web heb ik geleerd om een simpele webapplicatie te maken, zonder gebruik te maken van libraries, dus puur en alleen standaard html, css en javascript. De webapplicatie is een single page web app, wat wil zeggen dat er maar 1 pagina wordt geladen, en de content steeds veranderd wordt.
De data heb ik verkregen van het Rijksmuseum.

## Verloop van het project

### Week 1

#### Maandag

Tijdens de kick-off  kregen mijn team (pink mando's) en ik de opdracht om een visitekaartje te maken. Dit was de mijne.

![visite kaartje](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ed5461bd-0504-459a-a7b7-bef3de220be3/Screenshot_2021-02-01_at_13.24.42.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210218T162011Z&X-Amz-Expires=86400&X-Amz-Signature=dabd141ea476d0545b4d07f5350cd88b1d5712fa3078f411d39abbd655422d3e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot_2021-02-01_at_13.24.42.png%22)

#### Dinsdag

Voordat de les is begonnen heb ik gezocht naar een openbare API waarmee ik mijn web-app mee zal vullen. Na enig zoekwerk heb ik gekozen voor een recepten api. genaamd: recipepuppy.

[http://www.recipepuppy.com/api/](http://www.recipepuppy.com/api/)

De API werd simpel maar effectief. Het kan zowel tags als queries verwerken, wat erg fijn werken is, omdat het gemakkelijk schaalbaar is.

![eerste poging](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ce726899-3aa3-4038-842f-b46b1857dc23/screencapture-file-Users-max-Documents-week-1-hello-api-html-2021-02-02-11_33_24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210218T162232Z&X-Amz-Expires=86400&X-Amz-Signature=620de4753a929299bf6cf201d917de015e50e0b4240c0ffa5bcbba42e78b2d32&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screencapture-file-Users-max-Documents-week-1-hello-api-html-2021-02-02-11_33_24.png%22)

#### Woensdag

Vandaag had ik een presentatie. Ik had als onderwerp Motion paths. Voor de presentatie heb ik de volgende Codepen gemaakt:
https://www.notion.so/Woensdag-3-februari-2021-08435b3f888d4bf1898ffc0c36b3d106#1db8135ae67343c08b931455d44ab57f

#### donderdag

Op donderdag heb ik veel CSS gedaan voor CSS To The Rescue

#### Vrijdag

Vandaag veel verschillende API's geprobeerd.
Deze kwamen het meest naar voren:
- Nutrition API
- Edamam
- spoonacular

Uiteindelijk voor spoonacular gekozen.

![tweede poging](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7166a26b-5ed0-43f1-90b2-c0ad3f34a779/screencapture-max-hauser-github-io-web-app-from-scratch-2021-2021-02-05-11_32_30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210218T162727Z&X-Amz-Expires=86400&X-Amz-Signature=66c6f7a97129d76afd6d7f24c4da1f8fa083397de50e99ea3eee4933bb8fcc2b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screencapture-max-hauser-github-io-web-app-from-scratch-2021-2021-02-05-11_32_30.png%22)

### Week 2 

#### Maandag
Vandaag heb ik mijn code volledig omgezet naar de atomic design, maar tegen het einde dat ik klaar was kon ik geen requests meer doen naar de API. Hierdoor wist ik niet goed wat ik kon doen, en verloor ik mijn concentratie, al met al geen productive dag dus 😕

#### Dinsdag
Vandaag ben ik begonnen met het proberen op te slaan van data in localstorage zodat ik niet per see meer afhankelijk ben van de api request limiet. 

#### Woensdag
Op Woensdag heb ik veel CSS gedaan voor CSS To The Rescue

#### Donderdag
Vandaag had ik als doel om mijn router te fixen en mijn detail pagina qua layout af te hebben.
Dit was veel werk, maar uiteindelijk was het gelukt. Maar toen begon het probleem. Ik had veel problemen met het uploaden naar Github. Dit was een heel gedoe, dus ik heb de hulp ingeschakeld van een student-assistent. Wij kwamen samen een heel eind, en uiteindelijk is het eindelijk gelukt.

#### Vrijdag
Op Vrijdag heb ik veel CSS gedaan voor CSS To The Rescue, en een planning gemaakt met Leonie de studentassistent

### Week 3 

#### Maandag
Vandaag zou ik eigenlijk weinig gaan programmeren, maar toen kwam ik erachter dat iets fundamenteels fout had in de opbouw van mijn code. Dit duurde de hele dag om het te fixen.

#### Dinsdag
Vandaag stond in het teken van het maken van een filter. Dit is voor 95% gelukt, want net toen ik het laatste gedeelte wilde testen, waren mijn requests op, en kon ik het niet afmaken. Dit heb ik besproken met de leraar en ik heb te horen gekregen dat als ik een happy flow maak, dat dat ook goed is.

#### Woensdag
Na nog een keer een api request limit te hebben gekregen, had ik er echt helemaal genoeg van. Ik heb besloten om van onderwerp te veranderen, met als enige doel om een api te vinden die geen limiet heeft als het gaat om requests!!!!

Ik heb gezocht naar voedsel gerelateerde api's.. Maar die zijn er niet. Dus heb ik uiteindelijk besloten om de api van het Rijksmuseum te gebruiken. Dit werkt nu al zo veel fijner!

#### Donderdag
KunstKijken live gezet op Github!

##### actor diagram

![actor diagram](https://github.com/max-hauser/web-app-from-scratch-2021/blob/master/kunstkijken/images/actor.png)
![interaction diagram](https://github.com/max-hauser/web-app-from-scratch-2021/blob/master/kunstkijken/images/interaction.png)

## Hoe te gebruiken



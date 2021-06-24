<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>Kahoot Quiz Semester 2</h1>
      </div>
      <div class="main-quiz" v-for="(element,index) in questions.slice(a,b)" :key="index" v-show="quiz">
        <div class="box-question">
          <h2>Vraag {{b}}/{{questions.length}}</h2>
          <p>{{ element.question }}</p>
        </div>
        <div class="box-suggestions">
          <ul>
            <li v-for="(item,index) in element.suggestions" :key="index" :class="select ? check(item) : ''" @click="selectResponse(item)">{{ item.suggestion }}</li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-if="score_show">
        <h2>Jou score is</h2>
        <h2>{{score}}/{{questions.length}}</h2>
        <div class="btn-restart">
          <button @click="restartQuiz">Restart</button>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="box-button">
          <button @click="skipQuestion">Skip</button>
          <button @click="nextQuestion">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      questions: [
        {
          question:'Software die als online dienst wordt aangeboden',
          suggestions:[
            {suggestion:'SaaS (Service as a Software)'},
            {suggestion:'PaaS (Platform as a Software)'},
            {suggestion:'SaaS (Software as a Service)',correct:true},
            {suggestion:'PaaS (Platform as a Service)'},
          ]
        },
        {
          question:'Wanneer je veiligheidsoplossingen inhuurt van een ander bedrijf, maak je gebruik van ...',
          suggestions:[
            {suggestion:'SaaS'},
            {suggestion:'SECaaS',correct:true},
            {suggestion:'IaaS'},
            {suggestion:'PaaS'},
          ]
        },
        {
          question:'Als een afdeling centraal ligt dan wil dat zeggen ...',
          suggestions:[
            {suggestion:'Dat de afdeling enkel in 1 land gevestigd is',correct:true},
            {suggestion:'Dat de afdeling in het midden van het bedrijf ligt'},
            {suggestion:'Dat er aan 2 chefs gerapporteerd moet worden'},
            {suggestion:'Dat de afdeling heel belangrijk is voor het bedrijf'},
          ]
        },
        {
          question:'In welke fase van de Software Development lifecycle komen de architecten in werking?',
          suggestions:[
            {suggestion:'Analyse'},
            {suggestion:'Design',correct:true},
            {suggestion:'Implementatie'},
            {suggestion:'Planning'},
          ]
        },
        {
          question:'Wat is geen typische scrumteam?',
          suggestions:[
            {suggestion:'Team dat in een sprint een werkende product oplevert'},
            {suggestion:'Een zelfsturende team'},
            {suggestion:'Team dat bestaat uit enkel analisten',correct:true},
            {suggestion:'Team dat zelf het werk inschat'},
          ]
        },
        {
          question:'Wat is een andere naam voor een product backlog item?',
          suggestions:[
            {suggestion:'User story',correct:true},
            {suggestion:'User Request'},
            {suggestion:'Product backlog request'},
            {suggestion:'Product backlog story'},
          ]
        },
        {
          question:'Wie is verantwoordelijk voor de taakverdeling binnen een scumteam?',
          suggestions:[
            {suggestion:'De scrum master'},
            {suggestion:'De project manager'},
            {suggestion:'De product owner'},
            {suggestion:'Het team zelf',correct:true},
          ]
        },
        {
          question:'Waterval kent een sequentiële uitvoering',
          suggestions:[
            {suggestion:'True',correct:true},
            {suggestion:'False'},
          ]
        },
        {
          question:'Wanneer je een ingerichte serverruimte huurt, dan gebruik je ...',
          suggestions:[
            {suggestion:'SECaas'},
            {suggestion:'SaaS'},
            {suggestion:'PaaS',correct:true},
            {suggestion:'IaaS'},
          ]
        },
        {
          question:'Een organogram is een schematische voorstelling van de wijze waarop ... (kies meest complete)',
          suggestions:[
            {suggestion:'Informeel taken verdeeld zijn over personen en functies'},
            {suggestion:'Informeel taken verdeeld zijn over personen/functies + gezagsverhoudingen'},
            {suggestion:'Formeel taken verdeeld zijn over personen en afdelingen'},
            {suggestion:'Formeel taken verdeeld zijn over personen/afdelingen + gezagsverhouding',correct:true},
          ]
        },
        {
          question:'Bij een koekjesfabriek zit IT in ...',
          suggestions:[
            {suggestion:'Enkel in de operationele afdeling'},
            {suggestion:'Zowel in de operationele als ondersteunende afdeling'},
            {suggestion:'Enkel in de ondersteunende afdeling',correct:true},
            {suggestion:'Een koekjesfabriek kan helemaal geen IT afdeling hebben'},
          ]
        },
        {
          question:'Wat klopt er NIET over SaaS',
          suggestions:[
            {suggestion:'Goede SLA`s'},
            {suggestion:'Lage kosten voor setup infrastructuur'},
            {suggestion:'Zelf verantwoordelijk voor de updates',correct:true},
            {suggestion:'Makkelijk te schalen'},
          ]
        },
        {
          question:'Waarvoor staat FTE?',
          suggestions:[
            {suggestion:'Frequent task example'},
            {suggestion:'Full time engineering'},
            {suggestion:'Full time equivalent',correct:true},
            {suggestion:'Fast time engineering'},
          ]
        },
        {
          question:'Welk van deze wordt typisch gezien NIET geoutsourcet',
          suggestions:[
            {suggestion:'Helpdesk'},
            {suggestion:'NIET kerncompetenties'},
            {suggestion:'Kerncompetenties',correct:true},
            {suggestion:'Testen'},
          ]
        },
        {
          question:'Question 4',
          suggestions:[
            {suggestion:'Answer 1'},
            {suggestion:'Answer 2'},
            {suggestion:'Answer 3'},
            {suggestion:'Answer 4',correct:true},
          ]
        },
        {
          question:'Wat zijn baten?',
          suggestions:[
            {suggestion:'Het inkomen dat de werknemers krijgen tijdens het project'},
            {suggestion:'Opbrengsten of besparingen die het bedrijf kan doorvoeren door het project',correct:true},
            {suggestion:'Herhalende kosten die het bedrijf maakt om het project te onderhouden'},
            {suggestion:'Eenmalige kosten die het bedrijf maakt voor het project'},
          ]
        },
        {
          question:'Welke uitspraak is NIET waar?',
          suggestions:[
            {suggestion:'Wat je geleerd hebt, pas je meteen toe in de volgende sprint'},
            {suggestion:'De product owner maakt best deel uit van het scrum team'},
            {suggestion:'De scrummaster facileert eerder dan hij instrueert',correct:true},
            {suggestion:'Scrum kan op maat van de organisatie anders worden toegepast'},
          ]
        },
        {
          question:'Een nadeel van SCRUM is dat er minder structuur is dan waterval',
          suggestions:[
            {suggestion:'True',correct:true},
            {suggestion:'False'},
          ]
        },
        {
          question:'Bij een bedrijf zoals BOL.com zit IT in ...',
          suggestions:[
            {suggestion:'Enkel in de operationele afdeling'},
            {suggestion:'Zowel in de operationele als ondersteunende afdeling',correct:true},
            {suggestion:'Overal!'},
            {suggestion:'Enkel in de ondersteunende afdeling'},
          ]
        },
        {
          question:'Welke omgeving lijkt het best qua hard- en software op PRODUCTIE?',
          suggestions:[
            {suggestion:'Test'},
            {suggestion:'No idea!'},
            {suggestion:'Development'},
            {suggestion:'Acceptatie',correct:true},
          ]
        },
        {
          question:'Wie zijn de typische gebruikers van een SaaS?',
          suggestions:[
            {suggestion:'Gebruikers',correct:true},
            {suggestion:'Netwerk architecten'},
            {suggestion:'Software ontwikkelaars'},
            {suggestion:'Systeem admins'},
          ]
        },
        {
          question:'Wat is GEEN taak van de PRODUCT OWNER?',
          suggestions:[
            {suggestion:'Organiseert de planningsmeeting en de sprint review'},
            {suggestion:'Bepaalt de visie en de prioriteiten samen met de klant'},
            {suggestion:'Werkt samen met het scumteam en andere stakeholders'},
            {suggestion:'Zorgt dat het team focus kan houden op de sprint',correct:true},
          ]
        },
        {
          question:'Wat hoort NIET thuis in een planning?',
          suggestions:[
            {suggestion:'Een overzicht van wat de verschillende profielen kosten',correct:true},
            {suggestion:'Rekening houden met de gekozen projectmethode (waterval/scrum/kanban/...)'},
            {suggestion:'Taken + inschatting van de duurt'},
            {suggestion:'Overzicht van de middelen en profielen die je nodig hebt'},
          ]
        },
        {
          question:'Wanneer doet men typisch een kosten/baten analyse',
          suggestions:[
            {suggestion:'Al deze mogelijkheden zijn waar',correct:true},
            {suggestion:'Voorafgaand aan het project'},
            {suggestion:'Tijdens het project'},
            {suggestion:'Na afronding van het project'},
          ]
        },
        {
          question:'Het aantal direct ondergeschikten aan wie een leider effectief leiding kan geven is ...',
          suggestions:[
            {suggestion:'De vleugelspan'},
            {suggestion:'De spanwijdte'},
            {suggestion:'De breedte'},
            {suggestion:'Het omspanningsvermogen',correct:true},
          ]
        },
        {
          question:'Wat is GEEN mogelijk nadeel van een STANDAARD pakket',
          suggestions:[
            {suggestion:'Al deze opties zijn nadelen van standaard paketten'},
            {suggestion:'Een standaardpakket is enkel nuttig voor specifieke functionaliteiten'},
            {suggestion:'Mogelijk moet de bedrijfvoering aangepast worden aan het pakket'},
            {suggestion:'Je staat zelf in voor het onderhoud van de applicatie',correct:true},
          ]
        },
        {
          question:'Welke bewering is JUIST',
          suggestions:[
            {suggestion:'De operationele afdeling houdt de interne servers operationeel'},
            {suggestion:'De commerciële afdeling zorgt dat er personeel aangewerft wordt'},
            {suggestion:'De ondersteunende afdeling heeft veel klanten contact'},
            {suggestion:'De commerciële afdeling werft nieuwe klanten aan',correct:true},
          ]
        },
        {
          question:'Bij extreme programming doe je aan een pair reviewing',
          suggestions:[
            {suggestion:'True'},
            {suggestion:'False',correct:true},
          ]
        },
        {
          question:'Bij een software developer zit IT',
          suggestions:[
            {suggestion:'Zowel de operationele als ondersteunende afdeling',correct:true},
            {suggestion:'Enkel in de ondersteunende afdeling'},
            {suggestion:'Enkel in de operationele afdeling'},
            {suggestion:'Overal!'},
          ]
        },
        {
          question:'Wanneer je een lege serverruimte huurt, dan gebruikt je ...',
          suggestions:[
            {suggestion:'IaaS',correct:true},
            {suggestion:'PaaS'},
            {suggestion:'SaaS'},
            {suggestion:'LaaS'},
          ]
        },
        {
          question:'Wat klopt er NIET over de SCRUM MASTER',
          suggestions:[
            {suggestion:'Verdeelt de taken in het team',correct:true},
            {suggestion:'Organiseert de daily scrum'},
            {suggestion:'Coacht het team om productiever te worden'},
            {suggestion:'Zorgt dat het team focus kan houden'},
          ]
        },
        {
          question:'Het afdelingshoofd van een HEEL GROOT bedrijf wordt soms ook wel eens de "ICT manager" genoemd',
          suggestions:[
            {suggestion:'True'},
            {suggestion:'False',correct:true},
          ]
        },
        {
          question:'Op welke omgeving gaat de klant zijn testen uitvoeren?',
          suggestions:[
            {suggestion:'Productie'},
            {suggestion:'Development'},
            {suggestion:'Test'},
            {suggestion:'Acceptatie',correct:true},
          ]
        },
        {
          question:'Wat is een IT plan?',
          suggestions:[
            {suggestion:'Plan dat de hele IT-afdeling zal realiseren in een bepaalde perdiode',correct:true},
            {suggestion:'Plan dat nodig is om een automatisatie door te voeren'},
            {suggestion:'Plan van de huidige activiteiten van de IT afdeling'},
            {suggestion:'Grondplan van de IT afdeling'},
          ]
        },
        {
          question:'Wanneer spreekt men van een steile structuur?',
          suggestions:[
            {suggestion:'Wanneer er maar 1 manager is'},
            {suggestion:'Wanneer er weinig niveaus tussen de hoogste en laagste manager zitten'},
            {suggestion:'Wanneer er veel niveaus tussen de laagste en hoogste manager zitten',correct:true},
            {suggestion:'Wanneer veel managers op hetzelfde niveau zitten'},
          ]
        },
        {
          question:'De entente structuur is een ... structuur',
          suggestions:[
            {suggestion:'steile'},
            {suggestion:'project'},
            {suggestion:'expertise'},
            {suggestion:'horizontale',correct:true},
          ]
        },
        {
          question:'In welke fase van de Software Development lifecycle worden de requirements geanalyseerd?',
          suggestions:[
            {suggestion:'Design'},
            {suggestion:'Analyse'},
            {suggestion:'Implementatie'},
            {suggestion:'Planning',correct:true},
          ]
        },
        {
          question:'Wie zijn de typische gebruikers van een PaaS?',
          suggestions:[
            {suggestion:'Netwerkarchitecten'},
            {suggestion:'Software ontwikkelaars',correct:true},
            {suggestion:'System admins'},
            {suggestion:'Gebruikers'},
          ]
        },
        {
          question:'De eenheid van inschatting in scrum is?',
          suggestions:[
            {suggestion:'Scrum points'},
            {suggestion:'Scrum uren'},
            {suggestion:'Story points',correct:true},
            {suggestion:'Mandagen'},
          ]
        },
        {
          question:'Wat behoort NIET tot de taken van een systeemanalist',
          suggestions:[
            {suggestion:'Het in kaart brengen welke functies een applicatie moet hebben',correct:true},
            {suggestion:'Uitzoeken hoe de organisatie verbeterd kan worden'},
            {suggestion:'Problemen en behoeften van een organisatie bestuderen'},
            {suggestion:'De eindgebruikers helpen bij het definiëren van hun eisen'},
          ]
        },
      ],
      a:0,
      b:1,
      select: false,
      score:0,
      quiz:true,
      score_show:false,
    }
  },
  methods:{
    selectResponse(e){
      this.select = true;
      if(e.correct){
        this.score++;
      }
    },

    check(status){
      if(status.correct){
        return 'correct'
      }
      else{
        return 'incorrect'
      }
    },

    nextQuestion(){

      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
      }
      else{
        this.a++;
        this.b++;
        this.select = false;
      }
    },

    skipQuestion(){

      if(this.questions.length - 1 == this.a){
        this.score_show = true;
        this.quiz = false;
      }
      else{
        this.a++;
        this.b++;
      }
    },

    restartQuiz(){

      Object.assign(this.$data, this.$options.data()); // reset data

    },
  }
}
</script>

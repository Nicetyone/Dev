import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @ViewChild('modal') modal: ElementRef;

  @ViewChild('header') header: ElementRef;
  @ViewChild('body') body: ElementRef;
  public image: string;


  types: {[key: string]: string[][]} = {
    devteam: [
      ["Dev Team"], 
      ["Zespół Arro składa się z ludzi, którzy mają umiejętności programowania i znajomość skryptowania na platformie FiveM. To ludzie z kilkuletnim doświadczeniem w branży, którzy wiedzą, jak tworzyć niepowtarzalne i innowacyjne rozwiązania. Ich kreatywność i inwencja są na bardzo wysokim poziomie, co pozwala na ciągłe doskonalenie serwera i tworzenie nowych funkcji.", "Praca nad Arro to dla zespołu nie tylko praca ale również pasja. Każdy z developerów pracuje z pełnym zaangażowaniem i dążeniem do perfekcji, aby zapewnić graczom najlepsze doświadczenia z gry na serwerze. To dzięki ich ciężkiej pracy i nieustannej trosce o graczy, Arro ma potencjał do zostania jednym z najbardziej rozpoznawalnych serwerów."],
      ["../../assets/img/persons/Daco_1297441.png"]
    ],
    management: [
      ["Team Management Arro"],
       ["jest to grupa osób decyzyjnych w sprawach ważnych dla funkcjonowania serwera. Są to wyjątkowe i ambitne jednostki, które pracują z niesamowitym zaangażowaniem i pasją nad każdym aspektem serwera FiveM. Ich wiedza, umiejętności i doświadczenie są nieocenione w tworzeniu jednego z najbardziej zaawansowanych i wciągających serwerów w Polsce.", "Team Managment Arro działa w oparciu o niezwykle wysokie standardy. Ich zawsze skrupulatna analiza każdego detalu, doskonałe przygotowanie i umiejętności negocjacyjne pozwalają na utrzymywanie stabilnej i trwałej pozycji serwera Arro w czołówce serwerów FiveM."],
       ["../../assets/img/persons/Daco_1297818.png"]
    ],
    adminteam: [
      ["Administratorzy Arro"],
      ["Każdy z administratorów Arro jest dobrze przeszkolony i wyposażony w narzędzia potrzebne do rozwiązywania wszelkich problemów technicznych, jakie mogą pojawić się podczas gry na serwerze. Zespół ten działa szybko i sprawnie, aby zapewnić graczom najwyższy poziom zadowolenia oraz obsługi w trakcie gry.", "Ich zaangażowanie i doświadczenie w obsłudze graczy są niezwykle ważne w kontekście dbania o rozwój i funkcjonowanie serwera. Administratorzy Arro są znani ze swojego wysokiego standardu obsługi oraz szybkiego reagowania na każde pytanie czy problem gracza.", "Jeśli potrzebujesz pomocy lub masz jakieś pytania dotyczące serwera Arro, administratorzy są gotowi, aby ci pomóc w każdej chwili."],
      ["../../assets/img/persons/Daco_1309529.png"]
    ],
    supportteam: [
      ["Support Arro"],
      ["jest pierwsza linia wsparcia dla graczy podczas rozgrywki oraz w ticketach. Jest to zespół ludzi, którzy poświęcają swój czas i wiedzę, aby zapewnić najlepsze możliwe doświadczenia graczom na serwerze. Ich wiedza na temat gry, zaangażowanie i umiejętności czynią ich niezwykle wartościowymi dla community Arro.", "W każdej chwili, gdy gracze potrzebują pomocy, Supporci stają się nieodzownymi pomocnikami - ozwiązują problemy i odpowiadają na pytania z niezwykłą precyzją i szybkością.", "Każdy z nich jest dobrze przeszkolony w zakresie swoich obowiązków, rozwiązywania problemów technicznych i innych kwestii związanych z grą. Ich skuteczne wsparcie pomaga graczom cieszyć się grą na Arro bez jakichkolwiek przeszkód."],
      ["../../assets/img/persons/Daco_5635962.png"]
    ]
  };

  constructBody(body: string[]) {
    let resultCode:string = "";
    
    body.forEach((element, index) => {
      resultCode += `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">${element}</p> <br>`;
    });

    return resultCode;
  }

  toggleModal(type : string) {
    console.log('open modal child message: ' + type);
    this.header.nativeElement.innerHTML = this.types[type][0][0];
    this.body.nativeElement.innerHTML = this.constructBody(this.types[type][1]);
    this.image = this.types[type][2][0];


    this.modal.nativeElement.click();
  }
}

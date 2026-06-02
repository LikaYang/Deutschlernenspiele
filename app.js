const levelInfo = {
  A1: {
    description: "Einfache Alltagssätze und klare Wortwahl.",
    vocab: 20,
    structure: 15,
    speed: 20,
  },
  A2: {
    description: "Kurze Beschreibungen mit mehr Details.",
    vocab: 42,
    structure: 34,
    speed: 38,
  },
  B1: {
    description: "Erfahrungen, Meinungen und strukturierte Absätze.",
    vocab: 64,
    structure: 58,
    speed: 54,
  },
  B2: {
    description: "Argumente, Nuancen und komplexe Satzverbindungen.",
    vocab: 84,
    structure: 78,
    speed: 70,
  },
};

const modeMeta = {
  word: {
    kicker: "Spiel 1",
    title: "Das Wortersetzungsspiel",
  },
  structure: {
    kicker: "Spiel 2",
    title: "Das Satzstruktur-Ersetzungsspiel",
  },
  parts: {
    kicker: "Spiel 3",
    title: "Das Satzteil Spiel",
  },
};

const weakWordBank = {
  A1: [
    ["Das Essen ist gut.", "gut", ["lecker", "prima", "toll", "okay"], "Denke an einfache Alltagswörter: lecker, prima, toll."],
    ["Der Film ist schlecht.", "schlecht", ["langweilig", "traurig", "doof", "nicht gut"], "Beschreibe genauer, warum etwas schlecht ist."],
    ["Das Zimmer ist sehr klein.", "sehr", ["winzig", "klein", "eng", "ziemlich"], "Sehr + Adjektiv kann oft durch ein stärkeres Adjektiv ersetzt werden."],
    ["Ich mache meine Hausaufgaben.", "mache", ["erledige", "schreibe", "bearbeite"], "Bei Aufgaben passt erledigen oder bearbeiten."],
    ["Meine Mutter sagt: Komm bitte.", "sagt", ["ruft", "bittet", "meint"], "Sagen kann je nach Situation rufen, bitten oder meinen heißen."],
    ["Der Tag war gut.", "gut", ["schön", "angenehm", "toll", "prima"], "Für einen Tag passen schön oder angenehm."],
    ["Die Musik ist schlecht.", "schlecht", ["laut", "langweilig", "unangenehm"], "Was stört an der Musik: laut, langweilig, unangenehm?"],
    ["Ich bin sehr müde.", "sehr", ["total", "wirklich", "erschöpft"], "Erschöpft ist stärker und genauer als sehr müde."],
    ["Wir machen ein Foto.", "machen", ["fotografieren", "knipsen", "aufnehmen"], "Für ein Foto gibt es ein eigenes Verb: fotografieren."],
    ["Der Lehrer sagt die Antwort.", "sagt", ["nennt", "erklärt", "gibt"], "Bei Antworten passen nennen oder erklären."],
    ["Das Buch ist gut.", "gut", ["interessant", "spannend", "schön"], "Bei Büchern kannst du spannend oder interessant schreiben."],
    ["Das Wetter ist schlecht.", "schlecht", ["regnerisch", "kalt", "stürmisch"], "Wetter wird genauer mit regnerisch, kalt oder stürmisch."],
    ["Der Hund ist sehr schnell.", "sehr", ["schnell", "flink", "rasant"], "Flott oder flink klingt genauer."],
    ["Ich mache Kaffee.", "mache", ["koche", "bereite", "brühe"], "Kaffee kann man kochen, zubereiten oder brühen."],
    ["Sie sagt hallo.", "sagt", ["grüßt", "begrüßt", "ruft"], "Hallo sagen heißt oft grüßen."],
    ["Das Spiel ist gut.", "gut", ["lustig", "spannend", "unterhaltsam"], "Bei Spielen passen lustig, spannend, unterhaltsam."],
    ["Die Suppe ist schlecht.", "schlecht", ["versalzen", "kalt", "fade"], "Bei Essen ist der genaue Geschmack wichtig."],
    ["Ich bin sehr froh.", "sehr", ["glücklich", "begeistert", "richtig froh"], "Glücklich oder begeistert klingt stärker."],
  ],
  A2: [
    ["Die Wohnung ist sehr groß.", "sehr", ["riesig", "geräumig", "ziemlich", "besonders"], "Ersetze sehr groß durch geräumig oder riesig."],
    ["Meine Freundin sagt, dass sie müde ist.", "sagt", ["erzählt", "meint", "erklärt", "berichtet"], "Bei Aussagen passen erzählen, meinen, erklären, berichten."],
    ["Der Urlaub war gut.", "gut", ["erholsam", "schön", "angenehm", "abwechslungsreich"], "Bei Urlaub kann gut genauer als erholsam oder abwechslungsreich werden."],
    ["Das Problem ist schlecht für die Gruppe.", "schlecht", ["ungünstig", "problematisch", "unangenehm"], "Ungünstig klingt genauer als schlecht."],
    ["Wir machen morgen einen Ausflug.", "machen", ["unternehmen", "planen", "organisieren"], "Einen Ausflug unternimmt man."],
    ["Die Prüfung war sehr schwer.", "sehr", ["schwierig", "anspruchsvoll", "ziemlich schwer"], "Anspruchsvoll ist genauer als sehr schwer."],
    ["Der Nachbar sagt seine Meinung.", "sagt", ["äußert", "erklärt", "teilt mit"], "Eine Meinung äußert man."],
    ["Das Handy ist gut.", "gut", ["praktisch", "zuverlässig", "nützlich"], "Bei Dingen passen praktisch und zuverlässig."],
    ["Der Service war schlecht.", "schlecht", ["unfreundlich", "langsam", "unzuverlässig"], "Service wird durch Verhalten genauer beschrieben."],
    ["Ich mache einen Plan.", "mache", ["erstelle", "entwerfe", "plane"], "Einen Plan erstellt man."],
    ["Das Hotel ist sehr teuer.", "sehr", ["kostspielig", "teuer", "überteuert"], "Überteuert ist stärker und bewertet klar."],
    ["Die App ist gut.", "gut", ["hilfreich", "übersichtlich", "praktisch"], "Bei Apps sind hilfreich und übersichtlich genauer."],
    ["Die Verbindung ist schlecht.", "schlecht", ["instabil", "langsam", "schwach"], "Bei Internet passt instabil oder langsam."],
    ["Wir machen eine Pause.", "machen", ["legen ein", "nehmen", "gönnen uns"], "Eine Pause legt man ein oder nimmt man."],
    ["Er sagt die Geschichte noch einmal.", "sagt", ["erzählt", "wiederholt", "schildert"], "Eine Geschichte erzählt oder schildert man."],
    ["Der Kurs ist gut.", "gut", ["hilfreich", "verständlich", "nützlich"], "Bei Kursen passen hilfreich, verständlich, nützlich."],
    ["Die Idee ist schlecht.", "schlecht", ["unpraktisch", "riskant", "wenig sinnvoll"], "Eine Idee kann unpraktisch oder riskant sein."],
    ["Sie ist sehr nett.", "sehr", ["freundlich", "herzlich", "sympathisch"], "Nett wird genauer durch freundlich, herzlich, sympathisch."],
  ],
  B1: [
    ["Der Ausflug war gut, weil wir viel gesehen haben.", "gut", ["gelungen", "interessant", "abwechslungsreich", "beeindruckend"], "B1-Wörter zeigen genauer, was gut war."],
    ["Viele Jugendliche machen Sport im Verein.", "machen", ["treiben", "trainieren", "betreiben", "nehmen teil"], "Sport treibt man oder man trainiert."],
    ["Der Vortrag war sehr interessant.", "sehr", ["äußerst", "besonders", "fesselnd", "aufschlussreich"], "Fesselnd oder aufschlussreich klingt präzise."],
    ["Die Entscheidung war schlecht für das Team.", "schlecht", ["ungünstig", "nachteilig", "problematisch"], "In Texten klingt nachteilig genauer."],
    ["Die Schülerin sagt, dass sie anderer Meinung ist.", "sagt", ["betont", "erklärt", "wendet ein", "merkt an"], "Bei Meinungen passen betonen, einwenden, anmerken."],
    ["Das Praktikum war gut für meine Zukunft.", "gut", ["hilfreich", "wertvoll", "nützlich", "förderlich"], "Förderlich zeigt den Nutzen klar."],
    ["Die Stadt macht neue Radwege.", "macht", ["baut", "plant", "errichtet", "legt an"], "Radwege werden gebaut oder angelegt."],
    ["Die Situation ist sehr schwierig.", "sehr", ["kompliziert", "herausfordernd", "angespannt"], "Herausfordernd ist genauer als sehr schwierig."],
    ["Der Text ist schlecht strukturiert.", "schlecht", ["unübersichtlich", "chaotisch", "unklar"], "Bei Texten passt unübersichtlich oder unklar."],
    ["Die Autorin sagt, dass Lernen Zeit braucht.", "sagt", ["behauptet", "erklärt", "stellt fest", "weist darauf hin"], "In Sachtexten ist das Verb wichtig."],
    ["Die Erfahrung war gut.", "gut", ["bereichernd", "positiv", "wertvoll"], "Erfahrungen können bereichernd sein."],
    ["Wir machen eine Umfrage.", "machen", ["führen durch", "erstellen", "organisieren"], "Eine Umfrage führt man durch."],
    ["Das Ergebnis ist sehr wichtig.", "sehr", ["entscheidend", "zentral", "bedeutsam"], "Entscheidend und zentral klingen stärker."],
    ["Die Lösung ist schlecht.", "schlecht", ["ungeeignet", "unpraktisch", "mangelhaft"], "Eine Lösung kann ungeeignet sein."],
    ["Der Experte sagt seine Einschätzung.", "sagt", ["äußert", "formuliert", "gibt ab"], "Eine Einschätzung äußert oder formuliert man."],
    ["Die Zusammenarbeit war gut.", "gut", ["produktiv", "harmonisch", "effektiv"], "Zusammenarbeit kann produktiv oder effektiv sein."],
    ["Die Firma macht Werbung.", "macht", ["betreibt", "schaltet", "entwickelt"], "Werbung betreibt oder schaltet man."],
    ["Die Kritik war sehr hart.", "sehr", ["scharf", "deutlich", "heftig"], "Scharf oder heftig ist genauer."],
  ],
  B2: [
    ["Die Maßnahme ist gut für die Umwelt.", "gut", ["vorteilhaft", "nachhaltig", "förderlich", "wirkungsvoll"], "In Argumentationen passen vorteilhaft, förderlich, nachhaltig."],
    ["Der Autor sagt, dass soziale Medien problematisch sind.", "sagt", ["behauptet", "argumentiert", "betont", "kritisiert"], "Das Verb zeigt die Haltung des Autors."],
    ["Die Reform ist sehr wichtig.", "sehr", ["wesentlich", "maßgeblich", "zentral", "entscheidend"], "Wesentlich oder maßgeblich klingt gehobener."],
    ["Die Folgen sind schlecht für die Gesellschaft.", "schlecht", ["gravierend", "nachteilig", "problematisch", "bedenklich"], "Bedenklich und gravierend passen zu Folgen."],
    ["Die Regierung macht neue Regeln.", "macht", ["erlässt", "beschließt", "führt ein", "formuliert"], "Regeln werden erlassen oder eingeführt."],
    ["Der Vorschlag ist gut begründet.", "gut", ["überzeugend", "schlüssig", "fundiert"], "Fundiert und schlüssig sind präzise Bewertungswörter."],
    ["Die Entwicklung ist sehr schnell.", "sehr", ["rasant", "dynamisch", "rapide"], "Rasant und rapide beschreiben Tempo besser."],
    ["Die Datenlage ist schlecht.", "schlecht", ["unzureichend", "lückenhaft", "fragwürdig"], "Bei Daten passt unzureichend oder lückenhaft."],
    ["Die Studie sagt, dass Bewegung hilft.", "sagt", ["zeigt", "belegt", "legt nahe", "verdeutlicht"], "Studien zeigen, belegen oder legen etwas nahe."],
    ["Das Unternehmen macht Fortschritte.", "macht", ["erzielt", "verzeichnet", "erreicht"], "Fortschritte erzielt oder verzeichnet man."],
    ["Der Ansatz ist gut.", "gut", ["vielversprechend", "tragfähig", "sinnvoll"], "Ein Ansatz kann tragfähig sein."],
    ["Die Debatte ist sehr emotional.", "sehr", ["aufgeladen", "kontrovers", "heftig"], "Aufgeladen oder kontrovers ist genauer."],
    ["Das Argument ist schlecht.", "schlecht", ["nicht stichhaltig", "schwach", "widersprüchlich"], "Argumente sind stichhaltig oder nicht stichhaltig."],
    ["Der Bericht sagt mehrere Ursachen.", "sagt", ["benennt", "analysiert", "führt an"], "Ein Bericht benennt oder analysiert Ursachen."],
    ["Die Politik macht Druck.", "macht", ["übt aus", "erhöht", "verstärkt"], "Druck übt man aus oder erhöht man."],
    ["Die Lösung ist sehr einfach.", "sehr", ["simpel", "naheliegend", "unkompliziert"], "Naheliegend zeigt, warum etwas einfach wirkt."],
    ["Die Wirkung ist gut.", "gut", ["positiv", "erheblich", "förderlich"], "Wirkungen können erheblich oder förderlich sein."],
    ["Der Plan ist schlecht umsetzbar.", "schlecht", ["kaum", "schwer", "nur begrenzt"], "Kaum umsetzbar klingt natürlicher."],
  ],
};

const extraWeakWordRows = [
  ["A1", "Ich glaube, das ist richtig.", "glaube", ["denke", "meine", "finde"], "Bei einfachen Meinungen passen denken, meinen oder finden."],
  ["A1", "Ich sehe einen Mann.", "sehe", ["bemerke", "erkenne", "entdecke"], "Sehen kann genauer als bemerken, erkennen oder entdecken formuliert werden."],
  ["A1", "Ich gehe nach Hause.", "gehe", ["laufe", "fahre", "spaziere"], "Gehen kann je nach Situation laufen, fahren oder spazieren heißen."],
  ["A1", "Ich komme morgen.", "komme", ["erscheine", "bin da", "treffe ein"], "Kommen kann auch da sein oder eintreffen bedeuten."],
  ["A1", "Ich brauche Hilfe.", "brauche", ["benötige", "suche", "hätte gern"], "Benötigen klingt etwas genauer als brauchen."],
  ["A1", "Ich habe eine Frage.", "habe", ["stelle", "möchte stellen", "bringe mit"], "Eine Frage hat man nicht nur, man stellt sie."],
  ["A1", "Ich finde den Film gut.", "finde", ["mag", "bewerte", "halte für"], "Bei Meinungen passen mögen oder bewerten."],
  ["A1", "Der Weg ist lang.", "lang", ["weit", "ausgedehnt", "ziemlich weit"], "Bei Wegen passt weit oft besser als lang."],
  ["A1", "Das Kleid ist schön.", "schön", ["hübsch", "elegant", "modern"], "Schön kann genauer als hübsch, elegant oder modern werden."],
  ["A1", "Das Auto ist alt.", "alt", ["gebraucht", "älter", "nicht neu"], "Alt kann bei Dingen auch gebraucht heißen."],
  ["A1", "Der Junge ist nett.", "nett", ["freundlich", "hilfsbereit", "lieb"], "Nett wird genauer durch freundlich oder hilfsbereit."],
  ["A1", "Die Tasche ist groß.", "groß", ["geräumig", "riesig", "breit"], "Groß kann je nach Ding geräumig oder riesig heißen."],
  ["A1", "Das Wasser ist kalt.", "kalt", ["kühl", "eiskalt", "frisch"], "Kalt kann schwächer oder stärker formuliert werden."],
  ["A1", "Die Straße ist klein.", "klein", ["eng", "kurz", "schmal"], "Bei Straßen passt schmal oder eng."],
  ["A1", "Ich esse schnell.", "schnell", ["rasch", "zügig", "hastig"], "Schnell kann neutral zügig oder negativ hastig sein."],
  ["A1", "Ich bin traurig.", "traurig", ["betrübt", "unglücklich", "niedergeschlagen"], "Traurig kann stärker als niedergeschlagen formuliert werden."],
  ["A1", "Das ist leicht.", "leicht", ["einfach", "unkompliziert", "mühelos"], "Leicht heißt bei Aufgaben oft einfach."],
  ["A1", "Das ist schwer.", "schwer", ["schwierig", "anstrengend", "kompliziert"], "Schwer kann körperlich oder geistig gemeint sein."],
  ["A1", "Ich möchte Tee.", "möchte", ["hätte gern", "wünsche mir", "nehme"], "Hätte gern klingt höflich und natürlich."],
  ["A1", "Der Kaffee ist heiß.", "heiß", ["warm", "kochend heiß", "dampfend"], "Heiß lässt sich genauer mit dampfend beschreiben."],
  ["A1", "Ich lerne viel.", "viel", ["jeden Tag", "regelmäßig", "intensiv"], "Viel wird genauer, wenn du sagst wie oft oder wie stark."],
  ["A1", "Das Kind läuft schnell.", "läuft", ["rennt", "eilt", "flitzt"], "Bei hoher Geschwindigkeit passt rennen."],
  ["A1", "Wir reden im Park.", "reden", ["sprechen", "plaudern", "unterhalten uns"], "Reden kann freundlicher als plaudern klingen."],
  ["A1", "Ich mag Musik.", "mag", ["höre gern", "liebe", "interessiere mich für"], "Mag kann genauer durch eine Handlung werden."],
  ["A1", "Das Haus ist neu.", "neu", ["modern", "frisch gebaut", "renoviert"], "Neu kann modern oder frisch gebaut bedeuten."],

  ["A2", "Ich glaube, dass der Plan funktioniert.", "glaube", ["denke", "vermute", "bin der Meinung"], "Vermuten zeigt Unsicherheit genauer als glauben."],
  ["A2", "Sie bekommt eine Nachricht.", "bekommt", ["erhält", "empfängt", "kriegt"], "Erhalten klingt schriftlicher als bekommen."],
  ["A2", "Wir geben dem Lehrer die Aufgabe.", "geben", ["reichen", "übergeben", "schicken"], "Je nach Situation passt reichen, übergeben oder schicken."],
  ["A2", "Ich nehme den Bus.", "nehme", ["fahre mit", "benutze", "steige in"], "Bei Verkehrsmitteln passt benutzen oder fahren mit."],
  ["A2", "Der Kurs hilft mir.", "hilft", ["unterstützt", "bringt weiter", "fördert"], "Unterstützen und fördern sind genauer."],
  ["A2", "Ich suche eine Wohnung.", "suche", ["besichtige", "recherchiere", "halte Ausschau nach"], "Suche kann durch die konkrete Handlung ersetzt werden."],
  ["A2", "Das Problem ist groß.", "groß", ["ernst", "erheblich", "wichtig"], "Bei Problemen klingt ernst oder erheblich genauer."],
  ["A2", "Das Geschenk ist schön.", "schön", ["persönlich", "passend", "liebevoll"], "Ein Geschenk ist oft passend oder liebevoll."],
  ["A2", "Der Text ist lang.", "lang", ["ausführlich", "umfangreich", "detailliert"], "Bei Texten passt ausführlich oder umfangreich."],
  ["A2", "Der Termin ist wichtig.", "wichtig", ["bedeutend", "dringend", "zentral"], "Wichtig kann dringend oder zentral bedeuten."],
  ["A2", "Ich denke oft an meine Familie.", "denke", ["erinnere mich", "vermisse", "beschäftige mich mit"], "Denken an kann genauer erinnern oder vermissen heißen."],
  ["A2", "Er arbeitet viel.", "viel", ["intensiv", "regelmäßig", "zahlreiche Stunden"], "Viel arbeiten wird genauer durch intensiv oder regelmäßig."],
  ["A2", "Das Essen schmeckt gut.", "schmeckt", ["mundet", "ist lecker", "überzeugt"], "Schmecken kann man mit leckerer Bewertung verbinden."],
  ["A2", "Die Aufgabe ist leicht.", "leicht", ["einfach", "überschaubar", "unkompliziert"], "Überschaubar klingt genauer bei Aufgaben."],
  ["A2", "Der Weg ist schwer.", "schwer", ["anstrengend", "steil", "beschwerlich"], "Bei Wegen ist beschwerlich genauer."],
  ["A2", "Ich frage den Arzt.", "frage", ["erkundige mich", "bitte um Rat", "spreche an"], "Sich erkundigen klingt genauer."],
  ["A2", "Wir sprechen über Schule.", "sprechen", ["diskutieren", "reden", "unterhalten uns"], "Diskutieren passt, wenn es mehrere Meinungen gibt."],
  ["A2", "Sie zeigt mir die Stadt.", "zeigt", ["führt", "präsentiert", "stellt vor"], "Eine Stadt kann man jemandem vorstellen."],
  ["A2", "Ich ändere meinen Plan.", "ändere", ["passe an", "überarbeite", "korrigiere"], "Pläne passt man an."],
  ["A2", "Das Bild ist interessant.", "interessant", ["auffällig", "beeindruckend", "ungewöhnlich"], "Interessant kann genauer als auffällig oder ungewöhnlich werden."],
  ["A2", "Die Antwort ist kurz.", "kurz", ["knapp", "prägnant", "wenig ausführlich"], "Kurz kann positiv prägnant oder neutral knapp sein."],
  ["A2", "Ich verstehe die Regel.", "verstehe", ["begreife", "erkenne", "nachvollziehe"], "Nachvollziehen passt bei Erklärungen."],
  ["A2", "Er bleibt ruhig.", "ruhig", ["gelassen", "entspannt", "geduldig"], "Ruhig beschreibt Verhalten oft als gelassen."],
  ["A2", "Die Arbeit ist fertig.", "fertig", ["erledigt", "abgeschlossen", "beendet"], "Abgeschlossen klingt genauer als fertig."],
  ["A2", "Ich bekomme eine Idee.", "bekomme", ["entwickle", "habe", "finde"], "Eine Idee entwickelt man oder hat man."],

  ["B1", "Ich glaube, dass diese Lösung sinnvoll ist.", "glaube", ["bin überzeugt", "nehme an", "vertrete die Ansicht"], "In Meinungen klingt vertreten die Ansicht präziser."],
  ["B1", "Die Grafik zeigt die Entwicklung.", "zeigt", ["veranschaulicht", "stellt dar", "verdeutlicht"], "Grafiken veranschaulichen oder verdeutlichen."],
  ["B1", "Der Artikel spricht über Bildung.", "spricht", ["behandelt", "thematisiert", "geht ein auf"], "Texte behandeln oder thematisieren ein Thema."],
  ["B1", "Die Schule gibt Unterstützung.", "gibt", ["bietet", "leistet", "stellt bereit"], "Unterstützung bietet oder leistet man."],
  ["B1", "Viele Leute finden das wichtig.", "finden", ["halten für", "bewerten als", "sehen als"], "Halten für passt gut in Argumentationen."],
  ["B1", "Das Projekt hilft den Schülern.", "hilft", ["unterstützt", "fördert", "erleichtert"], "Fördern zeigt den positiven Effekt."],
  ["B1", "Der Text macht die Idee klar.", "macht", ["verdeutlicht", "erklärt", "veranschaulicht"], "Eine Idee wird verdeutlicht."],
  ["B1", "Die Zahl geht nach oben.", "geht", ["steigt", "nimmt zu", "erhöht sich"], "Bei Zahlen sagt man steigt oder nimmt zu."],
  ["B1", "Die Zahl geht nach unten.", "geht", ["sinkt", "nimmt ab", "verringert sich"], "Bei Zahlen sagt man sinkt oder nimmt ab."],
  ["B1", "Die Gruppe redet über das Problem.", "redet", ["diskutiert", "bespricht", "erörtert"], "Erörtern klingt schriftlicher."],
  ["B1", "Der Lehrer gibt ein Beispiel.", "gibt", ["nennt", "führt an", "verwendet"], "Ein Beispiel nennt oder führt man an."],
  ["B1", "Ich sehe einen Vorteil.", "sehe", ["erkenne", "bemerke", "identifiziere"], "Einen Vorteil erkennt man."],
  ["B1", "Die Idee ist interessant.", "interessant", ["reizvoll", "überzeugend", "bedenkenswert"], "Bedenkenswert klingt differenzierter."],
  ["B1", "Das Ergebnis ist groß.", "groß", ["erheblich", "deutlich", "beträchtlich"], "Bei Ergebnissen passt erheblich oder beträchtlich."],
  ["B1", "Die Erklärung ist leicht.", "leicht", ["verständlich", "nachvollziehbar", "einfach"], "Nachvollziehbar passt bei Erklärungen."],
  ["B1", "Die Diskussion ist schwer.", "schwer", ["komplex", "anspruchsvoll", "kontrovers"], "Diskussionen sind komplex oder kontrovers."],
  ["B1", "Der Autor denkt anders.", "denkt", ["argumentiert", "beurteilt", "schätzt ein"], "Bei Autoren passt argumentieren oder beurteilen."],
  ["B1", "Wir ändern den Text.", "ändern", ["überarbeiten", "anpassen", "umformulieren"], "Texte überarbeitet oder formuliert man um."],
  ["B1", "Die Firma sucht Mitarbeiter.", "sucht", ["stellt ein", "rekrutiert", "wirbt an"], "Firmen rekrutieren oder stellen ein."],
  ["B1", "Die Maßnahme bringt Vorteile.", "bringt", ["bietet", "schafft", "ermöglicht"], "Maßnahmen schaffen oder ermöglichen Vorteile."],
  ["B1", "Die Situation bleibt schwer.", "bleibt", ["erweist sich als", "wirkt", "stellt sich dar als"], "Erweist sich als klingt schriftlicher."],
  ["B1", "Viele Menschen nutzen das Internet viel.", "nutzen", ["verwenden", "gebrauchen", "greifen zurück auf"], "Greifen zurück auf ist gehobener."],
  ["B1", "Der Kurs verbessert mein Deutsch.", "verbessert", ["fördert", "stärkt", "entwickelt"], "Sprachkenntnisse werden gefördert oder gestärkt."],
  ["B1", "Die Regel ist klar.", "klar", ["eindeutig", "verständlich", "transparent"], "Eindeutig ist präziser als klar."],
  ["B1", "Der Beitrag ist kurz.", "kurz", ["knapp", "prägnant", "kompakt"], "Prägnant ist positiv und genau."],

  ["B2", "Ich glaube, dass diese These überzeugend ist.", "glaube", ["bin der Auffassung", "vertrete die These", "gehe davon aus"], "In B2-Texten klingen Auffassung und These stärker."],
  ["B2", "Die Studie zeigt einen Zusammenhang.", "zeigt", ["belegt", "weist nach", "verdeutlicht"], "Studien belegen oder weisen etwas nach."],
  ["B2", "Die Regierung gibt Geld für Bildung.", "gibt", ["stellt bereit", "investiert", "finanziert"], "Bei Geld passt investieren oder bereitstellen."],
  ["B2", "Der Text spricht über Migration.", "spricht", ["thematisiert", "analysiert", "setzt sich auseinander mit"], "Sachtexte thematisieren oder analysieren."],
  ["B2", "Die Entwicklung geht schnell.", "geht", ["verläuft", "schreitet voran", "beschleunigt sich"], "Entwicklungen verlaufen oder beschleunigen sich."],
  ["B2", "Das Argument ist interessant.", "interessant", ["stichhaltig", "differenziert", "bemerkenswert"], "Argumente sind stichhaltig oder differenziert."],
  ["B2", "Die Lösung hilft langfristig.", "hilft", ["wirkt", "trägt bei", "erweist sich als hilfreich"], "Trägt bei ist für Wirkungsketten passend."],
  ["B2", "Die Politik macht Veränderungen.", "macht", ["stößt an", "setzt um", "veranlasst"], "Veränderungen werden angestoßen oder umgesetzt."],
  ["B2", "Die Zahlen werden größer.", "werden", ["steigen", "nehmen zu", "erhöhen sich"], "Bei Zahlen sind steigen und zunehmen präzise."],
  ["B2", "Die Risiken sind groß.", "groß", ["erheblich", "beträchtlich", "gravierend"], "Gravierend passt zu Risiken."],
  ["B2", "Die Frage ist schwer.", "schwer", ["komplex", "vielschichtig", "anspruchsvoll"], "Vielschichtig klingt differenzierter."],
  ["B2", "Die Aussage ist klar.", "klar", ["eindeutig", "unmissverständlich", "präzise"], "Unmissverständlich ist stärker als klar."],
  ["B2", "Der Autor findet die Maßnahme gut.", "findet", ["bewertet als", "befürwortet", "schätzt ein als"], "Befürworten zeigt Zustimmung präzise."],
  ["B2", "Die Kritiker sagen, dass die Kosten steigen.", "sagen", ["wenden ein", "argumentieren", "machen geltend"], "Kritiker wenden ein oder machen geltend."],
  ["B2", "Die Analyse ist kurz.", "kurz", ["knapp", "komprimiert", "prägnant"], "Prägnant klingt positiv und akademischer."],
  ["B2", "Die These ist neu.", "neu", ["innovativ", "originell", "ungewöhnlich"], "Thesen können innovativ oder originell sein."],
  ["B2", "Die Wirkung bleibt schlecht.", "schlecht", ["begrenzt", "negativ", "unzureichend"], "Begrenzt oder unzureichend ist genauer."],
  ["B2", "Die Debatte wird heiß.", "heiß", ["kontrovers", "emotional", "polarisiert"], "Debatten sind kontrovers oder polarisiert."],
  ["B2", "Das Konzept braucht Zeit.", "braucht", ["erfordert", "setzt voraus", "beansprucht"], "Erfordern passt in formelleren Texten."],
  ["B2", "Der Bericht nimmt Bezug auf Daten.", "nimmt", ["bezieht sich auf", "stützt sich auf", "verweist auf"], "Berichte stützen sich auf Daten."],
  ["B2", "Die Maßnahme bringt Probleme.", "bringt", ["verursacht", "führt zu", "zieht nach sich"], "Probleme werden verursacht oder nach sich gezogen."],
  ["B2", "Die Gesellschaft ändert sich stark.", "ändert", ["wandelt", "verändert", "transformiert"], "Gesellschaften wandeln oder transformieren sich."],
  ["B2", "Die Lösung ist einfach.", "einfach", ["naheliegend", "pragmatisch", "unkompliziert"], "Pragmatisch bewertet die Lösung genauer."],
  ["B2", "Der Effekt ist klein.", "klein", ["gering", "minimal", "begrenzt"], "Bei Effekten passt gering oder begrenzt."],
  ["B2", "Die Position ist stark.", "stark", ["überzeugend", "fundiert", "tragfähig"], "Positionen können fundiert oder tragfähig sein."],
];

const structureBank = {
  A1: [
    ["Ich bin müde. Ich gehe nach Hause.", "und / deshalb", ["deshalb", "und"], "Ich bin müde, deshalb gehe ich nach Hause."],
    ["Ich habe Hunger. Ich esse Brot.", "und / deshalb", ["deshalb", "und"], "Ich habe Hunger und esse Brot."],
    ["Es ist kalt. Ich trage eine Jacke.", "deshalb", ["deshalb"], "Es ist kalt, deshalb trage ich eine Jacke."],
    ["Ich lerne Deutsch. Ich höre Musik.", "und-Satz", ["und"], "Ich lerne Deutsch und höre Musik."],
    ["Ich bin krank. Ich bleibe im Bett.", "deshalb", ["deshalb"], "Ich bin krank, deshalb bleibe ich im Bett."],
    ["Der Bus kommt. Ich gehe zur Haltestelle.", "und-Satz", ["und"], "Der Bus kommt und ich gehe zur Haltestelle."],
    ["Ich habe Zeit. Ich besuche dich.", "deshalb / und", ["deshalb", "und"], "Ich habe Zeit, deshalb besuche ich dich."],
    ["Das Buch ist spannend. Ich lese weiter.", "deshalb", ["deshalb"], "Das Buch ist spannend, deshalb lese ich weiter."],
    ["Ich bin neu hier. Ich frage den Lehrer.", "und / deshalb", ["deshalb", "und"], "Ich bin neu hier, deshalb frage ich den Lehrer."],
    ["Heute regnet es. Ich nehme den Schirm.", "deshalb", ["deshalb"], "Heute regnet es, deshalb nehme ich den Schirm."],
    ["Ich bin zu Hause. Ich koche Suppe.", "und-Satz", ["und"], "Ich bin zu Hause und koche Suppe."],
    ["Der Laden ist offen. Wir kaufen Milch.", "und / deshalb", ["deshalb", "und"], "Der Laden ist offen, deshalb kaufen wir Milch."],
    ["Ich habe Durst. Ich trinke Wasser.", "deshalb", ["deshalb"], "Ich habe Durst, deshalb trinke ich Wasser."],
    ["Meine Tasche ist schwer. Ich brauche Hilfe.", "deshalb", ["deshalb"], "Meine Tasche ist schwer, deshalb brauche ich Hilfe."],
    ["Ich mag Sport. Ich spiele Fußball.", "und-Satz", ["und"], "Ich mag Sport und spiele Fußball."],
    ["Ich höre den Wecker. Ich stehe auf.", "und-Satz", ["und"], "Ich höre den Wecker und stehe auf."],
    ["Der Film beginnt. Wir sitzen im Kino.", "und-Satz", ["und"], "Der Film beginnt und wir sitzen im Kino."],
    ["Ich habe Geld. Ich kaufe ein Ticket.", "deshalb", ["deshalb"], "Ich habe Geld, deshalb kaufe ich ein Ticket."],
  ],
  A2: [
    ["Ich lerne Deutsch. Ich möchte in Deutschland studieren.", "weil-Satz", ["weil"], "Ich lerne Deutsch, weil ich in Deutschland studieren möchte."],
    ["Ich nehme den Bus. Mein Fahrrad ist kaputt.", "weil-Satz", ["weil"], "Ich nehme den Bus, weil mein Fahrrad kaputt ist."],
    ["Sie kocht Tee. Sie ist erkältet.", "weil-Satz", ["weil"], "Sie kocht Tee, weil sie erkältet ist."],
    ["Ich spare Geld. Ich möchte reisen.", "damit / weil", ["damit", "weil"], "Ich spare Geld, damit ich reisen kann."],
    ["Wir gehen früher los. Wir wollen pünktlich sein.", "damit-Satz", ["damit"], "Wir gehen früher los, damit wir pünktlich sind."],
    ["Ich rufe dich an. Ich habe eine Frage.", "weil-Satz", ["weil"], "Ich rufe dich an, weil ich eine Frage habe."],
    ["Er trägt eine Brille. Er kann besser lesen.", "damit-Satz", ["damit"], "Er trägt eine Brille, damit er besser lesen kann."],
    ["Ich mache Sport. Ich möchte fit bleiben.", "weil / damit", ["weil", "damit"], "Ich mache Sport, damit ich fit bleibe."],
    ["Wir kaufen Gemüse. Wir wollen gesund essen.", "damit-Satz", ["damit"], "Wir kaufen Gemüse, damit wir gesund essen."],
    ["Ich bleibe zu Hause. Ich warte auf ein Paket.", "weil-Satz", ["weil"], "Ich bleibe zu Hause, weil ich auf ein Paket warte."],
    ["Sie lernt viel. Die Prüfung ist schwer.", "weil-Satz", ["weil"], "Sie lernt viel, weil die Prüfung schwer ist."],
    ["Ich schreibe eine Liste. Ich vergesse nichts.", "damit-Satz", ["damit"], "Ich schreibe eine Liste, damit ich nichts vergesse."],
    ["Wir öffnen das Fenster. Es ist warm.", "weil-Satz", ["weil"], "Wir öffnen das Fenster, weil es warm ist."],
    ["Ich übe jeden Tag. Ich will besser schreiben.", "damit-Satz", ["damit"], "Ich übe jeden Tag, damit ich besser schreibe."],
    ["Er geht zum Arzt. Er hat Kopfschmerzen.", "weil-Satz", ["weil"], "Er geht zum Arzt, weil er Kopfschmerzen hat."],
    ["Ich nehme eine Jacke mit. Es kann kalt werden.", "weil-Satz", ["weil"], "Ich nehme eine Jacke mit, weil es kalt werden kann."],
    ["Sie liest Nachrichten. Sie möchte informiert sein.", "damit-Satz", ["damit"], "Sie liest Nachrichten, damit sie informiert ist."],
    ["Wir lernen zusammen. Die Aufgabe ist schwer.", "weil-Satz", ["weil"], "Wir lernen zusammen, weil die Aufgabe schwer ist."],
  ],
  B1: [
    ["Es regnet. Wir gehen spazieren.", "obwohl / trotzdem", ["obwohl", "trotzdem"], "Obwohl es regnet, gehen wir spazieren."],
    ["Ich hatte wenig Zeit. Ich habe den Text fertig geschrieben.", "obwohl / trotzdem", ["obwohl", "trotzdem"], "Obwohl ich wenig Zeit hatte, habe ich den Text fertig geschrieben."],
    ["Der Kurs ist teuer. Viele melden sich an.", "obwohl / trotzdem", ["obwohl", "trotzdem"], "Der Kurs ist teuer, trotzdem melden sich viele an."],
    ["Ich kenne die Stadt nicht. Ich finde den Weg.", "obwohl", ["obwohl"], "Obwohl ich die Stadt nicht kenne, finde ich den Weg."],
    ["Das Handy ist alt. Es funktioniert zuverlässig.", "obwohl / trotzdem", ["obwohl", "trotzdem"], "Das Handy ist alt, trotzdem funktioniert es zuverlässig."],
    ["Die Aufgabe war schwer. Sie hat Spaß gemacht.", "obwohl", ["obwohl"], "Obwohl die Aufgabe schwer war, hat sie Spaß gemacht."],
    ["Ich war nervös. Ich habe gut gesprochen.", "obwohl / trotzdem", ["obwohl", "trotzdem"], "Obwohl ich nervös war, habe ich gut gesprochen."],
    ["Viele Menschen sparen Energie. Die Preise steigen.", "obwohl / trotzdem", ["obwohl", "trotzdem"], "Obwohl viele Menschen Energie sparen, steigen die Preise."],
    ["Der Text ist lang. Er bleibt verständlich.", "obwohl", ["obwohl"], "Obwohl der Text lang ist, bleibt er verständlich."],
    ["Ich hatte Zweifel. Ich habe mich beworben.", "trotzdem", ["trotzdem"], "Ich hatte Zweifel, trotzdem habe ich mich beworben."],
    ["Der Zug war voll. Wir fanden Sitzplätze.", "obwohl", ["obwohl"], "Obwohl der Zug voll war, fanden wir Sitzplätze."],
    ["Die Wohnung ist klein. Sie wirkt gemütlich.", "obwohl", ["obwohl"], "Obwohl die Wohnung klein ist, wirkt sie gemütlich."],
    ["Er macht Fehler. Er spricht mutig weiter.", "obwohl", ["obwohl"], "Obwohl er Fehler macht, spricht er mutig weiter."],
    ["Das Thema ist kompliziert. Die Erklärung ist klar.", "obwohl", ["obwohl"], "Obwohl das Thema kompliziert ist, ist die Erklärung klar."],
    ["Wir waren müde. Wir arbeiteten weiter.", "trotzdem", ["trotzdem"], "Wir waren müde, trotzdem arbeiteten wir weiter."],
    ["Die App kostet Geld. Ich nutze sie gern.", "obwohl", ["obwohl"], "Obwohl die App Geld kostet, nutze ich sie gern."],
    ["Ich hatte Angst. Ich stellte eine Frage.", "trotzdem", ["trotzdem"], "Ich hatte Angst, trotzdem stellte ich eine Frage."],
    ["Der Plan war einfach. Er scheiterte.", "obwohl", ["obwohl"], "Obwohl der Plan einfach war, scheiterte er."],
  ],
  B2: [
    ["Viele Menschen nutzen das Auto. Die Luft wird schlechter.", "Passiv, Konjunktion oder nominale Struktur", ["dadurch", "wodurch", "aufgrund", "wird"], "Aufgrund der häufigen Autonutzung wird die Luftqualität verschlechtert."],
    ["Die Stadt investiert in Radwege. Der Verkehr soll sicherer werden.", "damit / Passiv", ["damit", "wird", "werden"], "Die Stadt investiert in Radwege, damit der Verkehr sicherer wird."],
    ["Unternehmen sammeln Daten. Verbraucher verlieren Kontrolle.", "wodurch / dadurch", ["wodurch", "dadurch"], "Unternehmen sammeln Daten, wodurch Verbraucher Kontrolle verlieren."],
    ["Die Nachfrage steigt. Nachhaltige Lösungen müssen schneller entwickelt werden.", "da-Satz / Passiv", ["da", "werden"], "Da die Nachfrage steigt, müssen nachhaltige Lösungen schneller entwickelt werden."],
    ["Viele arbeiten im Homeoffice. Innenstädte verändern sich.", "wodurch", ["wodurch"], "Viele arbeiten im Homeoffice, wodurch sich Innenstädte verändern."],
    ["Die Studie belegt den Effekt. Die Politik steht unter Druck.", "Partizip / dadurch", ["dadurch", "belegt", "unter druck"], "Durch den belegten Effekt steht die Politik unter Druck."],
    ["Die Kosten steigen. Familien werden belastet.", "Passiv / aufgrund", ["aufgrund", "werden", "wird"], "Aufgrund steigender Kosten werden Familien stärker belastet."],
    ["Digitale Medien sind überall verfügbar. Kinder nutzen sie häufiger.", "wodurch / infolgedessen", ["wodurch", "infolgedessen"], "Digitale Medien sind überall verfügbar, wodurch Kinder sie häufiger nutzen."],
    ["Der Vorschlag wurde kritisiert. Er bietet neue Chancen.", "obwohl / Passiv", ["obwohl", "wurde"], "Obwohl der Vorschlag kritisiert wurde, bietet er neue Chancen."],
    ["Die Regierung fördert erneuerbare Energien. Emissionen sollen sinken.", "damit / Passiv", ["damit", "sinken"], "Die Regierung fördert erneuerbare Energien, damit Emissionen sinken."],
    ["Viele Menschen fühlen sich unsicher. Die Debatte wird emotionaler.", "wodurch", ["wodurch"], "Viele Menschen fühlen sich unsicher, wodurch die Debatte emotionaler wird."],
    ["Das Angebot wurde erweitert. Mehr Lernende können teilnehmen.", "Passiv / sodass", ["wurde", "sodass"], "Das Angebot wurde erweitert, sodass mehr Lernende teilnehmen können."],
    ["Die Argumente sind widersprüchlich. Die Entscheidung fällt schwer.", "aufgrund", ["aufgrund"], "Aufgrund widersprüchlicher Argumente fällt die Entscheidung schwer."],
    ["Die Plattform ändert ihre Regeln. Nutzer müssen sich anpassen.", "wodurch", ["wodurch"], "Die Plattform ändert ihre Regeln, wodurch Nutzer sich anpassen müssen."],
    ["Die Technologie entwickelt sich rasant. Neue Kompetenzen werden nötig.", "da / dadurch", ["da", "dadurch"], "Da sich die Technologie rasant entwickelt, werden neue Kompetenzen nötig."],
    ["Der Text wurde überarbeitet. Die Argumentation ist klarer.", "Passiv / dadurch", ["wurde", "dadurch"], "Der Text wurde überarbeitet, dadurch ist die Argumentation klarer."],
    ["Mehr Grünflächen entstehen. Die Lebensqualität verbessert sich.", "wodurch", ["wodurch"], "Mehr Grünflächen entstehen, wodurch sich die Lebensqualität verbessert."],
    ["Die Frist ist knapp. Prioritäten müssen gesetzt werden.", "Passiv / aufgrund", ["aufgrund", "müssen", "werden"], "Aufgrund der knappen Frist müssen Prioritäten gesetzt werden."],
  ],
};

const partsBank = {
  A1: [
    ["Ordne den Satz.", ["Ich", "trinke", "heute", "Wasser."], ["heute"]],
    ["Ordne den Satz.", ["Wir", "gehen", "morgen", "ins Kino."], ["morgen"]],
    ["Ordne den Satz.", ["Sie", "kauft", "im Supermarkt", "Brot."], ["im Supermarkt"]],
    ["Ordne den Satz.", ["Der Lehrer", "erklärt", "die Aufgabe."], ["erklärt"]],
    ["Ordne den Satz.", ["Ich", "schreibe", "eine Nachricht."], ["schreibe"]],
    ["Ordne den Satz.", ["Meine Schwester", "liest", "ein Buch."], ["liest"]],
    ["Ordne den Satz.", ["Heute", "kochen", "wir", "Suppe."], ["Heute"]],
    ["Ordne den Satz.", ["Der Bus", "kommt", "um acht Uhr."], ["um acht Uhr"]],
    ["Ordne den Satz.", ["Ich", "höre", "gern", "Musik."], ["gern"]],
    ["Ordne den Satz.", ["Wir", "lernen", "Deutsch", "in der Schule."], ["Deutsch"]],
    ["Ordne den Satz.", ["Sie", "arbeitet", "am Nachmittag."], ["am Nachmittag"]],
    ["Ordne den Satz.", ["Mein Freund", "spielt", "Fußball."], ["spielt"]],
    ["Ordne den Satz.", ["Ich", "brauche", "einen Stift."], ["brauche"]],
    ["Ordne den Satz.", ["Das Kind", "malt", "ein Bild."], ["malt"]],
    ["Ordne den Satz.", ["Wir", "essen", "um sieben Uhr."], ["um sieben Uhr"]],
    ["Ordne den Satz.", ["Du", "kommst", "heute", "spät."], ["heute"]],
  ],
  A2: [
    ["Ordne den Satz mit Nebensatz.", ["Ich", "bleibe", "zu Hause,", "weil", "ich", "krank", "bin."], ["weil"]],
    ["Ordne den Satz mit Nebensatz.", ["Wir", "fahren", "früher los,", "damit", "wir", "pünktlich", "sind."], ["damit"]],
    ["Ordne den Satz.", ["Sie", "kauft", "Obst,", "weil", "sie", "gesund", "essen möchte."], ["weil"]],
    ["Ordne den Satz.", ["Ich", "lerne", "jeden Tag,", "damit", "ich", "besser", "spreche."], ["damit"]],
    ["Ordne den Satz.", ["Er", "nimmt", "eine Jacke mit,", "weil", "es", "kalt", "ist."], ["weil"]],
    ["Ordne den Satz.", ["Wir", "öffnen", "das Fenster,", "weil", "es", "warm", "ist."], ["weil"]],
    ["Ordne den Satz.", ["Ich", "rufe", "dich", "an,", "wenn", "ich", "Zeit habe."], ["wenn"]],
    ["Ordne den Satz.", ["Sie", "geht", "zum Arzt,", "weil", "sie", "Kopfschmerzen", "hat."], ["weil"]],
    ["Ordne den Satz.", ["Wir", "machen", "eine Liste,", "damit", "wir", "nichts", "vergessen."], ["damit"]],
    ["Ordne den Satz.", ["Ich", "nehme", "den Bus,", "weil", "mein Fahrrad", "kaputt", "ist."], ["weil"]],
    ["Ordne den Satz.", ["Er", "spart", "Geld,", "damit", "er", "reisen", "kann."], ["damit"]],
    ["Ordne den Satz.", ["Sie", "liest", "Nachrichten,", "damit", "sie", "informiert", "ist."], ["damit"]],
    ["Ordne den Satz.", ["Ich", "bin", "müde,", "deshalb", "gehe", "ich", "früh schlafen."], ["deshalb"]],
    ["Ordne den Satz.", ["Wir", "haben", "Hunger,", "deshalb", "kochen", "wir", "Nudeln."], ["deshalb"]],
    ["Ordne den Satz.", ["Der Kurs", "beginnt", "bald,", "deshalb", "beeilen", "wir", "uns."], ["deshalb"]],
    ["Ordne den Satz.", ["Ich", "übe", "viel,", "weil", "die Prüfung", "schwer", "ist."], ["weil"]],
  ],
  B1: [
    ["Ordne zwei verbundene Sätze.", ["Obwohl", "ich", "wenig Zeit habe,", "bereite", "ich", "mich", "gründlich", "vor."], ["Obwohl", "gründlich"]],
    ["Ordne den Satz.", ["Trotzdem", "meldete", "sie", "sich", "freiwillig", "für das Projekt."], ["Trotzdem"]],
    ["Ordne den Satz.", ["Weil", "der Text", "unklar war,", "überarbeitete", "ich", "die Einleitung."], ["Weil"]],
    ["Ordne den Satz.", ["Obwohl", "der Kurs", "teuer ist,", "nehmen", "viele", "daran", "teil."], ["Obwohl"]],
    ["Ordne den Satz.", ["Nachdem", "wir", "die Ergebnisse verglichen hatten,", "diskutierten", "wir", "die Lösung."], ["Nachdem"]],
    ["Ordne den Satz.", ["Während", "ich", "lernte,", "notierte", "ich", "wichtige", "Beispiele."], ["Während"]],
    ["Ordne den Satz.", ["Der Schüler,", "der", "oft übt,", "schreibt", "immer", "sicherer."], ["der"]],
    ["Ordne den Satz.", ["Die Erfahrung", "hat", "mir", "gezeigt,", "dass", "Geduld", "wichtig ist."], ["dass"]],
    ["Ordne den Satz.", ["Obwohl", "die Aufgabe", "schwierig war,", "fand", "ich", "eine Lösung."], ["Obwohl"]],
    ["Ordne den Satz.", ["Ich", "habe", "mich beworben,", "obwohl", "ich", "unsicher", "war."], ["obwohl"]],
    ["Ordne den Satz.", ["Der Vortrag", "war", "spannend,", "deshalb", "stellten", "wir", "viele Fragen."], ["deshalb"]],
    ["Ordne den Satz.", ["Wenn", "ich", "mehr Zeit hätte,", "würde", "ich", "länger", "üben."], ["Wenn", "würde"]],
    ["Ordne den Satz.", ["Die Stadt,", "in der", "ich wohne,", "ist", "sehr", "lebendig."], ["in der"]],
    ["Ordne den Satz.", ["Da", "die Preise steigen,", "achten", "viele", "auf", "ihre Ausgaben."], ["Da"]],
    ["Ordne den Satz.", ["Ich", "finde", "es wichtig,", "dass", "man", "Fehler", "erklärt."], ["dass"]],
    ["Ordne den Satz.", ["Trotz", "des Regens", "blieben", "wir", "lange", "draußen."], ["Trotz"]],
  ],
  B2: [
    ["Ordne den komplexen Satz.", ["Da", "die Nachfrage steigt,", "müssen", "nachhaltige Lösungen", "schneller", "entwickelt", "werden."], ["Da", "entwickelt"]],
    ["Ordne den Satz.", ["Aufgrund", "steigender Kosten", "werden", "viele Familien", "stärker", "belastet."], ["Aufgrund", "werden"]],
    ["Ordne den Satz.", ["Die Studie", "legt nahe,", "dass", "regelmäßige Bewegung", "die Konzentration", "fördert."], ["legt nahe", "dass"]],
    ["Ordne den Satz.", ["Obwohl", "der Vorschlag", "kritisiert wurde,", "bietet", "er", "neue Chancen."], ["Obwohl", "wurde"]],
    ["Ordne den Satz.", ["Durch", "gezielte Förderung", "können", "Lernende", "nachhaltig", "unterstützt", "werden."], ["Durch", "werden"]],
    ["Ordne den Satz.", ["Die Plattform", "ändert", "ihre Regeln,", "wodurch", "Nutzer", "sich", "anpassen müssen."], ["wodurch"]],
    ["Ordne den Satz.", ["Je", "klarer", "ein Argument ist,", "desto", "überzeugender", "wirkt", "der Text."], ["Je", "desto"]],
    ["Ordne den Satz.", ["Anstatt", "nur Fakten zu nennen,", "sollte", "man", "sie", "kritisch", "einordnen."], ["Anstatt"]],
    ["Ordne den Satz.", ["Der Bericht", "benennt", "mehrere Ursachen,", "die", "bisher", "kaum", "beachtet wurden."], ["die", "wurden"]],
    ["Ordne den Satz.", ["Sobald", "die Daten", "ausgewertet sind,", "kann", "eine Entscheidung", "getroffen", "werden."], ["Sobald", "werden"]],
    ["Ordne den Satz.", ["Nicht nur", "die Kosten,", "sondern auch", "die Folgen", "müssen", "berücksichtigt", "werden."], ["Nicht nur", "sondern auch"]],
    ["Ordne den Satz.", ["Die Maßnahme", "ist", "sinnvoll,", "sofern", "sie", "konsequent", "umgesetzt wird."], ["sofern", "wird"]],
    ["Ordne den Satz.", ["Indem", "man", "Beispiele nennt,", "wird", "die Argumentation", "anschaulicher."], ["Indem", "wird"]],
    ["Ordne den Satz.", ["Der Ansatz", "scheint", "vielversprechend,", "dennoch", "bleiben", "einige Risiken."], ["dennoch"]],
    ["Ordne den Satz.", ["Wegen", "lückenhafter Daten", "lässt sich", "das Ergebnis", "nur vorsichtig", "bewerten."], ["Wegen"]],
    ["Ordne den Satz.", ["Die Entscheidung", "wäre", "überzeugender,", "wenn", "sie", "besser", "begründet wäre."], ["wäre", "wenn"]],
  ],
};

function makeWordTasks() {
  const expandedRows = { A1: [], A2: [], B1: [], B2: [] };
  extraWeakWordRows.forEach(([level, sentence, weak, answers, hint]) => {
    expandedRows[level].push([sentence, weak, answers, hint]);
  });
  return Object.fromEntries(
    Object.entries(weakWordBank).map(([level, rows]) => [
      level,
      [...rows, ...expandedRows[level]].map(([sentence, weak, answers, hint], index) => ({
        id: `${level}-word-${index}`,
        mode: "word",
        sentence,
        weak,
        answers,
        hint,
      })),
    ]),
  );
}

function makeStructureTasks() {
  return Object.fromEntries(
    Object.entries(structureBank).map(([level, rows]) => [
      level,
      rows.map(([sentence, target, accepted, sample], index) => ({
        id: `${level}-structure-${index}`,
        mode: "structure",
        sentence,
        target,
        accepted,
        sample,
      })),
    ]),
  );
}

function makePartsTasks() {
  return Object.fromEntries(
    Object.entries(partsBank).map(([level, rows]) => [
      level,
      rows.map(([prompt, solution, bonus], index) => ({
        id: `${level}-parts-${index}`,
        mode: "parts",
        prompt,
        parts: solution,
        solution,
        bonus,
      })),
    ]),
  );
}

const taskBanks = {
  word: makeWordTasks(),
  structure: makeStructureTasks(),
  parts: makePartsTasks(),
};

const totalTaskCount = Object.values(taskBanks).reduce(
  (sum, bank) => sum + Object.values(bank).reduce((inner, tasks) => inner + tasks.length, 0),
  0,
);

const state = {
  level: "A1",
  mode: "word",
  players: [{ name: "Carla", score: 0, history: [] }],
  currentPlayerIndex: 0,
  round: 1,
  roundsPerPlayer: 8,
  maxTurns: 8,
  turn: 1,
  startedAt: Date.now(),
  taskStartedAt: Date.now(),
  currentTask: null,
  selectedParts: [],
  roundAwarded: false,
  taskQueue: [],
  gameStarted: false,
  summarySaved: false,
};

const els = {
  setupPanel: document.querySelector("#setupPanel"),
  playerCount: document.querySelector("#playerCount"),
  playerNameFields: document.querySelector("#playerNameFields"),
  roundCount: document.querySelector("#roundCount"),
  startGameBtn: document.querySelector("#startGameBtn"),
  savedGames: document.querySelector("#savedGames"),
  currentPlayer: document.querySelector("#currentPlayer"),
  turnPlayer: document.querySelector("#turnPlayer"),
  turnInfo: document.querySelector("#turnInfo"),
  playerBoard: document.querySelector("#playerBoard"),
  score: document.querySelector("#score"),
  round: document.querySelector("#round"),
  timer: document.querySelector("#timer"),
  levelLabel: document.querySelector("#levelLabel"),
  levelDescription: document.querySelector("#levelDescription"),
  vocabBar: document.querySelector("#vocabBar"),
  structureBar: document.querySelector("#structureBar"),
  speedBar: document.querySelector("#speedBar"),
  pointLog: document.querySelector("#pointLog"),
  modeKicker: document.querySelector("#modeKicker"),
  modeTitle: document.querySelector("#modeTitle"),
  targetBadge: document.querySelector("#targetBadge"),
  promptText: document.querySelector("#promptText"),
  wordTask: document.querySelector("#wordTask"),
  structureTask: document.querySelector("#structureTask"),
  partsTask: document.querySelector("#partsTask"),
  answerInput: document.querySelector("#answerInput"),
  structureInput: document.querySelector("#structureInput"),
  structureTargets: document.querySelector("#structureTargets"),
  hintText: document.querySelector("#hintText"),
  feedback: document.querySelector("#feedback"),
  partsBank: document.querySelector("#partsBank"),
  sentenceBuild: document.querySelector("#sentenceBuild"),
  summaryPanel: document.querySelector("#summaryPanel"),
  summaryContent: document.querySelector("#summaryContent"),
};

function currentPlayer() {
  return state.players[state.currentPlayerIndex];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[.!?,;:]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function buildPlayerInputs() {
  const count = Number(els.playerCount.value);
  const existing = [...els.playerNameFields.querySelectorAll("input")].map((input) => input.value);
  els.playerNameFields.innerHTML = "";
  for (let index = 0; index < count; index += 1) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = existing[index] || ["Carla", "Mika", "Lena", "Tom", "Nora", "Ben"][index] || `Spieler ${index + 1}`;
    input.placeholder = `Name Spieler ${index + 1}`;
    input.setAttribute("aria-label", `Name Spieler ${index + 1}`);
    els.playerNameFields.append(input);
  }
}

function rebuildTaskQueue() {
  const source = taskBanks[state.mode][state.level];
  state.taskQueue = shuffle(source);
}

function drawTask() {
  if (!state.taskQueue.length) rebuildTaskQueue();
  return state.taskQueue.shift();
}

function updateChrome() {
  const info = levelInfo[state.level];
  const player = currentPlayer();
  els.currentPlayer.textContent = player.name;
  els.turnPlayer.textContent = player.name;
  els.turnInfo.textContent = `Zug ${state.turn}/${state.maxTurns} · Runde ${state.round}/${state.roundsPerPlayer}`;
  els.score.textContent = String(player.score);
  els.round.textContent = `${state.round}/${state.roundsPerPlayer}`;
  els.levelLabel.textContent = state.level;
  els.levelDescription.textContent = `${info.description} ${totalTaskCount} Aufgaben sind eingebaut.`;
  els.vocabBar.style.width = `${info.vocab}%`;
  els.structureBar.style.width = `${info.structure}%`;
  els.speedBar.style.width = `${info.speed}%`;
  els.modeKicker.textContent = modeMeta[state.mode].kicker;
  els.modeTitle.textContent = modeMeta[state.mode].title;

  document.querySelectorAll(".level-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.level === state.level);
  });
  document.querySelectorAll(".mode-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });

  renderPlayerBoard();
}

function renderPlayerBoard() {
  els.playerBoard.innerHTML = state.players
    .map(
      (player, index) => `
        <li class="${index === state.currentPlayerIndex ? "is-active" : ""}">
          <span>${index + 1}. ${player.name}</span>
          <strong>${player.score} P</strong>
        </li>
      `,
    )
    .join("");
}

function readSavedGames() {
  try {
    return JSON.parse(window.localStorage.getItem("wortwechselGames") || "[]");
  } catch {
    return [];
  }
}

function renderSavedGames() {
  const games = readSavedGames();
  els.savedGames.innerHTML = games.length
    ? games
        .slice(0, 5)
        .map((game) => `<li><strong>${game.winner}</strong> gewann mit ${game.score} Punkten<br>${game.date} · ${game.level} · ${game.mode}</li>`)
        .join("")
    : "<li>Noch keine gespeicherten Spiele.</li>";
}

function saveGameRecord(ranking) {
  const winner = ranking[0];
  const record = {
    date: new Date().toLocaleDateString("de-DE"),
    winner: winner.name,
    score: winner.score,
    level: state.level,
    mode: modeMeta[state.mode].title,
  };
  try {
    window.localStorage.setItem("wortwechselGames", JSON.stringify([record, ...readSavedGames()].slice(0, 8)));
  } catch {
    // Browsers can block storage for local files; the game should still finish normally.
  }
}

function setFeedback(kind, title, message) {
  els.feedback.className = `feedback ${kind ? `is-${kind}` : ""}`;
  els.feedback.innerHTML = `<h3>${title}</h3><p>${message}</p>`;
}

function renderPointLog() {
  const items = currentPlayer().history.slice(-4).reverse();
  els.pointLog.innerHTML = items.length
    ? items.map((entry) => `<li>${entry.points > 0 ? "+" : ""}${entry.points} Punkte · ${entry.note}</li>`).join("")
    : "<li>Für diese Person gibt es noch keine Punkte.</li>";
}

function renderTask() {
  state.currentTask = drawTask();
  state.selectedParts = [];
  state.roundAwarded = false;
  state.taskStartedAt = Date.now();
  els.answerInput.value = "";
  els.structureInput.value = "";
  els.hintText.textContent = "";
  els.summaryPanel.classList.add("is-hidden");
  els.wordTask.classList.toggle("is-hidden", state.mode !== "word");
  els.structureTask.classList.toggle("is-hidden", state.mode !== "structure");
  els.partsTask.classList.toggle("is-hidden", state.mode !== "parts");

  if (state.mode === "word") {
    els.promptText.textContent = state.currentTask.sentence;
    els.targetBadge.textContent = `schwaches Wort: ${state.currentTask.weak}`;
  }

  if (state.mode === "structure") {
    els.promptText.textContent = state.currentTask.sentence;
    els.targetBadge.textContent = `Ziel: ${state.currentTask.target}`;
    els.structureTargets.innerHTML = state.currentTask.accepted
      .map((item) => `<span class="chip">${item}</span>`)
      .join("");
  }

  if (state.mode === "parts") {
    els.promptText.textContent = state.currentTask.prompt;
    els.targetBadge.textContent = `Satzteile: ${state.currentTask.parts.length}`;
    els.partsBank.innerHTML = shuffle(state.currentTask.parts)
      .map((part, index) => `<button class="part-chip" type="button" data-index="${index}" data-part="${part}">${part}</button>`)
      .join("");
    els.sentenceBuild.innerHTML = "";
  }

  setFeedback("", "Feedback", `${currentPlayer().name} ist dran. Nach dem Prüfen geht es mit "Nächste Aufgabe" zur nächsten Person.`);
  renderPointLog();
  updateChrome();
}

function addHistory(points, note, detail) {
  currentPlayer().history.push({
    mode: state.mode,
    level: state.level,
    task: state.currentTask.id,
    prompt: state.currentTask.sentence || state.currentTask.prompt,
    points,
    note,
    detail,
    time: formatTime(Date.now() - state.taskStartedAt),
  });
  renderPointLog();
}

function award(points) {
  if (state.roundAwarded || points <= 0) return 0;
  currentPlayer().score += points;
  state.roundAwarded = true;
  return points;
}

function extractMeaningWords(text) {
  const stopWords = new Set([
    "ich",
    "du",
    "er",
    "sie",
    "es",
    "wir",
    "ihr",
    "der",
    "die",
    "das",
    "den",
    "dem",
    "ein",
    "eine",
    "einen",
    "und",
    "oder",
    "aber",
    "zu",
    "in",
    "im",
    "am",
    "auf",
    "mit",
    "für",
    "von",
  ]);
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

function overlapRatio(source, answer) {
  const sourceWords = [...new Set(extractMeaningWords(source))];
  const answerWords = new Set(extractMeaningWords(answer));
  if (!sourceWords.length) return 0;
  return sourceWords.filter((word) => answerWords.has(word)).length / sourceWords.length;
}

function detectStructure(answer, accepted) {
  const normalized = normalize(answer);
  const hits = accepted.filter((item) => normalized.includes(normalize(item)));
  const signals = {
    weil: /\bweil\b.+\b(bin|ist|sind|war|waren|habe|hat|haben|möchte|will|kann|können|muss|müssen)\b\.?$/i.test(answer.trim()),
    obwohl: /\bobwohl\b.+,/.test(normalized) || normalized.includes("obwohl"),
    trotzdem: normalized.includes("trotzdem"),
    damit: normalized.includes("damit"),
    passiv: /\b(wird|werden|wurde|wurden)\b.+\b(t|en)\b/.test(normalized),
    nominal: normalized.includes("aufgrund") || normalized.includes("durch") || normalized.includes("wegen"),
  };
  const advancedHit = signals.passiv || signals.nominal || normalized.includes("wodurch") || normalized.includes("dadurch");
  return { hits, signals, advancedHit };
}

async function scoreStructureWithAi(task, answer) {
  if (typeof window.WORTWECHSEL_AI_SCORER === "function") {
    return window.WORTWECHSEL_AI_SCORER({
      level: state.level,
      source: task.sentence,
      target: task.target,
      accepted: task.accepted,
      sample: task.sample,
      answer,
    });
  }

  if (window.WORTWECHSEL_AI_ENDPOINT) {
    const response = await fetch(window.WORTWECHSEL_AI_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        level: state.level,
        source: task.sentence,
        target: task.target,
        accepted: task.accepted,
        sample: task.sample,
        answer,
      }),
    });
    if (response.ok) return response.json();
  }

  const normalizedAnswer = normalize(answer);
  const meaning = overlapRatio(task.sentence, answer);
  const structure = detectStructure(answer, task.accepted);
  const hasEnoughLength = normalizedAnswer.split(" ").length >= Math.min(5, normalize(task.sample).split(" ").length - 2);
  const preservesMeaning = meaning >= 0.35 || state.level === "B2";
  const usesTarget = structure.hits.length > 0 || (state.level === "B2" && structure.advancedHit);
  const score = usesTarget && preservesMeaning && hasEnoughLength ? Math.min(3, 1 + structure.hits.length + (structure.advancedHit ? 1 : 0)) : 0;
  const feedback = score
    ? "Die Antwort passt zur Zielstruktur und erhält den Sinn weitgehend."
    : "Die Antwort braucht die Zielstruktur deutlicher oder muss den Inhalt näher am Ausgangssatz halten.";
  const advice = structure.hits.length
    ? `Erkannte Struktur: ${structure.hits.join(", ")}.`
    : `Mögliche Lösung: ${task.sample}`;

  return {
    score,
    ok: score > 0,
    feedback,
    advice,
  };
}

function advanceTurn() {
  if (state.turn >= state.maxTurns) {
    showSummary();
    return;
  }

  state.turn += 1;
  state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.players.length;
  state.round = Math.floor((state.turn - 1) / state.players.length) + 1;
  renderTask();
}

function checkWordTask() {
  const task = state.currentTask;
  const guesses = els.answerInput.value
    .split(/[,;\n]/)
    .map(normalize)
    .filter(Boolean);
  const accepted = task.answers.map(normalize);
  const uniqueMatches = [...new Set(guesses.filter((guess) => accepted.includes(guess)))];
  const points = uniqueMatches.length;

  if (points > 0) {
    if (state.roundAwarded) {
      setFeedback("good", "Schon bewertet", "Diese Runde hat bereits Punkte bekommen. Drücke \"Nächste Aufgabe\", wenn du weiterspielen möchtest.");
      return;
    }
    const awarded = award(points);
    addHistory(awarded, `gute Ersatzwörter für "${task.weak}"`, uniqueMatches.join(", "));
    setFeedback("good", "Gut getroffen", `${currentPlayer().name} bekommt ${awarded} Punkt(e): ${uniqueMatches.join(", ")}.`);
  } else {
    addHistory(0, `noch kein starkes Wort für "${task.weak}"`, els.answerInput.value || "leer");
    setFeedback("bad", "Noch nicht genau genug", `Mögliche Lösungen wären: ${task.answers.slice(0, 4).join(", ")}.`);
  }
}

async function checkStructureTask() {
  const task = state.currentTask;
  const answer = els.structureInput.value.trim();

  if (!answer) {
    addHistory(0, `Zielstruktur fehlt: ${task.target}`, "leer");
    setFeedback("bad", "Noch keine Antwort", `Schreibe einen neuen Satz mit ${task.target}. Beispiel: ${task.sample}`);
    return;
  }

  try {
    const result = await scoreStructureWithAi(task, answer);
    const points = Math.max(0, Math.min(3, Number(result.score) || 0));

    if (points > 0) {
      if (state.roundAwarded) {
        setFeedback("good", "Schon bewertet", "Diese Runde hat bereits Punkte bekommen. Drücke \"Nächste Aufgabe\", wenn du weiterspielen möchtest.");
        return;
      }
      const awarded = award(points);
      addHistory(awarded, `KI-Score: ${points}/3`, answer);
      setFeedback("good", "KI-Feedback", `${currentPlayer().name} bekommt ${awarded} Punkt(e). ${result.feedback} ${result.advice}`);
      return;
    }

    addHistory(0, `KI-Score: 0/3`, answer);
    setFeedback("bad", "KI-Feedback", `${result.feedback} ${result.advice}`);
  } catch (error) {
    if (state.roundAwarded) {
      setFeedback("good", "Schon bewertet", "Diese Runde hat bereits Punkte bekommen. Drücke \"Nächste Aufgabe\", wenn du weiterspielen möchtest.");
      return;
    }
    addHistory(0, "KI-Score nicht erreichbar", answer);
    setFeedback("bad", "KI nicht erreichbar", `Die externe Bewertung konnte nicht geladen werden. Beispiel: ${task.sample}`);
  }
}

function checkPartsTask() {
  const task = state.currentTask;
  const joined = state.selectedParts.join(" ");
  const solution = task.solution.join(" ");
  const isCorrect = joined === solution;
  const elapsed = Date.now() - state.taskStartedAt;
  const speedBonus = elapsed < 45000 ? 1 : 0;
  const bonusHits = task.bonus.filter((word) => joined.includes(word)).length;
  const points = isCorrect ? 1 + speedBonus + Math.min(1, bonusHits) : 0;

  if (isCorrect) {
    if (state.roundAwarded) {
      setFeedback("good", "Schon bewertet", "Diese Runde hat bereits Punkte bekommen. Drücke \"Nächste Aufgabe\", wenn du weiterspielen möchtest.");
      return;
    }
    const awarded = award(points);
    addHistory(awarded, "Satzteile richtig geordnet", joined);
    setFeedback("good", "Richtig geordnet", `${currentPlayer().name} bekommt ${awarded} Punkt(e). ${speedBonus ? "Tempo-Bonus erhalten." : ""}`);
  } else {
    addHistory(0, "Satzteile noch falsch", joined || "leer");
    setFeedback("bad", "Reihenfolge prüfen", `Richtige Lösung: ${solution}`);
  }
}

function showSummary() {
  const ranking = [...state.players].sort((a, b) => b.score - a.score);
  const winner = ranking[0];
  if (!state.summarySaved) {
    saveGameRecord(ranking);
    state.summarySaved = true;
  }
  renderSavedGames();
  const missed = state.players.flatMap((player) =>
    player.history.filter((entry) => entry.points === 0).map((entry) => ({ ...entry, player: player.name })),
  );
  const suggestions = [];

  if (missed.some((entry) => entry.mode === "word")) suggestions.push("Wortschatz: Achtet darauf, nicht nur stärkere, sondern auch genauere Wörter zu wählen.");
  if (missed.some((entry) => entry.mode === "structure")) suggestions.push("Satzstruktur: Bei Nebensätzen steht das konjugierte Verb oft am Ende.");
  if (missed.some((entry) => entry.mode === "parts")) suggestions.push("Satzbau: Sucht zuerst Subjekt und Verb, danach Konnektoren und Ergänzungen.");
  if (!suggestions.length) suggestions.push("Alle haben sehr sauber gespielt: starke Wortwahl, klare Struktur und gute Satzlogik.");

  els.summaryContent.innerHTML = `
    <div class="summary-grid">
      <div><span>Gewinner</span><strong>${winner.name}</strong></div>
      <div><span>Beste Punktzahl</span><strong>${winner.score}</strong></div>
      <div><span>Spielzeit</span><strong>${formatTime(Date.now() - state.startedAt)}</strong></div>
    </div>
    <ol class="ranking-list">
      ${ranking.map((player, index) => `<li><span>${index + 1}. ${player.name}</span><strong>${player.score} Punkte</strong></li>`).join("")}
    </ol>
    <ul>${suggestions.map((item) => `<li>${item}</li>`).join("")}</ul>
    <h3>Spielprotokoll</h3>
    <ul class="history-list">
      ${state.players
        .flatMap((player) =>
          player.history.slice(-5).map((entry) => `<li><strong>${player.name}</strong> · ${entry.points} P · ${entry.note}<br>${entry.prompt}</li>`),
        )
        .join("")}
    </ul>
  `;
  els.summaryPanel.classList.remove("is-hidden");
  els.summaryPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function startGame() {
  const names = [...els.playerNameFields.querySelectorAll("input")]
    .map((input, index) => input.value.trim() || `Spieler ${index + 1}`)
    .slice(0, Number(els.playerCount.value));

  state.players = names.map((name) => ({ name, score: 0, history: [] }));
  state.currentPlayerIndex = 0;
  state.roundsPerPlayer = Number(els.roundCount.value);
  state.maxTurns = state.roundsPerPlayer * state.players.length;
  state.round = 1;
  state.turn = 1;
  state.startedAt = Date.now();
  state.taskStartedAt = Date.now();
  state.gameStarted = true;
  state.summarySaved = false;
  document.body.classList.add("is-playing");
  els.setupPanel.classList.add("is-hidden");
  rebuildTaskQueue();
  renderTask();
}

function resetToSetup() {
  state.gameStarted = false;
  document.body.classList.remove("is-playing");
  els.setupPanel.classList.remove("is-hidden");
  els.summaryPanel.classList.add("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderSavedGames();
}

document.querySelectorAll(".level-btn").forEach((button) => {
  button.addEventListener("click", () => {
    state.level = button.dataset.level;
    rebuildTaskQueue();
    if (state.gameStarted) renderTask();
    updateChrome();
  });
});

document.querySelectorAll(".mode-btn").forEach((button) => {
  button.addEventListener("click", () => {
    state.mode = button.dataset.mode;
    rebuildTaskQueue();
    if (state.gameStarted) renderTask();
    updateChrome();
  });
});

els.playerCount.addEventListener("change", buildPlayerInputs);
els.startGameBtn.addEventListener("click", startGame);
document.querySelector("#newGameBtn").addEventListener("click", resetToSetup);
document.querySelector("#restartBtn").addEventListener("click", resetToSetup);
document.querySelector("#skipBtn").addEventListener("click", advanceTurn);
document.querySelector("#hintBtn").addEventListener("click", () => {
  els.hintText.textContent = state.currentTask.hint;
});
document.querySelector("#clearPartsBtn").addEventListener("click", () => {
  state.selectedParts = [];
  els.sentenceBuild.innerHTML = "";
  els.partsBank.querySelectorAll(".part-chip").forEach((button) => {
    button.disabled = false;
  });
  setFeedback("", "Zurückgesetzt", `${currentPlayer().name} kann dieselbe Aufgabe noch einmal ordnen.`);
});

document.querySelector("#checkBtn").addEventListener("click", async () => {
  if (!state.gameStarted) return;
  const checkButton = document.querySelector("#checkBtn");
  checkButton.disabled = true;
  if (state.mode === "word") checkWordTask();
  if (state.mode === "structure") await checkStructureTask();
  if (state.mode === "parts") checkPartsTask();
  updateChrome();
  checkButton.disabled = false;
});

els.partsBank.addEventListener("click", (event) => {
  const button = event.target.closest(".part-chip");
  if (!button || button.disabled) return;
  const part = button.dataset.part;
  state.selectedParts.push(part);
  button.disabled = true;
  const chip = document.createElement("span");
  chip.className = "part-chip";
  chip.textContent = part;
  els.sentenceBuild.append(chip);
});

setInterval(() => {
  els.timer.textContent = formatTime(Date.now() - state.startedAt);
}, 1000);

buildPlayerInputs();
renderSavedGames();
rebuildTaskQueue();
renderTask();
resetToSetup();

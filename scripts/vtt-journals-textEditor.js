export class VTTJournalTextEditor extends TextEditor {

  static async enrichHTML(content, options={}) {
      super.enrichHTML(content, options);
  }

  static _createTornPaperBlock = function (match) {
    //Get a random value
    console.log(match)
      const a = document.createElement("div");
      a.setAttribute('class', 'block-torn-paper');
      a.innerHTML = match[2];
      if (game.user.isGM == false ) a.innerHTML = '';
      return a;
  };

  static _createGmSecretBlock = function (match) {
      //Get a random value
      console.log(match)
        const a = document.createElement("div");
        a.setAttribute('class', 'gm-secret');
        // a.setAttribute('tabindex', '0');
        // match = String(match).substring(8, match.length - 1);
        a.innerHTML = match[2];
        if (game.user.isGM == false ) a.innerHTML = '';
        return a;
    };

}
import { VTTJournalTextEditor } from "./scripts/vtt-journals-textEditor.js";

game.vttJournal = VTTJournalTextEditor;

Hooks.once('ready', () => {
  CONFIG.TextEditor.enrichers = [
    {
      pattern: `<p>@block-torn-paper<\/p>[\n\r]?<blockquote>(.*?)<\/blockquote>`,
      // enricher: VTTJournalTextEditor._createTornPaperBlock
      enricher: async (match, enrichOpts) => {
        console.log("BLOCK TORN PAPER - match: ", match)
        const d = document.createElement("div");
        d.setAttribute('class', 'block-torn-paper');
        d.innerHTML = match[1];
        return a;
      }
    },
    {
      pattern: `@Page\\[([A-Za-z0-9]{16})\\]{(.*?)}`,
      enricher: async (match, enrichOpts) => {
        console.log("LINK FORMATTING - match: ", match)
        const a = document.createElement("a");
        const i = document.createElement("i");

        const parentId = enrichOpts.relativeTo.parent.id;
        const targetName = enrichOpts.relativeTo.parent.pages.get(match[1]).name;

        a.className = "content-link";
        a.dataset.uuid = `JournalEntry.${parentId}.JournalEntryPage.${match[1]}`;
        a.dataset.id = match[1];
        a.dataset.type = "JournalEntryPage";
        a.dataset.tooltip = targetName;
        a.dataset.args = "";
        a.innerText = match[2]
        a.style = `color: #b22c2c; font-weight: 900; background: transparent; border: none; padding: 0; border-radius: 0;`;

        i.className = "fas fa-link";
        i.style = "margin-right: 0.25rem;"
        a.prepend(i);

        return a;
      }
    },
    ...CONFIG.TextEditor.enrichers
  ];
});

/* 
SOURCE: https://discord.com/channels/170995199584108546/722559135371231352/1071818432867221664
Hooks.on('ready',() => {
    CONFIG.TextEditor.enrichers = [
        {
            pattern: `@Page\\[([A-Za-z0-9]{16})\\]{(.*?)}`,
            enricher : async (match, enrichOpts) => {
                const a = document.createElement("a");
                const i = document.createElement("i");

                const parentId = enrichOpts.relativeTo.parent.id;
                const targetName = enrichOpts.relativeTo.parent.pages.get(match[1]).name;

                a.className = "content-link";
                a.dataset.uuid = `JournalEntry.${parentId}.JournalEntryPage.${match[1]}`;
                a.dataset.id = match[1];
                a.dataset.type = "JournalEntryPage";
                a.dataset.tooltip = targetName;
                a.dataset.args = "";
                a.innerText = match[2]
                a.style = `color: #b22c2c; font-weight: 900; background: transparent; border: none; padding: 0; border-radius: 0;`;

                i.className = "fas fa-link";
                i.style = "margin-right: 0.25rem;"
                a.prepend(i);

                return a;
            }
        },
        ...CONFIG.TextEditor.enrichers
    ]
});
*/
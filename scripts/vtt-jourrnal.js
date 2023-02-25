/**
 * Registers the report on chatmessage
 */
import {VTTJournalTextEditor} from "./vtt-journals-textEditor.js";

game.vttJournal = VTTJournalTextEditor;

Hooks.once('init', () => {
  const vttJournalRegex = new RegExp(
    `<p>@(block-torn-paper)<\/p>[\n\r]?<blockquote>(.*?)<\/blockquote>`,"gmsi");
  CONFIG.TextEditor.enrichers.push({pattern:vttJournalRegex, enricher:VTTJournalTextEditor._createTornPaper});
});
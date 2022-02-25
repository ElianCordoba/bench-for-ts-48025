import { CharacterCodes, codePointAt, isIdentifierStart, isLineBreak, isWhiteSpaceSingleLine } from "../utils";

export function scan(text: string) {
  let pos = 0;
  let end = text.length;

  while (true) {
    if (pos >= end) {
      return;
    }

    const ch = codePointAt(text, pos)
    pos++

    const identifierKind = isIdentifierStart(ch);
    if (identifierKind) {
      return;
    }

    if (ch === CharacterCodes.space) {
      return;
    }

    switch (ch) {
      case CharacterCodes.lineFeed:
      case CharacterCodes.carriageReturn:
        return;
      case CharacterCodes._0:
        return;
      case CharacterCodes._1:
      case CharacterCodes._2:
      case CharacterCodes._3:
      case CharacterCodes._4:
      case CharacterCodes._5:
      case CharacterCodes._6:
      case CharacterCodes._7:
      case CharacterCodes._8:
      case CharacterCodes._9:
        return;
      case CharacterCodes.slash:
        return;
      case CharacterCodes.dot:
        return;
      case CharacterCodes.comma:
        return;
      case CharacterCodes.asterisk:
        return;
      case CharacterCodes.openParen:
        return;
      case CharacterCodes.closeParen:
        return;
      case CharacterCodes.colon:
        return;
      case CharacterCodes.semicolon:
        return;
      case CharacterCodes.doubleQuote:
      case CharacterCodes.singleQuote:
        return;
      case CharacterCodes.equals:
        return;
      case CharacterCodes.openBrace:
        return;
      case CharacterCodes.closeBrace:
        return;
      case CharacterCodes.minus:
        return;
      case CharacterCodes.greaterThan:
        return;
      case CharacterCodes.bar:
        return;
      case CharacterCodes.openBracket:
        return;
      case CharacterCodes.closeBracket:
        return;
      case CharacterCodes.lessThan:
        return;
      case CharacterCodes.backtick:
        return;
      case CharacterCodes.question:
        return;
      case CharacterCodes.plus:
        return;
      case CharacterCodes.at:
        return;
      case CharacterCodes.ampersand:
        return;
      case CharacterCodes.caret:
        return;
      case CharacterCodes.backslash:
        return;
      case CharacterCodes.exclamation:
        return;
      case CharacterCodes.percent:
        return;
      case CharacterCodes.hash:
        return;
      case CharacterCodes.tilde:
        return
      default:
        if (isWhiteSpaceSingleLine(ch)) {
          continue;
        }
        else if (isLineBreak(ch)) {
          continue;
        }
        return;
    }
  }
}
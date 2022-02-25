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

        if (ch === CharacterCodes.hash) {
            return
        }

        switch (ch) {
            case CharacterCodes.lineFeed:
            case CharacterCodes.carriageReturn:
                return;
            case CharacterCodes.tab:
            case CharacterCodes.verticalTab:
            case CharacterCodes.formFeed:
            case CharacterCodes.space:
            case CharacterCodes.nonBreakingSpace:
            case CharacterCodes.ogham:
            case CharacterCodes.enQuad:
            case CharacterCodes.emQuad:
            case CharacterCodes.enSpace:
            case CharacterCodes.emSpace:
            case CharacterCodes.threePerEmSpace:
            case CharacterCodes.fourPerEmSpace:
            case CharacterCodes.sixPerEmSpace:
            case CharacterCodes.figureSpace:
            case CharacterCodes.punctuationSpace:
            case CharacterCodes.thinSpace:
            case CharacterCodes.hairSpace:
            case CharacterCodes.zeroWidthSpace:
            case CharacterCodes.narrowNoBreakSpace:
            case CharacterCodes.mathematicalSpace:
            case CharacterCodes.ideographicSpace:
            case CharacterCodes.byteOrderMark:
                return;
            case CharacterCodes.exclamation:
                return;
            case CharacterCodes.doubleQuote:
            case CharacterCodes.singleQuote:
                return;
            case CharacterCodes.backtick:
                return;
            case CharacterCodes.percent:
                return;
            case CharacterCodes.ampersand:
                return;
            case CharacterCodes.openParen:
                return;
            case CharacterCodes.closeParen:
                return;
            case CharacterCodes.asterisk:
                return;
            case CharacterCodes.plus:
                return;
            case CharacterCodes.comma:
                return;
            case CharacterCodes.minus:
                return;
            case CharacterCodes.dot:
                return;
            case CharacterCodes.slash:
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
            case CharacterCodes.colon:
                return;
            case CharacterCodes.semicolon:
                return;
            case CharacterCodes.lessThan:
                return;
            case CharacterCodes.equals:
                return;
            case CharacterCodes.greaterThan:
                return;
            case CharacterCodes.question:
                return;
            case CharacterCodes.openBracket:
                return;
            case CharacterCodes.closeBracket:
                return;
            case CharacterCodes.caret:
                return;
            case CharacterCodes.openBrace:
                return;
            case CharacterCodes.bar:
                return;
            case CharacterCodes.closeBrace:
                return;
            case CharacterCodes.tilde:
                return;
            case CharacterCodes.at:
                return;
            case CharacterCodes.backslash:
                return;
            case CharacterCodes.hash:
                return;
            default:
                const identifierKind = isIdentifierStart(ch);
                if (identifierKind) {
                    return;
                }
                else if (isWhiteSpaceSingleLine(ch)) {
                    continue;
                }
                else if (isLineBreak(ch)) {
                    continue;
                }
                return;
        }
    }
}
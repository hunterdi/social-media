export type Expression = {
    name: string;
    symbol: SymbolType;
    formula?: string;
    type: ExpressionType;
    order?: number;
    index?: number;
}

export enum ExpressionType {
    MATH = 'math',
    NUMBER = 'number',
    ACTION = 'action',
    OPERATOR = 'operator',
    PROPERTY = 'property',
}

export enum SymbolType {
    RAD = 'Rad',
    DEG = 'Deg',
    SQUARE_ROOT = '√',
    SQUARE = 'x²',
    OPEN_PARENTHESIS = '(',
    CLOSE_PARENTHESIS = ')',
    CLEAR = 'C',
    DELETE = '⌫',
    PI = 'π',
    COS = 'cos',
    SIN = 'sin',
    TAN = 'tan',
    EQUAL = '=',
    ADDITION = '+',
    SUBTRACTION = '–',
    DIVISION = '/',
    PERCENTAGE = '%',
    MULTIPLICATION = '×',
    NUMBER_0 = '0',
    NUMBER_1 = '1',
    NUMBER_2 = '2',
    NUMBER_3 = '3',
    NUMBER_4 = '4',
    NUMBER_5 = '5',
    NUMBER_6 = '6',
    NUMBER_7 = '7',
    NUMBER_8 = '8',
    NUMBER_9 = '9',
    E = 'e',
    POINT = '.',
    ANS = 'ANS',
    POWER = 'xy',
    LOG = 'log',
    LN = 'ln',
    EXP = 'exp',
    FACTORIAL = '×!',
    ATAN = 'atan',
    ASIN = 'asin',
    ACOS = 'acos'
}

export enum FormulaType {
    SQUARE_ROOT = 'Math.sqrt',
    SQUARE = 'POWER',
    OPEN_PARENTHESIS = '(',
    CLOSE_PARENTHESIS = ')',
    PI = 'Math.PI',
    COS = 'trigo(Math.cos,',
    SIN = 'trigo(Math.sin,',
    TAN = 'trigo(Math.tan,',
    EQUAL = '=',
    ADDITION = '+',
    SUBTRACTION = '-',
    DIVISION = '÷',
    PERCENTAGE = '/100',
    MULTIPLICATION = '*',
    NUMBER_0 = '0',
    NUMBER_1 = '1',
    NUMBER_2 = '2',
    NUMBER_3 = '3',
    NUMBER_4 = '4',
    NUMBER_5 = '5',
    NUMBER_6 = '6',
    NUMBER_7 = '7',
    NUMBER_8 = '8',
    NUMBER_9 = '9',
    E = 'Math.E',
    POINT = '.',
    ANS = 'ans',
    POWER = 'POWER',
    LOG = 'Math.log10',
    LN = 'Math.log',
    EXP = 'Math.exp',
    FACTORIAL = 'FACTORIAL',
    ATAN = 'inv_trigo(Math.atan,',
    ASIN = 'inv_trigo(Math.asin,',
    ACOS = 'inv_trigo(Math.acos,'
}

export const expressions: Expression[] = [
    {
        name: 'rad',
        symbol: SymbolType.RAD,
        type: ExpressionType.ACTION
    },
    {
        name: 'deg',
        symbol: SymbolType.DEG,
        type: ExpressionType.ACTION
    },
    {
        name: 'square-root',
        symbol: SymbolType.SQUARE_ROOT,
        formula: FormulaType.SQUARE_ROOT,
        type: ExpressionType.MATH
    },
    {
        name: 'square',
        symbol: SymbolType.SQUARE,
        formula: FormulaType.SQUARE,
        type: ExpressionType.MATH
    },
    {
        name: 'open-parenthesis',
        symbol: SymbolType.OPEN_PARENTHESIS,
        formula: FormulaType.OPEN_PARENTHESIS,
        type: ExpressionType.NUMBER
    },
    {
        name: "close-parenthesis",
        symbol: SymbolType.CLOSE_PARENTHESIS,
        formula: FormulaType.OPEN_PARENTHESIS,
        type: ExpressionType.NUMBER
    },
    {
        name: "clear",
        symbol: SymbolType.CLEAR,
        type: ExpressionType.ACTION
    },
    {
        name: "delete",
        symbol: SymbolType.DELETE,
        type: ExpressionType.ACTION
    },
    {
        name: "pi",
        symbol: SymbolType.PI,
        formula: FormulaType.PI,
        type: ExpressionType.MATH
    },
    {
        name: 'cos',
        symbol: SymbolType.COS,
        formula: FormulaType.COS,
        type: ExpressionType.MATH
    },
    {
        name: 'sin',
        symbol: SymbolType.SIN,
        formula: FormulaType.SIN,
        type: ExpressionType.MATH
    },
    {
        name: "tan",
        symbol: SymbolType.TAN,
        formula: FormulaType.TAN,
        type: ExpressionType.MATH
    },
    {
        name: "7",
        symbol: SymbolType.NUMBER_7,
        formula: FormulaType.NUMBER_7,
        type: ExpressionType.NUMBER
    },
    {
        name: "8",
        symbol: SymbolType.NUMBER_8,
        formula: FormulaType.NUMBER_8,
        type: ExpressionType.NUMBER
    },
    {
        name: "9",
        symbol: SymbolType.NUMBER_9,
        formula: FormulaType.NUMBER_9,
        type: ExpressionType.NUMBER
    },
    {
        name: "division",
        symbol: SymbolType.DIVISION,
        formula: FormulaType.DIVISION,
        type: ExpressionType.OPERATOR
    },
    {
        name: "e",
        symbol: SymbolType.E,
        formula: FormulaType.E,
        type: ExpressionType.MATH
    },
    {
        name: "acos",
        symbol: SymbolType.ACOS,
        formula: FormulaType.ACOS,
        type: ExpressionType.MATH
    },
    {
        name: "asin",
        symbol: SymbolType.ASIN,
        formula: FormulaType.ASIN,
        type: ExpressionType.MATH
    },
    {
        name: "atan",
        symbol: SymbolType.ATAN,
        formula: FormulaType.ATAN,
        type: ExpressionType.MATH
    },
    {
        name: "4",
        symbol: SymbolType.NUMBER_4,
        formula: FormulaType.NUMBER_4,
        type: ExpressionType.NUMBER
    },
    {
        name: "5",
        symbol: SymbolType.NUMBER_5,
        formula: FormulaType.NUMBER_5,
        type: ExpressionType.NUMBER
    },
    {
        name: "6",
        symbol: SymbolType.NUMBER_6,
        formula: FormulaType.NUMBER_6,
        type: ExpressionType.NUMBER
    },
    {
        name: "multiplication",
        symbol: SymbolType.MULTIPLICATION,
        formula: FormulaType.MULTIPLICATION,
        type: ExpressionType.OPERATOR
    },
    {
        name: "factorial",
        symbol: SymbolType.FACTORIAL,
        formula: FormulaType.FACTORIAL,
        type: ExpressionType.MATH
    },
    {
        name: "exp",
        symbol: SymbolType.EXP,
        formula: FormulaType.EXP,
        type: ExpressionType.MATH
    },
    {
        name: "ln",
        symbol: SymbolType.LN,
        formula: FormulaType.LN,
        type: ExpressionType.MATH
    },
    {
        name: "log",
        symbol: SymbolType.LOG,
        formula: FormulaType.LOG,
        type: ExpressionType.MATH
    },
    {
        name: "1",
        symbol: SymbolType.NUMBER_1,
        formula: FormulaType.NUMBER_1,
        type: ExpressionType.NUMBER
    },
    {
        name: "2",
        symbol: SymbolType.NUMBER_2,
        formula: FormulaType.NUMBER_2,
        type: ExpressionType.NUMBER
    },
    {
        name: "3",
        symbol: SymbolType.NUMBER_3,
        formula: FormulaType.NUMBER_3,
        type: ExpressionType.NUMBER
    },
    {
        name: "subtraction",
        symbol: SymbolType.SUBTRACTION,
        formula: FormulaType.SUBTRACTION,
        type: ExpressionType.OPERATOR
    },
    {
        name: "power",
        symbol: SymbolType.POWER,
        formula: FormulaType.POWER,
        type: ExpressionType.MATH
    },
    {
        name: "ANS",
        symbol: SymbolType.ANS,
        formula: FormulaType.ANS,
        type: ExpressionType.NUMBER
    },
    {
        name: "percent",
        symbol: SymbolType.PERCENTAGE,
        formula: FormulaType.PERCENTAGE,
        type: ExpressionType.OPERATOR
    },
    {
        name: 'point',
        symbol: SymbolType.POINT,
        formula: FormulaType.POINT,
        type: ExpressionType.NUMBER
    },
    {
        name: "0",
        symbol: SymbolType.NUMBER_0,
        formula: FormulaType.NUMBER_0,
        type: ExpressionType.NUMBER
    },
    {
        name: 'calculate',
        symbol: SymbolType.EQUAL,
        formula: FormulaType.EQUAL,
        type: ExpressionType.ACTION
    },
    {
        name: 'addition',
        symbol: SymbolType.ADDITION,
        formula: FormulaType.ADDITION,
        type: ExpressionType.OPERATOR
    }
];
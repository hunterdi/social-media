export class CalculatorService {
    addChar(value: string, character: string): string {
        if (value == null || value == "0")
            value = character
        else
            value += character

        return value;
    }

    cos(value: number): number {
        return Math.cos(value);
    }

    sin(value: number): number {
        return Math.sin(value);
    }

    tan(value: number): number {
        return Math.tan(value);
    }

    sqrt(value: number): number {
        return Math.sqrt(value);
    }

    ln(value: number): number {
        return Math.log(value);
    }

    exp(value: number): number {
        return Math.exp(value);
    }

    deleteChar(value: string): string {
        return value.substring(0, value.length - 1);
    }

    percent(value: string): string {
        return value + "%";
    }

    changeSign(value: string): string {
        if (value.substring(0, 1) == "-")
            value = value.substring(1, value.length);
        else
            value = "-" + value;
        return value;
    }

    compute(value: string): any {
        return eval(value);
    }


    square(value: string): any {
        return eval(value) * eval(value);
    }

    checkNum(str) {
        for (var i = 0; i < str.length; i++) {
            var ch = str.charAt(i);
            if (ch < "0" || ch > "9") {
                if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                    && ch != "(" && ch != ")" && ch != "%") {
                    alert("invalid entry!")
                    return false
                }
            }
        }
        return true
    }
}
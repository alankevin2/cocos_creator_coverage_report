export class State  {
    test(num: number): '1' | '2' | '3' | '-1' {
        switch (num) {
            case 1:
                return '1'
            case 2:
                return '2'
            case 3:
                return '3'
            default:
                return '-1'
        }
    }
}


let out: string;
let i: number;
let j: number;
let k: number;
export default function diamond(x: number): number {
    console.log('Print diamond with rows ' + x );
    if (x < 2 && x > 10)
    return (0);
    out = '' ;
    for (i = 1; i <= x; i++ ) {
        for ( j = i; j <= x - 1; j++ ) {
            out = out + ' ';
        }
        for ( k = i; k >= 1; k-- ) {
            out = out + '* ';
        }
        out += '\n';
    }
    for ( i = 1; i <= x; i++) {
        for ( j = i; j > 1; j--) {
            out = out + ' ';
        }
        for ( k = i; k <= x; k++) {
            out = out + '* ';
        }
        out += '\n';
    }
    console.log(out); }
export function* genAutoIncreasingId(base) {
    while (true) yield base++;
}
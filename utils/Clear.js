
export default function (all) {
    if (all) {
        process.stdout.write('\x1b[2J');
    } else {
        process.stdout.write('\x1b[0f');
    }
}
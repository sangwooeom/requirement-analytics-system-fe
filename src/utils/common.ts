export function getPath(url: string): string {
    return new URL(url).pathname;
}
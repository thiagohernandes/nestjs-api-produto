export class SecurityVars {
    private static timeExpired: number = 60000;
    private static secretOrKey: string = 'topawesomesecret';

    public static getTime(): number {
        return this.timeExpired;
    }

    public static getSecretOrKey(): string {
        return this.secretOrKey;
    }


}

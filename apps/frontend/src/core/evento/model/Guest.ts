export default interface Guest {
    id: string;
    name: string;
    confirmed: Date;
    hasCompanion: boolean;
    numberOfCompanions: number;
}
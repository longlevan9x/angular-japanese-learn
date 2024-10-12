export interface GrammarModel {
    id?: number;
    name?: string;
    scope?: string;
    mean?: string;
    book?: string;
    usage?: string;

    structure?: string;
    title?: string;
    explain?: string;
    examples?: { word?: string; mean?: string }[];
    lesson?: number;

    // virtual
    active?: boolean
}

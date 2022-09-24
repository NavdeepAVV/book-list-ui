export interface Book {
    items: Items[];
}

export interface Items {
    volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
    authors: string[];
    publisher: string;
    publishedDate: string;
    title: string;
}
import { SafeResourceUrl } from "@angular/platform-browser";

export interface ytVideo {
    videoId: string,
    title: string,
    thumbnail: string,
    safeUrl?: SafeResourceUrl
}
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from "rxjs";
import { youtubeEnvironment } from "src/environments/environment";

@Injectable({
    providedIn : 'root'
})
export class BackendService {
    constructor(private http: HttpClient) {}

    private apiUrl = environment.apiUrl
    private ytApiUrl = youtubeEnvironment.youtubeApiUrl
    private ytVideoUrl = youtubeEnvironment.videoApiUrl
    private recentVideos = youtubeEnvironment.recentVideos
    private filteredVideos = youtubeEnvironment.filteredVideoUrl

    getPosts(): Observable<any> {
        return this.http.get(`${this.apiUrl}/media`);
    }

    getVideos(): Observable<any> {
        return this.http.get(this.ytVideoUrl);
    }

    getVideoDetails(videoIds: Array<string>): Observable<any> {
        let videoArray = videoIds.map(id => this.http.get(`${this.filteredVideos}&id=${id}`));
        return forkJoin(videoArray);
    }

    getRecentWorks() {
        return this.http.get(this.recentVideos);
    }

    getSubscribers(): Observable<any> {
        return this.http.get(this.ytApiUrl);
    }

    contactUs(data: object) {
        return this.http.post(`${this.apiUrl}/contact-us`, data);
    }

    contactMe(data: object) {
        return this.http.post(`${this.apiUrl}/contact-me`, data);
    }
}